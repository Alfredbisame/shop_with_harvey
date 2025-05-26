"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@shopwithharvey.com",
    description: "Send us an email anytime",
    action: "mailto:hello@shopwithharvey.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+233 24 123 4567",
    description: "Mon-Fri from 8am to 6pm",
    action: "tel:+233241234567",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "+233 24 123 4567",
    description: "Chat with us instantly",
    action: "https://wa.me/233241234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Fashion Street, Accra, Ghana",
    description: "Our physical location",
    action: "#",
  },
]

const faqs = [
  {
    question: "What are your shipping options?",
    answer:
      "We offer standard shipping (3-5 business days) and express shipping (1-2 business days) across Ghana and selected African countries.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be in original condition with tags attached.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 15 countries across Africa. Shipping costs and delivery times vary by location.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email and SMS to monitor your package.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 p-6 h-full">
                  <CardContent className="p-0 text-center">
                    <info.icon className="h-12 w-12 mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-white/90 font-medium mb-1">{info.details}</p>
                    <p className="text-white/60 text-sm mb-4">{info.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <a href={info.action} target={info.action.startsWith("http") ? "_blank" : "_self"}>
                        Contact
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Business Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 mb-2">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Business Hours */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-pink-400" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Monday - Friday</span>
                    <Badge variant="outline" className="border-green-400/50 text-green-300">
                      8:00 AM - 6:00 PM
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Saturday</span>
                    <Badge variant="outline" className="border-yellow-400/50 text-yellow-300">
                      9:00 AM - 4:00 PM
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Sunday</span>
                    <Badge variant="outline" className="border-red-400/50 text-red-300">
                      Closed
                    </Badge>
                  </div>
                  <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
                    <p className="text-white/80 text-sm">
                      <strong>Note:</strong> WhatsApp support is available 24/7 for urgent inquiries.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">Quick FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-3 last:border-b-0">
                      <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                      <p className="text-white/70 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
