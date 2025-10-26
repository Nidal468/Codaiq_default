"use client";

import { motion } from "framer-motion";
import { FiSearch, FiFilter, FiChevronDown, FiStar, FiDownload } from "react-icons/fi";
import { BookOpen, LayoutGrid, Code, Paintbrush, ShoppingCart, Monitor } from "lucide-react";
import { useState } from "react";

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Portfolio", "E-commerce", "Blog", "Landing Page", "Business"];

  const templates = [
    {
      id: 1,
      title: "Minimal Portfolio",
      category: "Portfolio",
      description: "Clean and modern portfolio template for creatives",
      rating: 4.8,
      downloads: 1243,
      previewImage: "minimal-portfolio",
    },
    {
      id: 2,
      title: "E-Shop Pro",
      category: "E-commerce",
      description: "Full-featured online store template with product showcase",
      rating: 4.6,
      downloads: 978,
      previewImage: "eshop-pro",
    },
    {
      id: 3,
      title: "Tech Blog",
      category: "Blog",
      description: "Modern blogging template with code highlighting",
      rating: 4.7,
      downloads: 865,
      previewImage: "tech-blog",
    },
    {
      id: 4,
      title: "Startup Landing",
      category: "Landing Page",
      description: "Convert more visitors with this high-converting template",
      rating: 4.9,
      downloads: 1567,
      previewImage: "startup-landing",
    },
    {
      id: 5,
      title: "Consulting Firm",
      category: "Business",
      description: "Professional template for service-based businesses",
      rating: 4.5,
      downloads: 732,
      previewImage: "consulting-firm",
    },
    {
      id: 6,
      title: "Creative Agency",
      category: "Portfolio",
      description: "Bold design for creative agencies and studios",
      rating: 4.7,
      downloads: 1042,
      previewImage: "creative-agency",
    },
  ];

  const filteredTemplates = templates.filter(
    (template) =>
      (selectedCategory === "All" || template.category === selectedCategory) &&
      template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 pt-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Beautiful Templates for Every Need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Jumpstart your next project with professionally designed templates
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-white rounded-xl shadow-sm p-4 flex items-center"
          >
            <FiSearch className="text-gray-400 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter className="text-gray-700" />
              <span className="text-gray-700 font-medium">Filter</span>
              <FiChevronDown className={`text-gray-700 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </motion.button>

            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-10 p-3"
              >
                <div className="flex items-center gap-2 mb-3">
                  <LayoutGrid className="text-gray-700 w-5 h-5" />
                  <span className="font-medium text-gray-800">Categories</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-1 ${selectedCategory === category ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-800"
          >
            {selectedCategory === "All" ? "All Templates" : `${selectedCategory} Templates`}
          </motion.h2>
          <span className="text-gray-500">{filteredTemplates.length} templates</span>
        </div>

        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <BookOpen className="text-blue-500 w-16 h-16" />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{template.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-500 mr-1" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FiDownload className="mr-1" />
                      <span>{template.downloads}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Use This Template
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm p-12 text-center"
          >
            <BookOpen className="mx-auto w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No templates found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        <div className="mt-16 mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Can't find what you're looking for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
          >
            Our AI can generate a completely custom template tailored to your exact needs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium shadow-lg transition-all"
          >
            Generate Custom Template
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
