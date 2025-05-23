"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@immu/@/components/ui/button';
import { Card, CardContent } from '@immu/@/components/ui/card';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@immu/@/components/ui/navigation-menu';
import { Search, ShoppingCart } from 'lucide-react';
import { useProducts } from '@immu/contexts/ProductContext';
import Link from 'next/link';
import { handleAddToCart } from '../utils/addProductCart';
import { SidebarCart } from '@immu/components/SidebarCart';

const priceRanges = [
  "Até R$ 50",
  "R$ 50 - R$ 100",
  "R$ 100 - R$ 200",
  "Acima de R$ 200"
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { products, error, loading } = useProducts();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const categories = Array.from(new Set(products.map((product) => product.category)));

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const expandedProducts = products;

  const filteredProducts = expandedProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    const matchesPrice = selectedPriceRange
      ? (selectedPriceRange === "Até R$ 50" && parseFloat(product.price) <= 50) ||
        (selectedPriceRange === "R$ 50 - R$ 100" && parseFloat(product.price) > 50 && parseFloat(product.price) <= 100) ||
        (selectedPriceRange === "R$ 100 - R$ 200" && parseFloat(product.price) > 100 && parseFloat(product.price) <= 200) ||
        (selectedPriceRange === "Acima de R$ 200" && parseFloat(product.price) > 200)
      : true;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedPriceRange(null);
    setSearchTerm('');
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p className='flex items-center justify-center'>Carregando...</p>;
  if (error) return <div>{error}</div>;

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex flex-col">
       {/* Navbar lateral (Sidebar) */}
       <SidebarCart isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Filtros - Adicionado um botão para abrir os filtros no mobile */}
          <div className="flex justify-between items-center mb-6 flex-wrap">
            <Button
              variant="outline"
              onClick={clearFilters}
              className="text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white mb-4 sm:mb-0"
            >
              Ver todos os produtos
            </Button>

            <div className="flex space-x-4 mb-4 sm:mb-0">
              {/* Botão para abrir filtros no mobile */}
              <Button
                onClick={() => document.getElementById('filters')?.classList.toggle('hidden')}
                variant="outline"
                className="text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white md:hidden"
              >
                Filtros
              </Button>
            </div>

            {/* Filtros - versão mobile em um dropdown */}
            <div id="filters" className="hidden sm:flex justify-between w-full md:w-auto">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-white hover:bg-gray-100">Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {categories.map((category) => (
                          <li key={category} className="hover:bg-manancial-light p-2 rounded-md">
                            <NavigationMenuLink asChild>
                              <button
                                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-manancial-pink w-full text-left"
                              >
                                {category}
                              </button>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-white hover:bg-gray-100">Preço</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {priceRanges.map((range) => (
                          <li key={range} className="hover:bg-manancial-light p-2 rounded-md">
                            <NavigationMenuLink asChild>
                              <button
                                onClick={() => setSelectedPriceRange(range === selectedPriceRange ? null : range)}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-manancial-pink w-full text-left"
                              >
                                {range}
                              </button>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Campo de busca no mobile */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-manancial-purple focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Grid de produtos */}
          <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {currentProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden group">
                  {/* Usando a primeira imagem do array de imagens */}
                  <Image
                    src={product.images[0]} // A primeira imagem do array
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    width={300}
                    height={300}
                  />
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white text-manancial-purple hover:bg-manancial-pink hover:text-white border-none"
                      onClick={() => {
                        handleAddToCart(product);
                        toggleSidebar();
                      }}
                    >
                      <ShoppingCart size={18} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-manancial-light text-manancial-purple text-xs rounded-full">
                      {product.category || "Categoria"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-manancial-purple font-bold text-xl">
                      R$ {parseFloat(product.price).toFixed(2)}
                    </span>

                    <Link href={`/products/${product.id}`}>
                      <Button
                        variant="outline"
                        className="text-manancial-purple border-manancial-purple hover:bg-manancial-purple hover:text-white transition-colors"
                      >
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="mr-4 text-manancial-purple bg-transparent hover:bg-transparent border-none"
            >
              Anterior
            </Button>
            <span className="self-center text-manancial-purple font-medium">
              Página {currentPage} de {Math.ceil(filteredProducts.length / productsPerPage)}
            </span>
            <Button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
              className="mr-4 text-manancial-purple bg-transparent hover:bg-transparent border-none"
            >
              Próxima
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
