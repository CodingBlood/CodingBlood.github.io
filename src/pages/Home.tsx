import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Background from '../components/Background'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Journey from '../components/Journey'
import Leadership from '../components/Leadership'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Timeline />
      <Background />
      <Experience />
      <Projects />
      <Research />
      <Journey />
      <Leadership />
      <Contact />
    </main>
  )
}
