import React from 'react';
import { CARTERS_LOGO_BASE64 } from '../constants';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src={CARTERS_LOGO_BASE64} alt="Carters Care Group" className="h-12 mb-4 bg-white p-2 rounded" />
            <p className="text-sm">Providing high-quality and compassionate care for your loved ones. We are dedicated to improving the lives of seniors in our community.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedinIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home Care</a></li>
              <li><a href="#" className="hover:text-white">Special Needs Care</a></li>
              <li><a href="#" className="hover:text-white">Respite Care</a></li>
              <li><a href="#" className="hover:text-white">Companion Care</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full rounded-l-md border-0 py-2 px-3 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-brand-purple" />
              <button type="submit" className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold py-2 px-4 rounded-r-md">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Carters Care Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
