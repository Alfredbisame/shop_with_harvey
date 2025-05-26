"use client"

import { motion } from "framer-motion"
import { Users, Award, Heart, Truck, Shield, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Happy Customers", value: "10,000+", icon: Users },
  { label: "Products Sold", value: "50,000+", icon: Award },
  { label: "Years of Experience", value: "5+", icon: Star },
  { label: "Countries Served", value: "15+", icon: Heart },
]

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers' satisfaction and strive to exceed expectations in every interaction.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We source only the finest materials and products to ensure premium quality in everything we offer.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your privacy and security are paramount. We maintain the highest standards of data protection.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to get your favorite products to you as soon as possible.",
  },
]

const team = [
  {
    name: "Joyce Harvey",
    role: "Founder & CEO",
    image: "/s3.jpg",
    description: "Visionary leader with 10+ years in fashion retail",
  },
  {
    name: "Sarah Williams",
    role: "Head of Design",
    image: "/s2.jpg",
    description: "Creative director with expertise in contemporary fashion",
  },
  {
    name: "Eng. Fred",
    role: "Operations Manager",
    image: "/fred.jpg",
    description: "Logistics expert ensuring smooth operations",
  },
  {
    name: "Kevin Davis",
    role: "Customer Experience",
    image: "/kevin.jpg",
    description: "Dedicated to providing exceptional customer service",
  },
]

export default function AboutPage() {
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
            About Shop with Harvey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Your trusted partner in premium fashion and lifestyle products, delivering quality and style since 2019
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 p-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-pink-400" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-white/70">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Founded in 2019 by Joyce Harvey, Shop with Harvey began as a small boutique with a simple mission:
                  to provide high-quality fashion and lifestyle products that combine style, comfort, and affordability.
                </p>
                <p>
                  What started as a passion project has grown into a thriving online marketplace, serving customers
                  across multiple countries. We've built our reputation on trust, quality, and exceptional customer
                  service.
                </p>
                <p>
                  Today, we continue to expand our collection while maintaining our commitment to excellence. Every
                  product in our store is carefully selected to meet our high standards and your expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/s2.jpg"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 p-6 h-full">
                  <value.icon className="h-12 w-12 mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <Badge className="bg-gradient-to-r from-pink-500/80 to-indigo-600/80 text-white mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-white/70 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-pink-500/20 backdrop-blur-md border-white/20 p-8">
                <p className="text-xl text-white/90 leading-relaxed">
                  "To democratize access to premium fashion and lifestyle products by providing an exceptional online
                  shopping experience that combines quality, affordability, and outstanding customer service. We believe
                  everyone deserves to look and feel their best, and we're here to make that possible."
                </p>
                <div className="mt-6">
                  <p className="text-white/70 font-medium">- Joyce Harvey, Founder & CEO</p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
