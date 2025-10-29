import React from 'react';
import { ArrowRightIcon } from './icons/Icons';

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-brand-purple font-semibold">OUR JOURNAL</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Latest News & Articles</h2>
            <p className="text-gray-600 mt-2">Get the latest updates and articles from our team.</p>
          </div>
          <div className="relative mt-4 md:mt-0 w-full md:w-auto">
            <input 
              type="text"
              placeholder="Search for articles..."
              className="border border-gray-300 rounded-lg py-2 pl-4 pr-10 w-full md:w-64 focus:ring-brand-purple focus:border-brand-purple"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row group">
                    <img src="https://images.unsplash.com/photo-1504813531233-9d37b199a27c?q=80&w=2070&auto=format&fit=crop" alt="Seniors exercising" className="w-full md:w-1/2 h-64 md:h-auto object-cover" />
                    <div className="p-8 flex flex-col justify-center">
                        <span className="bg-purple-100 text-brand-purple text-sm font-semibold px-3 py-1 rounded-full self-start mb-4">Wellness</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Benefits of Gentle Exercise for Seniors</h3>
                        <p className="text-gray-600 mb-6">Discover simple and effective exercises that can improve mobility, strength, and overall well-being for older adults.</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Author" className="w-10 h-10 rounded-full mr-3 object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-800">Sophie Moore</p>
                                    <p className="text-sm text-gray-500">Jan 09, 2024</p>
                                </div>
                            </div>
                            <a href="#" className="font-semibold text-brand-purple hover:text-brand-purple-light flex items-center gap-2">
                                Read More <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <img src="https://images.unsplash.com/photo-1599389947888-5a74550375a0?q=80&w=1887&auto=format&fit=crop" alt="Caregiver helping with groceries" className="rounded-lg shadow-lg w-full h-full object-cover max-h-[450px]" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
