"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { FiTwitter, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className="bg-[#1A1A2E] text-[#E2E8F0] py-12 px-6 border-t border-[#2a2a3a]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
                Codaiq
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#94a3b8]">
              AI-powered website builder for everyone
            </p>
          </motion.div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link 
                  href="/" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link 
                  href="/dashboard" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Dashboard
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link 
                  href="/templates" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Templates
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link 
                  href="/contact" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="#" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Docs
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="#" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Blog
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="#" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Support
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="#" 
                  className="text-sm text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  Pricing
                </a>
              </motion.li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://twitter.com/codaiq" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                className="text-lg text-[#94a3b8] transition-all"
              >
                <FiTwitter />
              </motion.a>
              <motion.a 
                href="https://facebook.com/codaiq" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                className="text-lg text-[#94a3b8] transition-all"
              >
                <FiFacebook />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/codaiq" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                className="text-lg text-[#94a3b8] transition-all"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/codaiq" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                className="text-lg text-[#94a3b8] transition-all"
              >
                <FiGithub />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a3a] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} Codaiq. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-[#64748b] hover:text-[#3B82F6]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#64748b] hover:text-[#3B82F6]">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-[#64748b] hover:text-[#3B82F6]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}