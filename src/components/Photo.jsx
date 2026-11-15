import { useState } from 'react'

// An <img> that never shows a broken icon. `fallback` can be one URL or a list
// of URLs; they are tried in order if the image fails to load. If every one
// fails, a soft tinted block is shown instead.
export default function Photo({ src, fallback, alt, className = '', ...rest }) {
  const list = [src, ...[].concat(fallback || [])].filter(Boolean)
  const [i, setI] = useState(0)
  if (i >= list.length) return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />
  return <img src={list[i]} alt={alt} className={className} loading="lazy" referrerPolicy="no-referrer" onError={() => setI((n) => n + 1)} {...rest} />
}
