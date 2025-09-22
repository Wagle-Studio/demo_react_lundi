import { ProductCard } from "../productCard/ProductCard";
import "./productList.css";

export const ProductList = () => {
  const products = [
    {
      title: "Chaussures de sport",
      description:
        "Légères et confortables, idéales pour la course et la salle.",
    },
    {
      title: "Casque audio",
      description: "Son haute qualité avec réduction de bruit active.",
    },
    {
      title: "Sac à dos",
      description: "Résistant à l’eau, parfait pour le travail ou les voyages.",
    },
    {
      title: "Montre connectée",
      description: "Suivi de la santé, notifications et design élégant.",
    },
  ];

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard
              title={product.title}
              description={product.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
