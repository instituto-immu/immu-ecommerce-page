import HeroSection from "@immu/components/sections/HeroSection";
import { carouselSlides, features, projectDescription, testimonials } from "./data/homeData";
import AboutSection from "@immu/components/sections/AboutSection";
import ProductsSection from "@immu/components/sections/ProductsSection";
import TestimonialsSection from "@immu/components/sections/TestimonialsSection";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
            {/* Hero Carousel */}
            <HeroSection slides={carouselSlides} />

            {/* About the Project */}
            <AboutSection 
              title={projectDescription.title}
              text1={projectDescription.text1}
              text2={projectDescription.text2}
              features={features}
            />

            {/* Products Section */}
            <ProductsSection />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={testimonials} />
            
        </main>
      </div>
    </>
  );
}

