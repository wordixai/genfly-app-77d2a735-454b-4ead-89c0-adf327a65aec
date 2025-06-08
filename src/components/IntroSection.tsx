import React from 'react';

const IntroSection = () => {
  return (
    <section className="bg-dust py-16">
      <div className="container mx-auto px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            <p className="text-lg text-nomad-black leading-relaxed mb-6">
              We believe some of the world's finest produce is grown here in Australia, even more so in Greater Victoria.
            </p>
            <p className="text-lg text-nomad-black leading-relaxed mb-6">
              We have sourced produce from local growers who share that same belief. Our food is inspired by our travels through Spain, Morocco and the Middle East and cooked with fire and smoke.
            </p>
            <p className="text-lg text-nomad-black leading-relaxed">
              We look forward to welcoming you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;