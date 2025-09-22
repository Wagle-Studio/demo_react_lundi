import { Header } from "./ui/header/Header";
import { ProductList } from "./ui/productList/ProductList";
import { productsData } from "./fakeData";

export const App = () => {
  // Exercice only - préférez récupérer les données via une API par ex
  const data = productsData;

  return (
    <>
      <Header />
      <ProductList products={data} />
    </>
  );
};
