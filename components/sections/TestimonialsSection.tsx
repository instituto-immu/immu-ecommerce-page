'use client'
import React, { useRef } from 'react';
import TestimonialCard from '../TestimonialCard';
import { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TestimonialsSectionProps = {
  testimonials: {
    id: number;
    image: string | StaticImageData;
    name: string;
    age: string;
    text: string;
    videoUrl: string;
  }[];
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-5 relative"id='testimunial' >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Depoimentos de nossas mulheres
        </h2>

        {/* Botões de navegação */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-manancial-purple  shadow-md hover:bg-manancial-pink"
        >
          <ChevronLeft color='white'/>
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-manancial-purple  shadow-md hover:bg-manancial-pink"
        >
          <ChevronRight color='white'/>
        </button>

        {/* Carrossel horizontal */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 snap-center w-[300px] md:w-[400px]"
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                age={testimonial.age}
                text={testimonial.text}
                videoUrl={testimonial.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
