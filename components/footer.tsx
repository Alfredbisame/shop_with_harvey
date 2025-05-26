"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react"
import {  FaXTwitter, FaFacebookF, FaPinterest, FaGoogle, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerSections = [
    {
      title: "Shop",
      links: [
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
      ],
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "Size Guide", "Shipping Info", "Returns", "FAQ", "Track Order"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Sustainability", "Terms", "Privacy"],
    },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-pink-900/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Stay in Style</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion
            trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
            />
            <Button className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white px-8 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Shop with Harvey
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Your premier destination for premium fashion, fabrics, and lifestyle products. Experience the future of
              online shopping with our curated collection.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-5 w-5 text-pink-400" />
                <span>hello@shopwithharvey.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+233 59 200 6905</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>123 Achimota Mall, Dome Road, Achimota, Greater Accra</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Shop with Harvey. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-indigo-600/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
