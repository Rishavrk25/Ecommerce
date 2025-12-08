import React from 'react'
import Icons from "../data/Icons";
const Contact = () => {
  return (
    <div>
            <div className="bg-orange-50 py-16 text-center px-4 animate-fadeIn">
              <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 animate-fadeInDown">Get in Touch</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fadeInUp delay-100">Have a question or a custom request? We are here to serve you.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fadeInLeft">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300 focus:shadow-md" placeholder="Enter your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300 focus:shadow-md" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300 focus:shadow-md">
                        <option>General Inquiry</option>
                        <option>Order Status</option>
                        <option>Custom Order Request</option>
                        <option>Wholesale Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300 focus:shadow-md" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                      <Icons.Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8 animate-fadeInRight delay-200">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    <p className="text-gray-600 mb-8">
                      We love hearing from our community of devotees. Feel free to reach out to us through any of the channels below.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-orange-50 hover:shadow-md transition-shadow duration-300 group">
                      <div className="p-3 bg-orange-100 text-orange-600 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                        <Icons.MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Visit Our Workshop</h3>
                        <p className="text-gray-600 text-sm">108 Krishna Colony, Parikrama Marg,<br/> Vrindavan, Uttar Pradesh 281121</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-orange-50 hover:shadow-md transition-shadow duration-300 group">
                      <div className="p-3 bg-pink-100 text-pink-600 rounded-lg group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                        <Icons.Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600 text-sm">namaste@kanhakichhav.com</p>
                        <p className="text-gray-400 text-xs mt-1">We usually reply within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-orange-50 hover:shadow-md transition-shadow duration-300 group">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icons.Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600 text-sm">+91 98765 43210</p>
                        <p className="text-gray-400 text-xs mt-1">Mon - Sat, 9am - 7pm IST</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
  )
}

export default Contact