import React from 'react';

const DrinksSection = () => {
  return (
    <section className="two-column-text-image">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row-reverse">
          <div className="w-full sm:w-1/2 bg-slate px-8 py-16 flex items-center justify-center">
            <div className="text-center text-nomad-white">
              <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">Drinks</h1>
              
              <div className="space-y-6 max-w-lg">
                <p className="text-base leading-relaxed">
                  Our beverage list has been curated to highlight the very best of Australian and international produce, and is carefully designed to ensure your dining experience is unforgettable. We showcase small, up and coming producers, as well as some of the country's most iconic wine vignerons. We take pride in showcasing Australian wines and spirits primarily, with organic and sustainable produce taking priority.
                </p>
                
                <div className="space-y-4 mt-8">
                  <p>
                    <a 
                      href="/wine-list.pdf" 
                      target="_blank" 
                      rel="noopener"
                      className="font-bold text-nomad-white hover:underline tracking-wide"
                    >
                      WINE LIST
                    </a>
                  </p>
                  <p>
                    <a 
                      href="/bar-list.pdf" 
                      target="_blank" 
                      rel="noopener"
                      className="font-bold text-nomad-white hover:underline tracking-wide"
                    >
                      BAR LIST
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2">
            <div 
              className="min-h-[400px] sm:min-h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://nomad.melbourne/wp-content/uploads/2024/12/Nomad_SpringMenu_2024_Low_075.jpg)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;