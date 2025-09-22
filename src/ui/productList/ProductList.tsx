import type { Product } from "../../core/CoreTypes";
import { ProductCard } from "../productCard/ProductCard";
import "./productList.css";

interface ProductListProps {
  products: Product[];
}

// Composant en charge de créer la liste des produits
// Idée : pourrait par exemple prendre en charge les filtres et tries des produits
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="product-list">
      {products.map((product, index) => (
        <li key={`product-list-item-${index}`}>
          <ProductCard
            title={product.title}
            description={product.description}
          />
        </li>
      ))}
    </ul>
  );
};
