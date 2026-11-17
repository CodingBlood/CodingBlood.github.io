import { EnvelopeSimple, FileText, GithubLogo, LinkedinLogo, Phone, Code } from '@phosphor-icons/react'
import { person } from '../data/content'

// The one place every way to reach Kartik is listed. Used in the hero and again in the contact tile.
export default function LinkRow({ primary = 'email' }: { primary?: 'email' | 'linkedin' }) {
  const size = 18
  const weight = 'regular' as const
  return (
    <div className="links">
      <a className={`pill ${primary === 'email' ? 'pill--primary' : ''}`} href={`mailto:${person.email}`}>
        <EnvelopeSimple size={size} weight={weight} /> Email
      </a>
      <a className={`pill ${primary === 'linkedin' ? 'pill--primary' : ''}`} href={person.linkedin} target="_blank" rel="noreferrer">
        <LinkedinLogo size={size} weight={weight} /> LinkedIn
      </a>
      <a className="pill" href={person.github} target="_blank" rel="noreferrer">
        <GithubLogo size={size} weight={weight} /> GitHub
      </a>
      <a className="pill" href={person.leetcode} target="_blank" rel="noreferrer">
        <Code size={size} weight={weight} /> LeetCode
      </a>
      <a className="pill" href={person.phoneHref}>
        <Phone size={size} weight={weight} /> {person.phone}
      </a>
      {person.resume && (
        <a className="pill" href={person.resume} target="_blank" rel="noreferrer">
          <FileText size={size} weight={weight} /> Resume
        </a>
      )}
    </div>
  )
}
