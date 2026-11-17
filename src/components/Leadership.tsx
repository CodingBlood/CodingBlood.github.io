import { awards, leadership } from '../data/content'

export default function Leadership() {
  return (
    <section className="tile" id="leadership">
      <div className="wrap">
        <h2 className="title">Leadership and volunteering</h2>
        <div className="roles">
          {leadership.map((l) => (
            <article className="role" key={l.org}>
              <div>
                <h3 className="role__org">{l.org}</h3>
                <p className="role__meta">
                  {l.role}
                  <br />
                  {l.when}
                </p>
              </div>
              <ul className="points">
                {l.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="subtitle">Awards and certifications</h3>
        <ul className="awards">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
