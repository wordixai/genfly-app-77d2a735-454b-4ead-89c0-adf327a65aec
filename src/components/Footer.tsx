import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nomad-black text-nomad-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-light mb-4 tracking-wide">CONTACT</h3>
            <div className="space-y-2 text-sm">
              <p>187 Flinders Lane</p>
              <p>Melbourne, VIC 3000</p>
              <p className="mt-4">
                <a href="tel:+61292803395" className="hover:text-gray-300">
                  +61 2 9280 3395
                </a>
              </p>
              <p>
                <a href="mailto:eat@nomad.melbourne" className="hover:text-gray-300">
                  eat@nomad.melbourne
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-light mb-4 tracking-wide">HOURS</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Wednesday – Sunday</p>
                <p>12pm – 2pm</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Dinner</p>
                <p>Monday – Sunday</p>
                <p>5.00pm – late</p>
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-light mb-4 tracking-wide">FOLLOW US</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a 
                href="https://instagram.com/nomadmelbourne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/nomadmelbourne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/nomadmelbourne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <a href="#reservations" className="hover:text-gray-300">
                  Make a Reservation
                </a>
              </p>
              <p>
                <a href="#vouchers" className="hover:text-gray-300">
                  Gift Vouchers
                </a>
              </p>
              <p>
                <a href="#events" className="hover:text-gray-300">
                  Private Events
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xl font-light tracking-widest">NOMAD MELBOURNE</p>
              <p className="text-xs text-gray-400 mt-1">
                Part of Edition Group
              </p>
            </div>
            
            <div className="text-center md:text-right text-xs text-gray-400">
              <p>&copy; {new Date().getFullYear()} Nomad Melbourne. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
                <a href="/terms" className="hover:text-gray-300">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;