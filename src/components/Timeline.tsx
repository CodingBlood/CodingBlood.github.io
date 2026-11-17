import { useEffect, useRef } from 'react'
import { timeline } from '../data/content'
import { gsap, motionAllowed } from '../lib/motion'
import OrgMark from './OrgMark'

// Pinned tile right under the hero. The rail fills left to right and each
// step arrives as the rail reaches it. Reason for the motion: this is the
// story in order, and revealing it in order is the story.
export default function Timeline() {
  const section = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!motionAllowed() || !section.current) return
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.step')
      const fill = section.current!.querySelector('.rail__fill')
      gsap.set(steps, { autoAlpha: 0.15 })
      gsap.set(fill, { scaleX: 0 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=' + steps.length * 55 + '%',
          pin: '.timeline__pin',
          scrub: 0.6,
        },
      })
      steps.forEach((step, i) => {
        tl.to(fill, { scaleX: (i + 0.5) / steps.length, duration: 1, ease: 'none' })
        tl.to(step, { autoAlpha: 1, duration: 0.6, ease: 'power2.out' }, '<0.4')
      })
      tl.to(fill, { scaleX: 1, duration: 0.6, ease: 'none' })
      tl.to({}, { duration: 0.4 })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section className="tile tile--dark timeline" id="timeline" ref={section} aria-label="Timeline">
      <div className="timeline__pin">
        <div className="wrap">
          <h2 className="title">How I got here</h2>
          <div className="rail" aria-hidden="true">
            <span className="rail__fill" />
          </div>
          <ol className="steps">
            {timeline.map((t) => (
              <li className="step" key={t.year + t.title}>
                <span className="step__dot" aria-hidden="true" />
                <p className="step__year">{t.year}</p>
                <div className="step__head">
                  <span className="step__marks">
                    {t.orgs.map((o) => (
                      <OrgMark id={o} size="sm" key={o} />
                    ))}
                  </span>
                  <h3 className="step__title">{t.title}</h3>
                </div>
                <p className="step__text">{t.text}</p>
                {'link' in t && t.link && (
                  <a className="link step__link" href={t.link.href} target="_blank" rel="noreferrer">
                    {t.link.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
