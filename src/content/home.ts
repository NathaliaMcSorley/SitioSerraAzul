export type HomeHighlight = {
  title: string;
  description: string;
};

export const homeContent = {
  brand: "Sítio Serra Azul",
  headline: "Escape para o Campo",
  introduction:
    "Desfrute de natureza, paisagens tranquilas, churrasco, pescaria e momentos de paz da vida rural.",
  description:
    "Respire ar puro, relaxe em redes, aproveite um churrasco com família e conecte-se com a natureza.",
  property: "Experiência na Fazenda",
  propertyDescription:
    "Relaxe por puro, relaxe em rede, aprecie um churrasco com família e conecte-se com a natureza.",
  highlights: [
    { title: "Lago para Pesca", description: "Lago para momentos tranquilos." },
    { title: "Churrasqueira", description: "Espaço para reunir a família." },
    { title: "Redes", description: "Descanso à sombra da natureza." },
    { title: "Cozinha Equipada", description: "Estrutura para preparar refeições." },
    { title: "Estacionamento", description: "Acesso facilitado ao sítio." },
    { title: "Área Externa", description: "Mais espaço ao ar livre." },
  ] satisfies HomeHighlight[],
};
