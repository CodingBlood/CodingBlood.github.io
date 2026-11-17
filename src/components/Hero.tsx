import { ArrowDown } from '@phosphor-icons/react'
import { person } from '../data/content'
import LinkRow from './LinkRow'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <h1 className="display">{person.name}</h1>
          <p className="hero__headline">{person.headline}</p>
          <p className="hero__study">{person.study}</p>
          <p className="hero__intro">{person.intro}</p>
          <LinkRow />
        </div>
        <div className="hero__photo">
          <img src="/portrait.jpg" alt="Kartik Agarwal" width={928} height={1152} {...{ fetchpriority: 'high' }} />
        </div>
      </div>
      <a className="hero__cue" href="#timeline">
        <span>How I got here</span>
        <ArrowDown size={16} />
      </a>
    </header>
  )
}
