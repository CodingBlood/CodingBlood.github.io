import { orgs } from '../data/content'

// Company or school mark: the official logo if one is set, otherwise a monogram.
const px = { sm: 34, md: 48, lg: 72 }

export default function OrgMark({ id, size = 'md' }: { id: string; size?: 'sm' | 'md' | 'lg' }) {
  const org = orgs[id]
  if (!org) return null
  if (org.logo) {
    return (
      <img
        className={`mark mark--${size} mark--img ${org.bleed ? 'mark--bleed' : ''}`}
        src={org.logo}
        alt={org.name}
        width={px[size]}
        height={px[size]}
        style={org.tile ? { background: org.tile, boxShadow: 'none' } : undefined}
      />
    )
  }
  return (
    <span className={`mark mark--${size}`} role="img" aria-label={org.name}>
      {org.mono}
    </span>
  )
}
