'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCart } from '@immu/app/hooks/useCart';
import { Button } from '@immu/@/components/ui/button';
import Link from 'next/link';

interface SidebarCartProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function SidebarCart({ isOpen, toggleSidebar }: SidebarCartProps) {
    const cartItems = getCart();
    const [showSidebar, setShowSidebar] = useState(false);

    // Aparece com delay depois do fundo escuro
    useEffect(() => {
        if (isOpen) {
            const timeout = setTimeout(() => setShowSidebar(true), 150); // espera 150ms antes de mostrar a sidebar
            return () => clearTimeout(timeout);
        } else {
            setShowSidebar(false); // oculta imediatamente ao fechar
        }

    }, [isOpen]);

    const totalPrice = cartItems
        .reduce((total, item) => total + parseFloat(item.price) * (item.quantity || 1), 0)
        .toFixed(2);

    return isOpen ? (
        
        <div className="fixed inset-0 z-40">
        {/* Camada escura que aparece imediatamente */}
        <div
            className="absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-150"
            onClick={toggleSidebar}
        />

        {/* Sidebar com atraso na exibição */}
        <div
            className={`absolute top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            showSidebar ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Carrinho</h2>
            <button onClick={toggleSidebar} className="text-xl font-bold">
                x
            </button>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
            {cartItems.length === 0 ? (
                <p>Nada no carrinho</p>
            ) : (
                <>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-4 border-b py-2">
                        <div className="w-16 h-16 relative">
                            <Image
                                src={item.images[0]}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"   
                                className="rounded"
                            />
                        </div>

                        <div className="flex-1">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">
                                R$ {(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
                
                <div className="flex justify-between mt-4 font-semibold">
                    <p>Total:</p>
                    <p>R$ {totalPrice}</p>
                </div>
                </>
            )}

            <Link href="/cart">
                <Button className='mt-8'>Carrinho de compras</Button>
            </Link>
            </div>

        </div>
        </div>
    ) : null;
}
