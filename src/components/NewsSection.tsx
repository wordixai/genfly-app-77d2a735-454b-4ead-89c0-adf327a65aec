import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Pre-Theatre',
      image: 'https://nomad.melbourne/wp-content/uploads/2022/04/IMG_5322-960x960.jpg',
      href: '/pre-theatre/'
    },
    {
      title: 'Mezze Lunches',
      image: 'https://nomad.melbourne/wp-content/uploads/2024/03/076_LunchOffers_NOMAD_Graphic_1x1-960x960.jpg',
      href: '/mezze/'
    },
    {
      title: 'Truffle Brunch',
      image: 'https://nomad.melbourne/wp-content/uploads/2023/06/1x1-1-960x960.jpg',
      href: '/truffle-brunch/'
    },
    {
      title: 'Feasting',
      image: 'https://nomad.melbourne/wp-content/uploads/2023/03/PT_202110_Backgrounds24094-960x960.jpg',
      href: '/feasting/'
    }
  ];

  return (
    <>
      <section className="bg-nomad-white py-16">
        <div className="container mx-auto px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-light mb-4 text-nomad-black tracking-wide">What's happening</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nomad-white pb-8">
        <div className="container mx-auto px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <p className="text-nomad-black">Latest news and stories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nomad-white pb-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <div key={index} className="text-center">
                <a href={item.href} className="block group">
                  <div className="mb-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-light text-nomad-black group-hover:underline">
                    {item.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;