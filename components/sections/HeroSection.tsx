
import React from 'react';
import Carousel from '../Carousel';
import { StaticImageData } from 'next/image';

type HeroSectionProps = {
  slides: {
    id: string,
    image: string | StaticImageData;
    title?: string;
    subtitle?: string;
  }[];
};

const HeroSection = ({ slides }: HeroSectionProps) => {
  return (
    <section>
      <Carousel slides={slides} />
    </section>
  );
};

export default HeroSection;
