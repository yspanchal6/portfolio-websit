import {
  useState,
  useEffect,
} from 'react';

import {
  motion,
  AnimatePresence,
} from 'motion/react';

import {
  ChevronUp,
  Cpu,
  ArrowUp,
} from 'lucide-react';

/* =========================================
   ScrollToTop Component
========================================= */

export default function ScrollToTop() {
  const [isVisible, setIsVisible] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  /* =========================================
     Scroll Handler
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop /
          documentHeight) *
        100;

      setScrollProgress(progress);

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  /* =========================================
     Scroll To Top
  ========================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.7,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            fixed
            bottom-5
            right-4
            sm:bottom-8
            sm:right-8
            z-[120]
          "
        >
          {/* =========================================
              Outer Ring Progress
          ========================================= */}

          <div className="relative group">
            <svg
              className="
                absolute
                inset-0
                w-14
                h-14
                sm:w-16
                sm:h-16
                -rotate-90
              "
              viewBox="0 0 100 100"
            >
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                strokeWidth="5"
                className="stroke-white/5 fill-none"
              />

              {/* Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                strokeWidth="5"
                strokeLinecap="round"
                className="
                  stroke-neon-blue
                  fill-none
                "
                style={{
                  pathLength:
                    scrollProgress /
                    100,
                }}
              />
            </svg>

            {/* =========================================
                Main Button
            ========================================= */}

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              onClick={
                scrollToTop
              }
              aria-label="Scroll to top"
              className="
                relative
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-2xl
                bg-cyber-black/90
                backdrop-blur-sm
                md:backdrop-blur-xl
                border
                border-neon-blue/20
                text-neon-blue
                flex
                items-center
                justify-center
                overflow-hidden
                shadow-[0_0_30px_rgba(0,209,255,0.18)]
                touch-manipulation
              "
            >
              {/* =========================================
                  Animated Background Glow
              ========================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-neon-blue/10
                  via-transparent
                  to-neon-green/5
                  opacity-80
                "
              />

              {/* =========================================
                  Rotating Border
              ========================================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat:
                    Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-1
                  rounded-[14px]
                  border
                  border-dashed
                  border-neon-blue/15
                "
              />

              {/* =========================================
                  Pulse Layer
              ========================================= */}

              <motion.div
                animate={{
                  opacity: [
                    0.2, 0.5, 0.2,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat:
                    Infinity,
                }}
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  border
                  border-neon-blue/20
                "
              />

              {/* =========================================
                  Core Icon
              ========================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  className="relative"
                >
                  <ChevronUp
                    className="
                      w-5
                      h-5
                      sm:w-6
                      sm:h-6
                    "
                  />

                  <ArrowUp
                    className="
                      absolute
                      inset-0
                      w-5
                      h-5
                      sm:w-6
                      sm:h-6
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />
                </motion.div>

                {/* Small CPU */}
                <Cpu
                  className="
                    absolute
                    -bottom-3
                    w-3
                    h-3
                    text-neon-green
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* =========================================
                  Scan Line
              ========================================= */}

              <motion.div
                animate={{
                  y: [
                    '-100%',
                    '100%',
                  ],
                }}
                transition={{
                  repeat:
                    Infinity,
                  duration: 2.5,
                  ease: 'linear',
                }}
                className="
                  absolute
                  left-0
                  w-full
                  h-6
                  bg-gradient-to-b
                  from-transparent
                  via-neon-blue/10
                  to-transparent
                  pointer-events-none
                "
              />
            </motion.button>

            {/* =========================================
                Floating Label
            ========================================= */}

            <div
              className="
                absolute
                -top-9
                left-1/2
                -translate-x-1/2
                px-2.5
                py-1
                rounded-md
                bg-black/90
                border
                border-white/10
                text-[7px]
                sm:text-[8px]
                font-mono
                uppercase
                tracking-widest
                text-gray-400
                whitespace-nowrap
                pointer-events-none
                opacity-0
                translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-300
              "
            >
              RETURN_TOP
            </div>

            {/* =========================================
                Progress Percentage
            ========================================= */}

            <div
              className="
                absolute
                -bottom-7
                left-1/2
                -translate-x-1/2
                text-[7px]
                sm:text-[8px]
                font-mono
                text-gray-600
                uppercase
                tracking-widest
                whitespace-nowrap
              "
            >
              {Math.round(
                scrollProgress
              )}
              % SYNC
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}