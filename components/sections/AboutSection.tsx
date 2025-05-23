"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@immu/@/components/ui/button';
import DonationModal from '../DonationModal';

type AboutSectionProps = {
  title: string;
  text1: string;
  text2: string;
  features: {
    id: number;
    image: string | StaticImageData;
  }[];
};

const AboutSection = ({ title, text1, text2, features }: AboutSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonDonation = () => {setIsModalOpen(true)}
  return (
    <section className="py-16 px-4" id='aboutus'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
            <p className="text-gray-600 mb-4 text-xl">{text1}</p>
            <p className="text-gray-600 mb-6 text-xl">{text2}</p>
            <Button className="bg-manancial-purple hover:bg-manancial-pink text-white" onClick={handleButtonDonation}>
              Quero Doar
            </Button>
            <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image 
                src={features[0].image} 
                alt="Mulheres do projeto" 
                className="w-full h-[284px] object-cover rounded-lg shadow-md"
                width={500}
                height={192}
              />
            </div>
            <div>
              <Image 
                src={features[1].image} 
                alt="Arte terapia" 
                className="w-[450px] h-[176px] object-cover rounded-lg shadow-md"
                width={500}
                height={192}
              />
            </div>
            <div>
              <Image 
                src={features[2].image} 
                alt="Artesanato" 
                className="[450px] h-[176px] object-cover rounded-lg shadow-md"
                width={500}
                height={192}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
