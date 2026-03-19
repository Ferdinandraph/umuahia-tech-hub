import heroStore from "@/assets/hero-store.jpg";
import productsDisplay from "@/assets/products-display.jpg";
import solarSetup from "@/assets/solar-setup.jpg";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
};

export const categories = [
  "All",
  "Laptops & Computers",
  "Phones & Accessories",
  "Solar Products",
  "Other Gadgets",
];

export const products: Product[] = [
  {
    id: "1",
    title: "HP EliteBook Laptop",
    description: "Powerful business laptop with Intel Core i5, 8GB RAM, 256GB SSD. Perfect for work and school.",
    price: "From ₦180,000",
    category: "Laptops & Computers",
    image: productsDisplay,
  },
  {
    id: "2",
    title: "Dell Latitude Laptop",
    description: "Reliable Dell laptop with excellent battery life and durable build quality.",
    price: "From ₦150,000",
    category: "Laptops & Computers",
    image: productsDisplay,
  },
  {
    id: "3",
    title: "Lenovo ThinkPad",
    description: "Premium business laptop known for its legendary keyboard and durability.",
    price: "From ₦200,000",
    category: "Laptops & Computers",
    image: productsDisplay,
  },
  {
    id: "4",
    title: "Samsung Galaxy Smartphone",
    description: "Latest Samsung Galaxy with stunning display, powerful camera and long battery life.",
    price: "From ₦95,000",
    category: "Phones & Accessories",
    image: heroStore,
  },
  {
    id: "5",
    title: "iPhone (Various Models)",
    description: "Original Apple iPhones – various models available. Call for current stock and pricing.",
    price: "Contact for Price",
    category: "Phones & Accessories",
    image: heroStore,
  },
  {
    id: "6",
    title: "Phone Chargers & Cables",
    description: "Original fast chargers, USB-C cables, lightning cables and power banks.",
    price: "From ₦3,500",
    category: "Phones & Accessories",
    image: heroStore,
  },
  {
    id: "7",
    title: "Solar Panel System (1kVA)",
    description: "Complete 1kVA solar system with panels, inverter, battery and installation guide.",
    price: "From ₦350,000",
    category: "Solar Products",
    image: solarSetup,
  },
  {
    id: "8",
    title: "Solar Inverter",
    description: "High-quality solar inverter for home and office use. Various capacities available.",
    price: "From ₦120,000",
    category: "Solar Products",
    image: solarSetup,
  },
  {
    id: "9",
    title: "Solar Batteries",
    description: "Deep cycle batteries for solar installations. Long-lasting and reliable.",
    price: "From ₦85,000",
    category: "Solar Products",
    image: solarSetup,
  },
  {
    id: "10",
    title: "Mini Sewing Machine",
    description: "Portable electric sewing machine perfect for home use and small businesses.",
    price: "From ₦25,000",
    category: "Other Gadgets",
    image: productsDisplay,
  },
  {
    id: "11",
    title: "Car Charger & Accessories",
    description: "Quality car chargers, phone holders and car accessories.",
    price: "From ₦5,000",
    category: "Other Gadgets",
    image: productsDisplay,
  },
  {
    id: "12",
    title: "Bluetooth Earphones",
    description: "Wireless Bluetooth earphones and headsets. Various brands available.",
    price: "From ₦8,000",
    category: "Other Gadgets",
    image: heroStore,
  },
];
