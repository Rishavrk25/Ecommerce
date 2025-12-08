import { useNavigate } from "react-router-dom";
import Icons from "../data/Icons";
import ProductDetails from "../pages/ProductDetails";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  return (
  <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-orange-50 flex flex-col h-full transform hover:-translate-y-2">
    <div className="relative h-64 overflow-hidden bg-orange-50">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        onError={(e) => {
           e.target.onerror = null; 
           e.target.src = "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"; 
        }}
      />
      {product.bestseller && (
        <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-fadeIn">
          Bestseller
        </span>
      )}
      <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 z-10 shadow-sm hover:shadow-md transform hover:scale-110">
        <Icons.Heart className="w-5 h-5" />
      </button>
    </div>
    
    <div className="p-5 flex flex-col flex-grow">
      <div className="text-xs text-orange-600 font-semibold mb-1 uppercase tracking-wider">{product.category}</div>
      <h3 className="font-serif text-lg text-gray-800 font-medium leading-tight mb-2 flex-grow group-hover:text-pink-600 transition-colors duration-300">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
        <button 
          // onClick={() => addToCart(product)}
          onClick={() => navigate(`/product/${product.id}`)}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 active:bg-orange-800 transition-all duration-300 flex items-center gap-2 shadow-orange-200 shadow-lg transform active:scale-95 hover:shadow-xl"
        >
          <Icons.ShoppingBag className="w-4 h-4" />
          Add to Seva
        </button>
      </div>
    </div>
  </div>
);
};



export default ProductCard;