import React from "react";
import ProductCard from "../Components/ProductCard";
import { Heart } from "lucide-react";

const Shop = ({
  activeMainCategory,
  setActiveMainCategory,
  activeCategory,
  setActiveCategory,
  addToCart,
  filteredProducts,
}) => {
  const mainCategories = ["Kurtis", "Decorative", "Laddu Gopal Dresses"];
  const filterCategories = ["All", "Festive", "Daily", "Winter", "Special"];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* HEADER + MAIN CATEGORIES */}
      <div className="flex flex-col items-center md:flex-row md:justify-between mb-12 animate-fadeIn">

        <h1 className="font-serif text-4xl text-gray-900 mb-6 md:mb-0">
          Shop Collection
        </h1>

        {/* MAIN CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
          {mainCategories.map((mainCat) => (
            <button
              key={mainCat}
              onClick={() => setActiveMainCategory(mainCat)}
              className={`group px-6 py-3 rounded-full font-serif text-base transition-all duration-300 border-2
                ${
                  activeMainCategory === mainCat
                    ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white border-transparent shadow-lg scale-105"
                    : "bg-white border-pink-200 text-gray-700 hover:border-pink-400 hover:bg-pink-50"
                }
              `}
            >
              <span className="flex items-center gap-2">
                {activeMainCategory === mainCat && (
                  <Heart className="w-4 h-4 fill-current animate-pulse" />
                )}
                {mainCat}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* SUB CATEGORY FILTERS */}
      <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
        {filterCategories.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ animationDelay: `${idx * 50}ms` }}
            className={`animate-fadeInUp px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 border
              ${
                activeCategory === cat
                  ? "bg-pink-600 text-white border-pink-600 shadow-md scale-105"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-500 animate-fadeIn">
          <p className="text-xl">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      )}

    </main>
  );
};

export default Shop;
