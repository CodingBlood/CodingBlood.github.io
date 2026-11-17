import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { QrCode } from '@phosphor-icons/react'
import ShareDialog from './ShareDialog'

const links = [
  { href: '#background', label: 'Background' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const [sharing, setSharing] = useState(false)
  return (
    <nav className="nav" aria-label="Primary">
      <div className="wrap">
        <Link to="/" className="nav__name">
          Kartik Agarwal
        </Link>
        <div className="nav__right">
          <div className="nav__links">
            {links.map((l) => (
              <a key={l.href} href={home ? l.href : `/${l.href}`}>
                {l.label}
              </a>
            ))}
          </div>
          <button className="nav__qr" onClick={() => setSharing(true)} aria-haspopup="dialog">
            <QrCode size={16} /> Share
          </button>
        </div>
      </div>
      <ShareDialog open={sharing} onClose={() => setSharing(false)} />
    </nav>
  )
}
