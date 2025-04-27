"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Ticket, ShoppingBag, Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "EVENTS",
    icon: <Calendar className="h-4 w-4 mr-2" />,
    subItems: [
      { title: "Upcoming Festivals", href: "#" },
      { title: "Concert Series", href: "#" },
      { title: "Special Events", href: "#" },
    ],
  },
  {
    title: "EXPERIENCES",
    icon: <Ticket className="h-4 w-4 mr-2" />,
    subItems: [
      { title: "VIP Packages", href: "#" },
      { title: "Backstage Tours", href: "#" },
      { title: "Meet & Greets", href: "#" },
    ],
  },

  {
    title: "MUSIC",
    icon: <Music className="h-4 w-4 mr-2" />,
    subItems: [
      { title: "New Releases", href: "#" },
      { title: "Top Charts", href: "#" },
      { title: "Featured Artists", href: "#" },
    ],
  },
  {
    title: "MORE",
    icon: null,
    subItems: [
      { title: "About Us", href: "#" },
      { title: "Contact", href: "#" },
      { title: "FAQ", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphism py-2" : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[hsl(var(--primary))]">Ticket</span>Con
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center py-2 hover:text-[hsl(var(--primary))] transition-colors">
                    {item.icon}
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Dropdown Menus */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-full glassmorphism py-6 hidden lg:block"
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-3 gap-8">
                  {navItems
                    .find((item) => item.title === activeMenu)
                    ?.subItems.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="p-4 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <h3 className="text-lg font-semibold mb-2">
                          {subItem.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          Discover {subItem.title.toLowerCase()} and more
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs z-50 bg-black/30 backdrop-blur-md border-l border-white/10 overflow-y-auto pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              {/* Close Button (X Icon) */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-white z-60"
              >
                <X className="h-6 w-6" />
              </button>

              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      {item.icon}
                      {item.title}
                    </h3>
                    <ul className="space-y-2 ml-6">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className="text-gray-300 hover:text-[hsl(var(--primary))]"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
