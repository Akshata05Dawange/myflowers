import Img1 from "./assets/roseboquet.jpg";
import Img2 from "./assets/lily.jpg";
import Img3 from "./assets/tulip.jpg";
import Img4 from "./assets/sunflower.jpg";
import Img5 from "./assets/orchid.jpg";
import Img6 from "./assets/daisy.jpg";
import Img7 from "./assets/mixflower.jpg";
import Img8 from "./assets/pinkgereba.jpg";
import Img9 from "./assets/velvetsunset.jpg";

const PRODUCTS = [
  {
    id: 1,
    title: "Rose Bouquet",
    price: 499,
    description: "A beautiful bouquet of fresh roses, perfect for any occasion.",
    image: Img1,
  },
  {
    id: 2,
    title: "Lily Bouquet",
    price: 299,
    description: "A lovely bouquet of fresh lilies, perfect for any occasion.",
    image: Img2,
  },
  {
    id: 3,
    title: "Tulip Bouquet",
    price: 850,
    description: "A bright bouquet of tulips, perfect for springtime.",
    image: Img3,
  },
  {
    id: 4,
    title: "Sunflower Bouquet",
    price: 700,
    description: "A cheerful bouquet of sunflowers, perfect for brightening anyone's day.",
    image: Img4,
  },
  {
    id: 5,
    title: " Orchid Bouquet",
    price: 350,
    description: "A bright bouquet of orchids, perfect for any special occasion.",
    image: Img5,
  },
  {
    id: 6,
    title: "Daisy Bouquet",
    price: 450,
    description: "A bright bouquet of daisies, perfect for springtime.",
    image: Img6,
  },
  {
    id: 7,
    title: "Tulip Bouquet",
    price: 950,
    description: "A bright bouquet of tulips, perfect for springtime.",
    image: Img7,
  },
  {
    id: 8,
    title: "Pink Gerbera Bouquet",
    price: 850,
    description: "A bright bouquet of pink gerberas, perfect for any special occasion.",
    image: Img8,
  },
  {
    id: 9,
    title: "Velvet Sunset Bouquet",
    price: 550,
    description: "A bright bouquet of velvet sunset flowers, perfect for any special occasion.",
    image: Img9,
  },
];

const servicesData = [
  {
    "id": 1,
    "title": "Fresh Flower Bouquets",
    "desc": "We design handcrafted bouquets using premium-quality fresh flowers.",
    "icon": "Flower2"
  },
  {
    "id": 2,
    "title": "Event Decoration",
    "desc": "Beautiful floral setups for weddings, birthdays, and corporate events.",
    "icon": "PartyPopper"
  },
  {
    "id": 3,
    "title": "Custom Floral Gifts",
    "desc": "Create personalized floral gifts tailored for special occasions.",
    "icon": "Gift"
  },
  {
    "id": 4,
    "title": "Express Delivery",
    "desc": "Get same-day or midnight flower delivery at your doorstep.",
    "icon": "Truck"
  },
  {
    "id": 5,
    "title": "Weekly Flower Subscription",
    "desc": "Receive fresh flowers every week for your home or workspace.",
    "icon": "Calendar"
  },
  {
    "id": 6,
    "title": "Special Occasion Arrangements",
    "desc": "Elegant flower arrangements for anniversaries, proposals & celebrations.",
    "icon": "Sparkles"
  }
];

// ⭐ THIS IS THE ONLY FIX
const DEFAULT = PRODUCTS;

// ⭐ EXPORT EVERYTHING BUT DEFAULT MUST BE PRODUCTS
export default DEFAULT;
export { PRODUCTS, servicesData };