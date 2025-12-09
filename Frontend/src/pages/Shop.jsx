import React from "react";
import ProductCard from "../Components/ProductCard";
import { Check, Heart } from "lucide-react";

const Shop = ({
  activeMainCategory,
  setActiveMainCategory,
  activeCategory,
  setActiveCategory,
  addToCart,
  filteredProducts,
}) => {
  const mainCategories = [
    {
      id: "all",
      name: "All",
      image:
        "https://images.pexels.com/photos/3757945/pexels-photo-3757945.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "torans",
      name: "Torans/Bandarwaals",
      image:
        "https://images.pexels.com/photos/5411474/pexels-photo-5411474.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "hangings",
      name: "Siders/Hangings",
      image:
        "https://images.pexels.com/photos/7048052/pexels-photo-7048052.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "rangolis",
      name: "MDF Rangolis",
      image:
        "https://images.pexels.com/photos/4124621/pexels-photo-4124621.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "candles",
      name: "Scented Candles",
      image:
        "https://images.pexels.com/photos/6757659/pexels-photo-6757659.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "backdrops",
      name: "Backdrops",
      image:
        "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "gifts",
      name: "Gift Items",
      image:
        "https://images.pexels.com/photos/5411470/pexels-photo-5411470.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // Specific Subcategories mapping based on Main Category
  const subCategoriesMap = {
    "Torans/Bandarwaals": ["All", "Marigold", "Pearl", "Beads", "Embroidered"],
    "Siders/Hangings": [
      "All",
      "Metal",
      "Mirror Work",
      "Peacock",
      "Traditional",
    ],
    "MDF Rangolis": [
      "All",
      "Geometric",
      "Floral",
      "Peacock Design",
      "Portable",
    ],
    "Scented Candles": [
      "All",
      "Soy Wax",
      "Decorative",
      "Jar Candles",
      "Stands",
    ],
    Backdrops: ["All", "Religious", "Curtains", "Floral Panels", "Decor"],
    "Gift Items": ["All", "Kurtis", "Laddu Gopal Dresses", "Idols", "Hampers"],
  };
  // Get relevant subcategories or default to empty array
  const currentSubCategories =
    subCategoriesMap[activeMainCategory] ||
    subCategoriesMap["Torans/Bandarwaals"];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* HEADER + MAIN CATEGORIES */}
      <div className="items-center md:flex-row md:justify-between mb-12 animate-fadeIn">
        <h1 className="font-serif text-4xl text-gray-900 mb-6 md:mb-0">
          Categories
        </h1><br></br>

        {/* MAIN CATEGORY CIRCLES */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {mainCategories.map((mainCat, idx) => (
            <button
              key={mainCat.name}
              onClick={() => setActiveMainCategory(mainCat.name)}
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              <div
                className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 transition-all duration-300 transform group-hover:scale-110 
                  ${
                    activeMainCategory === mainCat.name
                      ? "border-pink-600 scale-110 ring-4 ring-pink-100"
                      : "border-white hover:border-pink-200"
                  }
                `}
              >
                <img
                  src={mainCat.image}
                  alt={mainCat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div
                  className={`absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors ${
                    activeMainCategory === mainCat.name ? "bg-black/0" : ""
                  }`}
                ></div>

                {/* Active Indicator Icon Overlay */}
                {activeMainCategory === mainCat.name && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Check className="w-8 h-8 text-white drop-shadow-lg animate-scaleIn" />
                  </div>
                )}
              </div>

              <span
                className={`font-medium text-sm md:text-base text-center max-w-[140px] leading-tight transition-colors duration-300
                ${
                  activeMainCategory === mainCat.name
                    ? "text-pink-600 font-bold"
                    : "text-gray-700 group-hover:text-pink-500"
                }
              `}
              >
                {mainCat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* SUB CATEGORY FILTERS */}
      <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
        {currentSubCategories.map((cat, idx) => (
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
