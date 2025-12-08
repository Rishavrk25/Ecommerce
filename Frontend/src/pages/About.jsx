import React from 'react'
import Icons from "../data/Icons";

const About = () => {
  return (
    <div>
            {/* About Hero */}
            <div className="bg-orange-50 py-16 text-center px-4 animate-fadeIn">
              <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 animate-fadeInDown">Our Divine Journey</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fadeInUp delay-100">Serving Laddu Gopal with love, devotion, and artistry since 2015.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="animate-fadeInLeft">
                  <img 
                    src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Laddu Gopal Dress Making" 
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover hover:shadow-2xl transition-shadow duration-500"
                  />
                </div>
                <div className="animate-fadeInRight delay-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-12 h-1 bg-pink-600 rounded-full"></span>
                    <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Our Mission</span>
                  </div>
                  <h2 className="font-serif text-3xl text-gray-900 mb-6">Bhakti in Every Stitch</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At <strong>Kanha Ki Chhav</strong>, we believe that dressing Laddu Gopal is not merely a ritual, but a profound expression of love (Bhakti). Each dress in our collection is designed with the same care and adoration that a mother has for her child.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Inspired by the vibrant colors of Vrindavan and the royal traditions of India, we source the finest silks, velvets, and organic cottons. Our artisans are devotees themselves, ensuring that purity and positive energy are woven into every garment.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp delay-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 animate-float">
                    <Icons.Star className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Premium Quality</h3>
                  <p className="text-gray-500">Only the softest, skin-friendly fabrics for your deity, ensuring comfort in every season.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp delay-200">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600 animate-float" style={{ animationDelay: '1s' }}>
                    <Icons.Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Handmade with Love</h3>
                  <p className="text-gray-500">Intricate embroidery and detailing done by skilled artisans who chant the holy names while working.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp delay-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 animate-float" style={{ animationDelay: '2s' }}>
                    <Icons.Sun className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Vrindavan Inspired</h3>
                  <p className="text-gray-500">Designs that reflect the eternal beauty and festive spirit of Lord Krishna's playground.</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default About