import Section from './Section'

const ACADEMIC = [
  { item: 'Análise e Desenvolvimento de Sistemas', place: 'PUCPR · 2025 — cursando' },
  { item: 'Engenharia Química', place: 'UTFPR · 2023 — 2024' },
  { item: 'Engenharia Elétrica', place: 'UTFPR · 2021 — 2023' },
]

const CERTIFICATIONS = [
  { item: 'Formação Completa — Java', place: 'Rocketseat' },
  { item: 'NLW Agents — React e Node.js (Avançado)', place: 'Rocketseat' },
  { item: 'Versionamento de Código com Git e GitHub', place: 'DIO.me' },
  { item: 'Microsoft Power BI para Business Intelligence e Data Science', place: 'Data Science Academy' },
]

function EduList({ items }: { items: { item: string; place: string }[] }) {
  return (
    <ul>
      {items.map((entry) => (
        <li
          key={entry.item}
          className="flex flex-col gap-1 border-b border-paper/10 py-4 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-paper/85">{entry.item}</span>
          <span className="font-mono text-sm text-paper/45">{entry.place}</span>
        </li>
      ))}
    </ul>
  )
}

function Education() {
  return (
    <Section id="formacao" number="03" title="Formação">
      <EduList items={ACADEMIC} />

      <h3 className="mb-2 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
        Certificações
      </h3>
      <EduList items={CERTIFICATIONS} />
    </Section>
  )
}

export default Education