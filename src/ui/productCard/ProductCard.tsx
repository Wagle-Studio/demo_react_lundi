import { Button } from "../button/Button";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  description: string;
}

// Composant en charge de créer la carte d'un produit
// Idée : pourrait adopter plusieurs mise en forme, une carte classique et une carte highlight
export const ProductCard = ({ title, description }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="product-card__actions">
        <Button name="Ajouter aux favoris" variant="primary" disabled={true} />
        <Button name="Ajouter au panier" variant="secondary" />
      </div>
    </div>
  );
};
