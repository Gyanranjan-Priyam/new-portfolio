"use client";

import { useState } from 'react';
import FlowingMenu from '@/components/FlowingMenu';
import { Menu, X, Home, User, FolderOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const menuItems = [
  {
    icon: Home,
    link: '/',
    text: 'Home',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: User,
    link: '/about',
    text: 'About',
    image: 'https://res.cloudinary.com/dw47ib0sh/image/upload/v1763618303/c0zbxzls7ejcxlavadql.jpg'
  },
  {
    icon: FolderOpen,
    link: '/projects',
    text: 'Projects',
    image: 'https://res.cloudinary.com/dw47ib0sh/image/upload/v1763618484/kw4avbiglfnr63tpahaa.jpg'
  },
  {
    icon: Mail,
    link: '/contact',
    text: 'Contact',
    image: 'https://res.cloudinary.com/dw47ib0sh/image/upload/v1763618581/opqnyrlc1t1ffst8skqg.jpg'
  }
];

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[100] p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors shadow-lg cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-sm"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <FlowingMenu items={menuItems} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
