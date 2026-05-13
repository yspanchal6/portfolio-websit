import { motion } from 'motion/react';

import {
  Cpu,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  ShieldCheck,
  Activity,
  Globe,
} from 'lucide-react';

/* =========================================
   Component
========================================= */

export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  /* =========================================
     Social Links
  ========================================= */

  const socialLinks = [
    {
      icon: Github,
      link: 'https://github.com/yspanchal6',
      label: 'GitHub',
    },

    {
      icon: Linkedin,
      link: 'https://linkedin.com/in/yashpanchal2106',
      label: 'LinkedIn',
    },

    {
      icon: Twitter,
      link: '#',
      label: 'Twitter',
    },

    {
      icon: Globe,
      link: '#',
      label: 'Portfolio',
    },
  ];

  /* =========================================
     Quick Links
  ========================================= */

  const quickLinks = [
    'Home',
    'About',
    'Skills',
    'Projects',
  ];

  const systemLinks = [
    'Security',
    'Status',
    'Archives',
    'Terminal',
  ];

  return (
    <footer
      className="
        relative
        py-16
        md:py-20
        border-t
        border-white/5
        bg-cyber-black
        overflow-hidden
      "
    >
      {/* =========================================
          Background Watermark
      ========================================= */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          font-display
          text-[20vw]
          md:text-[15vw]
          font-black
          text-white/[0.015]
          tracking-tighter
          whitespace-nowrap
          pointer-events-none
          uppercase
          select-none
        "
      >
        YASH_PROTOCOL
      </div>

      {/* =========================================
          Background Glow
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[300px]
          md:w-[500px]
          h-[300px]
          md:h-[500px]
          bg-neon-blue/5
          blur-[80px]
          md:blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none" />

      {/* =========================================
          Main Container
      ========================================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >
        {/* =========================================
            Main Grid
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-12
            gap-10
            md:gap-12
            mb-14
            md:mb-16
          "
        >
          {/* =========================================
              Brand Column
          ========================================= */}

          <div
            className="
              md:col-span-4
              space-y-5
              md:space-y-6
            "
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="
                  p-2.5
                  rounded-xl
                  bg-neon-blue/10
                  border
                  border-neon-blue/30
                  shadow-[0_0_20px_rgba(0,209,255,0.1)]
                "
              >
                <Cpu className="text-neon-blue w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
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
            </div>

            {/* Description */}
            <p
              className="
                text-gray-500
                font-sans
                text-sm
                leading-relaxed
                max-w-sm
              "
            >
              Architecting secure,
              scalable digital
              ecosystems through
              advanced logic,
              cybersecurity, AI
              systems, and
              zero-trust
              infrastructures for
              next-generation
              platforms.
            </p>

            {/* Social Icons */}
            <div
              className="
                flex
                flex-wrap
                gap-3
                sm:gap-4
              "
            >
              {socialLinks.map(
                (item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    aria-label={
                      item.label
                    }
                    className="
                      p-2.5
                      sm:p-2
                      rounded-lg
                      bg-white/5
                      border
                      border-white/5
                      text-gray-500
                      hover:text-neon-blue
                      hover:border-neon-blue/30
                      transition-all
                      touch-manipulation
                    "
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.a>
                )
              )}
            </div>

            {/* Quote */}
            <div
              className="
                pt-4
                border-t
                border-white/5
              "
            >
              <p
                className="
                  text-[10px]
                  font-mono
                  text-gray-600
                  italic
                  leading-relaxed
                "
              >
                "CODE_PRINCIPLE":
                Clean code is not
                written — it is
                architected with
                purpose.
              </p>
            </div>
          </div>

          {/* =========================================
              Quick Links
          ========================================= */}

          <div
            className="
              md:col-span-4
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-8
            "
          >
            {/* Directory */}
            <div className="space-y-4">
              <h4
                className="
                  font-mono
                  text-[10px]
                  text-white
                  uppercase
                  tracking-[0.3em]
                  font-bold
                "
              >
                DIRECTORY
              </h4>

              <ul className="space-y-3">
                {quickLinks.map(
                  (link) => (
                    <li
                      key={link}
                    >
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="
                          font-mono
                          text-[10px]
                          sm:text-[11px]
                          text-gray-500
                          hover:text-neon-blue
                          transition-colors
                          uppercase
                          touch-manipulation
                        "
                      >
                        // {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* System */}
            <div className="space-y-4">
              <h4
                className="
                  font-mono
                  text-[10px]
                  text-white
                  uppercase
                  tracking-[0.3em]
                  font-bold
                "
              >
                SYSTEM
              </h4>

              <ul className="space-y-3">
                {systemLinks.map(
                  (link) => (
                    <li
                      key={link}
                    >
                      <a
                        href="#"
                        className="
                          font-mono
                          text-[10px]
                          sm:text-[11px]
                          text-gray-500
                          hover:text-neon-green
                          transition-colors
                          uppercase
                          touch-manipulation
                        "
                      >
                        :: {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* =========================================
              Telemetry Column
          ========================================= */}

          <div
            className="
              md:col-span-4
              space-y-6
            "
          >
            <h4
              className="
                font-mono
                text-[10px]
                text-white
                uppercase
                tracking-[0.15em]
                sm:tracking-[0.3em]
                font-bold
                underline
                decoration-neon-blue/50
                underline-offset-8
              "
            >
              REAL-TIME_TELEMETRY
            </h4>

            {/* Status Items */}
            <div className="space-y-4">
              {/* System Health */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  "
                >
                  <Activity className="w-3 h-3 text-neon-green" />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-gray-500
                      uppercase
                    "
                  >
                    System_Health
                  </span>
                </div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-neon-green
                  "
                >
                  99.99%
                </span>
              </div>

              {/* Security */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  "
                >
                  <ShieldCheck className="w-3 h-3 text-neon-blue" />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-gray-500
                      uppercase
                    "
                  >
                    Security_Layer
                  </span>

                  <span
                    className="
                      px-1.5
                      py-0.5
                      rounded
                      bg-neon-blue/10
                      border
                      border-neon-blue/30
                      text-[6px]
                      sm:text-[7px]
                      text-neon-blue
                      font-mono
                    "
                  >
                    V4.0
                  </span>
                </div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-neon-blue
                  "
                >
                  ACTIVE
                </span>
              </div>

              {/* Deployment */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  "
                >
                  <Terminal className="w-3 h-3 text-gray-700" />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-gray-500
                      uppercase
                    "
                  >
                    Deployment
                  </span>
                </div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-gray-400
                  "
                >
                  V4.3.1_DEV
                </span>
              </div>
            </div>

            {/* Awaiting Status */}
            <div
              className="
                pt-6
                border-t
                border-white/5
                flex
                items-center
                gap-2
                flex-wrap
              "
            >
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />

              <span
                className="
                  font-mono
                  text-[8px]
                  text-gray-600
                  uppercase
                  tracking-widest
                "
              >
                Awaiting_Instructions...
              </span>
            </div>
          </div>
        </div>

        {/* =========================================
            Bottom Bar
        ========================================= */}

        <div
          className="
            pt-10
            md:pt-12
            border-t
            border-white/5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            md:gap-6
          "
        >
          {/* Status Row */}
          <div
            className="
              flex
              gap-3
              sm:gap-6
              md:gap-8
              flex-wrap
              justify-center
              font-mono
              text-[7px]
              sm:text-[9px]
              text-gray-600
              uppercase
              tracking-widest
            "
          >
            <span>
              REG_INIT: 2024
            </span>

            <span>
              IP_STACK:
              IPv6_ACTIVE
            </span>

            <span>
              LOC:
              IN_DEL_ZONE
            </span>
          </div>

          {/* Copyright */}
          <div
            className="
              text-gray-600
              font-mono
              text-[7px]
              sm:text-[9px]
              uppercase
              tracking-widest
              text-center
              md:text-right
              leading-relaxed
            "
          >
            © {currentYear}{' '}
            YASH_PAN_ARCHIVE_SECURE.
            <br className="md:hidden" />
            ALL RIGHTS RESERVED.
            // SYSTEM_READY
          </div>
        </div>
      </div>
    </footer>
  );
}