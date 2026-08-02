import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#06111f' }}>
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <polygon points="8,20 26,7 26,57 8,45" fill="#d9e1e7" />
        <polygon points="38,7 56,20 56,45 38,57" fill="#17c8df" />
        <polygon points="29,25 33,19 36,25 36,44 33,50 29,44" fill="#75eef2" />
      </svg>
    </div>,
    size,
  )
}
