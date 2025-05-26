"use client"

import { useState } from "react"
import { Search, ShoppingBag, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductModal from "@/components/product-modal"
import HeroCarousel from "@/components/hero-carousel"
import { motion, AnimatePresence } from "framer-motion"

const categories = [
  { name: "Fabrics", icon: "🧵", count: 45 },
  { name: "Dresses", icon: "👗", count: 32 },
  { name: "Two Pieces", icon: "👔", count: 28 },
  { name: "Lingerie", icon: "🩱", count: 24 },
  { name: "Nightwears", icon: "🌙", count: 18 },
  { name: "Shirts", icon: "👕", count: 35 },
  { name: "Tops", icon: "👚", count: 42 },
  { name: "Bags", icon: "👜", count: 26 },
  { name: "Shoes", icon: "👠", count: 38 },
  { name: "Shower Gel", icon: "🧴", count: 15 },
]

const products = [
  {
    id: 1,
    name: "Elegant Evening Dress",
    category: "Dresses",
    price: 450.0,
    image: "/s1.jpg",
    rating: 4.8,
    reviews: 124,
    description: "Stunning evening dress perfect for special occasions. Made with premium fabric and elegant design.",
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Cotton Fabric",
    category: "Fabrics",
    price: 125.5,
    image: "/s2.jpg",
    rating: 4.6,
    reviews: 89,
    description:
      "High-quality cotton fabric perfect for custom tailoring. Soft, durable, and available in multiple colors.",
    inStock: true,
  },
  {
    id: 3,
    name: "Designer Two-Piece Set",
    category: "Two Pieces",
    price: 650.0,
    image: "/s3.jpg",
    rating: 4.9,
    reviews: 156,
    description:
      "Stylish two-piece set featuring a crop top and matching skirt. Perfect for modern fashion enthusiasts.",
    inStock: false,
  },
  {
    id: 4,
    name: "Luxury Handbag",
    category: "Bags",
    price: 999.99,
    image: "/s4.jpg",
    rating: 4.7,
    reviews: 203,
    description: "Premium leather handbag with spacious compartments and elegant design. Perfect for daily use.",
    inStock: true,
  },
  {
    id: 5,
    name: "Comfortable Nightwear",
    category: "Nightwears",
    price: 230.0,
    image: "/s5.jpg",
    rating: 4.5,
    reviews: 78,
    description: "Soft and comfortable nightwear made from breathable fabric. Perfect for a good night's sleep.",
    inStock: true,
  },
  {
    id: 6,
    name: "Stylish Sneakers",
    category: "Shoes",
    price: 400.0,
    image: "/s6.jpg",
    rating: 4.8,
    reviews: 167,
    description: "Modern sneakers with superior comfort and style. Perfect for casual and athletic wear.",
    inStock: true,
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [favorites, setFavorites] = useState(new Set())

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const handleShopNow = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-500">
      <Navigation />

      {/* Hero Section with Carousel */}
      <section id="home" className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 via-blue-200/30 to-pink-200/30 dark:from-indigo-700/20 dark:via-blue-600/20 dark:to-pink-500/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-pink-600 dark:from-indigo-400 dark:via-blue-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
              Shop with Harvey
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/80 mb-8 max-w-3xl mx-auto">
              Discover premium fashion, fabrics, and lifestyle products in our futuristic online store
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white/60 h-5 w-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 dark:bg-white/10 backdrop-blur-md border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 focus:bg-white/70 dark:focus:bg-white/20 transition-all duration-300"
                />
              </div>
              <Button
                onClick={handleShopNow}
                className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Now
              </Button>
            </div>
          </motion.div>

          {/* Hero Carousel */}
          <HeroCarousel />
        </div>
      </section>

      {/* Categories Section */}
      <motion.section
        id="categories"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("All")}
              className={`p-4 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-pink-500/30 to-indigo-600/30 border-pink-400/50"
                  : "bg-white/30 dark:bg-white/10 border-gray-300 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20"
              }`}
            >
              <div className="text-2xl mb-2">🛍️</div>
              <div className="text-gray-900 dark:text-white font-medium">All Products</div>
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-pink-500/30 to-indigo-600/30 border-pink-400/50"
                    : "bg-white/30 dark:bg-white/10 border-gray-300 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20"
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-gray-900 dark:text-white font-medium text-sm">{category.name}</div>
                <Badge
                  variant="secondary"
                  className="mt-1 bg-white/40 dark:bg-white/20 text-gray-700 dark:text-white/80"
                >
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === "All" ? "Featured Products" : selectedCategory}
            </h2>
            <div className="text-gray-600 dark:text-white/60">{filteredProducts.length} products found</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="bg-white/50 dark:bg-white/10 backdrop-blur-md border-gray-300 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleFavorite(product.id)}
                          className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                            favorites.has(product.id)
                              ? "bg-pink-500/80 text-white"
                              : "bg-white/50 dark:bg-white/20 text-gray-700 dark:text-white/80 hover:bg-white/70 dark:hover:bg-white/30"
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current" : ""}`} />
                        </motion.button>
                        {!product.inStock && <Badge className="bg-red-500/80 text-white">Out of Stock</Badge>}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <Badge variant="outline" className="border-blue-400/50 text-blue-600 dark:text-blue-300">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-700 dark:text-white/80 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-gray-500 dark:text-white/60">({product.reviews} reviews)</span>
                      </div>
                      <p className="text-gray-600 dark:text-white/70 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 dark:from-pink-400 dark:to-indigo-400 bg-clip-text text-transparent">
                          ₵{product.price}
                        </span>
                        <Button
                          onClick={() => setSelectedProduct(product)}
                          disabled={!product.inStock}
                          className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
              <p className="text-gray-600 dark:text-white/60">Try adjusting your search or category filter</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      <Footer />

      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}
