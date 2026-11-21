"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Comodidades", href: "#comodidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Disponibilidade", href: "#disponibilidade" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-md text-[#273d4c]"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          {open ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-12 w-56 rounded-lg border border-stone-200 bg-white p-2 shadow-xl"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-4 py-3 text-[15px] font-semibold leading-6 text-[#43513b] hover:bg-stone-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
