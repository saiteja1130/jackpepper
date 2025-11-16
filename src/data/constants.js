import Logo from "../assets/Images/logo1.jpg";
import Image2 from "../assets/Images/2.jpg";
import Image3 from "../assets/Images/3.jpg";
import Image4 from "../assets/Images/4.jpg";
import Image5 from "../assets/Images/5.jpg";
import Image7 from "../assets/Images/7.jpg";
import Image8 from "../assets/Images/8.jpg";
import Image9 from "../assets/Images/9.jpg";
import Image10 from "../assets/Images/10.jpg";
import Image11 from "../assets/Images/11.jpg";
import Image12 from "../assets/Images/12.jpg";
import Image13 from "../assets/Images/13.jpg";
import Image14 from "../assets/Images/14.jpg";
import Image15 from "../assets/Images/15.jpg";
import Image16 from "../assets/Images/16.jpg";
import Image17 from "../assets/Images/17.jpg";
import Image18 from "../assets/Images/18.jpg";
import Cloves from "../assets/Images/cloves.jpg";

// Image URLs from user upload, hosted for convenience
export const imageUrls = {
  moringaCapsules: Image2,
  logo: Logo,
  nutmeg: Image15,
  gingerPowder: Image16,
  blackPepper: Image12,
  blackPepperPowder: Image17,
  cinnamonPowder: Image18,
  clovesPowder: Image8,
  cinnamonSticks: Image2,
  clovesWhole: Image3,
  japathri: Image4,
  mace: Image10,
  cardamom: Image5,
  mahkotaDewa: Image7,
  cashews: Image8,
  jackfruitPodPowder: Image9,
  greenJackfruitPowder: Image10,
  moringaPowder: Image11,
  blackPepperWhole: Image12,
  turmericMoringaCapsules: Image13,
  turmericMoringaLeafrCapsules: Image14,
};

export const LOGO_URL = imageUrls.logo;

export const WHATSAPP_NUMBER = "918073781750"; // Using number from product images
export const PHONE_NUMBER = "+918073781750"; // Using number from product images

export const GENERAL_ENQUIRY_MESSAGE =
  "Hello Jack Pepper Farms, I have an enquiry about your products.";

export const SHIPPING_POLICY = {
  freeDeliveryThreshold: 750,
  courierCharge: 60,
  discountThreshold: 1500,
  discountPercentage: 5,
};

export const products = [
  {
    id: 1,
    name: "Organic Moringa Capsules",
    mrp: "₹499",
    offerPrice: "₹399",
    quantity: "120NO",
    imageUrl: imageUrls.moringaCapsules,
    description:
      "Packed with essential nutrients, our Organic Moringa Leaf Capsules are a natural energy booster and support overall wellness. A miracle superfood in a convenient capsule.",
    category: "Wellness Products",
    gstRate: 5,
  },
  {
    id: 2,
    name: "Turmeric + Organic Moringa Capsules (Bundle)",
    mrp: "₹499",
    offerPrice: "₹399",
    quantity: "60 NO",
    imageUrl: imageUrls.turmericMoringaCapsules, // Using existing image, consider a bundle specific image
    description:
      "A powerful combination of Turmeric and Organic Moringa capsules for enhanced health benefits.",
    category: "Wellness Products",
    gstRate: 5,
  },
  {
    id: 3,
    name: "Premium Black Pepper",
    mrp: "₹299", // Using previous price as MRP
    offerPrice: "₹249",
    quantity: "200gm",
    imageUrl: imageUrls.blackPepperWhole,
    description:
      "Sourced from our own organic farm, these whole black peppercorns are rich in piperine. They help detoxify the liver, prevent radical damage, and boost metabolism.",
    category: "Wellness Products",
    gstRate: 5,
  },
  {
    id: 4,
    name: "Organic Moringa Powder",
    mrp: "₹299", // Using previous price as MRP
    offerPrice: "₹249",
    quantity: "200gm",
    imageUrl: imageUrls.moringaPowder,
    description:
      "A versatile superfood, our Organic Moringa Leaf Powder is an energy booster that supports skin health and enhances skin radiance. Mix it into your favorite drinks or meals.",
    category: "Wellness Products",
    gstRate: 5,
  },
  {
    id: 5,
    name: "Green Jackfruit Powder",
    mrp: "₹299", // Using previous price as MRP
    offerPrice: "₹249",
    quantity: "350gm",
    imageUrl: imageUrls.greenJackfruitPowder,
    description:
      "Our Green Jackfruit Powder is a nutritious powerhouse, rich in protein and soluble fiber. It's an excellent, low-glycemic alternative to traditional flours for a healthy lifestyle.",
    category: "Wellness Products",
    gstRate: 0,
  },
  {
    id: 6,
    name: "Jackfruit Pod Powder",
    mrp: "₹299", // Using previous price as MRP
    offerPrice: "₹249",
    quantity: "200gm",
    imageUrl: imageUrls.jackfruitPodPowder,
    description:
      "Made from ripe jackfruit pods, this powder is rich in dietary fiber, protein, and soluble fiber. A naturally sweet and healthy addition to your smoothies, desserts, and baked goods.",
    category: "Wellness Products",
    gstRate: 0,
  },
  {
    id: 7,
    name: "Premium Cashewnuts (W.240)",
    mrp: "₹299", // Using previous price as MRP
    offerPrice: "₹249",
    quantity: "150gm",
    imageUrl: imageUrls.cashews,
    description:
      "Enjoy our premium W.240 grade cashewnuts. They are large, crunchy, and have a rich, buttery flavor. A healthy snack that boosts the immune system and improves bone health.",
    category: "Wellness Products",
    gstRate: 5,
  },
  {
    id: 8,
    name: "Cardamom",
    mrp: "₹120", // Using previous price as MRP
    offerPrice: "90",
    quantity: "20gm",
    imageUrl: imageUrls.cardamom,
    description:
      "Our premium green cardamom pods are highly aromatic with a complex flavor profile that is citrusy, minty, spicy, and herbal all at once. A prized spice in global cuisine.",
    category: "Spices",
    gstRate: 5,
  },
  {
    id: 9,
    name: "Jathipatri (Mace)",
    mrp: "₹120", // Using previous price as MRP
    offerPrice: "₹90",
    quantity: "25gm",
    imageUrl: imageUrls.mace,
    description:
      "Mace is the lacy covering of the nutmeg seed, offering a more delicate flavor. It adds a warm, spicy-sweet note to baked goods, savory dishes, and spice blends.",
    category: "Spices",
    gstRate: 5,
  },
  {
    id: 10,
    name: "Cloves",
    mrp: "₹120", // Using previous price as MRP
    offerPrice: "₹90",
    quantity: "50gm",
    imageUrl: imageUrls.clovesWhole,
    description:
      "Hand-picked for their size and oil content, our whole cloves offer a strong, pungent, and sweet flavor. Perfect for studding meats, flavoring sauces, and pickling.",
    category: "Spices",
    gstRate: 5,
  },
  {
    id: 11,
    name: "Nutmeg",
    mrp: "₹120", // Using previous price as MRP
    offerPrice: "₹90",
    quantity: "100gm",
    imageUrl: imageUrls.nutmeg,
    description:
      "Sourced from the high ranges of the Western Ghats, our premium nutmeg adds a warm, sweet, and aromatic flavor to both sweet and savory dishes. A must-have for every kitchen.",
    category: "Spices",
    gstRate: 5,
  },
  {
    id: 12,
    name: "Cinnamon Sticks",
    mrp: "₹120", // Using previous price as MRP
    offerPrice: "₹90",
    quantity: "100gm",
    imageUrl: imageUrls.cinnamonSticks,
    description:
      "Sourced from the Western Ghats, these whole cinnamon sticks release a sweet and delicate aroma. Ideal for infusing flavor into drinks, stews, and desserts.",
    category: "Spices",
    gstRate: 5,
  },
  {
    id: 13,
    name: "Dry Ginger",
    mrp: "₹120", // Using previous price as MRP
    offerPrice: "₹90",
    quantity: "100gm",
    imageUrl: imageUrls.gingerPowder, // Using powder image for dry ginger
    description:
      "Our Dry Ginger offers a pungent, spicy-sweet flavor and aroma. It's a versatile spice, perfect for baking, marinades, and traditional remedies.",
    category: "Spices",
    gstRate: 5,
  },
  {
    id: 14,
    name: "Spices Combo (Cardamom, Jathipatri, Cloves, Nutmeg, Cinnamon, Dry Ginger)",
    mrp: "₹720",
    offerPrice: "₹499",
    quantity: "1 unit",
    imageUrl: imageUrls.logo,
    description: "A special combo pack of six essential whole spices.",
    category: "Bundles",
    gstRate: 5,
  },
  {
    id: 15,
    name: "Cloves Powder",
    mrp: "₹99",
    offerPrice: "₹75",
    quantity: "30gm",
    imageUrl: imageUrls.clovesPowder,
    description:
      "Our Cloves Powder has an intense, sweet, and pungent flavor. A versatile spice used in baking, cooking, and traditional spice blends for its distinctive taste and aroma.",
    category: "Powders",
    gstRate: 5,
  },
  {
    id: 16,
    name: "Black Pepper Powder",
    mrp: "₹99", // Using previous price as MRP
    offerPrice: "₹75",
    quantity: "40gm",
    imageUrl: imageUrls.blackPepperPowder,
    description:
      "Finely ground from premium quality black peppercorns, this powder delivers a sharp, pungent heat that enhances the flavor of any dish. A staple for seasoning and cooking.",
    category: "Powders",
    gstRate: 5,
  },
  {
    id: 17,
    name: "Dry Ginger Powder",
    mrp: "₹99", // Using previous price as MRP
    offerPrice: "₹75",
    quantity: "50gm",
    imageUrl: imageUrls.gingerPowder,
    description:
      "Our Dry Ginger Powder offers a pungent, spicy-sweet flavor and aroma. It's a versatile spice, perfect for baking, marinades, and traditional remedies.",
    category: "Powders",
    gstRate: 5,
  },
  {
    id: 18,
    name: "Nutmeg Powder",
    mrp: "₹99", // Using previous price as MRP
    offerPrice: "₹75",
    quantity: "50gm",
    imageUrl: imageUrls.nutmeg, // Assuming this image is suitable for powder
    description:
      "Finely ground from premium quality nutmeg, this powder adds a warm, sweet, and aromatic flavor to both sweet and savory dishes.",
    category: "Powders",
    gstRate: 5,
  },
  {
    id: 19,
    name: "Cinnamon Powder",
    mrp: "₹99", // Using previous price as MRP
    offerPrice: "₹75",
    quantity: "50gm",
    imageUrl: imageUrls.cinnamonPowder,
    description:
      "Experience the sweet, woody, and fragrant aroma of our premium Cinnamon Powder. Perfect for desserts, beverages, and savory dishes, adding a touch of warmth and complexity.",
    category: "Powders",
    gstRate: 5,
  },
  {
    id: 20,
    name: "Spice Powders Combo (Cloves, Black Pepper, Dry Ginger, Nutmeg, Cinnamon)",
    mrp: "₹495",
    offerPrice: "₹325", // Offer price not provided, using MRP
    quantity: "1 unit",
    imageUrl: imageUrls.logo, // Placeholder image
    description: "A special combo pack of five essential spice powders.",
    category: "Bundles",
    gstRate: 5,
  },
];
