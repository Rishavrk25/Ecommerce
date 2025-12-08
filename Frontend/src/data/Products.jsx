// --- NEW PRODUCTS ---
const PRODUCTS = [
  {
    id: 7,
    name: "Peacock Blue Handcrafted Wall Hanging",
    price: 799,
    category: "Festive",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/7048052/pexels-photo-7048052.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant wall décor featuring peacock feathers and beads.",
    bestseller: true
  },
  {
    id: 8,
    name: "Classic Rajasthani Kurti Set",
    price: 1299,
    category: "Daily",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/18399043/pexels-photo-18399043.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Soft cotton kurti with Jaipur block prints.",
    bestseller: false
  },
  {
    id: 9,
    name: "Maroon Designer Rayon Kurti",
    price: 1490,
    category: "Festive",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/14579866/pexels-photo-14579866.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Rayon kurti with zari embroidery for festive wear.",
    bestseller: true
  },
  {
    id: 10,
    name: "Golden Leaf Metal Wall Art",
    price: 1899,
    category: "Special",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/703171/pexels-photo-703171.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Luxury metal leaf art for living rooms and halls.",
    bestseller: true
  },
  {
    id: 11,
    name: "Traditional Bandhej Kurti",
    price: 1050,
    category: "Daily",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/18399044/pexels-photo-18399044.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Bandhej printed kurti with breathable cotton fabric.",
    bestseller: false
  },
  {
    id: 12,
    name: "Lotus Brass Decorative Diya Stand",
    price: 950,
    category: "Festive",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/5411477/pexels-photo-5411477.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted lotus-shaped diya stand for festivals.",
    bestseller: true
  },
  {
    id: 13,
    name: "Velvet Red Laddu Gopal Dress",
    price: 699,
    category: "Festive",
    mainCategory: "Laddu Gopal Dresses",
    image: "https://images.pexels.com/photos/1646427/pexels-photo-1646427.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Soft velvet red dress with golden border.",
    bestseller: false
  },
  {
    id: 14,
    name: "Elegant Floral Cotton Kurti",
    price: 899,
    category: "Daily",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/16660664/pexels-photo-16660664.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lightweight floral kurti perfect for summer days.",
    bestseller: true
  },
  {
    id: 15,
    name: "Premium Woolen Winter Kurti",
    price: 1790,
    category: "Winter",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/6311665/pexels-photo-6311665.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Cozy winter kurti made from premium wool blend.",
    bestseller: false
  },
  {
    id: 16,
    name: "Floral Toran Door Hanging",
    price: 550,
    category: "Festive",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/5411474/pexels-photo-5411474.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Beautiful marigold-style toran for door decoration.",
    bestseller: true
  },
  {
    id: 17,
    name: "Traditional Brass Ganesha Idol",
    price: 2200,
    category: "Special",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/5411470/pexels-photo-5411470.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted brass idol of Lord Ganesha.",
    bestseller: true
  },
  {
    id: 18,
    name: "Soft Cotton Daily-Wear Kurti",
    price: 750,
    category: "Daily",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/13424468/pexels-photo-13424468.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Everyday kurti designed for comfort.",
    bestseller: false
  },
  {
    id: 19,
    name: "Mirror Work Wall Frame",
    price: 1650,
    category: "Special",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/37347/pexels-photo-37347.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Traditional handcrafted mirror art frame.",
    bestseller: true
  },
  {
    id: 20,
    name: "Beige Stone Studded Poshak",
    price: 1350,
    category: "Festive",
    mainCategory: "Laddu Gopal Dresses",
    image: "https://images.pexels.com/photos/804131/pexels-photo-804131.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Stone-studded dress perfect for festive occasions.",
    bestseller: false
  },
  {
    id: 21,
    name: "Royal Blue Kurti with Embroidery",
    price: 1590,
    category: "Festive",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/6311659/pexels-photo-6311659.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Royal blue embroidered kurti for parties.",
    bestseller: true
  },
  {
    id: 22,
    name: "Antique Copper Decorative Vase",
    price: 1250,
    category: "Special",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/7048063/pexels-photo-7048063.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Handcrafted copper vase for elegant interiors.",
    bestseller: false
  },
  {
    id: 23,
    name: "Woolen Cozy Winter Dress (Gopal)",
    price: 950,
    category: "Winter",
    mainCategory: "Laddu Gopal Dresses",
    image: "https://images.pexels.com/photos/804126/pexels-photo-804126.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Thick woolen poshak for winter season.",
    bestseller: true
  },
  {
    id: 24,
    name: "Mandala Wall Art Plate",
    price: 650,
    category: "Daily",
    mainCategory: "Decorative",
    image: "https://images.pexels.com/photos/4124621/pexels-photo-4124621.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Mandala art plate for living room décor.",
    bestseller: false
  },
  {
    id: 25,
    name: "Anarkali Style Kurti",
    price: 1999,
    category: "Special",
    mainCategory: "Kurtis",
    image: "https://images.pexels.com/photos/12293536/pexels-photo-12293536.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant anarkali kurti with premium chiffon.",
    bestseller: true
  },
  {
    id: 26,
    name: "Lotus Pink Laddu Gopal Dress",
    price: 780,
    category: "Festive",
    mainCategory: "Laddu Gopal Dresses",
    image: "https://images.pexels.com/photos/804129/pexels-photo-804129.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Pink floral dress inspired by lotus petals.",
    bestseller: false
  }
];
export default PRODUCTS;