import React from 'react';

const VouchersSection = () => {
  return (
    <section className="bg-slate py-16">
      <div className="container mx-auto px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-nomad-white tracking-wide">Gift Vouchers</h1>
            
            <div className="mb-8">
              <img 
                src="https://nomad.melbourne/wp-content/uploads/2025/01/Voucher-image-1-resized.jpg" 
                alt="Gift Voucher"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p>
              <a 
                href="https://app.gift-it.com.au/edition/promo/give-and-get-more-eofy-2025" 
                target="_blank" 
                rel="noopener"
                className="font-bold text-nomad-white hover:underline"
              >
                Purchase a Gift Voucher
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VouchersSection;