import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, ShieldCheck, Star, Truck } from "lucide-react";
import heroStore from "@/assets/hero-store.jpg";
import productsDisplay from "@/assets/products-display.jpg";
import solarSetup from "@/assets/solar-setup.jpg";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const featuredProducts = products.slice(0, 4);

const trustItems = [
  { icon: ShieldCheck, label: "Imported Original Products" },
  { icon: Star, label: "10+ Years Serving Abia" },
  { icon: Truck, label: "Affordable & Reliable" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroStore} alt="Imperium Systems store interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Your Trusted Source for Laptops, Phones & Solar Solutions in Umuahia
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            Quality electronics, solar energy products and accessories — imported originals at affordable prices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+2348084562109"
              className="flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
            <Link
              to="/products"
              className="flex items-center gap-2 rounded-lg bg-warm px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Builders */}
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="h-8 w-8 text-accent" />
              <span className="font-heading font-semibold text-secondary-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">Featured Products</h2>
          <p className="mt-2 text-muted-foreground">Our most popular items — enquire via WhatsApp for availability</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>

    {/* About Blurb */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Who We Are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Imperium Systems Enterprise is a trusted electronics store located at No 23 Club Road, Umuahia, Abia State. Since 2016, we have been importing and selling original laptops, smartphones, solar energy products, and accessories to satisfied customers across Abia State and beyond.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our mission is to bring reliable technology and sustainable energy solutions to every home and business in Umuahia and beyond — at prices you can afford.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={productsDisplay} alt="Our products on display" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold text-foreground">Visit Our Store</h2>
          <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-accent" />
            No 23 Club Road, Umuahia, Abia State, Nigeria
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Imperium Systems Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6!2d7.49!3d5.525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzEnMzAuMCJOIDfCsDI5JzI0LjAiRQ!5e0!3m2!1sen!2sng!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground">Ready to Get Your Next Device?</h2>
        <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">
          Contact us today for the latest prices and stock availability. We deliver quality products at the best prices in Umuahia.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-3 font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
          <a
            href="tel:+2348084562109"
            className="flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5" />
            +234 808 456 2109
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
