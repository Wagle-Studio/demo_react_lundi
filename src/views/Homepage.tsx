import { ProductList } from "./../ui/productList/ProductList";
import { productsData } from "./../fakeData";
import { useState } from "react";

export const Homepage = () => {
  const data = productsData; // Fausses données produits

  const [cartItems, setCartItems] = useState<string[]>(["", "", ""]);

  const addCarItems = (itemName: string) => {
    setCartItems([...cartItems, itemName]);
  };

  return (
    <>
      <ProductList products={data} addCarItems={addCarItems} />
    </>
  );
};
