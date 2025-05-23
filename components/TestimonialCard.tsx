'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { VideoModal } from './VideoModal';
import { VideoIcon, VideoOff } from "lucide-react";

type TestimonialCardProps = {
  image: string | StaticImageData;
  name: string;
  age?: string;
  text: string;
  videoUrl?: string;
};

const TestimonialCard = ({ image, name, age, text, videoUrl }: TestimonialCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <><div className={`bg-[#F0F0F0] h-[32rem] rounded-2xl shadow-lg p-6 flex flex-col 
      items-center justify-between text-center max-w-sm md:transition-transform 
      md:hover:scale-[1.02] md:duration-300 border border-manancial-purple`}>
      {/* Foto Redonda */}
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-manancial-pink shadow-inner">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={300}
          height={300} />
      </div>

      {/* Nome e idade */}
      <h3 className="text-xl font-medium text-gray-800 mb-1">
        {name}{age && <span className="text-manancial-purple text-base">, {age}</span>}
      </h3>

      {/* Texto com ícone de citação */}
      <div className="relative px-4">
        <FaQuoteLeft className="absolute left-0 top-0 text-manancial-purple text-sm" />
        <p className="text-gray-800 italic text-sm leading-relaxed mt-4">
          {text}
        </p>
      </div>

      {/* Link para vídeo */}
      {videoUrl !== '#' ? (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 mt-5 bg-manancial-purple text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-manancial-pink transition-colors"
          >
             <VideoIcon className="w-4 h-4 text-white" /> Assista o vídeo de {name.split(' ')[0]}
          </button>
        </>
      )
    :
      (
        <>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 mt-5 bg-manancial-purple text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-manancial-pink transition-colors"
            >
              <VideoOff className="w-4 h-4 text-white" /> Vídeo de {name.split(' ')[0]} em breve!
            </button>
          </>
      )}

    </div>
    <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl} 
    />
    </>
  );
};

export default TestimonialCard;
