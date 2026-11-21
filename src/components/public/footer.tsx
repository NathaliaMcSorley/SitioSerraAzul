export function PublicFooter() {
  return (
    <footer className="bg-[var(--color-green-dark)] font-ui text-[#f7f1df]">
      <div className="mx-auto max-w-[1500px] px-6 py-10 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/20 pb-7 text-center md:flex-row md:text-left">
          <p className="font-display text-2xl leading-none italic">Sítio Serra Azul</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] leading-5">
            <a className="hover:underline" href="#home">Home</a>
            <a className="hover:underline" href="#experiencia">Experiência</a>
            <a className="hover:underline" href="#comodidades">Comodidades</a>
            <a className="hover:underline" href="#galeria">Galeria</a>
            <a className="hover:underline" href="#acomodacoes">Acomodações</a>
            <a className="hover:underline" href="#localizacao">Localização</a>
            <a className="hover:underline" href="#contato">Contato</a>
          </nav>
        </div>
        <p className="pt-5 text-center text-[11px] text-white/65">
          © Sítio Serra Azul. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
