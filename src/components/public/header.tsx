import { MobileNav } from "./mobile-nav";
import { homeContent } from "@/content/home";

const navigation = [
  { label: "The Farmhouse", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Explore", href: "#property" },
];

export function PublicHeader() {
  return (
    <header className="relative z-30 h-[68px] bg-[#fdfcf8]">
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 text-[#273d4c]"
          aria-label={`${homeContent.brand} home`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="h-9 w-9 text-[#758c67]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M24 43V18M24 24c-8-1-12-7-12-14 8 1 12 6 12 14ZM24 31c8-1 12-7 12-14-8 1-12 6-12 14ZM24 18c5-3 7-7 6-12-5 2-7 6-6 12Z" />
          </svg>
          <span className="font-serif text-lg tracking-[0.14em] sm:text-xl">
            {homeContent.brand}
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#273d4c] transition-colors hover:text-[#5e7f96]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#property"
          className="hidden rounded-md bg-[#5f7f98] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4f6d82] md:inline-flex"
        >
          Explore the Farmhouse
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
