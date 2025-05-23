'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ProductContextProps, IProducts, YampiProduct } from './interfaces';

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products?include=skus,images,categories");
        if (!response.ok) throw new Error("Ops! Algo deu errado. Recarregue a página!");

        const data: YampiProduct[] = await response.json();

        const products: IProducts[] = data.map((item) => {
          const variations = item.skus?.data?.[0]?.variations || [];
          const essence = variations.find((v) => v.name === "ESSÊNCIA")?.value || "";
          const amount = variations.find((v) => v.name === "MEDIDA")?.value || "";

          // Capturando todas as imagens
          const images = item.images?.data?.map(image => image.thumb.url) || [];

          return {
            id: item.id,
            title: item.name,
            images, // Passando o array de imagens
            price: item.skus?.data?.[0]?.price_sale?.toFixed(2) || "0.00",
            amount,
            essence,
            category: item.categories.data[0]?.name || "",
          };
        });

        setProducts(products);

      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts deve ser usado dentro de um ProductProvider");
  return context;
};
