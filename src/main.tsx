import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductList } from "./ui/productList/ProductList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductList />
  </StrictMode>
);
