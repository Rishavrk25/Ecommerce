import React from 'react'
import Icons from "../data/Icons";
import PRODUCTS from "../data/Products";
import TESTIMONIALS from "../data/Testimonials";
import ProductCard from "../Components/ProductCard";
import HERO_IMAGES from '../data/HeroImages';

const Home = ({ addToCart, setView, heroIndex }) => {
  return (
    <>
            {/* Hero Section */}
            <header className="relative bg-orange-50 overflow-hidden">
               {/* Carousel Background */}
               {HERO_IMAGES.map((img, index) => (
                 <div 
                   key={index}
                   className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === heroIndex ? 'opacity-100' : 'opacity-0'}`}
                 >
                   <img src={img} alt="Hero Background" className="w-full h-full object-cover transform scale-105" />
                   {/* Double Overlay: One for texture/blend, one for readability */}
                   <div className="absolute inset-0 bg-orange-100/30 mix-blend-overlay"></div>
                   <div className="absolute inset-0 bg-white/85"></div> 
                 </div>
               ))}

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur border border-orange-200 text-orange-800 text-sm font-medium mb-6 animate-fadeInDown">
                  <Icons.Star className="w-3 h-3 text-orange-500 animate-spin" fill="currentColor" />
                  Handcrafted with Love & Devotion
                  <Icons.Star className="w-3 h-3 text-orange-500 animate-spin" fill="currentColor" />
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-medium text-gray-900 mb-6 leading-tight animate-fadeInUp delay-100">
                  Adorn Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Little Krishna</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed animate-fadeInUp delay-200">
                  Discover our exclusive collection of Laddu Gopal Poshaks, crafted with the finest silks, intricate mirror work, and pure devotion for your home temple.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fadeInUp delay-300">
                  <button 
                    onClick={() => setView('shop')}
                    className="px-8 py-4 bg-pink-600 text-white rounded-xl font-medium shadow-lg shadow-pink-200 hover:bg-pink-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Shop Now <Icons.ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-4 bg-white/80 text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 hover:text-pink-600 transition-all duration-300 hover:border-pink-200">
                    View New Arrivals
                  </button>
                </div>
              </div>
            </header>

            {/* Featured Categories */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-900 mb-12 animate-fadeInUp">Collections by Occasion</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Janmashtami Special', img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-yellow-400 to-orange-500' },
                  { title: 'Daily Cotton Seva', img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-blue-400 to-teal-500' },
                  { title: 'Winter Woolen Sets', img: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-pink-400 to-rose-500' }
                ].map((item, idx) => (
                  <div key={idx} onClick={() => setView('shop')} className="group cursor-pointer relative rounded-2xl overflow-hidden h-80 shadow-md animate-fadeInUp" style={{ animationDelay: `${idx * 150}ms` }}>
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-serif text-2xl font-medium mb-1">{item.title}</h3>
                      <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1">
                        Explore <Icons.ChevronRight className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bestsellers Preview */}
            <section className="bg-white py-20 border-y border-orange-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12 animate-fadeIn">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2">Devotee Favorites</h2>
                    <p className="text-gray-500">Most loved designs for your deity</p>
                  </div>
                  <button onClick={() => setView('shop')} className="hidden md:flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 transition-all hover:translate-x-1">
                    View All <Icons.ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {PRODUCTS.slice(0, 4).map((product, i) => (
                    <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${i * 100}ms` }}>
                      <ProductCard product={product} addToCart={addToCart} />
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                  <button onClick={() => setView('shop')} className="px-6 py-3 border border-pink-200 text-pink-600 rounded-lg font-medium">View All Products</button>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-3xl text-gray-900 mb-12 animate-fadeInUp">Words from Our Family</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{ animationDelay: `${i * 200}ms` }}>
                    <div className="flex justify-center mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Icons.Star key={i} className="w-4 h-4 animate-pulse" fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                    <p className="font-bold text-gray-900 font-serif">- {t.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
  )
}

export default Home