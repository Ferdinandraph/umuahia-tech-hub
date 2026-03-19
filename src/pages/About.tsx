import shopFront from "@/assets/shop-front.jpg";
import heroStore from "@/assets/hero-store.jpg";
import { Target, Eye, Users } from "lucide-react";

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">About Us</h1>
        <p className="mt-3 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Bringing reliable technology and sustainable energy to Umuahia since 2016
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={shopFront} alt="Imperium Systems shop front" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Imperium Systems Enterprise was founded with a simple mission: to make quality, original electronics accessible and affordable for everyone in Umuahia and Abia State.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Since 2016, we have grown from a small shop to one of the most trusted electronics stores on Club Road. We import directly to ensure every product — from laptops to solar panels — is genuine and reliable.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our customers trust us because we stand behind every product we sell. Whether you need a laptop for your business, a smartphone for your family, or a solar system to power your home, we're here to help.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To bring reliable technology and sustainable energy solutions to every home and business in Umuahia and beyond — at prices you can afford.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the most trusted and accessible electronics store in South-East Nigeria, known for genuine products and excellent customer service.",
            },
            {
              icon: Users,
              title: "Our Values",
              text: "Trust, quality, affordability, and customer satisfaction drive everything we do. Every customer leaves our store happy and confident.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-card p-8 shadow-sm">
              <item.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-heading text-xl font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Shop Interior */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Inside Our Store</h2>
        <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl mx-auto">
          <img src={heroStore} alt="Inside Imperium Systems store" className="w-full h-auto" />
        </div>
      </div>
    </section>
  </div>
);

export default About;
