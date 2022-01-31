const books = [
  {
    id: 1,
    author: "Jordan Peterson",
    title: "12 Rules for Life: An Antidote to Chaos",
    slug: "12-rules-for-life:-an-antidote-to-chaos",
    genre: ["Self-Help"],
    image:
      "https://anovelidea.co.tz/wp-content/uploads/2021/07/71clvZLIRZL.jpg",
    available: false,
    borrowedBy: [3],
  },
  {
    id: 2,
    author: "Blake Crouch",
    title: "Dark Matter",
    slug: "dark-matter",
    genre: ["Sci-Fi", "Thriller"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SY475_.jpg",
    available: false,
    borrowedBy: [3],
  },
  {
    id: 3,
    author: "Robin Sloan",
    title: "Mr. Penumbra's 24-Hour Bookstore",
    slug: "mr.-penumbra's-24-hour-bookstore",
    genre: ["Suspense", "Fantasy"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345089845l/13538873.jpg",
    available: false,
    borrowedBy: [1, 3, 5, 1],
  },
  {
    id: 4,
    author: "Paul Kalanithi",
    title: "When Breath Becomes Air",
    slug: "when-breath-becomes-air",
    genre: ["Biography"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492677644l/25899336.jpg",
    available: true,
    borrowedBy: [2, 5],
  },
  {
    id: 5,
    author: "Eric Ries",
    title: "The Lean Startup",
    slug: "the-lean-startup",
    genre: ["Business", "Entrepreneurship"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg",
    available: false,
    borrowedBy: [4, 1, 2],
  },
  {
    id: 6,
    author: "George R.R. Martin",
    title: "A Storm of Swords",
    slug: "a-storm-of-swords",
    genre: ["Fantasy"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353235205l/768889.jpg",
    available: true,
    borrowedBy: [],
  },
  {
    id: 7,
    author: "Leigh Bardugo",
    title: "Six of Crows",
    slug: "six-of-crows",
    genre: ["Fantasy"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423848167l/22294935.jpg",
    available: false,
    borrowedBy: [4, 3, 2, 1, 5],
  },
  {
    id: 8,
    author: "Agatha Christie",
    title: "Curtain: Poirot's Last Case",
    slug: "curtain:-poirot's-last-case",
    genre: ["Crime", "Mystery"],
    image:
      "https://agathachristie.imgix.net/hcuk-paperback/Curtain-Poirots-Last-Case-v2.JPG?auto=compress,format&fit=clip&q=65&w=400",
    available: false,
    borrowedBy: [3, 5],
  },
  {
    id: 9,
    author: "Elif Shafak",
    title: "The Forty Rules of Love",
    slug: "the-forty-rules-of-love",
    genre: ["Fiction"],
    image:
      "https://www.a.ubuy.com.kw/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nL01WMEFBT1N3T2FwZXFVdXcvcy1sNTAwLmpwZw.jpg",
    available: false,
    borrowedBy: [5, 1],
  },
  {
    id: 10,
    author: "Leigh Bardugo",
    title: "The Language of Thorns: Midnight Tales and Dangerous Magic",
    slug: "the-language-of-thorns:-midnight-tales-and-dangerous-magic",
    genre: ["Fantasy"],
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491842507l/34076952.jpg",
    available: false,
    borrowedBy: [5],
  },
];

export default books;
