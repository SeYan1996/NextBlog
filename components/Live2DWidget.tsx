'use client'

import { useEffect } from 'react'

const AUTOLOAD_URL =
  'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js'

export default function Live2DWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.getElementById('live2d-widget-autoload')) return

    const script = document.createElement('script')
    script.id = 'live2d-widget-autoload'
    script.src = AUTOLOAD_URL
    script.async = true
    script.crossOrigin = 'anonymous'
    script.onerror = () => {
      console.warn('[Live2D] autoload.js failed to load. Check network or CSP settings.')
    }
    document.body.appendChild(script)

    return () => {
      document.getElementById('live2d-widget-autoload')?.remove()
      document.getElementById('waifu')?.remove()
      document.getElementById('waifu-toggle')?.remove()
      document.querySelectorAll('link[href*="waifu"], link[href*="live2d"]').forEach((el) => {
        el.remove()
      })
    }
  }, [])

  return null
}
