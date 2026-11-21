import Image from "next/image";

import { PublicFooter } from "@/components/public/footer";
import { PublicHeader } from "@/components/public/header";
import { homeContent } from "@/content/home";

export default function Home() {
  return (
    <div id="home" className="min-h-screen overflow-x-hidden bg-[#fdfcf8]">
      <PublicHeader />

      <main>
        <section
          aria-labelledby="hero-heading"
          className="relative flex min-h-[560px] items-end overflow-hidden sm:min-h-[620px] md:min-h-[650px]"
        >
          <Image
            src="/images/farmhouse-hero-v3.jpg"
            alt="Farmhouse and landscaped gardens in warm countryside light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
          <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-16 sm:px-10 sm:pb-20 md:pb-24">
            <div className="max-w-xl text-white">
              <h1
                id="hero-heading"
                className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
              >
                {homeContent.headline}
              </h1>
              <p className="mt-5 text-base font-medium sm:text-lg">
                {homeContent.introduction}
              </p>
              <a
                href="#property"
                className="mt-7 inline-flex rounded-md bg-[#fdfcf8] px-6 py-3 text-sm font-semibold text-[#273d4c] shadow-sm transition-colors hover:bg-white"
              >
                Plan Your Stay <span aria-hidden="true" className="ml-3">→</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="property"
          aria-labelledby="property-heading"
          className="mx-auto max-w-[1500px] px-6 py-16 text-center sm:px-10 sm:py-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a56a3d]">
            A little more room to breathe
          </p>
          <h2
            id="property-heading"
            className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#273d4c] sm:text-5xl"
          >
            {homeContent.property}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600">
            {homeContent.description}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-stone-500">
            {homeContent.propertyDescription}
          </p>
        </section>

        <section
          id="gallery"
          aria-label="Property image gallery"
          className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 px-6 pb-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:pb-20"
        >
          <article className="overflow-hidden rounded-lg">
            <Image
              src="/images/farmhouse-living-room.jpg"
              alt="Warm farmhouse living room with rustic beams"
              width={900}
              height={570}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-[280px] w-full object-cover sm:h-[320px]"
            />
          </article>
          <article className="overflow-hidden rounded-lg">
            <Image
              src="/images/farmhouse-veranda.jpg"
              alt="Blue farmhouse porch with rocking chairs"
              width={900}
              height={570}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-[280px] w-full object-cover sm:h-[320px]"
            />
          </article>
          <article className="overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/farmhouse-landscape.jpg"
              alt="Open countryside landscape at sunset"
              width={900}
              height={570}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
              className="h-[280px] w-full object-cover sm:h-[320px]"
            />
          </article>
        </section>

        <section
          id="amenities"
          aria-labelledby="amenities-heading"
          className="border-y border-stone-200 bg-[#f8f6ef]"
        >
          <div className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10">
            <h2
              id="amenities-heading"
              className="text-center font-serif text-3xl text-[#273d4c]"
            >
              The spirit of a country stay
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {homeContent.highlights.map((highlight) => (
                <article key={highlight.title} className="text-center">
                  <h3 className="font-serif text-xl text-[#273d4c]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
