import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Menu', href: '#menu' },
    { label: 'Drinks', href: '#drinks' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact-us' },
    { label: 'Vouchers', href: '#vouchers' },
    { label: 'What\'s Happening', href: '#whats-happening' },
    { label: 'Careers', href: '#careers' },
    { label: 'Subscribe', href: '#subscribe' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nomad-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-nomad-white text-xl lg:text-2xl font-light tracking-widest">
              NOMAD MELBOURNE
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-nomad-white hover:text-gray-300 transition-colors text-sm tracking-wide uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-nomad-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-nomad-black/95 absolute top-16 left-0 right-0 border-t border-gray-700">
            <nav className="py-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-nomad-white hover:bg-gray-800 transition-colors text-sm tracking-wide uppercase"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;