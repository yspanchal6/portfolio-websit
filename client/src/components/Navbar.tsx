import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Cpu,
  Github,
  Activity
} from 'lucide-react';

import { useState, useEffect } from 'react';
import { cn } from '../utils/utils';

const navLinks = [
  { name: 'FILES', href: '#about', id: '01' },
  { name: 'MASTERY', href: '#skills', id: '02' },
  { name: 'LOGS', href: '#projects', id: '03' },
  { name: 'CHRONO', href: '#experience', id: '04' },
  { name: 'TRANS', href: '#contact', id: '05' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Prevent Body Scroll When Mobile Menu Open */
  useEffect(() => {
    document.body.style.overflow = isOpen
      ? 'hidden'
      : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        `
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        border-b
        `,
        scrolled
          ? `
            py-3
            bg-cyber-black/60
            supports-[backdrop-filter]:bg-cyber-black/40
            backdrop-blur-xl
            border-white/10
          `
          : `
            py-5
            lg:py-6
            bg-transparent
            border-transparent
          `
      )}
    >
      {/* Main Container */}
      <div
        className="
          max-w-7xl
          mx-auto
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div className="flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              flex
              items-center
              gap-3
              group
              cursor-pointer
              select-none
            "
          >
            <div className="relative">
              <Cpu
                className="
                  text-neon-blue
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  group-hover:rotate-[360deg]
                  transition-transform
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-neon-blue
                  blur-[10px]
                  opacity-20
                  animate-pulse
                "
              />
            </div>

            <span
              className="
                font-display
                font-bold
                text-xl
                sm:text-2xl
                tracking-tighter
                text-white
              "
            >
              YASH
              <span className="text-neon-blue">
                .SYS
              </span>
            </span>
          </motion.div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10">
            {/* Nav Links */}
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    relative
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      relative
                      z-10
                      text-gray-500
                      group-hover:text-white
                      font-mono
                      text-[11px]
                      tracking-[0.2em]
                      transition-colors
                      uppercase
                    "
                  >
                    {link.name}
                  </span>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-0
                      h-[1px]
                      bg-neon-blue
                      transition-all
                      duration-300
                      group-hover:w-full
                      opacity-50
                      shadow-[0_0_8px_rgba(0,209,255,0.8)]
                    "
                  />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 w-[1px] bg-white/10" />

            {/* Right Utilities */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Activity
                  className="
                    w-3
                    h-3
                    text-neon-green
                    animate-pulse
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-gray-500
                    uppercase
                    tracking-widest
                  "
                >
                  NETWORK_SECURE
                </span>
              </div>

              <motion.a
                whileHover={{
                  scale: 1.1,
                  rotate: 12,
                }}
                href="#"
                className="
                  text-gray-500
                  hover:text-white
                  transition-colors
                "
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="md:hidden">
            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="
                p-2
                rounded-md
                text-gray-300
                hover:text-neon-blue
                transition-colors
              "
            >
              {isOpen ? (
                <X className="w-6 h-6 text-neon-blue" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: '100vh',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: 'easeOut',
            }}
            className="
              md:hidden
              overflow-y-auto
              bg-cyber-black/90
              supports-[backdrop-filter]:bg-cyber-black/70
              backdrop-blur-2xl
              border-b
              border-white/5
            "
          >
            {/* Menu Content */}
            <div
              className="
                px-5
                pt-24
                pb-12
                space-y-4
                min-h-screen
              "
            >
              {/* Nav Items */}
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                  className="
                    flex
                    items-center
                    justify-between
                    group
                    px-5
                    py-5
                    rounded-xl
                    bg-white/[0.03]
                    border
                    border-white/10
                    hover:border-neon-blue/40
                    hover:bg-neon-blue/[0.03]
                    transition-all
                    duration-300
                  "
                >
                  <span
                    className="
                      text-gray-300
                      group-hover:text-neon-blue
                      font-mono
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      transition-colors
                      font-bold
                    "
                  >
                    {link.name}
                  </span>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-gray-600
                    "
                  >
                    /{link.id}
                  </span>
                </motion.a>
              ))}

              {/* Bottom Utilities */}
              <div
                className="
                  pt-10
                  flex
                  justify-center
                  gap-14
                "
              >
                {/* Active */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-2
                    text-gray-500
                  "
                >
                  <Activity className="w-4 h-4" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-widest
                    "
                  >
                    ACTIVE
                  </span>
                </div>

                {/* Github */}
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="
                    flex
                    flex-col
                    items-center
                    gap-2
                    text-gray-500
                    hover:text-neon-blue
                    transition-colors
                  "
                >
                  <Github className="w-4 h-4" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-widest
                    "
                  >
                    SOURCE
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}