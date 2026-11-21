import Image from "next/image";
import { MobileNav } from "./mobile-nav";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experiência na Fazenda", href: "#experiencia" },
  { label: "Comodidades", href: "#comodidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Disponibilidade", href: "#disponibilidade" },
  { label: "Localização", href: "#localizacao" },
];

export function PublicHeader() {
  return (
    <header className="relative z-30 h-[84px] border-b border-white/30 bg-[#fbf8ef]/95">
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center"
          aria-label="Sítio Serra Azul - início"
        >
          <Image
            src="/images/logo.png"
            alt="Sítio Serra Azul"
            width={220}
            height={86}
            priority
            className="h-[68px] w-auto object-contain"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-[#26382a] transition-colors hover:text-[#9b5b32]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden shrink-0 rounded-md bg-[#b86f36] px-4 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#965a2c] md:inline-flex"
        >
          Planejar estadia
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
