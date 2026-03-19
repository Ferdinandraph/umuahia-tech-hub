import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const text = `Hello Imperium Systems,%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/2348084562109?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Contact Us</h1>
          <p className="mt-3 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            We'd love to hear from you. Visit our store, call, or send a message.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">No 23 Club Road, Umuahia, Abia State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+2348084562109" className="block text-muted-foreground hover:text-accent transition-colors">+234 808 456 2109</a>
                    <a href="tel:+2348068702956" className="block text-muted-foreground hover:text-accent transition-colors">+234 806 870 2956</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:info@imperiumsystems.ng" className="text-muted-foreground hover:text-accent transition-colors">info@imperiumsystems.ng</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              {submitted ? (
                <div className="rounded-xl bg-accent/10 p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="font-heading font-semibold text-foreground">Message sent via WhatsApp!</p>
                  <p className="mt-2 text-muted-foreground">We'll respond as soon as possible.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", message: "" }); }}
                    className="mt-4 text-accent font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-card px-4 py-3 text-card-foreground outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-card px-4 py-3 text-card-foreground outline-none focus:ring-2 focus:ring-ring"
                      placeholder="e.g. 0808 456 2109"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-input bg-card px-4 py-3 text-card-foreground outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="What product are you interested in?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
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
    </div>
  );
};

export default Contact;
