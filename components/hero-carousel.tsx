"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselSlides = [
  {
    id: 1,
    title: "Premium Fashion Collection",
    subtitle: "Discover Elegance",
    description: "Explore our curated selection of premium dresses and fashion pieces",
    image: "/s1.jpg",
    cta: "Shop Dresses",
    gradient: "from-pink-500/80 to-purple-600/80",
  },
  {
    id: 2,
    title: "Luxury Fabrics & Materials",
    subtitle: "Craft Your Style",
    description: "High-quality fabrics for your custom tailoring needs",
    image: "/s2.jpg",
    cta: "Browse Fabrics",
    gradient: "from-blue-500/80 to-indigo-600/80",
  },
  {
    id: 3,
    title: "Designer Accessories",
    subtitle: "Complete Your Look",
    description: "Premium bags, shoes, and accessories to complement your style",
    image: "/s3.jpg",
    cta: "Shop Accessories",
    gradient: "from-indigo-500/80 to-pink-600/80",
  },
  {
    id: 4,
    title: "Comfort & Lifestyle",
    subtitle: "Everyday Essentials",
    description: "Nightwears, casual wear, and lifestyle products for daily comfort",
    image: "/s4.jpg",
    cta: "Explore Collection",
    gradient: "from-purple-500/80 to-blue-600/80",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={carouselSlides[currentSlide].image || "/placeholder.svg"}
              alt={carouselSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${carouselSlides[currentSlide].gradient} backdrop-blur-sm`}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center text-white max-w-4xl px-6"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl font-medium mb-4 text-white/90"
                >
                  {carouselSlides[currentSlide].subtitle}
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                >
                  {carouselSlides[currentSlide].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto"
                >
                  {carouselSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    onClick={() => {
                      const productsSection = document.getElementById("products")
                      if (productsSection) {
                        productsSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    {carouselSlides[currentSlide].cta}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-indigo-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  )
}
