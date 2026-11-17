import { papers, research } from '../data/content'

export default function Research() {
  return (
    <section className="tile" id="research">
      <div className="wrap">
        <h2 className="title">Research</h2>
        <div className="research">
          {research.map((r) => (
            <article className="study" key={r.title}>
              <div>
                <h3 className="study__title">{r.title}</h3>
                <p className="study__meta">
                  {r.where}
                  <br />
                  {r.when}
                </p>
              </div>
              <div>
                <p>{r.text}</p>
                {r.link && (
                  <p style={{ marginTop: '0.75rem' }}>
                    <a className="link" href={r.link.href} target="_blank" rel="noreferrer">
                      {r.link.label}
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <h3 className="title" style={{ marginTop: '5rem', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>
          Publications
        </h3>
        <div className="papers">
          {papers.map((p) => (
            <article className="paper" key={p.href}>
              <div>
                <p className="paper__venue">{p.venue}</p>
                <p className="paper__role">{p.role}</p>
              </div>
              <div>
                <a className="paper__title" href={p.href} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
                <p className="paper__text">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
