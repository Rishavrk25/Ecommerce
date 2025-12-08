import React from 'react'
import Icons from "../data/Icons";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="animate-fadeInUp delay-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white">
                  <Icons.Sun className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl font-bold">Kanha Ki Chhav</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Dedicated to bringing the most exquisite and loving attire for your Laddu Gopal. Every stitch is a prayer.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors transform hover:rotate-12"><Icons.Instagram className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors transform hover:-rotate-12"><Icons.Facebook className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="animate-fadeInUp delay-200">
              <h3 className="font-serif text-lg mb-6 text-orange-400">Shop</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => { setView('shop'); setActiveCategory('Festive') }} className="hover:text-white transition-colors hover:translate-x-2 inline-block">Festive Collection</button></li>
                <li><button onClick={() => { setView('shop'); setActiveCategory('Daily') }} className="hover:text-white transition-colors hover:translate-x-2 inline-block">Daily Wear</button></li>
                <li><button onClick={() => { setView('shop'); setActiveCategory('Winter') }} className="hover:text-white transition-colors hover:translate-x-2 inline-block">Winter Sets</button></li>
                <li><button onClick={() => { setView('shop'); setActiveCategory('All') }} className="hover:text-white transition-colors hover:translate-x-2 inline-block">Accessories</button></li>
              </ul>
            </div>

            <div className="animate-fadeInUp delay-300">
              <h3 className="font-serif text-lg mb-6 text-orange-400">Help</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block">Shipping Policy</a></li>
                <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors hover:translate-x-2 inline-block">Returns & Exchanges</button></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block">Size Guide</a></li>
                <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors hover:translate-x-2 inline-block">Track Order</button></li>
              </ul>
            </div>

            <div className="animate-fadeInUp delay-500">
              <h3 className="font-serif text-lg mb-6 text-orange-400">Contact Us</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3 group">
                  <Icons.Mail className="w-4 h-4 text-gray-500 group-hover:text-pink-500 transition-colors" />
                  <span className="group-hover:text-white transition-colors">namaste@kanhakichhav.com</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Icons.Phone className="w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
                  <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
                </li>
                <li className="text-xs text-gray-500 mt-4">
                  Vrindavan, Uttar Pradesh, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 animate-fadeIn delay-500">
            <p>&copy; 2024 Kanha Ki Chhav. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ for Krishna</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer