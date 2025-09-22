import { Button } from "../button/Button";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  description: string;
}

export const ProductCard = ({ title, description }: ProductCardProps) => {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Button
        name="Je suis un bouton primaire"
        variant="primary"
        disabled={true}
        size="large"
      />
      <Button name="Je suis un bouton secondaire" variant="secondary" />
    </div>
  );
};
