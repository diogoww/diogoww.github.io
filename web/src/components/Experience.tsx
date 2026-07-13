import Section from './Section'

const PUCPR_ROWS = [
  { label: 'Desenvolvimento de sistemas', value: 'React · Node.js · SQL · HTML e CSS' },
  { label: 'Automação de processos', value: 'Python · Power Automate' },
  { label: 'Dashboards & BI', value: 'Power BI · DAX' },
  { label: 'Análise e tratamento de dados', value: 'Excel · SQL' },
  { label: 'Gestão de chamados', value: 'Pipefy' },
]

const ZYNTRA_ROWS = [
  { label: 'Websites & landing pages', value: 'HTML · CSS · JavaScript' },
  { label: 'Desenvolvimento backend', value: 'Java · JavaScript · PHP' },
  { label: 'Manutenção & otimização de plataformas', value: 'Estabilidade & performance' },
  { label: 'Diagnóstico e resolução de problemas', value: 'Software' },
  { label: 'Gestão de projetos', value: 'Ponta a ponta' },
]

function CardHeader({ role, org, current }: { role: string; org: string; current?: boolean }) {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-paper/10 pb-6">
      <div>
        <h3 className="font-display text-xl font-bold sm:text-2xl">{role}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-paper/50 sm:text-sm">{org}</p>
      </div>
      {current && (
        <span className="flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-paper/70">
          <span className="h-1.5 w-1.5 rounded-full bg-paper/70" />
          Atualmente
        </span>
      )}
    </header>
  )
}

function RowList({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <ul>
      {rows.map((row) => (
        <li
          key={row.label}
          className="flex flex-col gap-1 border-b border-paper/10 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-paper/85">{row.label}</span>
          <span className="font-mono text-sm text-paper/45">{row.value}</span>
        </li>
      ))}
    </ul>
  )
}

function Experience() {
  return (
    <Section id="experiencia" number="02" title="Experiência">
      <article className="rounded-2xl border border-paper/12 bg-ink-900/40 p-6 sm:p-10">
        <CardHeader
          role="Analista de Inteligência de Dados"
          org="Pontifícia Universidade Católica do Paraná (PUCPR) — Curitiba, PR"
          current
        />
        <RowList rows={PUCPR_ROWS} />
      </article>

      <article className="mt-6 rounded-2xl border border-paper/12 bg-ink-900/40 p-6 sm:p-10">
        <CardHeader role="Desenvolvedor Full Stack" org="Zyntra (Autônomo) — Curitiba, PR | Remoto" current />
        <RowList rows={ZYNTRA_ROWS} />
      </article>

      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-paper/45">
        Histórico completo de experiências no{' '}
        <a
          href="https://www.linkedin.com/in/diogo-varaschin/"
          target="_blank"
          rel="noreferrer"
          className="text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper"
        >
          LinkedIn ↗
        </a>
      </p>
    </Section>
  )
}

export default Experience
