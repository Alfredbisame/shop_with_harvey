"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Star, Heart, Grid, List } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductModal from "@/components/product-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const allProducts = [
  {
    id: 1,
    name: "Elegant Evening Dress",
    category: "Dresses",
    price: 450.0,
    image: "/placeholder.svg?height=300&width=250&text=Elegant+Evening+Dress",
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
    image: "/placeholder.svg?height=300&width=250&text=Premium+Cotton+Fabric",
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
    image: "/placeholder.svg?height=300&width=250&text=Designer+Two+Piece+Set",
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
    image: "/placeholder.svg?height=300&width=250&text=Luxury+Handbag",
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
    image: "/placeholder.svg?height=300&width=250&text=Comfortable+Nightwear",
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
    image: "/placeholder.svg?height=300&width=250&text=Stylish+Sneakers",
    rating: 4.8,
    reviews: 167,
    description: "Modern sneakers with superior comfort and style. Perfect for casual and athletic wear.",
    inStock: true,
  },
  {
    id: 7,
    name: "Silk Blouse",
    category: "Tops",
    price: 180.0,
    image: "/placeholder.svg?height=300&width=250&text=Silk+Blouse",
    rating: 4.7,
    reviews: 92,
    description: "Luxurious silk blouse with elegant draping. Perfect for professional and casual wear.",
    inStock: true,
  },
  {
    id: 8,
    name: "Formal Shirt",
    category: "Shirts",
    price: 120.0,
    image: "/placeholder.svg?height=300&width=250&text=Formal+Shirt",
    rating: 4.4,
    reviews: 65,
    description: "Classic formal shirt with modern fit. Essential for professional wardrobe.",
    inStock: true,
  },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("search") || "")
  const [selectedCategory, setSelectedCategory] = useState(searchParams?.get("category") || "All")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [favorites, setFavorites] = useState(new Set())

  const categories = [
    "All",
    "Fabrics",
    "Dresses",
    "Two Pieces",
    "Lingerie",
    "Nightwears",
    "Shirts",
    "Tops",
    "Bags",
    "Shoes",
    "Shower Gel",
  ]

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/20 via-blue-600/20 to-pink-500/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-8 text-center max-w-3xl mx-auto"
          >
            Discover our complete collection of premium fashion and lifestyle products
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-white/10 backdrop-blur-md border-white/20 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 backdrop-blur-md border-white/20">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 bg-white/10 backdrop-blur-md border-white/20 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 backdrop-blur-md border-white/20">
                <SelectItem value="name" className="text-white hover:bg-white/10">
                  Name
                </SelectItem>
                <SelectItem value="price-low" className="text-white hover:bg-white/10">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="price-high" className="text-white hover:bg-white/10">
                  Price: High to Low
                </SelectItem>
                <SelectItem value="rating" className="text-white hover:bg-white/10">
                  Rating
                </SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-white/60">
              Showing {sortedProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid/List */}
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
            }
          >
            <AnimatePresence>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  {viewMode === "grid" ? (
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleFavorite(product.id)}
                            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                              favorites.has(product.id)
                                ? "bg-pink-500/80 text-white"
                                : "bg-white/20 text-white/80 hover:bg-white/30"
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current" : ""}`} />
                          </motion.button>
                          {!product.inStock && <Badge className="bg-red-500/80 text-white">Out of Stock</Badge>}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors duration-300 line-clamp-1">
                            {product.name}
                          </h3>
                          <Badge variant="outline" className="border-blue-400/50 text-blue-300 text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-white/80 ml-1 text-sm">{product.rating}</span>
                          </div>
                          <span className="text-white/60 text-sm">({product.reviews})</span>
                        </div>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            ₵{product.price}
                          </span>
                          <Button
                            onClick={() => setSelectedProduct(product)}
                            disabled={!product.inStock}
                            size="sm"
                            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                          >
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                              <Badge variant="outline" className="border-blue-400/50 text-blue-300">
                                {product.category}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-white/80">{product.rating}</span>
                              <span className="text-white/60">({product.reviews} reviews)</span>
                            </div>
                            <p className="text-white/70 text-sm mb-3">{product.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                                ₵{product.price}
                              </span>
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => toggleFavorite(product.id)}
                                  variant="outline"
                                  size="sm"
                                  className="border-white/20 text-white hover:bg-white/10"
                                >
                                  <Heart
                                    className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current text-pink-400" : ""}`}
                                  />
                                </Button>
                                <Button
                                  onClick={() => setSelectedProduct(product)}
                                  disabled={!product.inStock}
                                  size="sm"
                                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white"
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {sortedProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />

      <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}
