'use client'
import {
  gmail,
  instagram,
  logoIMMUHeader,
  whatsapp
} from "@immu/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DonationModal from "../DonationModal";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleButtonDonation = () => {setIsModalOpen(true)}

  return (
    <footer className="bg-[#2D2D2A] text-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Seção 1: Logo e descrição */}
        <div>
          <Image alt="Logo IMMU" src={logoIMMUHeader} width={180} className="mb-4" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Somos uma iniciativa que apoia mulheres em situação de vulnerabilidade, oferecendo apoio, acolhimento e oportunidades para uma vida melhor.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://www.instagram.com/institutomanancial_maos_unidas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <Image src={instagram} alt="Instagram" width={22} />
            </Link>
            <Link
              href="mailto:immuloja.digital@gmail.com"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <Image src={gmail} alt="Gmail" width={22} />
            </Link>

            <Link
              href="https://wa.me/+5527992575998" // Substitua com o número real, sem espaços ou traços
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition"
            >
              <Image src={whatsapp} alt="WhatsApp" width={22} />
            </Link>
          </div>
        </div>

        {/* Seção 2: Navegação */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-zinc-500 pb-2 mb-4">
            Sobre o IMMU
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/aboutUs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-manancial-pink transition"
              >
                Conheça o IMMU
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                rel="noopener noreferrer"
                className="hover:text-manancial-pink transition"
              >
                Venha fazer parte dessa iniciativa
              </a>
            </li>
            <li>
              <a
                href="#testimunial"
                className="hover:text-manancial-pink transition"
              >
                Depoimentos
              </a>
            </li>
            <p className="hover:text-manancial-pink transition cursor-pointer" onClick={handleButtonDonation}>
              Como ajudar
            </p>
            <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </ul>
        </div>

        {/* Seção 3: Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-zinc-500 pb-2 mb-4">
            Contato
          </h3>
          <ul className="text-sm space-y-3 text-zinc-400">
            <li>
              <span className="block">Email: institutomanancial_maos_unidas@gmail.com</span>
            </li>
            <li>
              <span className="block">WhatsApp: +55 (27) 99257-5998</span>
            </li>
            <li>
              <span className="block">Endereço: Rua São Lucas, nº 16, Bairro das Laranjeiras Jacraípe, Serra - ES, CEP 29173-518</span>
            </li>
            <li>
              <span className="block">CNPJ: 46.865.616/0001-26</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-zinc-600 mt-10 py-4 text-center text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} Instituto Manancial Mãos Unidas — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
