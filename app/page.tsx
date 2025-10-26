"use client";

import { FiArrowRight, FiCode, FiCpu, FiLayers, FiLock, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <FiCode className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Design",
      description: "Automated suggestions for layouts, colors, and content based on your preferences."
    },
    {
      icon: <FiLayers className="w-6 h-6 text-blue-500" />,
      title: "Professional Templates",
      description: "Hundreds of customizable templates designed for different industries."
    },
    {
      icon: <FiCpu className="w-6 h-6 text-blue-500" />,
      title: "Smart Content Tools",
      description: "AI-generated copy and image recommendations to speed up content creation."
    },
    {
      icon: <FiLock className="w-6 h-6 text-blue-500" />,
      title: "Secure Hosting",
      description: "One-click publishing with SSL encryption and 99.9% uptime guarantee."
    },
    {
      icon: <FiZap className="w-6 h-6 text-blue-500" />,
      title: "Blazing Fast",
      description: "Optimized performance with CDN delivery and automatic image compression."
    }
  ];

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call would go here
    console.log('Submitted email:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Websites <span className="text-blue-600">Without Code</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Codaiq's AI-powered platform lets you create stunning websites in minutes - no technical skills needed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-colors"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg shadow-lg border border-gray-200 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-gray-800 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-purple-50 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-4">Your Website Preview</div>
                <p className="text-gray-600 mb-6">Drag and drop to customize every element</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-blue-600 font-medium"
                >
                  Try the editor <FiArrowRight className="ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need To Build Online</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform combines powerful tools with simplicity to help you succeed.</p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of creators who launched their sites with Codaiq.</p>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Get Started Free
              </motion.button>
            </motion.form>
            
            <p className="mt-4 text-blue-100 text-sm">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}