import React from 'react';

const ReservationsSection = () => {
  return (
    <section className="bg-teal py-16">
      <div className="container mx-auto px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-nomad-white tracking-wide">Reservations</h1>
            
            <div className="space-y-6 text-nomad-white">
              <p className="text-lg">NOMAD Melbourne accepts online reservations for 2 – 18 guests.</p>
              
              <div className="my-8">
                <a 
                  href="https://www.sevenrooms.com/reservations/nomadmelbourne/melbwebsite?venues=nomadmelbourne,reinelarue" 
                  rel="noopener"
                  className="inline-block bg-nomad-white text-nomad-black px-8 py-3 font-bold tracking-wide hover:bg-gray-100 transition-colors"
                >
                  Make a Reservation
                </a>
              </div>
              
              <p className="text-lg">For larger group bookings please enquire here:</p>
              <p>
                <a 
                  href="https://forms.monday.com/forms/bf8bf39e42a51a0f09076b95e4d80374?r=apse2" 
                  target="_blank" 
                  rel="noopener"
                  className="font-bold hover:underline"
                >
                  Large Group enquiry
                </a>
              </p>
              
              <p className="text-lg">For private dining and events information please visit our events page.</p>
              
              <div className="mt-12 text-sm leading-relaxed max-w-3xl mx-auto">
                <p className="font-bold mb-4">ALLERGY DISCLAIMER</p>
                <p>
                  At edition we take dietary requirements & allergies very seriously. While we take steps to minimise risk & safely handle the foods that contain potential allergens, please be advised that cross contamination may occur due to factors beyond our reasonable control. At edition, we make every effort to identify ingredients that may cause allergic reactions for those individuals with food allergies. However we cannot guarantee completely allergy-free meals. This is due to the potential of trace allergens in the working environment & supplied ingredients. Please provide as much information as possible concerning any allergies & dietary requirements in advance of dining with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationsSection;