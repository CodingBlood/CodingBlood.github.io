import { Link } from 'react-router-dom'
import { ArrowUpRight, Code, EnvelopeSimple, FileText, GithubLogo, Globe, LinkedinLogo, Phone } from '@phosphor-icons/react'
import { person } from '../data/content'

// The link page the "All links" QR code points to. One column, built for a phone.
const items = [
  { label: 'Portfolio', href: '/', icon: Globe, internal: true },
  { label: 'Resume (PDF)', href: person.resume, icon: FileText, download: true },
  { label: 'LinkedIn', href: person.linkedin, icon: LinkedinLogo },
  { label: 'GitHub', href: person.github, icon: GithubLogo },
  { label: 'Email', href: `mailto:${person.email}`, icon: EnvelopeSimple },
  { label: 'Call', href: person.phoneHref, icon: Phone },
  { label: 'LeetCode', href: person.leetcode, icon: Code },
]

export default function Links() {
  return (
    <main className="linkpage" id="main">
      <img className="linkpage__photo" src="/portrait.jpg" alt="Kartik Agarwal" width={928} height={1152} />
      <h1 className="linkpage__name">{person.name}</h1>
      <p className="linkpage__line">{person.headline}</p>
      <p className="linkpage__line muted">{person.study}</p>
      <ul className="linkpage__list">
        {items.map(({ label, href, icon: Icon, internal, download }) => (
          <li key={label}>
            {internal ? (
              <Link className="linkpage__item" to={href}>
                <Icon size={20} /> <span>{label}</span> <ArrowUpRight size={16} className="linkpage__arrow" />
              </Link>
            ) : (
              <a
                className="linkpage__item"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                download={download ? 'Kartik-Agarwal-Resume.pdf' : undefined}
              >
                <Icon size={20} /> <span>{label}</span> <ArrowUpRight size={16} className="linkpage__arrow" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
