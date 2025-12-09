import React, { useState, useEffect } from "react";
import Icons from "./data/Icons";
import HERO_IMAGES from "./data/HeroImages";
import PRODUCTS from "./data/Products";
import CartDrawer from "./Components/CartDrawer";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import { UserProvider } from "./context/UserContext";

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState("home"); // 'home', 'shop', 'about', 'contact', 'checkout'
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMainCategory, setActiveMainCategory] = useState("All");
  const [heroIndex, setHeroIndex] = useState(0);

  const addToCart = (product) => {
    const uniqueId = `${product.id}-${product.selectedColor || 'default'}-${product.selectedSize || 'default'}`;
    const cartItem = { ...product, cartItemId: uniqueId };

    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === uniqueId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === uniqueId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, cartItem];
    });
    setIsCartOpen(true);
  };


  const updateQuantity = (cartItemId, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  const removeItem = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchMain =
      activeMainCategory === "All" ||
      product.mainCategory === activeMainCategory;

    const matchSub =
      activeCategory === "All" || product.category === activeCategory;

    return matchMain && matchSub;
  });

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#FFFBF7] font-sans selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
          {/* --- Global Animations Styles --- */}
          <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease-out forwards; opacity: 0; }
        .animate-slideInRight { animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        
        /* Smooth Scrollbar for drawer */
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { bg-gray-100; }
        .custom-scrollbar::-webkit-scrollbar-thumb { bg-gray-300; border-radius: 4px; }
      `}</style>

          {/* Navigation */}
          <Navbar
            view={view}
            setView={setView}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            totalItems={totalItems}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            onCheckout={() => setView("checkout")}
          />

          {/* Main Content Area with Page Transition */}
          <div key={view} className="animate-fadeIn min-h-[calc(100vh-5rem)]">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    addToCart={addToCart}
                    setView={setView}
                    heroIndex={heroIndex}
                  />
                }
              />
              <Route
                path="/shop"
                element={
                  <Shop
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    addToCart={addToCart}
                    filteredProducts={filteredProducts}
                    activeMainCategory={activeMainCategory}
                    setActiveMainCategory={setActiveMainCategory}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/product/:id"
                element={
                  <ProductDetails
                    onAddToCart={addToCart}
                    onNavigate={setView}
                    isCartOpen={isCartOpen}
                    setIsCartOpen={setIsCartOpen}
                    totalItems={totalItems}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                  />
                }
              />
              <Route
                path="/checkout"
                element={<Checkout cart={cart} clearCart={clearCart} />}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
