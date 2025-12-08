import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const ProductDetails = ({ product, onBack, onAddToCart, view, setView, isCartOpen, setIsCartOpen, totalItems, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('Red');

  const showSize = product.mainCategory !== 'Decorative';
  const sizes = product.mainCategory === 'Laddu Gopal Dresses' ? ['0', '1', '2', '3', '4', '5'] : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Red', 'Pink', 'Blue', 'Green'];

  const handleAddToCart = () => {
    onAddToCart({ ...product, selectedSize: showSize ? size : null, selectedColor, quantity, customNote: note });
  };

  return (
    <>
      <Navbar view={view}
                setView={setView}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                totalItems={totalItems}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-6 font-medium group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Shop
      </button>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="h-[50vh] md:h-full relative bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Details Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
                {product.mainCategory} • {product.category}
              </span>
              <h1 className="font-serif text-4xl text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-2xl font-bold text-gray-900">${product.price}</p>
                <div className="flex items-center gap-1 text-amber-400 font-bold text-sm bg-amber-50 px-2 py-1 rounded-md">
                  <Star className="w-4 h-4 fill-current" />
                  {product.rating} (124 reviews)
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description || "Experience the finest quality craftsmanship. Designed with attention to detail and made from premium materials to ensure lasting beauty and comfort."}
              </p>
            </div>

            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Select Color</label>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === color ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() === 'red' ? '#ef4444' : color.toLowerCase() === 'pink' ? '#db2777' : color.toLowerCase() === 'blue' ? '#3b82f6' : '#22c55e' }}
                      title={color}
                    >
                      {selectedColor === color && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              {showSize && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-medium text-gray-900">Select Size</label>
                    <button className="text-xs text-pink-600 underline hover:text-pink-700">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-medium transition-all ${
                          size === s 
                          ? 'bg-gray-900 text-white shadow-lg transform -translate-y-1' 
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Note */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Custom Note (Optional)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add gift message or special instructions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none text-sm transition-all resize-none h-24 bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Quantity & Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-gray-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-pink-200 hover:shadow-pink-300 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default ProductDetails;