import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import { gsap, motionAllowed } from '../lib/motion'

// A single large glyph stands in for a screenshot. One per project, chosen in content.ts.
// A faint oversized copy sits behind for depth.
function Glyph({ symbol, tint }: { symbol: string; tint: { bg: string; fg: string } }) {
  return (
    <svg className="glyph" viewBox="0 0 360 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ background: tint.bg }}>
      <text className="glyph__ghost" x="300" y="150" textAnchor="middle" fill={tint.fg}>
        {symbol}
      </text>
      <text className="glyph__main" x="180" y="88" textAnchor="middle" fill={tint.fg}>
        {symbol}
      </text>
    </svg>
  )
}

// Horizontal gallery: vertical scroll pans a row of project cards. Reason for
// the motion: the projects are artifacts to look at, and a gallery reads
// better sideways than as a stack. Collapses to a vertical list on phones.
// The pan finishes a little before the pin releases, so the hand-off to the
// next section is a plain scroll rather than a jump.
export default function Projects() {
  const wrap = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!motionAllowed() || !wrap.current || !track.current) return
    const ctx = gsap.context(() => {
      const distance = () => track.current!.scrollWidth - window.innerWidth
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: () => '+=' + (distance() + 320),
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      tl.to(track.current, { x: () => -distance(), ease: 'none', duration: 1 })
      tl.to({}, { duration: 0.18 })
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <section className="tile tile--parchment gallery" id="projects" ref={wrap}>
      <div className="gallery__track" ref={track}>
        <div className="gallery__intro">
          <h2 className="title">Projects</h2>
          <p className="muted" style={{ marginTop: '1rem' }}>
            Things that run outside a notebook.
          </p>
        </div>
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <div className="card__media">
              {p.brand ? (
                <div className="brandtile" style={{ background: p.brand.bg }}>
                  <img src={p.brand.src} alt={p.brand.alt} width={188} height={160} />
                </div>
              ) : (
                <Glyph symbol={p.glyph} tint={p.tint} />
              )}
            </div>
            <div className="card__body">
              <h3 className="card__title">{p.title}</h3>
              <p className="card__summary">{p.summary}</p>
              <p className="card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
              {(p.href || p.more || p.live) && (
                <p className="card__links">
                  {p.live && (
                    <a className="link" href={p.live} target="_blank" rel="noreferrer">
                      Open the portal
                    </a>
                  )}
                  {p.href && (
                    <a className="link" href={p.href} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  )}
                  {p.more && (
                    <Link className="link" to={p.more}>
                      Read the notes
                    </Link>
                  )}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
