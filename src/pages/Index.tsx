import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import MenuSection from '../components/MenuSection';
import DrinksSection from '../components/DrinksSection';
import ReservationsSection from '../components/ReservationsSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import VouchersSection from '../components/VouchersSection';
import NewsSection from '../components/NewsSection';
import CareersSection from '../components/CareersSection';
import SubscribeSection from '../components/SubscribeSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <IntroSection />
        <div id="menu">
          <MenuSection />
        </div>
        <div id="drinks">
          <DrinksSection />
        </div>
        <div id="reservations">
          <ReservationsSection />
        </div>
        <div id="events">
          <EventsSection />
        </div>
        <div id="contact-us">
          <ContactSection />
        </div>
        <div id="vouchers">
          <VouchersSection />
        </div>
        <div id="whats-happening">
          <NewsSection />
        </div>
        <div id="careers">
          <CareersSection />
        </div>
        <div id="subscribe">
          <SubscribeSection />
        </div>
      </main>
    </div>
  );
};

export default Index;