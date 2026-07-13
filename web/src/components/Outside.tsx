import Section from './Section'

function Outside() {
  return (
    <Section id="fora-do-trabalho" number="04" title="Fora do trabalho">
      <p className="mb-12 max-w-2xl font-serif text-2xl italic text-paper/80 sm:text-3xl">
        “Fora do código, gosto de manter a mente tão afiada quanto o corpo.”
      </p>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <figure>
          <img
            src="/img/main_photo.jpeg"
            alt="Diogo Varaschin"
            className="aspect-[4/5] w-full rounded-2xl object-cover grayscale"
          />
          <figcaption className="mt-3 font-serif text-sm italic text-paper/50">
            Curitiba, PR.
          </figcaption>
        </figure>

        <div className="space-y-6 text-base leading-relaxed text-paper/70 sm:text-lg">
          <p>
            Nas horas fora do expediente, sigo programando por conta própria — pequenos
            projetos pessoais, testes com novas stacks e a curiosidade de sempre entender
            como as coisas funcionam por baixo do capô.
          </p>
          <p>
            Divido o tempo entre jogos eletrônicos, que ajudam a desligar a cabeça sem
            desligar o raciocínio, e a academia, que mantém a disciplina em dia — no corpo
            e na rotina.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Outside