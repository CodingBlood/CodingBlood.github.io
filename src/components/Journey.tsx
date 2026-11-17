import { useEffect, useRef } from 'react'
import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps'
import worldTopo from 'world-atlas/countries-110m.json'
import { journey } from '../data/content'
import { gsap, motionAllowed } from '../lib/motion'

// react-simple-maps accepts TopoJSON at runtime; its bundled types only name GeoJSON.
const world = worldTopo as unknown as string

// A real world map (Natural Earth, 110m, via world-atlas). The route from
// Agra to Delft draws itself as the tile scrolls into view. Reason for the
// motion: the route is a timeline, and drawing it in order tells the story.
export default function Journey() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!root.current) return
    const path = root.current.querySelector<SVGPathElement>('.map__route')
    if (!path) return
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    if (!motionAllowed()) {
      path.style.strokeDashoffset = '0'
      return
    }
    path.style.strokeDashoffset = `${length}`
    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        // Drawn against the map itself: starts as the map enters and is
        // complete while the whole map is still on screen.
        scrollTrigger: {
          trigger: root.current!.querySelector('.map'),
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="tile tile--dark" id="journey" ref={root}>
      <div className="wrap">
        <h2 className="title">Agra to Delft</h2>
        <p className="muted lead" style={{ marginTop: '1rem', maxWidth: '40ch' }}>
          Six cities, in order.
        </p>
        <div className="map">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ center: [40, 37], scale: 470 }}
            width={1120}
            height={520}
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={world}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2a2a2c"
                    stroke="#3a3a3c"
                    strokeWidth={0.5}
                    style={{ outline: 'none' }}
                  />
                ))
              }
            </Geographies>
            <Line coordinates={journey.map((j) => j.coordinates)} className="map__route" />
            {journey.map((j, i) => (
              <Marker key={j.city} coordinates={j.coordinates}>
                <circle r={4} className="map__stop" />
                <text className="map__label" x={i === journey.length - 1 ? -10 : 10} y={i % 2 ? 17 : -9} textAnchor={i === journey.length - 1 ? 'end' : 'start'}>
                  {j.city}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
        <ol className="map__legend">
          {journey.map((j) => (
            <li key={j.city}>
              <strong>{j.city}</strong>
              <span>{j.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
