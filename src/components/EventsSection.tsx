import React from 'react';

const EventsSection = () => {
  return (
    <>
      <div className="h-4 bg-gray-200" />
      
      <section className="two-column-text-image">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row-reverse">
            <div className="w-full sm:w-1/2 bg-slate px-8 py-16 flex items-center justify-center">
              <div className="text-center text-nomad-white">
                <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">Private Dining & Events</h1>
                
                <div className="space-y-6 max-w-lg">
                  <p className="text-base leading-relaxed">
                    The Wine Room is an intimate private dining space that can accommodate up to 10 guests seated on one table. This exclusive setting is perfect for intimate lunches and celebratory dinners.
                  </p>
                  
                  <p>
                    <a 
                      href="/private-dining.pdf" 
                      target="_blank" 
                      rel="noopener"
                      className="font-bold hover:underline"
                    >
                      Private Dining & Event Information
                    </a>
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    For exclusive hire of the entire venue we seat up to 75 guests in our main dining room.
                  </p>
                  
                  <p>
                    <a 
                      href="https://forms.monday.com/forms/bf8bf39e42a51a0f09076b95e4d80374?r=apse2" 
                      target="_blank" 
                      rel="noopener"
                      className="font-bold hover:underline"
                    >
                      Exclusive Venue Hire Enquiry
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2">
              <div 
                className="min-h-[400px] sm:min-h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://nomad.melbourne/wp-content/uploads/2023/11/Georg-Jensen-event-photos-by-Lucas-Dawson-109-1920x1280.jpg)'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;