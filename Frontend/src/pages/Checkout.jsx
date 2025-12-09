import { useState } from "react";
import Icons from "../data/Icons";

const Checkout = ({ cart, clearCart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    // Simulate API call and clear cart after a delay
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg bg-white p-10 rounded-3xl shadow-xl border border-orange-100 animate-fadeInUp">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-bounce">
            <Icons.CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Jai Shree Krishna!</h2>
          <p className="text-lg text-pink-600 font-medium mb-4">Your order has been placed successfully.</p>
          <p className="text-gray-500 mb-8">
            Thank you for choosing us for your Laddu Gopal's seva. We are preparing your order with love and devotion.
            <br/><span className="text-sm mt-2 block">Order ID: #KG{Math.floor(Math.random() * 10000)}</span>
          </p>
          <button 
            className="px-8 py-3 bg-pink-600 text-white rounded-xl font-medium shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 text-center animate-fadeInDown">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2 space-y-8 animate-fadeInUp delay-100">
          
          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                <Icons.Truck className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl font-bold text-gray-900">Shipping Details</h2>
            </div>
            
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300" placeholder="Enter your full name" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300" placeholder="House no, Street name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300" placeholder="City" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pin Code</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300" placeholder="Pin Code" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-shadow duration-300" placeholder="+91 98765 43210" />
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1 animate-fadeInUp delay-200">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 sticky top-24">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                    <p className="text-sm font-bold text-pink-600">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button 
              form="checkout-form"
              type="submit"
              disabled={cart.length === 0}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Place Order
            </button>
            <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
              <Icons.CheckCircle className="w-3 h-3" /> Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;