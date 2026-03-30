export const siteConfig = {
  name: "Andrii Mohylov Furniture Assembly",
  shortName: "AM Furniture Assembly",
  phone: "(940) 222-0263",
  phoneTel: "tel:+19402220263",
  email: "andrimohilev@gmail.com",
  location: "Denton, TX",
  hours: {
    weekdays: "Mon - Fri: 8am - 7pm",
    saturday: "Sat: 9am - 5pm",
    sunday: "Sun: By appointment",
  },
  thumbtackUrl:
    "https://www.thumbtack.com/tx/denton/mobile-auto-detailing-services/am-furniture-assembly/service/554676627122528261",
  startingPrice: "$40",
  payment: ["Apple Pay", "Cash", "Check", "Zelle"],
} as const;

export const heroSlides = [
  {
    src: '/photos/banner2.png',
    alt: 'Professional Furniture Assembly — save more with bundle deals: 10% off 1-3 items, 15% off 4-6 items, 20% off 7+ items',
  },
  {
    src: '/photos/banner3.png',
    alt: 'We Are Putting Things Together — same or next day furniture assembly available, call (940) 222-0263',
  },
  {
    src: '/photos/banner1.png',
    alt: 'Instant Assembly Magic — modern furniture assembled effortlessly from the box',
  },
] as const;
