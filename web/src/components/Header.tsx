import { useState } from 'react'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

// O CTA em pill já cobre "Contato" no nav de desktop, então some da lista aqui.
const DESKTOP_NAV_LINKS = NAV_LINKS.filter((link) => link.href !== '#contato')

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-bold uppercase tracking-[0.15em]"
        >
          DIOGO <span className="text-paper/50">varaschin</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-paper/70">
            {DESKTOP_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="rounded-full border border-paper/20 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-paper/60 hover:bg-paper hover:text-ink-950"
          >
            Contato
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-paper/10 px-6 pb-6 md:hidden" aria-label="Navegação móvel">
          <ul className="flex flex-col gap-4 pt-4 font-mono text-sm uppercase tracking-[0.15em] text-paper/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header