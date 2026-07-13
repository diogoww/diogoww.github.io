import Section from './Section'

function About() {
  return (
    <Section id="sobre" number="01" title="Sobre">
      <p className="mb-10 max-w-2xl font-serif text-2xl italic text-paper/80 sm:text-3xl">
        Da elétrica e da química para os dados e o código.
      </p>
      <div className="max-w-2xl space-y-6 text-base leading-relaxed text-paper/70 sm:text-lg">
        <p>
          Iniciei minha trajetória acadêmica em Engenharia Elétrica e Engenharia Química na
          UTFPR, mas foi em TI e dados que encontrei o caminho onde queria construir carreira.
          Migrei para Análise e Desenvolvimento de Sistemas na PUCPR, unindo essa base analítica
          a mais de 4 anos de experiência em suporte técnico, resolução de problemas e
          atendimento a usuários.
        </p>
        <p>
          Hoje atuo como Analista de Inteligência de Dados, desenvolvendo automações com Python
          e Power Automate, dashboards em Power BI e soluções de software com Java, PHP e
          tecnologias web — sempre com foco em transformar processos manuais em sistemas
          eficientes e dados em decisões confiáveis.
        </p>
      </div>
    </Section>
  )
}

export default About