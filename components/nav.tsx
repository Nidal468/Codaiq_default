"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiLayout, FiGrid, FiMail, FiUser } from 'react-icons/fi';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'Dashboard', path: '/dashboard', icon: <FiLayout /> },
    { name: 'Templates', path: '/templates', icon: <FiGrid /> },
    { name: 'Contact', path: '/contact', icon: <FiMail /> },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-[#1A1A2E]/80 shadow-sm'
          : 'backdrop-blur-md bg-[#1A1A2E]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#E2E8F0] tracking-tight">
                Codaiq
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-[#E2E8F0] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#1A1A2E] bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-200"
              >
                <FiUser className="mr-2" />
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-[#E2E8F0] hover:text-[#3B82F6] focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1A1A2E] border-none">
                <SheetHeader>
                  <SheetTitle className="text-[#E2E8F0] text-xl font-bold">
                    Codaiq
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 px-2 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#E2E8F0] hover:text-[#3B82F6] hover:bg-[#1A1A2E]/50 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {link.icon}
                        {link.name}
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/dashboard"
                    className="block w-full px-3 py-2 rounded-md text-base font-medium text-[#1A1A2E] bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-200 mt-4 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
