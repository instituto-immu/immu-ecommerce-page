import { ProductCardProps } from "@immu/types/product";

export const addToCart = (product: ProductCardProps) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };
  