import { education, jobs, skills } from '../data/content'
import OrgMark from './OrgMark'

// The resume in one screen: education, the main job, skills. Details follow
// further down in Experience.
export default function Background() {
  const cme = jobs.find((j) => j.org === 'cme')!
  return (
    <section className="tile tile--parchment" id="background">
      <div className="wrap">
        <h2 className="title">Background</h2>
        <div className="facts">
          <div>
            <h3>Education</h3>
            {education.map((e) => (
              <div className="entry" key={e.degree}>
                <OrgMark id={e.org} />
                <div>
                  <p className="entry__title">{e.degree}</p>
                  <p className="entry__meta">
                    {e.school}, {e.when}
                  </p>
                  <p className="entry__note">{e.note}</p>
                </div>
              </div>
            ))}

            <h3 style={{ marginTop: '2.5rem' }}>Work</h3>
            <div className="entry">
              <OrgMark id="cme" />
              <div>
                <p className="entry__title">
                  {cme.role}, {cme.company}
                </p>
                <p className="entry__meta">
                  {cme.place}, {cme.when}
                </p>
                <p className="entry__note">
                  Built the self-service portal that cut GCP deployment turnaround from about 1.5 weeks to about 2 days
                  (CME Excellence Award), and wrote the 150+ Rego policies that check every cloud deployment.{' '}
                  <a className="link" href="#experience">
                    Full experience
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Skills</h3>
            {skills.map((s) => (
              <div className="skillgroup" key={s.group}>
                <p className="skillgroup__name">{s.group}</p>
                <p className="skillgroup__items">
                  {s.items.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
