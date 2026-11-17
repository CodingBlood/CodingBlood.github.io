import { person } from '../data/content'
import LinkRow from './LinkRow'

export default function Contact() {
  return (
    <>
      <section className="tile" id="contact">
        <div className="wrap">
          <h2 className="title">Get in touch</h2>
          <p className="lead" style={{ marginTop: '1.25rem' }}>
            I am looking for
          </p>
          <ul className="looking">
            {person.lookingFor.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="contact__links">
            <LinkRow />
          </div>
        </div>
      </section>
      <footer className="tile--parchment">
        <div className="wrap footer">
          <span>{person.name}</span>
          <span>{person.location}</span>
        </div>
      </footer>
    </>
  )
}
