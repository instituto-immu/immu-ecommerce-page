'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICartProduct, getCart, clearCart, removeFromCart, incrementQuantity, decrementQuantity } from '../hooks/useCart';
import { Button } from '@immu/@/components/ui/button';
import { CheckoutModal } from '@immu/components/CheckoutModal';


const CartPage = () => {
    const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      updateCart();
    }, []);

    const updateCart = () => {
      const updatedCart = getCart();
      setCartItems(updatedCart);
    };

    const handleClearCart = () => {
      clearCart();
      setCartItems([]);
    };

    const handleRemoveItem = (id: number) => {
      removeFromCart(id);
      updateCart();
    };

    const handleIncrease = (id: number) => {
      incrementQuantity(id);
      updateCart();
    };

    const handleDecrease = (id: number) => {
      decrementQuantity(id);
      updateCart();
    };

    const totalPrice = cartItems
      .reduce(
        (total, item) => total + parseFloat(item.price) * (item.quantity || 1),
        0
      )
      .toFixed(2);

      const cartCheckout = () => {
        if (cartItems.length === 0) return;
        setIsModalOpen(true);
      };
      

    return (
      <div className="container mx-auto px-4 py-8 flex flex-1 flex-col min-h-[23.2rem]">
        <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center border-b pb-4 gap-4">
                <div className="w-24 h-24 relative shrink-0">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">{item.category} - {item.essence}</p>
                  <p className="text-gray-600">Quantidade: {item.quantity}</p>
                  <div className="flex items-center mt-2 space-x-2">
                  <button
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity === 1}
                      className={`px-2 py-1 rounded transition-colors ${
                          item.quantity === 1
                          ? 'bg-gray-100 text-gray-400 cursor-default'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      >
                      -
                  </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="px-2 py-1 bg-red-200 text-red-700 rounded hover:bg-red-300"
                    >
                      Remover
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    R$ {(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Limpar Carrinho
              </button>
              <div className="text-xl font-bold">Total: R$ {totalPrice}</div>
            </div>

            <div className="mt-4 text-right">
              <Button
                onClick={cartCheckout}
                className="bg-manancial-purple text-white px-6 py-3 rounded hover:bg-manancial-pink transition-colors"
              >
                Finalizar Compra
              </Button>
            </div>

            {isModalOpen && (
              <CheckoutModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cartItems={cartItems}
                totalPrice={totalPrice}
            />
            )}
          </div>
        )}
      </div>
    );
};

export default CartPage;
