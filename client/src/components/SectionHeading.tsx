import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle?: string;
  number: string;
}

/* =========================================
   SectionHeading Component
========================================= */

export default function SectionHeading({
  title,
  subtitle,
  number,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative
        mb-10
        md:mb-14
        overflow-hidden
      "
    >
      {/* =========================================
          Ambient Glow Effects
      ========================================= */}

      <div
        className="
          absolute
          -top-10
          left-0
          w-40
          h-40
          bg-neon-green/5
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-32
          h-32
          bg-neon-blue/5
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* =========================================
          Top Metadata Row
      ========================================= */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-3
          md:gap-4
          mb-3
        "
      >
        {/* Section Number */}
        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
            flex
            items-center
            gap-2
            shrink-0
          "
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />

          <span
            className="
              font-mono
              text-neon-green
              text-[10px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-[0.25em]
              md:tracking-[0.4em]
              whitespace-nowrap
            "
          >
            SECTION_{number}
          </span>
        </motion.div>

        {/* Divider */}
        <div
          className="
            relative
            flex-1
            h-px
            overflow-hidden
            bg-white/5
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: '100%',
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              absolute
              inset-y-0
              left-0
              bg-gradient-to-r
              from-neon-green
              via-neon-blue/40
              to-transparent
            "
          />
        </div>

        {/* Status Badge */}
        <motion.div
          initial={{
            opacity: 0,
            x: 10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
          }}
          className="
            hidden
            sm:flex
            items-center
            gap-2
            px-2.5
            py-1
            rounded-md
            bg-neon-green/5
            border
            border-neon-green/10
            backdrop-blur-sm
            whitespace-nowrap
          "
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />

          <span
            className="
              font-mono
              text-[7px]
              text-neon-green
              uppercase
              tracking-widest
            "
          >
            ACTIVE_NODE
          </span>
        </motion.div>
      </div>

      {/* =========================================
          Main Heading Area
      ========================================= */}

      <div className="relative z-10">
        {/* Shadow Text */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            select-none
            opacity-[0.04]
            overflow-hidden
          "
        >
          <h2
            className="
              font-display
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              uppercase
              tracking-tight
              md:tracking-tighter
              leading-none
              text-transparent
              [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
            "
          >
            {title}
          </h2>
        </div>

        {/* Main Title */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
            font-display
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            uppercase
            tracking-tight
            md:tracking-tighter
            leading-none
            text-white
            break-words
          "
        >
          <span className="relative z-10">
            {title}
          </span>

          {/* Animated Dot */}
          <motion.span
            animate={{
              opacity: [
                1, 0.4, 1,
              ],
              scale: [
                1, 1.08, 1,
              ],
            }}
            transition={{
              repeat:
                Infinity,
              duration: 2,
            }}
            className="
              ml-1
              md:ml-2
              text-neon-green
              inline-block
            "
          >
            .
          </motion.span>
        </motion.h2>

        {/* Accent Bar */}
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: '140px',
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-4
            h-[2px]
            bg-gradient-to-r
            from-neon-green
            via-neon-blue/50
            to-transparent
            rounded-full
          "
        />
      </div>

      {/* =========================================
          Subtitle
      ========================================= */}

      {subtitle && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="
            relative
            z-10
            mt-4
            flex
            items-start
            gap-3
            max-w-3xl
          "
        >
          {/* Side Indicator */}
          <div
            className="
              mt-1
              w-1.5
              h-1.5
              rounded-full
              bg-neon-blue
              shrink-0
            "
          />

          {/* Subtitle Text */}
          <p
            className="
              text-gray-500
              font-mono
              text-[10px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-[0.15em]
              sm:tracking-[0.25em]
              leading-relaxed
            "
          >
            {subtitle}
          </p>
        </motion.div>
      )}

      {/* =========================================
          Decorative Scan Line
      ========================================= */}

      <motion.div
        animate={{
          x: [
            '-100%',
            '120%',
          ],
        }}
        transition={{
          repeat:
            Infinity,
          duration: 5,
          ease: 'linear',
        }}
        className="
          absolute
          top-0
          w-40
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.03]
          to-transparent
          pointer-events-none
        "
      />
    </motion.div>
  );
}