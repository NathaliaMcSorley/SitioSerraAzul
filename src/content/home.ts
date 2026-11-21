export type HomeHighlight = {
  title: string;
  description: string;
};

// Owner-to-verify: these highlights describe the intended experience,
// not confirmed property amenities or facilities.
export const homeContent = {
  brand: "THE FARMHOUSE",
  headline: "Find Your Place in the Country",
  introduction:
    "Slow mornings, open skies, and room to reconnect.",
  description:
    "Escape to a charming farmhouse where rustic comfort meets natural beauty.",
  property:
    "A farmhouse stay, made for slowing down",
  propertyDescription:
    "Enjoy an inviting setting shaped around comfort, quiet moments, and a closer connection to the countryside.",
  highlights: [
    {
      title: "Comfort",
      description: "A warm, welcoming place to settle in and feel at ease.",
    },
    {
      title: "Nature",
      description: "Space to enjoy the changing light and open country surroundings.",
    },
    {
      title: "Togetherness",
      description: "Unhurried moments for sharing good company and simple pleasures.",
    },
  ] satisfies HomeHighlight[],
};
