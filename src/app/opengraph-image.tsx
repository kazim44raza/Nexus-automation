import { ImageResponse } from 'next/og'

export const alt = 'Azorvin — Voice, Messaging & Workflow Systems'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '76px 84px',
          background: 'linear-gradient(135deg, #07111e 0%, #102332 58%, #18333b 100%)',
          color: '#f4f1e9',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 760 }}>
          <div style={{ display: 'flex', fontSize: 28, letterSpacing: 10, fontWeight: 700, marginBottom: 58 }}>
            AZORVIN
          </div>
          <div style={{ display: 'flex', fontSize: 64, lineHeight: 1.08, letterSpacing: -2, fontWeight: 650 }}>
            Voice, messaging, and workflow systems
          </div>
          <div style={{ display: 'flex', marginTop: 34, fontSize: 25, lineHeight: 1.45, color: '#b8c4c9' }}>
            Practical automation with clear human handoffs.
          </div>
        </div>
        <div
          style={{
            width: 250,
            height: 250,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 42,
            background: 'rgba(3, 12, 24, 0.58)',
            border: '1px solid rgba(113, 219, 224, 0.24)',
          }}
        >
          <svg width="190" height="190" viewBox="0 0 190 190" aria-hidden="true">
            <polygon points="28,56 78,20 78,170 28,136" fill="#d9e1e7" />
            <polygon points="112,20 162,56 162,136 112,170" fill="#17c8df" />
            <polygon points="88,72 100,57 108,72 108,134 98,150 88,134" fill="#75eef2" />
          </svg>
        </div>
      </div>
    ),
    size,
  )
}
