import React from 'react';
import ImageGallery from './ImageGallery';

const MenuSection = () => {
  const menuImages = [
    'https://nomad.melbourne/wp-content/uploads/2022/09/PT_20220524_Nomad_Melbourne28360-1920x1280.jpg',
    'https://nomad.melbourne/wp-content/uploads/2024/12/Market-fish-saffron-potatoes-runner-beans-shellfish-sauce-1280x1920.jpg',
    'https://nomad.melbourne/wp-content/uploads/2022/08/Zucchini_flowers_01-1920x1302.jpg'
  ];

  return (
    <>
      <section className="two-column-text-image">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 bg-nomad-black px-8 py-16 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-light text-nomad-white tracking-wide">Menu</h1>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2">
              <ImageGallery 
                images={menuImages} 
                className="min-h-[400px] sm:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nomad-black text-nomad-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-center mb-6">SNACKS</h3>
              <div className="space-y-3 text-sm lg:text-base leading-relaxed">
                <p>Oysters of the day, our Worcestershire <sup>GF DF H</sup> <em className="italic">7/42/82</em></p>
                <p>Smoked king salmon basturma, apple, salmon roe <sup>GF H</sup> <em className="italic">9ea</em></p>
                <p>Seared kangaroo cracker, rose harissa, beetroot <sup>DF</sup> <em className="italic">9ea</em></p>
                <p>Wood fired flatbread, our za'atar <sup>DF V H</sup> <em className="italic">13</em></p>
              </div>

              <h3 className="text-2xl font-light text-center mb-6 mt-12">SMALLS</h3>
              <div className="space-y-3 text-sm lg:text-base leading-relaxed">
                <p>NOMAD charcuterie selection <sup>GF</sup> <em className="italic">21/42</em></p>
                <p>Pumpkin hummus, fried chickpeas, Isot pepper <sup>DF H</sup> <em className="italic">13</em></p>
                <p>Burrata, salsa verde, castelfranco, candied walnuts <sup>GF H</sup> <em className="italic">29</em></p>
                <p>Bluefin tuna escabeche, orange, saffron <sup>DF GF H</sup> <em className="italic">36</em></p>
                <p>Hawkesbury River school prawns, garlic chive mayonnaise <sup>DF GF H</sup> <em className="italic">15</em></p>
                <p>Cauliflower blossom, truffle honey, pecorino <sup>GF</sup> <em className="italic">22</em></p>
              </div>

              <h3 className="text-2xl font-light text-center mb-6 mt-12">WOODFIRE</h3>
              <div className="space-y-3 text-sm lg:text-base leading-relaxed">
                <p>Cipollini onion & muscatel tarte tatin, goat's curd <em className="italic">34</em></p>
                <p>Wood grilled cuttlefish, creamed corn, charcuterie xo <sup>GF</sup> <em className="italic">32</em></p>
                <p>Great Ocean Duck kofta, salca butter, yoghurt, dill <sup>GF</sup> <em className="italic">28</em></p>
                <p>Market fish, saffron potatoes, erbette, shellfish sauce <sup>GF</sup> <em className="italic">MP</em></p>
                <p>Charcoal roast chicken, harissa, toum, guindilla <sup>GF H</sup> <em className="italic">46</em></p>
                <p>House lamb sausage, peperonata, anchovy, labneh <sup>GF</sup> <em className="italic">36</em></p>
                <p>Dry aged pork cutlet, sour cherry agrodolce <sup>GF DF</sup> <em className="italic">53</em></p>
                <p>600g dry aged ribeye, smoked tallow gremolata, white onion <sup>GF DF H</sup> <em className="italic">175</em></p>
              </div>

              <h3 className="text-2xl font-light text-center mb-6 mt-12">VEGETABLES</h3>
              <div className="space-y-3 text-sm lg:text-base leading-relaxed">
                <p>Wood fired eggplant, masala, buttermilk, wild greens <sup>H</sup> <em className="italic">24</em></p>
                <p>Wood roasted carrots, pilpelchuma, sunflower <sup>GF DF V H</sup> <em className="italic">17</em></p>
                <p>Fried potatoes, hawaij butter, coriander <sup>GF H</sup> <em className="italic">14</em></p>
                <p>Local farm leaves, sherry vinaigrette, pine nuts <sup>GF DF V H</sup> <em className="italic">14</em></p>
              </div>

              <h3 className="text-2xl font-light text-center mb-6 mt-12">DESSERTS</h3>
              <div className="space-y-3 text-sm lg:text-base leading-relaxed mb-8">
                <p>Medjool dates, pecan, dark chocolate <sup>V GF DF H</sup> <em className="italic">9</em></p>
                <p>Orange blossom & passionfruit caramel "magnum" <sup>GF H</sup> <em className="italic">14</em></p>
                <p>Green apple & sorrel granita, coconut, jasmine <sup>GF DF H</sup> <em className="italic">16</em></p>
                <p>Olive oil ice cream sandwich, halva, pistachio, honey <sup>H</sup> <em className="italic">25</em></p>
                <p>Roasted rice panna cotta, strawberries, elderflower <em className="italic">24</em></p>
              </div>

              <div className="text-xs text-gray-300 mt-8">
                <p>V – Vegan GF – Gluten Free DF – Dairy Free H – Halal</p>
                <p className="mt-4 italic">
                  *** A 10% surcharge is applicable Sundays. A 15% surcharge applies on Public Holidays. 
                  Menus subject to change. All set menus are for a minimum of 2 diners. Most allergies and 
                  dietary requirements can be accommodated with advance notice.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-center mb-2">EXPRESS</h3>
                <h3 className="text-2xl font-light text-center mb-6">$90pp for the table to share</h3>
                <div className="space-y-2 text-sm lg:text-base leading-relaxed">
                  <p>Wood fired flatbread, our za'atar</p>
                  <p>Pumpkin hummus, fried chickpeas, Isot pepper</p>
                  <p>Burrata, salsa verde, castelfranco, candied walnuts</p>
                  <p>Cauliflower blossom, truffle honey, pecorino</p>
                  <p>Market fish, saffron potatoes, erbette, shellfish sauce</p>
                  <p>Local farm leaves, sherry vinaigrette, pine nuts</p>
                  <p>Orange blossom & passionfruit caramel "magnum"</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light text-center mb-2">FEAST</h3>
                <h3 className="text-2xl font-light text-center mb-6">$110pp for the table to share</h3>
                <div className="space-y-2 text-sm lg:text-base leading-relaxed">
                  <p>Wood fired flatbread, our za'atar</p>
                  <p>Pumpkin hummus, fried chickpeas, Isot pepper</p>
                  <p>Burrata, salsa verde, castelfranco, candied walnuts</p>
                  <p>NOMAD charcuterie selection</p>
                  <p>Bluefin tuna escabeche, orange, saffron</p>
                  <p>Cauliflower blossom, truffle honey, pecorino</p>
                  <p>Charcoal roast chicken, harissa, toum, guindilla</p>
                  <p>Fried potatoes, hawaij butter, coriander</p>
                  <p>Olive oil ice cream sandwich, halva, pistachio, honey</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light text-center mb-2">EXPERIENCE</h3>
                <h3 className="text-2xl font-light text-center mb-6">$170pp for the table to share</h3>
                <div className="space-y-2 text-sm lg:text-base leading-relaxed">
                  <p>Oysters of the day, our Worcestershire</p>
                  <p>Smoked king salmon basturma, apple, salmon roe</p>
                  <p>Wood fired flatbread, our za'atar</p>
                  <p>Burrata, salsa verde, castelfranco, candied walnuts</p>
                  <p>NOMAD charcuterie selection</p>
                  <p>Bluefin tuna escabeche, orange, saffron</p>
                  <p>Wood grilled cuttlefish, creamed corn, charcuterie xo</p>
                  <p>600g dry aged ribeye, smoked tallow gremolata, white onion</p>
                  <p>Local farm leaves, sherry vinaigrette, pine nuts</p>
                  <p>Green apple & sorrel granita, coconut, jasmine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;