export interface Testimonial {
  name: string
  rating: number
  text: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Emily C.',
    rating: 5,
    text: "I can't recommend Andrii enough. He assembled my desk and couch console table. One thing that really stood out to me was how careful he was with my home and floors. He chose to unpack everything in one area and carry the pieces to the room rather than dragging heavy boxes across the floor. His pricing is more than fair for the quality of work he provides, and I'll absolutely be calling him again for future projects.",
    service: 'Desk & Console Assembly',
  },
  {
    name: 'Sekou K.',
    rating: 5,
    text: "Andrew did an outstanding job assembling my IKEA bookshelf! Not only was he fast and efficient, but he was also very friendly. In over 20 years, I haven't seen anyone as skilled, professional, and thorough as Andrew. He's truly the best!",
    service: 'IKEA Bookshelf Assembly',
  },
  {
    name: 'Belinda M.',
    rating: 5,
    text: "Wow! Such a wonderful experience. Andrii and family were so prompt, diligent, and communicative. He was very quick to respond, did a great job of setting very clear and achievable expectations. Such a lovely and hardworking family business. Very glad we picked them, they've definitely earned returning customers!",
    service: 'Furniture Assembly',
  },
  {
    name: 'Crystal P.',
    rating: 5,
    text: "Andrii and his team were exceptionally communicative, flexible and responsive when helping us schedule our shed installation. They arrived fully equipped to build a sturdy foundation and put together the 7x7' shed. They were kind, professional and efficient. 10 out of 10 DEFINITELY recommend!",
    service: 'Shed Installation',
  },
  {
    name: 'Venkat K.',
    rating: 5,
    text: "Andrii was fantastic! He helped fix our bed and did an excellent job. What really impressed us was his patience and flexibility when we asked him to accommodate some extra work that wasn't originally part of the agreement. He went above and beyond, and we couldn't be happier with the results.",
    service: 'Bed Repair',
  },
  {
    name: 'Abby F.',
    rating: 5,
    text: "Needed help standing and placing a big bookshelf. Called him, 15mins later he was here! He did a great job, very professional made sure my floors wouldn't get scratched and even removed a base board so the bookshelf would fit. Looks beautiful! Will definitely hire him again!",
    service: 'Bookshelf Placement',
  },
]
