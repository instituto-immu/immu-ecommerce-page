'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@immu/@/components/ui/button';
import { Card, CardContent } from '@immu/@/components/ui/card';
import { useProducts } from '@immu/contexts/ProductContext';
import { addToCart } from '@immu/app/hooks/useCart';


export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { products, loading, error } = useProducts();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBack = () => router.push('/products');

  const handleAddToCart = () => {
    if (!product) return;
    const itemToAdd = {
      ...product,
      quantity,
    };
    addToCart(itemToAdd);
    router.push('/cart'); // redireciona para o carrinho após adicionar
  };

  if (loading) return <div className="text-center py-10">Carregando...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-10">Produto não encontrado.</div>;

  const totalPrice = (parseFloat(product.price) * quantity).toFixed(2);

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagens */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded border-2 ${
                  selectedImage === img ? 'border-manancial-purple' : 'border-transparent'
                } overflow-hidden`}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>

          <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={selectedImage || product.images[0]}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Informações do Produto */}
        <Card className="flex flex-col justify-between">
          <CardContent className="p-6 space-y-6">
            <div>
              <span className="px-2 py-1 bg-manancial-light text-manancial-purple text-xs rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
              <p className="text-sm text-gray-600 mt-2">Essência: {product.essence}</p>
              <p className="text-sm text-gray-600">Quantidade em estoque: {product.amount}</p>
            </div>

            <div className="text-2xl font-bold text-manancial-purple">
              Total: R$ {totalPrice}
            </div>

            {/* Seletor de Quantidade */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Quantidade:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className={`px-3 py-1 text-lg font-bold ${
                    quantity <= 1 ? 'text-gray-400 cursor-not-allowed opacity-50' : 'text-gray-600 hover:text-black'
                  }`}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-12 text-center outline-none"
                />
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-lg font-bold text-gray-600 hover:text-black"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="w-full sm:w-auto bg-manancial-purple hover:bg-manancial-pink text-white"
                onClick={handleAddToCart}
              >
                Adicionar ao Carrinho
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white"
                onClick={handleBack}
              >
                Produtos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
