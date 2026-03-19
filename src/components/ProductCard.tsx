import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
}

const ProductCard = ({ image, title, description, price }: ProductCardProps) => (
  <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="font-heading font-semibold text-card-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
      <p className="mt-2 font-heading font-bold text-foreground">{price}</p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <MessageCircle className="h-4 w-4" />
        Enquire Now
      </a>
    </div>
  </div>
);

export default ProductCard;
