"use client"

import { motion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiMapPin, FiPhone } from 'react-icons/fi'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for support, partnerships, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Live Chat */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="text-base text-gray-800">support@codaiq.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="text-base text-gray-800">+1 (800) COD-AIQ</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="text-base text-gray-800">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FiMessageSquare className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Live Chat Support</h2>
              </div>
              <p className="mb-6 opacity-90">
                Need immediate help? Our support team is available 24/7 via live chat.
              </p>
              <button className="w-full bg-white text-blue-600 font-medium py-2.5 px-6 rounded-md hover:bg-gray-100 transition duration-200 ease-in-out">
                Start Chat
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage