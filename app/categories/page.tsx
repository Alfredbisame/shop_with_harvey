"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    name: "Fabrics",
    icon: "🧵",
    count: 45,
    description: "Premium quality fabrics for all your tailoring needs",
    image: "/s1.jpg",
    subcategories: ["Cotton", "Silk", "Linen", "Wool", "Synthetic"],
  },
  {
    name: "Dresses",
    icon: "👗",
    count: 32,
    description: "Elegant dresses for every occasion and style",
    image: "/s2.jpg",
    subcategories: ["Evening", "Casual", "Formal", "Party", "Maxi"],
  },
  {
    name: "Two Pieces",
    icon: "👔",
    count: 28,
    description: "Coordinated sets for a polished, put-together look",
    image: "/s3.jpg",
    subcategories: ["Crop Top Sets", "Blazer Sets", "Skirt Sets", "Pant Sets"],
  },
  {
    name: "Lingerie",
    icon: "🩱",
    count: 24,
    description: "Comfortable and stylish intimate wear",
    image: "/s4.jpg",
    subcategories: ["Bras", "Panties", "Sets", "Shapewear", "Sleepwear"],
  },
  {
    name: "Nightwears",
    icon: "🌙",
    count: 18,
    description: "Comfortable sleepwear for a good night's rest",
    image: "/s5.jpg",
    subcategories: ["Pajamas", "Nightgowns", "Robes", "Sleep Sets"],
  },
  {
    name: "Shirts",
    icon: "👕",
    count: 35,
    description: "Classic and modern shirts for every wardrobe",
    image: "/s6.jpg",
    subcategories: ["Casual", "Formal", "T-Shirts", "Polo", "Button-up"],
  },
  {
    name: "Tops",
    icon: "👚",
    count: 42,
    description: "Trendy tops to complete your outfit",
    image: "/s7.jpg",
    subcategories: ["Blouses", "Tank Tops", "Crop Tops", "Sweaters"],
  },
  {
    name: "Bags",
    icon: "👜",
    count: 26,
    description: "Stylish bags for every occasion and need",
    image: "/s8.jpg",
    subcategories: ["Handbags", "Backpacks", "Clutches", "Totes", "Crossbody"],
  },
  {
    name: "Shoes",
    icon: "👠",
    count: 38,
    description: "Comfortable and fashionable footwear",
    image: "/s9.jpg",
    subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
  },
  {
    name: "Shower Gel",
    icon: "🧴",
    count: 15,
    description: "Luxurious body care products for daily use",
    image: "/s10.jpg",
    subcategories: ["Moisturizing", "Exfoliating", "Fragrant", "Organic"],
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/20 via-blue-600/20 to-pink-500/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Shop by Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Explore our diverse collection of premium fashion, fabrics, and lifestyle products
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/products?category=${encodeURIComponent(category.name)}`}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="relative">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-pink-500/80 to-indigo-600/80 text-white">
                          {category.count} items
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="text-3xl bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center">
                          {category.icon}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/70 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <Badge key={sub} variant="outline" className="border-blue-400/50 text-blue-300 text-xs">
                            {sub}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
