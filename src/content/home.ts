export type HomeHighlight = {
  title: string;
  description: string;
};

export const homeContent = {
  brand: "Sítio Serra Azul",
  headline: "Escape para o Campo",
  introduction:
    "O Sítio Serra Azul oferece uma experiência única de lazer e descanso, com acomodações confortáveis, atividades ao ar livre e poucos minutos de distância da cidade.",
  description:
    "Respire ar puro, relaxe em redes, aproveite um churrasco com família e conecte-se com a natureza.",
  property: "Aproveite o sítio, pertinho da cidade",
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
