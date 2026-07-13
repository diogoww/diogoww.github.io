import Section from './Section'

const CARDS = [
  {
    label: 'E-mail',
    value: 'diogovaraschin@outlook.com',
    href: 'mailto:diogovaraschin@outlook.com',
  },
  {
    label: 'WhatsApp',
    value: '+55 41 98442-6938',
    href: 'https://wa.me/5541984426938',
  },
  {
    label: 'LinkedIn',
    value: '/in/diogo-varaschin',
    href: 'https://www.linkedin.com/in/diogo-varaschin/',
  },
]

function Contact() {
  return (
    <Section
      id="contato"
      number="05"
      title={
        <>
          <span>VAMOS</span>{' '}
          <span className="font-serif italic font-normal lowercase text-paper/90">conversar</span>
        </>
      }
    >
      <p className="mb-10 max-w-xl text-base text-paper/60 sm:text-lg">
        Sem formulário. Sem chatbot. Só uma mensagem direta, para um dos canais abaixo.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {CARDS.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith('http') ? '_blank' : undefined}
            rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group rounded-2xl border border-paper/12 p-6 transition-colors hover:border-paper/40 hover:bg-ink-900/40"
          >
            <span className="block font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
              {card.label}
            </span>
            <span className="mt-3 block break-words text-base text-paper/85 group-hover:text-paper sm:text-lg">
              {card.value}
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}

export default Contact