"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/public-asset";

type CasaPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

const photos: CasaPhoto[] = [
  {
    src: "/images/casa-living-area.jpeg",
    alt: "Vista ampla das colinas e da área externa do Sítio Serra Azul",
    width: 1080,
    height: 1350,
    position: "center 58%",
  },
  {
    src: "/images/casa-living-area-2.jpeg",
    alt: "Vista do lago e das colinas a partir da varanda",
    width: 960,
    height: 1094,
    position: "center 60%",
  },
  {
    src: "/images/casa-bedroom.jpg",
    alt: "Lago cercado por pasto e vegetação",
    width: 1080,
    height: 1350,
    position: "center 64%",
  },
  {
    src: "/images/casa-bathroom.jpeg",
    alt: "Área externa da propriedade com varanda e churrasqueira",
    width: 960,
    height: 768,
  },

];

export function CasaGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<CasaPhoto | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !selectedPhoto) return;

    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  function closeDialog() {
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  function handleDialogClose() {
    setSelectedPhoto(null);
    openerRef.current?.focus();
  }

  return (
    <>
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 px-6 sm:grid-cols-3 sm:gap-4 sm:px-10 xl:grid-cols-4">
        {photos.map((photo) => (
          <button
            key={photo.src}
            ref={selectedPhoto?.src === photo.src ? openerRef : undefined}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f7555]"
            aria-label={`Ampliar foto: ${photo.alt}`}
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setSelectedPhoto(photo);
            }}
          >
            <Image
              src={publicAsset(photo.src)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 639px) 50vw, (max-width: 1279px) 33vw, 25vw"
              className="h-full w-full object-cover tranCasan-transform duration-300 group-hover:scale-[1.03] motion-reduce:tranCasan-none"
              style={{ objectPosition: photo.position ?? "center" }}
            />
            <span className="sr-only">Toque para ampliar</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Foto ampliada do Sítio Serra Azul"
        className="fixed inset-0 m-auto max-h-[92dvh] max-w-[96vw] overflow-visible border-0 bg-transparent p-0 backdrop:bg-black/85"
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            event.preventDefault();
            closeButtonRef.current?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        onClose={handleDialogClose}
      >
        {selectedPhoto ? (
          <div className="relative flex max-h-[92dvh] max-w-[96vw] items-center justify-center">
            <button
              type="button"
              ref={closeButtonRef}
              autoFocus
              aria-label="Fechar foto ampliada"
              className="absolute -right-2 -top-12 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-3xl leading-none text-[#26382a] shadow-lg hover:bg-[#f1ecd9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-0 sm:top-0 sm:translate-x-1/2 sm:-translate-y-1/2"
              onClick={closeDialog}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <Image
              src={publicAsset(selectedPhoto.src)}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              sizes="96vw"
              quality={90}
              className="max-h-[88dvh] w-auto max-w-[96vw] rounded-sm object-contain"
            />
          </div>
        ) : null}
      </dialog>
    </>
  );
}
