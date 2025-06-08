import React from 'react';

const CareersSection = () => {
  return (
    <>
      <section className="two-column-text-image">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 bg-nomad-black px-8 py-16 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light text-nomad-white tracking-wide">Careers</h1>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2">
              <div 
                className="min-h-[400px] sm:min-h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://nomad.melbourne/wp-content/uploads/2021/10/2020-11-14-Nomad-Kitti-Gould-LR-69.jpg)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal py-16">
        <div className="container mx-auto px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <div className="space-y-6 text-nomad-white">
                <p className="text-lg leading-relaxed">
                  NOMAD is always searching for talented individuals to join our team. That team is made up of dedicated, passionate individuals motivated to succeed. In return, we provide a healthy work – life balance, fair and transparent pay, and genuine career opportunities for all staff.
                </p>
                
                <p>
                  <a 
                    href="https://editiongroup.au/careers/" 
                    className="font-bold hover:underline"
                  >
                    View current positions available
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersSection;