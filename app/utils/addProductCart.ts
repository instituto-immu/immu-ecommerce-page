import { IProducts } from "@immu/contexts/interfaces";
import { addToCart } from "../hooks/useCart";

export const handleAddToCart = (product: IProducts) => {
    addToCart(product);
};