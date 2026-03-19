import heroStore from "@/assets/hero-store.jpg";
import shopFront from "@/assets/shop-front.jpg";
import productsDisplay from "@/assets/products-display.jpg";
import solarSetup from "@/assets/solar-setup.jpg";

const images = [
  { src: heroStore, alt: "Store interior with electronics display" },
  { src: shopFront, alt: "Imperium Systems shop front exterior" },
  { src: productsDisplay, alt: "Laptops, phones and accessories on display" },
  { src: solarSetup, alt: "Solar panel installation" },
  { src: heroStore, alt: "Product shelves stocked with devices" },
  { src: productsDisplay, alt: "Electronics collection" },
];

const Gallery = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Gallery</h1>
        <p className="mt-3 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Take a look inside our store and see what we have in stock
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <div key={i} className="mb-4 overflow-hidden rounded-xl shadow-sm break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
