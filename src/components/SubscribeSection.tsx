import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="bg-nomad-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-nomad-black tracking-wide">Subscribe</h1>
            
            <div className="space-y-6 text-nomad-black">
              <p className="text-lg leading-relaxed">
                To stay in the know on our special events, menu updates & other exciting news, sign up to our mailing list. It's where we share our best news!
              </p>
              
              <p>
                <a 
                  href="https://www.sevenrooms.com/explore/nomadmelbourne/subscription" 
                  target="_blank" 
                  rel="noopener"
                  className="font-bold hover:underline"
                >
                  Subscribe
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;