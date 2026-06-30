import { Settings, Bot, Mail, Globe, Shield } from 'lucide-react'

export default function SettingsPage() {
  const config = {
    aiProvider: process.env.AI_PROVIDER ?? 'groq',
    hasGroq: !!process.env.GROQ_API_KEY,
    hasOpenAI: !!process.env.OPENAI_API_KEY,
    hasAnthropic: !!process.env.ANTHROPIC_API_KEY,
    hasGoogle: !!process.env.GOOGLE_AI_API_KEY,
    hasResend: !!process.env.RESEND_API_KEY,
    adminEmail: process.env.ADMIN_EMAIL ?? '',
    fromEmail: process.env.FROM_EMAIL ?? '',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? '',
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? '',
  }

  function StatusDot({ ok }: { ok: boolean }) {
    return <span className={`inline-block w-2 h-2 rounded-full ${ok ? 'bg-accent' : 'bg-red-400'}`} />
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="heading-lg text-text-primary">Settings</h1>
        <p className="text-text-secondary text-sm mt-1">Current platform configuration (read from environment variables)</p>
      </div>

      <div className="space-y-5">
        {/* AI */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-bold text-text-primary">AI Provider</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-text-secondary">Active Provider</span>
              <span className="badge-primary text-xs uppercase">{config.aiProvider}</span>
            </div>
            {[
              { key: 'GROQ_API_KEY', label: 'Groq', ok: config.hasGroq },
              { key: 'OPENAI_API_KEY', label: 'OpenAI', ok: config.hasOpenAI },
              { key: 'ANTHROPIC_API_KEY', label: 'Anthropic (Claude)', ok: config.hasAnthropic },
              { key: 'GOOGLE_AI_API_KEY', label: 'Google Gemini', ok: config.hasGoogle },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <StatusDot ok={item.ok} />
                  <span className="text-sm text-text-primary">{item.label}</span>
                </div>
                <code className="text-xs font-mono text-text-muted bg-bg-alt px-2 py-0.5 rounded">{item.key}</code>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-4 bg-bg-alt rounded-lg p-3">
            To switch providers, update <code className="font-mono">AI_PROVIDER</code> in <code className="font-mono">.env.local</code> to one of: <code className="font-mono">groq | openai | claude | gemini</code>
          </p>
        </div>

        {/* Email */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <h3 className="font-bold text-text-primary">Email (Resend)</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2">
                <StatusDot ok={config.hasResend} />
                <span className="text-sm text-text-primary">Resend API Key</span>
              </div>
              <span className={`text-xs font-semibold ${config.hasResend ? 'text-accent' : 'text-red-500'}`}>
                {config.hasResend ? 'Configured' : 'Missing'}
              </span>
            </div>
            {config.adminEmail && (
              <div className="flex items-center justify-between py-1.5 border-t border-border">
                <span className="text-sm text-text-secondary">Admin Email</span>
                <span className="text-sm text-text-primary font-mono">{config.adminEmail}</span>
              </div>
            )}
            {config.fromEmail && (
              <div className="flex items-center justify-between py-1.5 border-t border-border">
                <span className="text-sm text-text-secondary">From Email</span>
                <span className="text-sm text-text-primary font-mono">{config.fromEmail}</span>
              </div>
            )}
          </div>
        </div>

        {/* Site */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-warm/10 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-warm" />
            </div>
            <h3 className="font-bold text-text-primary">Site & Integrations</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Site URL', value: config.siteUrl || 'Not set' },
              { label: 'Google Analytics (GA4)', value: config.gaId || 'Not configured' },
              { label: 'Calendly URL', value: config.calendlyUrl || 'Not set' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                <span className="text-sm text-text-secondary">{item.label}</span>
                <span className="text-xs font-mono text-text-primary bg-bg-alt px-2 py-0.5 rounded max-w-[60%] truncate text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-sky-600" />
            </div>
            <h3 className="font-bold text-text-primary">Security</h3>
          </div>
          <p className="text-sm text-text-secondary">
            Admin routes are protected by NextAuth v5 middleware. Only users with <code className="bg-bg-alt px-1 rounded text-xs font-mono">ADMIN</code> role can access this panel. To create or reset admin credentials, run the seed script: <code className="bg-bg-alt px-1 rounded text-xs font-mono">npx tsx prisma/seed.ts</code>
          </p>
        </div>
      </div>
    </div>
  )
}
