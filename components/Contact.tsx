
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
            <p className="text-brand-purple font-semibold">CONTACT US</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">We'd Love to Hear From You</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-brand-purple p-8 rounded-lg text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-8">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
                <div className="space-y-4">
                    <p><strong>Address:</strong> 123 Main Street, Anytown, AU</p>
                    <p><strong>Email:</strong> contact@carterscaregroup.com.au</p>
                    <p><strong>Phone:</strong> (215) 456 - 1189</p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple" placeholder="example@email.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                        <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple" placeholder="e.g. Pricing" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors">
                        Send message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
