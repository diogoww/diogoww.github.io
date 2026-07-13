const PILLS = ['Análise de Dados', 'Automação', 'Business Intelligence']

function Hero() {
  return (
    <div id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16 md:pt-24">
      <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-paper/50 sm:text-sm">
            Analista de Inteligência de Dados — Curitiba, PR
          </p>

          <h1 className="font-display text-[15vw] font-extrabold uppercase leading-[0.9] tracking-tight text-balance sm:text-6xl md:text-7xl">
            <span className="block">Dados,</span>
            <span className="block font-serif text-[15vw] font-normal lowercase italic tracking-normal text-paper/90 sm:text-6xl md:text-7xl">
              automação
            </span>
            <span className="block">&amp; Software</span>
          </h1>

          <p className="mt-8 max-w-xl text-base text-paper/65 sm:text-lg">
            Atuo na fronteira entre dados e desenvolvimento: transformo informação em decisão
            e processos manuais em automação, com mais de 4 anos de experiência em TI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-paper/15 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-paper/70"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-40 overflow-hidden rounded-3xl border border-paper/15 sm:w-56 md:w-full md:max-w-sm">
            <img
              src="/img/main_photo.jpeg"
              alt="Diogo Varaschin"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/40 transition-colors hover:text-paper/70"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">Sobre</span>
        <span className="animate-bounce text-lg leading-none">↓</span>
      </a>
    </div>
  )
}

export default Hero
