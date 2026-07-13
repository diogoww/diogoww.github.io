import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  number: string
  title: ReactNode
  children: ReactNode
  className?: string
}

function Section({ id, number, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-paper/10 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-start justify-between gap-6 md:mb-16">
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-balance sm:text-6xl md:text-7xl">
            {title}
          </h2>
          <span className="section-index shrink-0 pt-2 font-mono text-sm text-paper/40 md:text-base">
            {number}
          </span>
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section