import { homeContent } from "@/content/home";

export function PublicFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#f8f6ef]">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-serif text-sm tracking-[0.12em] text-[#273d4c]">
          {homeContent.brand}
        </p>
        <nav aria-label="Footer navigation" className="flex gap-6 text-sm text-stone-600">
          <a className="hover:text-[#273d4c]" href="#home">Home</a>
          <a className="hover:text-[#273d4c]" href="#gallery">Gallery</a>
          <a className="hover:text-[#273d4c]" href="#amenities">Amenities</a>
        </nav>
      </div>
    </footer>
  );
}
