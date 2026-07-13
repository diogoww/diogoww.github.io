import { useEffect, useRef, useState, type CSSProperties, type Ref } from 'react'

const STACK = ['Java', 'JavaScript', 'React', 'PHP', 'SQL', 'Power BI', 'RPA', 'Git/GitHub']

function MarqueeTrack({ measureRef }: { measureRef?: Ref<HTMLSpanElement> }) {
  return (
    <span
      ref={measureRef}
      className="flex shrink-0 items-center py-5 font-mono text-sm uppercase tracking-[0.2em] text-paper/50 sm:text-base"
    >
      {STACK.map((tech) => (
        <span key={tech} className="flex items-center">
          {tech}
          <span className="mx-4 text-paper/25 sm:mx-6">—</span>
        </span>
      ))}
    </span>
  )
}

function Marquee() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLSpanElement>(null)
  const [copies, setCopies] = useState(2)

  useEffect(() => {
    function recalc() {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0
      const setWidth = setRef.current?.offsetWidth ?? 0
      if (!viewportWidth || !setWidth) return
      // Need (copies - 1) full sets to always cover the viewport as it scrolls,
      // otherwise a gap of empty space appears right before the loop restarts.
      const needed = Math.max(2, Math.ceil(viewportWidth / setWidth) + 1)
      setCopies((prev) => (prev === needed ? prev : needed))
    }

    recalc()
    document.fonts?.ready.then(recalc)
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [])

  return (
    <div ref={viewportRef} className="marquee-viewport border-y border-paper/10 bg-ink-900/30">
      <div className="marquee-track" style={{ '--marquee-copies': copies } as CSSProperties}>
        {Array.from({ length: copies }, (_, i) => (
          <MarqueeTrack key={i} measureRef={i === 0 ? setRef : undefined} />
        ))}
      </div>
    </div>
  )
}

export default Marquee
