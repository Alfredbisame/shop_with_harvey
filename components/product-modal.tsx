"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, Heart, Share2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  rating: number
  reviews: number
  description: string
  inStock: boolean
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering the ${product.name} (${product.category}) for ₵${product.price}. Please let me know about availability and delivery details.`
    const whatsappUrl = `https://wa.me/233592006905?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl bg-gradient-to-br from-indigo-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-md border-white/20 text-white">
            <DialogHeader>
              <DialogTitle className="sr-only">{product.name}</DialogTitle>
            </DialogHeader>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Product Image */}
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                    <Badge className="bg-red-500/80 text-white text-lg px-4 py-2">Out of Stock</Badge>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <Badge variant="outline" className="border-blue-400/50 text-blue-300 mb-3">
                    {product.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-white/80 ml-1 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-white/60">({product.reviews} reviews)</span>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                    ₵{product.price}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-white/70 leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Product Features</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                      Premium quality materials
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Fast and secure delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                      30-day return policy
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsAppOrder}
                    disabled={!product.inStock}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Order via WhatsApp
                  </Button>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      <Heart className="mr-2 h-4 w-4" />
                      Add to Wishlist
                    </Button>
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <h4 className="font-semibold text-white mb-2">Need Help?</h4>
                  <p className="text-white/70 text-sm">
                    Contact our customer service team for size guidance, product questions, or order assistance.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
