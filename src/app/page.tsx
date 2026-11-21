import Image from "next/image";

import { PublicFooter } from "@/components/public/footer";
import { PublicHeader } from "@/components/public/header";
import { homeContent } from "@/content/home";

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span aria-hidden="true" className="h-px w-12 bg-[#b78a45]" />
      <h2 className="font-serif text-3xl text-[#29372c] sm:text-4xl">{children}</h2>
      <span aria-hidden="true" className="h-px w-12 bg-[#b78a45]" />
    </div>
  );
}

export default function Home() {
  return (
    <div id="home" className="min-h-screen overflow-x-hidden bg-[#fbf8ef]">
      <PublicHeader />

      <main>
        <section
          aria-labelledby="hero-heading"
          className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[600px]"
        >
          <Image
            src="/images/hero.jpg"
            alt="Paisagem natural das montanhas e lago do Sítio Serra Azul"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
          <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10">
            <div className="max-w-[560px] text-white">
              <h1
                id="hero-heading"
                className="max-w-md font-serif text-5xl italic leading-[0.92] sm:text-6xl lg:text-7xl"
              >
                {homeContent.headline}
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 sm:text-lg">
                {homeContent.introduction}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex min-h-12 items-center rounded-md bg-[#b86f36] px-5 py-3 text-sm font-bold shadow-md transition-colors hover:bg-[#965a2c]"
                >
                  Planejar sua estadia
                </a>
                <a
                  href="#acomodacoes"
                  className="inline-flex min-h-12 items-center rounded-md border border-white/70 bg-black/20 px-5 py-3 text-sm font-bold backdrop-blur-sm transition-colors hover:bg-black/35"
                >
                  Ver opções
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experiencia"
          aria-labelledby="experience-heading"
          className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-20"
        >
          <div>
            <h2
              id="experience-heading"
              className="font-serif text-4xl text-[#29372c]"
            >
              {homeContent.property}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#42483e]">
              {homeContent.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#42483e]">
              {["Pescaria na natureza", "Churrasco com família", "Momentos em família"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-[#8a9a61]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-[52px_8px_52px_8px] sm:h-[360px]">
            <Image
              src="/images/experience.jpg"
              alt="Varanda ampla com redes e área para descanso"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </section>

        <section id="comodidades" aria-labelledby="amenities-heading" className="px-6 pb-16 sm:px-10 lg:pb-20">
          <SectionTitle className="mb-8">Comodidades</SectionTitle>
          <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {homeContent.highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="flex min-h-32 flex-col items-center justify-center rounded-md border border-[#eee5d1] bg-white/50 px-3 text-center"
              >
                <span
                  aria-hidden="true"
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#edf0df] text-lg text-[#7c8c50]"
                >
                  {["◉", "♨", "≋", "⌂", "P", "▦"][index]}
                </span>
                <h3 className="text-sm font-bold leading-5 text-[#384536]">
                  {highlight.title}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" aria-labelledby="gallery-heading" className="pb-16 lg:pb-20">
          <SectionTitle className="mb-8">Galeria</SectionTitle>
          <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 px-6 sm:px-10 lg:grid-cols-4">
            {[
              ["gallery-view.jpg", "Paisagem natural ao redor da propriedade"],
              ["gallery-porch.jpg", "Área externa com redes"],
              ["gallery-living.jpg", "Espaço interno acolhedor"],
              ["gallery-hills.jpg", "Vista para as colinas"],
            ].map(([src, alt]) => (
              <div key={src} className="relative h-44 overflow-hidden rounded-md sm:h-56 lg:h-64">
                <Image src={`/images/${src}`} alt={alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section id="acomodacoes" aria-labelledby="accommodations-heading" className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 pb-16 sm:px-10 lg:grid-cols-[1fr_0.86fr] lg:pb-20">
          <div className="relative h-[300px] overflow-hidden rounded-md sm:h-[420px]">
            <Image
              src="/images/accommodations.jpg"
              alt="Quarto simples e confortável da propriedade"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="lg:px-8">
            <h2 id="accommodations-heading" className="font-serif text-4xl text-[#29372c]">Acomodações</h2>
            <p className="mt-4 max-w-md leading-7 text-[#42483e]">
              Uma hospedagem simples e acolhedora para relaxar, aproveitar a natureza e compartilhar momentos.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#42483e]">
              {["Quartos confortáveis", "Ambiente familiar", "Tudo o que você precisa"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-[#8a9a61]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="disponibilidade" aria-labelledby="availability-heading" className="bg-[#f4efdf]">
          <div className="mx-auto grid max-w-[1500px] items-stretch gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
            <div className="flex flex-col justify-center">
              <h2 id="availability-heading" className="text-center font-serif text-4xl text-[#29372c] lg:text-left">
                Disponibilidade
              </h2>
              <p className="mt-3 text-center text-sm leading-6 text-[#5e6258] lg:text-left">
                Para consultar datas atuais, planeje sua estadia diretamente com a propriedade.
              </p>
              <div className="mt-6 rounded-md border border-[#e2d8bd] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#7a806d]">Calendário ilustrativo</p>
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs">
                  {["D","S","T","Q","Q","S","S"].map((day, index) => (
                    <span key={`${day}-${index}`} className="font-bold text-[#768164]">{day}</span>
                  ))}
                  {Array.from({ length: 35 }, (_, index) => (
                    <span key={index} className="py-2 text-[#4d5547]">{index > 3 && index < 34 ? index - 3 : ""}</span>
                  ))}
                </div>
              </div>
              <a
                href="#contato"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-[#4f7555] px-5 py-3 text-sm font-bold text-white"
              >
                Consultar datas
              </a>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-md sm:min-h-[400px]">
              <Image
                src="/images/availability.jpg"
                alt="Paisagem do lago e das colinas ao redor do sítio"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="localizacao" aria-labelledby="location-heading" className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:py-20">
          <div>
            <h2 id="location-heading" className="font-serif text-4xl text-[#29372c]">Localização</h2>
            <p className="mt-4 max-w-md leading-7 text-[#42483e]">
              Situado em meio à natureza, um espaço reservado para desacelerar e apreciar a paisagem.
            </p>
            <a
              href="#contato"
              className="mt-6 inline-flex min-h-12 items-center rounded-md bg-[#4f7555] px-5 py-3 text-sm font-bold text-white"
            >
              Solicitar informações
            </a>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-md sm:h-[360px]">
            <Image
              src="/images/location.jpg"
              alt="Vista natural ao redor da propriedade"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-heading" className="bg-white/55 px-6 py-16 sm:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <h2 id="faq-heading" className="font-serif text-4xl text-[#29372c]">Perguntas Frequentes</h2>
            <div className="divide-y divide-[#dfe4d6] border-y border-[#dfe4d6]">
              {[
                ["Como fazer reserva?", "Entre em contato para consultar datas e confirmar os detalhes da estadia."],
                ["Quantas pessoas podem se hospedar?", "Confirme a capacidade atual diretamente com a propriedade."],
                ["Há animais de estimação?", "Consulte as regras para animais antes da reserva."],
                ["É permitido levar pets?", "Consulte a propriedade sobre a política vigente para pets."],
              ].map(([question, answer]) => (
                <details key={question} className="group py-4">
                  <summary className="cursor-pointer list-none text-sm font-bold text-[#3d4838]">
                    <span className="float-right text-[#a27243] transition-transform group-open:rotate-180">⌄</span>
                    {question}
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-6 text-[#686c61]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" aria-labelledby="contact-heading" className="bg-[#edf0e4]">
          <div className="mx-auto grid max-w-[1500px] items-stretch lg:grid-cols-[0.42fr_0.58fr]">
            <div className="px-6 py-14 sm:px-10">
              <h2 id="contact-heading" className="font-serif text-4xl text-[#29372c]">Contato</h2>
              <p className="mt-4 max-w-sm leading-7 text-[#42483e]">
                Estamos à disposição para esclarecer suas dúvidas e ajudar a planejar sua estadia.
              </p>
              <a
                href="#faq"
                className="mt-6 inline-flex min-h-12 items-center rounded-md border border-[#4f7555] px-5 py-3 text-sm font-bold text-[#4f7555]"
              >
                Ver perguntas frequentes
              </a>
            </div>
            <div className="relative min-h-[280px] sm:min-h-[350px]">
              <Image
                src="/images/cta.jpg"
                alt="Varanda do sítio rodeada pela natureza"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-6">
                <p className="max-w-md text-center font-serif text-3xl italic leading-tight text-white sm:text-4xl">
                  Pronto para um final de semana no campo?
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
