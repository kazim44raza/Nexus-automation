'use client'

import { useEffect } from 'react'

const CACHE_REVISION = 'azorvin-brand-cache-2026-08-04-v1'

export function BrowserCacheRefresh() {
  useEffect(() => {
    try {
      if (window.localStorage.getItem(CACHE_REVISION)) return
    } catch {
      // The server cookie still prevents repeated cache clears when storage is unavailable.
    }

    void fetch('/api/brand-cache-refresh', {
      cache: 'no-store',
      credentials: 'same-origin',
    }).then((response) => {
      if (!response.ok) return
      try {
        window.localStorage.setItem(CACHE_REVISION, 'complete')
      } catch {
        // Private browsing may block storage; the refresh itself has still completed.
      }
    }).catch(() => {
      // Cache refresh is best-effort and must never interrupt page rendering.
    })
  }, [])

  return null
}
