import Image from "next/image";

import { PublicFooter } from "@/components/public/footer";
import { PublicHeader } from "@/components/public/header";
import { SitioGallery } from "@/components/public/sitio-gallery";
import { CasaGallery } from "@/components/public/casa-gallery";
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
      <h2 className="font-display text-[28px] leading-9 text-[var(--color-heading)] sm:text-[30px]">{children}</h2>
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
            src="/images/hd-photo-2-overview.png"
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
                className="font-display max-w-md text-[42px] font-bold italic leading-[0.92] tracking-[-0.02em] text-white drop-shadow-sm sm:text-[50px] lg:text-[54px]"
              >
                {homeContent.headline}
              </h1>
              <p className="font-ui mt-5 max-w-md text-[14px] leading-6 text-white/95 sm:text-[15px]">
                {homeContent.introduction}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#disponibilidade"
                  className="font-ui inline-flex min-h-12 items-center rounded-md bg-[#a85f32] px-6 py-3 text-[16px] shadow-md transition-colors hover:bg-[#8f4d28]"
                >
                  Ver Disponibilidade
                </a>
                <a
                  href="#acomodacoes"
                  className="font-ui inline-flex min-h-12 items-center rounded-md border border-white/70 bg-black/20 px-6 py-3 text-[16px] backdrop-blur-sm transition-colors hover:bg-black/35"
                >
                  Conheça a Casa
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" aria-labelledby="experience-heading" className="pb-16 lg:pb-10">
          <SectionTitle className="mt-15">A Experiência</SectionTitle>
          <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-6 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-10">
            <div>
              <h2
                id="experience-heading"
                className="font-display text-[30px] leading-[1.08] text-[var(--color-heading)] sm:text-[32px]"
              >
                {homeContent.property}
              </h2>
              <p className="font-display mt-4 max-w-lg text-[15px] leading-[1.55] text-[var(--color-body)] sm:text-[16px]">
                {homeContent.description}
              </p>
              <ul className="font-ui mt-5 space-y-2 text-[15px] leading-5 text-[var(--color-body)]">
                {["Lago", "Churrasqueira", "Árvores frutíferas", "Redes para descanso", "Espaço para trazer sua piscina inflável", "Natureza e espaço para as crianças brincarem", "A apenas 3 minutes da cidade de carro"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-[#8a9a61]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[280px] overflow-hidden rounded-[52px_8px_52px_8px] sm:h-[360px]">
              <Image
                src="/images/experience1.jpg"
                alt="Varanda ampla com redes e área para descanso"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="comodidades" aria-labelledby="sitio-heading" className="px-6 pb-16 sm:px-10 lg:pb-20 bg-[#f4efdf] pt-10">
          <SectionTitle className="mb-8">
            <span id="sitio-heading">O Sítio</span>
          </SectionTitle>
          <SitioGallery />
        </section>

        <section id="comodidades" aria-labelledby="sitio-heading" className="px-6 pb-16 sm:px-10 lg:pb-20 pt-10">
          <SectionTitle className="mb-8">
            <span id="sitio-heading">A Casa</span>
          </SectionTitle>
          <CasaGallery />
        </section>

        <section id="disponibilidade" aria-labelledby="availability-heading" className="px-6 pb-16 sm:px-10 lg:pb-20 bg-[#f4efdf] pt-10">
           <SectionTitle className="mb-8">
            <span id="sitio-heading">Disponibilidade</span>
          </SectionTitle>
          <div className="mx-auto grid max-w-[1500px] items-stretch gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
            <div className="flex flex-col justify-center">
          
              <div className="mt-6 rounded-md border border-[#e2d8bd] bg-white p-5">
                <p className="font-ui text-[10px] font-bold uppercase tracking-[0.12em] text-[#7a806d]">Calendário ilustrativo</p>
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs">
                  {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
                    <span key={`${day}-${index}`} className="font-bold text-[#768164]">{day}</span>
                  ))}
                  {Array.from({ length: 35 }, (_, index) => (
                    <span key={index} className="py-2 text-[#4d5547]">{index > 3 && index < 34 ? index - 3 : ""}</span>
                  ))}
                </div>
              </div>
              <a
                href="#contato"
                className="font-ui mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-[#4f7555] px-6 py-3 text-[14px] font-bold leading-5 text-white"
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

        <section id="localizacao" aria-labelledby="location-heading" className="px-6 pb-16 sm:px-10 lg:pb-20 pt-10">
         <SectionTitle className="mb-8">
            <span id="sitio-heading">Localização</span>
          </SectionTitle>
      
          <div className="mx-auto grid max-w-[1500px] items-stretch gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
            <div>
            <h2 id="location-heading" className="font-display text-[30px] leading-[1.1] text-[var(--color-heading)] sm:text-[32px]">Localização</h2>
            <p className="font-display mt-3 max-w-md text-[15px] leading-[1.55] text-[var(--color-body)] sm:text-[16px]">
              Situado em meio à natureza, um espaço reservado para desacelerar e apreciar a paisagem.
            </p>
            <a
              href="#contato"
              className="font-ui mt-5 inline-flex min-h-12 items-center rounded-md bg-[#4f7555] px-6 py-3 text-[14px] font-bold leading-5 text-white"
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
                    </div>

        </section>

        <section id="faq" aria-labelledby="faq-heading" className="bg-white/55 px-6 py-16 sm:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <h2 id="faq-heading" className="font-display text-[30px] leading-[1.1] text-[var(--color-heading)] sm:text-[32px]">Perguntas Frequentes</h2>
            <div className="divide-y divide-[#dfe4d6] border-y border-[#dfe4d6]">
              {[
                ["Como fazer reserva?", "Entre em contato para consultar datas e confirmar os detalhes da estadia."],
                ["Quantas pessoas podem se hospedar?", "Confirme a capacidade atual diretamente com a propriedade."],
                ["Há animais de estimação?", "Consulte as regras para animais antes da reserva."],
                ["É permitido levar pets?", "Consulte a propriedade sobre a política vigente para pets."],
              ].map(([question, answer]) => (
                <details key={question} className="group py-4">
                  <summary className="font-ui cursor-pointer list-none text-[12px] font-bold leading-5 text-[#3d4838]">
                    <span className="float-right text-[#a27243] transition-transform group-open:rotate-180">⌄</span>
                    {question}
                  </summary>
                  <p className="font-ui mt-2 pr-8 text-[12px] leading-5 text-[var(--color-muted)]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" aria-labelledby="contact-heading" className="bg-[#edf0e4]">
          <div className="mx-auto grid max-w-[1500px] items-stretch lg:grid-cols-[0.42fr_0.58fr]">
            <div className="px-6 py-14 sm:px-10">
              <h2 id="contact-heading" className="font-display text-[30px] leading-[1.1] text-[var(--color-heading)] sm:text-[32px]">Contato</h2>
              <p className="font-display mt-3 max-w-sm text-[15px] leading-[1.55] text-[var(--color-body)] sm:text-[16px]">
                Estamos à disposição para esclarecer suas dúvidas e ajudar a planejar sua estadia.
              </p>
              <a
                href="#faq"
                className="font-ui mt-5 inline-flex min-h-12 items-center rounded-md border border-[#4f7555] px-6 py-3 text-[14px] font-bold leading-5 text-[#4f7555]"
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
                <p className="font-display max-w-md text-center text-[28px] font-bold italic leading-[1.05] text-white drop-shadow-sm sm:text-[32px]">
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
