import React from 'react'
import Icons from "../data/Icons";
const Navbar = ({view,setView,isCartOpen,setIsCartOpen,totalItems,isMobileMenuOpen,setIsMobileMenuOpen}) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setView('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-500 transform group-hover:rotate-180">
                <Icons.Sun className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-gray-900 tracking-tight transition-colors group-hover:text-pink-600">Kanha Ki Chhav</h1>
                <p className="text-[10px] text-pink-600 uppercase tracking-widest font-bold">Divine Adornments</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setView('home')} className={`text-sm font-medium transition-all duration-300 relative group ${view === 'home' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${view === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
              <button onClick={() => setView('shop')} className={`text-sm font-medium transition-all duration-300 relative group ${view === 'shop' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
                Shop Collection
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${view === 'shop' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
              <button onClick={() => setView('about')} className={`text-sm font-medium transition-all duration-300 relative group ${view === 'about' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
                About Us
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${view === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
              <button onClick={() => setView('contact')} className={`text-sm font-medium transition-all duration-300 relative group ${view === 'contact' ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'}`}>
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${view === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button 
                className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors duration-300 transform hover:scale-110"
                onClick={() => setIsCartOpen(true)}
              >
                <Icons.ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-orange-500 text-white text-xs flex items-center justify-center rounded-full font-bold shadow-sm animate-scaleIn">
                    {totalItems}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 text-gray-600 transition-transform active:scale-95"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 animate-fadeInDown origin-top">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Home</button>
              <button onClick={() => { setView('shop'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Shop Collection</button>
              <button onClick={() => { setView('about'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">About Us</button>
              <button onClick={() => { setView('contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar