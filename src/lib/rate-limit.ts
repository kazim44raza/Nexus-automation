/**
 * Lightweight in-memory sliding-window rate limiter.
 *
 * Works per-instance (good for single-server / local dev). For multi-instance
 * production (e.g. Vercel serverless), back this with Upstash Redis or Vercel KV
 * — swap the Map for a shared store; the public API here stays the same.
 */

interface Bucket {
  count: number
  resetAt: number
}

const store = new Map<string, Bucket>()
let lastCleanup = Date.now()

function cleanup(now: number) {
  if (now - lastCleanup < 60_000) return
  lastCleanup = now
  for (const [key, bucket] of store) {
    if (bucket.resetAt < now) store.delete(key)
  }
}

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  /** Seconds until the window resets (for Retry-After) */
  retryAfter: number
}

/**
 * @param key     Unique identifier for the caller (e.g. `chat:1.2.3.4`)
 * @param limit   Max requests allowed in the window
 * @param windowMs Window length in milliseconds
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  cleanup(now)

  const bucket = store.get(key)
  if (!bucket || bucket.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { success: true, limit, remaining: limit - 1, retryAfter: 0 }
  }

  if (bucket.count >= limit) {
    return { success: false, limit, remaining: 0, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) }
  }

  bucket.count++
  return { success: true, limit, remaining: limit - bucket.count, retryAfter: 0 }
}

/** Best-effort client IP from proxy headers. */
export function getClientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0]!.trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

/** Standard 429 response with a Retry-After header. */
export function tooManyRequests(retryAfter: number): Response {
  return new Response(
    JSON.stringify({ error: 'Too many requests. Please slow down and try again shortly.' }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(retryAfter),
      },
    }
  )
}
