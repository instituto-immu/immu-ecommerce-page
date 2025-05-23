import { useEffect, useState } from "react";

const useCartCount = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCount(storedCart.length);
  };

  useEffect(() => {
    updateCount();

    // Ouve evento personalizado de atualização do carrinho
    const handler = () => updateCount();
    window.addEventListener("cart-updated", handler);

    return () => {
      window.removeEventListener("cart-updated", handler);
    };
  }, []);

  return count;
};

export default useCartCount;
