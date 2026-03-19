import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-lg font-bold mb-3">Imperium Systems Enterprise</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Your trusted source for quality laptops, smartphones, solar energy products and accessories in Umuahia, Abia State.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              No 23 Club Road, Umuahia, Abia State, Nigeria
            </div>
            <a href="tel:+2348084562109" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              +234 808 456 2109
            </a>
            <a href="tel:+2348068702956" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              +234 806 870 2956
            </a>
            <a href="mailto:info@imperiumsystems.ng" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              info@imperiumsystems.ng
            </a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Business Hours</h4>
          <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
            <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
            <div>
              <p>Monday – Saturday</p>
              <p>8:00 AM – 6:00 PM</p>
              <p className="mt-1">Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Imperium Systems Enterprise. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
