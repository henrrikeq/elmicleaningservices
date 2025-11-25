import React, { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs'; // WhatsApp icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav') && !e.target.closest('button')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // WhatsApp link with prefilled message
  const whatsappLink =
    "https://wa.me/233245754840?text=Hello!%20I%20would%20like%20to%20book%20your%20services.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex:shrink-0">
            <a href="#home" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              LOGO
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['home', 'about', 'services', 'team', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-[18px] text-gray-800 hover:text-gray-600 transition-colors font-medium relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 border-[1.5px] border-[#044eaf] px-6 py-2 text-gray-800 font-semibold hover:bg-[#044eaf] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <BsWhatsapp size={20} />
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-800 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col items-center gap-6 py-4 text-[#044eaf]">
          {['home', 'about', 'services', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-[18px] text-[#044eaf] hover:text-[#044eaf] transition-colors font-medium relative group"
              onClick={closeMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Mobile Book Now Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-[1.5px] border-[#044eaf] px-6 py-2 text-gray-800 font-semibold hover:bg-[#044eaf] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <BsWhatsapp size={20} />
            Book Now
          </a>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-white bg-opacity-50 z-[-1] md:hidden" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
