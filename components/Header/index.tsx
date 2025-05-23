"use client";
import { Menu } from 'lucide-react';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@immu/@/components/ui/button';
import logo from '../../assets/logo.png';
import { usePathname } from 'next/navigation';
import DonationModal from '../DonationModal';
import useCartCount from '@immu/app/hooks/useCartCount';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const cartCount = useCartCount();


  const handleButtonDonation = () => [
    setIsModalOpen(true),
    setMobileMenuOpen(false)
  ];

  const linkClass = (path: string) =>
    pathname === path
      ? 'text-manancial-purple font-semibold underline decoration-manancial-purple decoration-2 underline-offset-4'
      : 'text-gray-700 hover:text-manancial-purple hover:underline hover:decoration-manancial-purple hover:decoration-2 hover:underline-offset-4 font-semibold transition-colors';

  return (
    <header className="bg-white bg-opacity-80 sticky top-0 z-30 shadow-sm">
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Instituto Manancial Mãos Unidas"
              width={80}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-6 gap-8">
          <div className='w-full flex gap-6'>
            <Link href="/" className={linkClass('/')}>Início</Link>
            <Link href="/aboutUs" className={linkClass('/aboutUs')}>Saiba &#43;</Link>
            <Link href="/products" className={linkClass('/products')}>Nossos Produtos</Link>
            <Link href="/cart" className="text-gray-700 hover:text-manancial-purple transition-colors relative">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-manancial-pink text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
              </span>
            </Link>
          </div>


          <Button className="bg-manancial-purple hover:bg-manancial-pink text-white" onClick={handleButtonDonation}>
            Quero Doar
          </Button>
        </nav>

        {/* Botão Mobile */}
        <Button
          className="md:hidden text-gray-700 bg-manancial-purple"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className='text-white' />
        </Button>
      </div>

      {/* Navegação Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-manancial-pink font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Início</Link>
            <Link href="/aboutUs" className="text-gray-700 hover:text-manancial-pink font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Saiba &#43;</Link>
            <Link href="/products" className="text-gray-700 hover:text-manancial-pink font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Nossos Produtos</Link>
            <Link href="/cart" className="text-gray-700 hover:text-manancial-pink font-medium transition-colors flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <FaShoppingCart size={20} />
              <span>Carrinho</span>
            </Link>
            <Button className="bg-manancial-purple hover:bg-manancial-pink text-white w-full" onClick={handleButtonDonation}>
              Quero Doar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
