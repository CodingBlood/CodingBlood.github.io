import { useEffect, useRef } from 'react'
import { jobs } from '../data/content'
import { gsap, motionAllowed } from '../lib/motion'
import OrgMark from './OrgMark'

// Sticky stack: each job card sticks under the nav and the next one slides
// over it. Reason for the motion: the jobs are in order, and one card at a
// time gives each role the full viewport. All cards share one height and the
// covered card fades out, so nothing shows through.
export default function Experience() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!motionAllowed() || !root.current) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stack__card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card.querySelector('.job'), {
          scale: 0.95,
          autoAlpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 85%',
            end: 'top 20%',
            scrub: true,
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="tile tile--parchment experience" id="experience">
      <div className="wrap">
        <h2 className="title">Experience</h2>
      </div>
      <div className="stack" ref={root}>
        {jobs.map((job) => (
          <div className="stack__card" key={job.company}>
            <article className="wrap job">
              <div className="job__side">
                <OrgMark id={job.org} size="lg" />
                <h3 className="job__company">{job.company}</h3>
                <p className="job__role">{job.role}</p>
                <p className="job__meta">
                  {job.place}
                  <br />
                  {job.when}
                </p>
                <p className="job__summary">{job.summary}</p>
                {job.live && (
                  <a className="pill job__live" href={job.live.href} target="_blank" rel="noreferrer">
                    {job.live.label}
                  </a>
                )}
              </div>
              <div className="job__main">
                <ul className="points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="job__stack">
                  {job.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
