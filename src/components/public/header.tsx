import Image from "next/image";
import { MobileNav } from "./mobile-nav";

const navigation = [
  { label: "A Experiência", href: "#experiencia" },
  { label: "O Sítio", href: "#comodidades" },
  { label: "A Casa", href: "#acomodacoes" },
  { label: "Disponibilidade", href: "#disponibilidade" },
  { label: "Localização", href: "#localizacao" },
];

export function PublicHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 h-[84px] border-b border-white/30 bg-[#fbf8ef]/95 font-ui">
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center"
          aria-label="Sítio Serra Azul - início"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="Sítio Serra Azul"
            width={220}
            height={86}
            priority
            className="h-[62px] w-auto object-contain"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] font-semibold text-[#43513b] transition-colors hover:text-[#9b5b32]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden min-h-11 shrink-0 items-center rounded-md bg-[#a85f32] px-5 py-2.5 text-[16px] text-white shadow-sm transition-colors hover:bg-[#8f4d28] md:inline-flex"
        >
          Reservar
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
