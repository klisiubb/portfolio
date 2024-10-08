"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

interface NavItem {
  name: string;
  link: string;
}

export default function Navbar({ navItems }: { navItems: NavItem[] }) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex items-center justify-center space-x-2 px-4 py-2 backdrop-blur-md bg-gray-50 dark:bg-neutral-900 rounded-full shadow-lg dark:shadow-2xl">
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            className="relative"
            onHoverStart={() => setActiveItem(item.name)}
            onHoverEnd={() => setActiveItem(null)}
          >
            <a
              href={item.link}
              className="px-4 py-2 rounded-full text-base font-medium transition-colors duration-200 hover:font-bold hover:text-white"
            >
              {item.name}
            </a>
            {activeItem === item.name && (
              <motion.div
                className="absolute inset-0 bg-blue-500 dark:bg-blue-700 rounded-full -z-10"
                layoutId="navbar-active-item"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.li>
        ))}
        <ModeToggle />
      </ul>
    </nav>
  );
}
