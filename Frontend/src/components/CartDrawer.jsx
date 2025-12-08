import Icons from "../data/Icons";
const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeItem, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md animate-fadeIn" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slideInRight">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-orange-50">
          <h2 className="font-serif text-xl text-gray-800">Your Basket</h2>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-all duration-300 transform hover:rotate-90">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 animate-fadeIn">
              <Icons.ShoppingBag className="w-12 h-12 text-orange-200 animate-float" />
              <p>Your basket is empty.</p>
              <button onClick={onClose} className="text-orange-600 font-medium hover:underline">Start Shopping</button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={item.id} className="flex gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm animate-fadeInUp" style={{ animationDelay: `${idx * 50}ms` }}>
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-orange-50" />
                <div className="flex-1">
                  <h4 className="font-serif text-gray-800 line-clamp-1">{item.name}</h4>
                  <p className="text-orange-600 font-bold text-sm">₹{item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >-</button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >+</button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 self-start transition-colors">
                  <Icons.X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50 animate-fadeInUp">
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-bold text-gray-900">₹{total}</span>
            </div>
            <button 
              onClick={() => { onClose(); onCheckout(); }}
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartDrawer;