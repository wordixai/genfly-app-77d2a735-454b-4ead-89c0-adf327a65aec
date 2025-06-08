import React from 'react';
import ImageGallery from './ImageGallery';

const HeroSection = () => {
  const heroImages = [
    'https://nomad.melbourne/wp-content/uploads/2024/12/600g-dry-aged-ribeye-smoked-tallow-gremolata-white-onion-1920x1280.jpg',
    'https://nomad.melbourne/wp-content/uploads/2022/08/PortraitExterior_NomadMelbourne_July2022_High_035-1920x1281.jpg',
    'https://nomad.melbourne/wp-content/uploads/2023/01/14-1920x1282.jpg',
    'https://nomad.melbourne/wp-content/uploads/2022/11/Nomad_InteriorsMelb_05-1-1920x1281.jpg'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="two-column-text-image">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row-reverse">
          <div className="w-full sm:w-1/2 bg-dust px-8 py-16 flex items-center justify-center">
            <div className="text-center text-nomad-black">
              <p className="text-lg mb-2 tracking-wider">WELCOME TO</p>
              <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">NOMAD MELBOURNE</h1>
              
              <div className="space-y-4 mb-12">
                <p>
                  <button 
                    onClick={() => scrollToSection('#reservations')}
                    className="font-bold text-nomad-black hover:underline tracking-wide cursor-pointer bg-transparent border-none"
                  >
                    MAKE A RESERVATION
                  </button>
                </p>
                <p>
                  <a href="/mezze/" className="font-bold text-nomad-black hover:underline tracking-wide">
                    MEZZE LUNCHES
                  </a>
                </p>
                <p>
                  <a href="/truffle-brunch/" className="font-bold text-nomad-black hover:underline tracking-wide">
                    TRUFFLE BRUNCH
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2">
            <ImageGallery 
              images={heroImages} 
              className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;