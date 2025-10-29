import React, { useState } from 'react';
import { CARTERS_LOGO_BASE64 } from '../constants';
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-gray border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-brand-purple" />
                <span>contact@carterscaregroup.com.au</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-brand-purple" />
                <span>(215) 456 - 1189</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="hover:text-brand-purple">FB</a>
              <a href="#" className="hover:text-brand-purple">TW</a>
              <a href="#" className="hover:text-brand-purple">IG</a>
              <a href="#" className="hover:text-brand-purple">LI</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="#">
                <img className="h-12 w-auto" src={CARTERS_LOGO_BASE64} alt="Carters Care Group" />
              </a>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-purple font-medium">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="bg-brand-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors"
              >
                Get a Quote
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#"
                className="block w-full text-center bg-brand-purple text-white mt-4 px-6 py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors"
              >
                Get a Quote
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
