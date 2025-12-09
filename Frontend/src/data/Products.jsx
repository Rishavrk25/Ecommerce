const PRODUCTS = [
  // --- Siders/Hangings ---
  {
    id: 7,
    name: "Peacock Blue Handcrafted Wall Hanging",
    price: 799,
    category: "Peacock",
    mainCategory: "Siders/Hangings",
    image: "https://images.pexels.com/photos/7048052/pexels-photo-7048052.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant wall décor featuring peacock feathers and beads.",
    bestseller: true
  },
  {
    id: 10,
    name: "Golden Leaf Metal Wall Art",
    price: 1899,
    category: "Metal",
    mainCategory: "Siders/Hangings",
    image: "https://images.pexels.com/photos/703171/pexels-photo-703171.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Luxury metal leaf art for living rooms and halls.",
    bestseller: true
  },
  {
    id: 19,
    name: "Mirror Work Wall Frame",
    price: 1650,
    category: "Mirror Work",
    mainCategory: "Siders/Hangings",
    image: "https://images.pexels.com/photos/37347/pexels-photo-37347.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Traditional handcrafted mirror art frame.",
    bestseller: true
  },
  {
    id: 30,
    name: "Traditional Rajasthani Puppet Hanging",
    price: 450,
    category: "Traditional",
    mainCategory: "Siders/Hangings",
    image: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Colorful handmade puppets for vibrant wall decor.",
    bestseller: false
  },

  // --- Gift Items (Kurtis, Laddu Gopal, Idols) ---
  {
    id: 8,
    name: "Classic Rajasthani Kurti Set",
    price: 1299,
    category: "Kurtis",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/18399043/pexels-photo-18399043.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Soft cotton kurti with Jaipur block prints.",
    bestseller: false
  },
  {
    id: 9,
    name: "Maroon Designer Rayon Kurti",
    price: 1490,
    category: "Kurtis",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/14579866/pexels-photo-14579866.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Rayon kurti with zari embroidery for festive wear.",
    bestseller: true
  },
  {
    id: 11,
    name: "Traditional Bandhej Kurti",
    price: 1050,
    category: "Kurtis",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/18399044/pexels-photo-18399044.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Bandhej printed kurti with breathable cotton fabric.",
    bestseller: false
  },
  {
    id: 13,
    name: "Velvet Red Laddu Gopal Dress",
    price: 699,
    category: "Laddu Gopal Dresses",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/1646427/pexels-photo-1646427.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Soft velvet red dress with golden border.",
    bestseller: false
  },
  {
    id: 14,
    name: "Elegant Floral Cotton Kurti",
    price: 899,
    category: "Kurtis",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/16660664/pexels-photo-16660664.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lightweight floral kurti perfect for summer days.",
    bestseller: true
  },
  {
    id: 15,
    name: "Premium Woolen Winter Kurti",
    price: 1790,
    category: "Kurtis",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/6311665/pexels-photo-6311665.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Cozy winter kurti made from premium wool blend.",
    bestseller: false
  },
  {
    id: 17,
    name: "Traditional Brass Ganesha Idol",
    price: 2200,
    category: "Idols",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/5411470/pexels-photo-5411470.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted brass idol of Lord Ganesha.",
    bestseller: true
  },
  {
    id: 20,
    name: "Beige Stone Studded Poshak",
    price: 1350,
    category: "Laddu Gopal Dresses",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/804131/pexels-photo-804131.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Stone-studded dress perfect for festive occasions.",
    bestseller: false
  },
  {
    id: 23,
    name: "Woolen Cozy Winter Dress (Gopal)",
    price: 950,
    category: "Laddu Gopal Dresses",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/804126/pexels-photo-804126.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Thick woolen poshak for winter season.",
    bestseller: true
  },
  {
    id: 26,
    name: "Lotus Pink Laddu Gopal Dress",
    price: 780,
    category: "Laddu Gopal Dresses",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/804129/pexels-photo-804129.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Pink floral dress inspired by lotus petals.",
    bestseller: false
  },
  {
    id: 31,
    name: "Festive Dry Fruit Hamper",
    price: 1500,
    category: "Hampers",
    mainCategory: "Gift Items",
    image: "https://images.pexels.com/photos/5411477/pexels-photo-5411477.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Assorted premium dry fruits in a festive box.",
    bestseller: true
  },

  // --- Scented Candles ---
  {
    id: 12,
    name: "Lotus Brass Decorative Diya Stand",
    price: 950,
    category: "Stands",
    mainCategory: "Scented Candles",
    image: "https://images.pexels.com/photos/5411477/pexels-photo-5411477.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted lotus-shaped diya stand for festivals.",
    bestseller: true
  },
  {
    id: 32,
    name: "Lavender Soy Wax Jar Candle",
    price: 499,
    category: "Soy Wax",
    mainCategory: "Scented Candles",
    image: "https://images.pexels.com/photos/6757659/pexels-photo-6757659.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Calming lavender scent in a reusable glass jar.",
    bestseller: true
  },
  {
    id: 33,
    name: "Rose Scented Decorative Pillar",
    price: 350,
    category: "Decorative",
    mainCategory: "Scented Candles",
    image: "https://images.pexels.com/photos/6757659/pexels-photo-6757659.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Beautiful carved rose candle for centerpiece.",
    bestseller: false
  },

  // --- Torans/Bandarwaals ---
  {
    id: 16,
    name: "Floral Toran Door Hanging",
    price: 550,
    category: "Marigold",
    mainCategory: "Torans/Bandarwaals",
    image: "https://images.pexels.com/photos/5411474/pexels-photo-5411474.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Beautiful marigold-style toran for door decoration.",
    bestseller: true
  },
  {
    id: 34,
    name: "Pearl Beaded Door Toran",
    price: 850,
    category: "Pearl",
    mainCategory: "Torans/Bandarwaals",
    image: "https://images.pexels.com/photos/5411474/pexels-photo-5411474.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant white pearl beads strung for a royal look.",
    bestseller: false
  },
  {
    id: 35,
    name: "Hand-Embroidered Fabric Bandarwaal",
    price: 1100,
    category: "Embroidered",
    mainCategory: "Torans/Bandarwaals",
    image: "https://images.pexels.com/photos/5411474/pexels-photo-5411474.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Traditional embroidery on silk fabric door hanging.",
    bestseller: true
  },

  // --- Backdrops ---
  {
    id: 22,
    name: "Antique Copper Decorative Vase",
    price: 1250,
    category: "Decor",
    mainCategory: "Backdrops",
    image: "https://images.pexels.com/photos/7048063/pexels-photo-7048063.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted copper vase for elegant interiors.",
    bestseller: false
  },
  {
    id: 36,
    name: "Yellow Marigold Flower Backdrop",
    price: 1800,
    category: "Floral Panels",
    mainCategory: "Backdrops",
    image: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Dense artificial marigold panel for festive photography.",
    bestseller: true
  },
  {
    id: 37,
    name: "Red Velvet Temple Curtain",
    price: 650,
    category: "Curtains",
    mainCategory: "Backdrops",
    image: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Rich red velvet curtain for home temple background.",
    bestseller: false
  },

  // --- MDF Rangolis ---
  {
    id: 24,
    name: "Mandala Wall Art Plate",
    price: 650,
    category: "Geometric",
    mainCategory: "MDF Rangolis",
    image: "https://images.pexels.com/photos/4124621/pexels-photo-4124621.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Mandala art plate for living room décor.",
    bestseller: false
  },
  {
    id: 38,
    name: "Peacock Design MDF Rangoli Set",
    price: 550,
    category: "Peacock Design",
    mainCategory: "MDF Rangolis",
    image: "https://images.pexels.com/photos/4124621/pexels-photo-4124621.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Portable 5-piece peacock shaped rangoli set.",
    bestseller: true
  },
  {
    id: 39,
    name: "Portable Floral Rangoli Cutouts",
    price: 400,
    category: "Floral",
    mainCategory: "MDF Rangolis",
    image: "https://images.pexels.com/photos/4124621/pexels-photo-4124621.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Easy to arrange floral cutout rangoli for quick decor.",
    bestseller: false
  }
];
export default PRODUCTS;