"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, ShoppingBag, Search } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (searchOpen && !target.closest(".search-container")) {
        setSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [searchOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to products page with search query
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }


  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/10 dark:bg-gray-900/25 backdrop-blur-md border-b border-white/20 shadow-lg" : "bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-full flex items-center justify-center ">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Shop with Harvey
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.href)
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-pink-600 dark:text-pink-400 shadow-md"
                          : "text-pink-500 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-500 hover:bg-gray-100/30 dark:hover:bg-gray-800/40"
                      }`}
                    >
                      <span className="relative z-10 font-medium">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-lg border border-pink-500/20 dark:border-pink-400/20"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span 
                        className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                          isActive ? "w-8" : "w-0 group-hover:w-6"
                        }`}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Right Side Icons */}
                    <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative search-container">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-full bg-gray-100/30 dark:bg-gray-600/40 backdrop-blur-md text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-200/40 dark:hover:bg-gray-700/60 transition-all duration-300 shadow-md"
              >
                <Search className="h-5 w-5" />
              </motion.button>
              
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-14 w-96 p-6 bg-white/98 dark:bg-gray-900/98 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search Products</h3>
                    <form onSubmit={handleSearch} className="space-y-4">
                      <Input
                        placeholder="Search for dresses, fabrics, bags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-50/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white shadow-md"
                        >
                          <Search className="mr-2 h-4 w-4" />
                          Search
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setSearchOpen(false)}
                          className="border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Popular searches:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["Dresses", "Fabrics", "Bags", "Shoes"].map((term) => (
                          <button
                            key={term}
                            onClick={() => {
                              setSearchQuery(term)
                              handleSearch({ preventDefault: () => {} } as React.FormEvent)
                            }}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/50 backdrop-blur-md text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition-all duration-300 shadow-md"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-full bg-gray-100/40 dark:bg-gray-800/50 backdrop-blur-md text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-200/40 dark:hover:bg-gray-700/50 transition-all duration-300 shadow-md"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="block text-white/80 hover:text-white transition-colors duration-300 py-2 cursor-pointer"
                    >
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
