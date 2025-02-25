const navbarJsonObject = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Our Most Rated Guides", href: "/guides" },
  { title: "Our Packages", href: "/our_packages" },
  { title: "Most Desired Places", href: "/most_desired_places" },
];

const guides = [
  {
    id: 1,
    name: "Robiul Islam",
    location: "CHANDPUR",
    rating: 4.5,
    hours: 2,
    transport: "transport",
    plan: "Fmaily Plan",
    taka: 250,
  },
];

const customer_reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Excellent Guide! I highly recommend him.",
    rating: 4,
    date: "2025-10-01",
    image: "/custom1.jpg",
    tags: "Amazing Guide !",
    description:
      "Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "The guide was very helpful and friendly.",
    rating: 4,
    tags: "Fantastic Experience!",
    description:
      "Our visit to Kuakata was unforgettable, thanks to our amazing guide. They were knowledgeable, friendly, and went above and beyond to ensure we enjoyed every moment. From exploring the beach to learning about local culture, everything was perfect. Highly recommended",
    date: "2025-09-15",
    image: "/custom2.jpg",
  },
];

const reviewData = [
  { id: 1, name: "Guide", rating: 4.3 },
  { id: 2, name: "Transportation", rating: 3.8 },
  { id: 3, name: "Value of Money", rating: 5.1 },
  { id: 4, name: "Safety", rating: 4.5 },
];

export { customer_reviews, guides, navbarJsonObject, reviewData };
