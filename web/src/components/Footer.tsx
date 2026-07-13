const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/diogoww' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diogo-varaschin/' },
  { label: 'Instagram', href: 'https://www.instagram.com/diogojvo/' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper/10 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            Curitiba, Paraná
          </p>
          <p className="mt-2 text-sm text-paper/60">
            © {year} Diogo J. V. de Oliveira. Todos os direitos reservados.
          </p>
          <p className="mt-1 font-serif text-sm italic text-paper/40">feito à mão</p>
        </div>

        <ul className="flex gap-6 font-mono text-xs uppercase tracking-[0.15em] text-paper/60">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer