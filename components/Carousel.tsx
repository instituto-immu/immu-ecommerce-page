"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Headline from './Headline';
import OverlayBunner from './OverlayBunner';

type CarouselProps = {
  slides: {
    image: string | StaticImageData;
    title?: string;
    subtitle?: string;
    id: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
};

const Carousel = ({ slides, autoPlay = true, interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const slideInterval = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative h-[450px] md:h-[828px] overflow-hidden group">
      <div
        className="w-full h-full bg-cover bg-center duration-500 transition-all ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${slides[currentIndex].image})`,
        }}
      >
        {/* Slider 01 */}
        {slides[currentIndex].id === "01" && 
        <div className='absolute inset-0 flex flex-col justify-center items-center md:items-end md:px-32 text-center md:text-right text-white p-4'>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{slides[currentIndex].title}</h1>
          <p className="text-sm md:text-xl max-w-xl">{slides[currentIndex].subtitle}</p>
        </div>}

        {/* Slider 02 */}
        {slides[currentIndex].id === "02" && 
          <div className='flex flex-col items-end justify-center gap-7 md:gap-0 md:justify-between text-white h-full p-4 md:p-32 '>
            <div className='md:bg-transparent bg-white bg-opacity-20 p-2 md:p-0'>
              <Headline textColor='#b7b1d8' contentText='Conheça nossa linha de perfumes:' textColorSec="text-[#FFDCB3]" />
            </div>
            <OverlayBunner bg='bg-[#78719B]'/>        
          </div>}

          {/* Slider 03 */}
        {slides[currentIndex].id === "03" && 
          <div className='flex flex-col items-end justify-center gap-7 md:gap-0 md:justify-between text-white h-full p-4 md:p-32 '>
            <div className='w-full flex md:justify-end justify-end'>
              <OverlayBunner bg='bg-[#E6C77C]'/>
            </div>

            <div className='md:bg-transparent bg-white bg-opacity-20 p-2 md:p-0'>
              <Headline textColor='#78719B' contentText='Conheça nossa linha de perfumes para casa:' textColorSec="text-[#53532F]"/>
            </div>
          </div>}

      </div>

      {/* Left/Right Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-5 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronLeft size={20} onClick={goToPrevious} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-5 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={20} onClick={goToNext} />
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === slideIndex ? 'bg-white scale-110' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Wave Pattern Overlay */}
      <div className="wave-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="#ffffff"></path>
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
