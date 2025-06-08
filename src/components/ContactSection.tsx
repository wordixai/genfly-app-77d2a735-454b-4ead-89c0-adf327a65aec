import React from 'react';

const ContactSection = () => {
  return (
    <>
      <div className="h-4 bg-gray-200" />
      
      <section className="bg-teal py-16">
        <div className="container mx-auto px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-light mb-8 text-nomad-white tracking-wide">Contact Us</h1>
              
              <div className="space-y-6 text-nomad-white">
                <p className="italic">Closed the King's Birthday Public Holiday, Monday 9th June.</p>
                <p>We are open 7 days a week.</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Lunch</p>
                    <p>Wednesday – Sunday</p>
                    <p>12pm – 2pm</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Dinner</p>
                    <p>Monday – Sunday</p>
                    <p>5.00pm – late</p>
                  </div>
                </div>
                
                <p className="text-sm">A 10% surcharge is applicable Sundays & a 15% surcharge applies on Public Holidays.</p>
                
                <div className="space-y-2 mt-8">
                  <p>
                    <a href="tel:+61292803395" className="hover:underline">+61 2 9280 3395</a>
                  </p>
                  <p>
                    <a href="mailto:eat@nomad.melbourne" className="hover:underline">eat@nomad.melbourne</a>
                  </p>
                  <p>
                    <a href="https://goo.gl/maps/GP9uszQ9r5TEVs429" className="hover:underline">
                      187 Flinders Lane, Melbourne, VIC 3000
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;