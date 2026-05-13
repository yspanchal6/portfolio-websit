import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';

import {
  Trophy,
  ShieldCheck,
  ExternalLink,
  Award,
  Zap,
  Globe,
  Cpu,
  Lock,
  BrainCircuit,
  Activity,
} from 'lucide-react';

/* =========================================
   COLOR MAP (Production Safe)
========================================= */

const colorMap = {
  'neon-blue': {
    text: 'text-neon-blue',
    border: 'border-neon-blue',
    glow:
      'from-neon-blue/10',
  },

  'neon-green': {
    text: 'text-neon-green',
    border:
      'border-neon-green',
    glow:
      'from-neon-green/10',
  },
};

/* =========================================
   Certifications Data
========================================= */

const certifications = [
  {
    id: '01',

    title:
      'CYBER SECURITY ANALYST',

    org: 'TCS Job Simulation',

    date: '2024',

    desc:
      'Enterprise-level vulnerability assessment, security analysis, and threat mitigation workflows.',

    icon: (
      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
    ),

    color: 'neon-blue',
  },

  {
    id: '02',

    title:
      'ETHICAL HACKING ESSENTIALS',

    org:
      'Cybersecurity Training',

    date: '2023',

    desc:
      'Hands-on ethical hacking concepts including penetration testing and network security fundamentals.',

    icon: (
      <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
    ),

    color: 'neon-green',
  },

  {
    id: '03',

    title:
      'CYBER AWARENESS PROTOCOL',

    org:
      'Security Governance',

    date: '2023',

    desc:
      'Focused on social engineering defense, digital hygiene, and enterprise-level cybersecurity awareness.',

    icon: (
      <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
    ),

    color: 'neon-blue',
  },

  {
    id: '04',

    title:
      'CYBER SECURITY ENGINEERING',

    org:
      'Tech Elecon Pvt Ltd',

    date: '2024',

    desc:
      'Real-world cybersecurity engineering internship focused on monitoring, infrastructure security, and operational defense.',

    icon: (
      <Award className="w-5 h-5 sm:w-6 sm:h-6" />
    ),

    color: 'neon-green',
  },
];

/* =========================================
   Component
========================================= */

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        relative
        py-20
        md:py-32
        bg-cyber-black
        overflow-hidden
        border-t
        border-white/5
      "
    >
      {/* =========================================
          Background Effects
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,10,0.05),transparent_50%)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[350px]
          md:w-[600px]
          h-[350px]
          md:h-[600px]
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
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >
        <SectionHeading
          title="ACCREDITATION_VAULT"
          subtitle="Verified Skills & Security Certifications"
          number="05"
        />

        {/* =========================================
            Certifications Grid
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
            md:gap-6
            mt-12
            md:mt-20
          "
        >
          {certifications.map(
            (cert, idx) => {
              const style =
                colorMap[
                  cert.color as keyof typeof colorMap
                ];

              return (
                <motion.div
                  key={cert.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      idx * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    relative
                    h-full
                  "
                >
                  {/* Glow Layer */}
                  <div
                    className={`
                      absolute
                      -inset-[1px]
                      rounded-2xl
                      bg-gradient-to-br
                      ${style.glow}
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      blur-xl
                      transition-opacity
                      duration-500
                    `}
                  />

                  {/* Card */}
                  <div
                    className={`
                      relative
                      h-full
                      p-5
                      sm:p-6
                      lg:p-8
                      bg-cyber-gray/40
                      border
                      rounded-2xl
                      overflow-hidden
                      backdrop-blur-sm
                      md:backdrop-blur-md
                      transition-all
                      duration-500
                      hover:border-white/20
                      ${style.border}/30
                    `}
                  >
                    {/* Background Grid */}
                    <div className="absolute inset-0 cyber-grid opacity-[0.03]" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* =========================================
                          Header
                      ========================================= */}

                      <div className="flex justify-between items-start mb-6">
                        {/* Icon */}
                        <div
                          className={`
                            p-3
                            sm:p-4
                            rounded-xl
                            bg-black/40
                            border
                            border-white/5
                            ${style.text}
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          `}
                        >
                          {cert.icon}
                        </div>

                        <Trophy
                          className="
                            w-4
                            h-4
                            text-gray-700
                            group-hover:text-neon-green
                            transition-colors
                          "
                        />
                      </div>

                      {/* =========================================
                          Meta
                      ========================================= */}

                      <div className="mb-5">
                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            mb-2
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-[9px]
                              text-gray-600
                              uppercase
                              tracking-widest
                            "
                          >
                            {cert.date}
                          </span>

                          <div className="w-1 h-1 rounded-full bg-white/20" />

                          <span
                            className={`
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-widest
                              ${style.text}
                            `}
                          >
                            {cert.org}
                          </span>
                        </div>

                        <h4
                          className="
                            font-display
                            text-base
                            sm:text-lg
                            font-bold
                            text-white
                            uppercase
                            tracking-tight
                            leading-tight
                            transition-colors
                            group-hover:text-neon-blue
                          "
                        >
                          {cert.title}
                        </h4>
                      </div>

                      {/* =========================================
                          Description
                      ========================================= */}

                      <p
                        className="
                          text-[11px]
                          sm:text-xs
                          text-gray-500
                          leading-relaxed
                          font-sans
                          line-clamp-4
                          flex-grow
                        "
                      >
                        {cert.desc}
                      </p>

                      {/* =========================================
                          Footer
                      ========================================= */}

                      <div
                        className="
                          pt-6
                          mt-6
                          border-t
                          border-white/5
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        {/* Left */}
                        <div className="flex items-center gap-2">
                          <Zap className="w-3 h-3 text-neon-green animate-pulse" />

                          <span
                            className="
                              font-mono
                              text-[8px]
                              text-gray-600
                              uppercase
                              tracking-widest
                            "
                          >
                            VERIFIED_BLOCK
                          </span>
                        </div>

                        {/* Right */}
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          className="
                            p-2
                            bg-white/5
                            border
                            border-white/10
                            rounded-lg
                            text-gray-500
                            hover:text-white
                            transition-colors
                          "
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* =========================================
            Neural Capability Tracker
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-16
            md:mt-24
            p-5
            sm:p-6
            md:p-8
            bg-gradient-to-r
            from-cyber-gray/40
            to-transparent
            border
            border-white/5
            rounded-2xl
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            md:gap-10
            overflow-hidden
            relative
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              top-0
              right-0
              w-60
              h-60
              bg-neon-blue/5
              blur-3xl
              pointer-events-none
            "
          />

          {/* =========================================
              Left Content
          ========================================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-6
              md:gap-8
              relative
              z-10
            "
          >
            {/* CPU Circle */}
            <div className="relative flex-shrink-0">
              <div
                className="
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-full
                  border-2
                  border-neon-blue/20
                  flex
                  items-center
                  justify-center
                  bg-black/30
                "
              >
                <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-neon-blue animate-pulse" />
              </div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat:
                    Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-0
                  border
                  border-dashed
                  border-neon-blue
                  rounded-full
                "
              />
            </div>

            {/* Text */}
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <BrainCircuit className="w-4 h-4 text-neon-green" />

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-neon-green
                    uppercase
                    tracking-widest
                  "
                >
                  ACTIVE_LEARNING_PROTOCOL
                </span>
              </div>

              <h4
                className="
                  font-display
                  text-lg
                  sm:text-xl
                  font-bold
                  text-white
                  uppercase
                  tracking-widest
                "
              >
                Neural Capability
                Score
              </h4>

              <p
                className="
                  text-xs
                  sm:text-sm
                  text-gray-500
                  font-mono
                  mt-2
                  leading-relaxed
                  max-w-xl
                "
              >
                Continuous learning
                architecture focused
                on cybersecurity,
                scalable systems, AI,
                and advanced software
                engineering workflows.
              </p>
            </div>
          </div>

          {/* =========================================
              Progress Bars
          ========================================= */}

          <div
            className="
              flex
              items-end
              gap-4
              relative
              z-10
            "
          >
            {[85, 92, 78, 88].map(
              (val, i) => (
                <div
                  key={i}
                  className="
                    flex
                    flex-col
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      relative
                      h-10
                      sm:h-12
                      w-2
                      bg-white/5
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${val}%`,
                      }}
                      transition={{
                        duration: 1.5,
                        delay:
                          i * 0.2,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        w-full
                        bg-neon-green
                        rounded-full
                      "
                    />
                  </div>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      text-gray-600
                    "
                  >
                    {val}%
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}