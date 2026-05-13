import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';

import {
  Database,
  Shield,
  Code2,
  Cpu,
  Globe,
  Layers,
  Server,
  Target,
  Zap,
  Activity,
  Box,
} from 'lucide-react';

/* =========================================
   COLOR MAP (FIXED)
========================================= */

const colorMap = {
  'neon-blue': {
    bg: 'bg-neon-blue',
    text: 'text-neon-blue',
    shadow:
      'shadow-[0_0_10px_rgba(0,209,255,0.3)]',
  },

  'red-500': {
    bg: 'bg-red-500',
    text: 'text-red-500',
    shadow:
      'shadow-[0_0_10px_rgba(239,68,68,0.3)]',
  },

  'neon-green': {
    bg: 'bg-neon-green',
    text: 'text-neon-green',
    shadow:
      'shadow-[0_0_10px_rgba(57,255,20,0.3)]',
  },
};

/* =========================================
   SKILLS DATA
========================================= */

const skillCategories = [
  {
    id: 'core',
    title:
      'CORE_LOGIC_PROTOCOLS',

    skills: [
      {
        name: 'Python',
        level: 90,
        icon: <Code2 />,
        desc:
          'Neural synthesis & automation logic.',
      },

      {
        name: 'Java',
        level: 85,
        icon: <Cpu />,
        desc:
          'Enterprise-grade system structures.',
      },

      {
        name: 'JavaScript',
        level: 88,
        icon: <Globe />,
        desc:
          'Dynamic interface orchestration.',
      },
    ],

    color: 'neon-blue',
  },

  {
    id: 'security',
    title:
      'SECURITY_&_INTEGRITY',

    skills: [
      {
        name: 'Cybersecurity',
        level: 78,
        icon: <Shield />,
        desc:
          'Offensive hardening & threat mitigation.',
      },

      {
        name: 'SQL',
        level: 92,
        icon: <Database />,
        desc:
          'Optimized relational data protocols.',
      },

      {
        name: 'DB Management',
        level: 89,
        icon: <Server />,
        desc:
          'Scaling high-concurrency clusters.',
      },
    ],

    color: 'red-500',
  },

  {
    id: 'architecture',
    title:
      'SYSTEM_ARCHITECTURE',

    skills: [
      {
        name: 'Architecture',
        level: 80,
        icon: <Layers />,
        desc:
          'Hyper-scalable global infrastructure.',
      },

      {
        name: 'HTML/CSS',
        level: 95,
        icon: <Box />,
        desc:
          'Modern responsive markup paradigms.',
      },

      {
        name: 'UI/UX Basics',
        level: 82,
        icon: <Target />,
        desc:
          'Human-centric digital experiences.',
      },
    ],

    color: 'neon-green',
  },
];

/* =========================================
   CIRCULAR PROGRESS
========================================= */

const CircularProgress = ({
  level,
  color,
}: {
  level: number;
  color: string;
}) => {
  const radius = 24;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (level / 100) *
      circumference;

  return (
    <div
      className="
        relative
        w-16
        h-16
        sm:w-[72 px]
        sm:h-[72 px]
        overflow-hidden
        shrink-0
        flex
        items-center
        justify-center
      "
    >
      <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          fill="transparent"
          className="text-white/5"
        />

        <motion.circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={
            circumference
          }
          initial={{
            strokeDashoffset:
              circumference,
          }}
          whileInView={{
            strokeDashoffset:
              offset,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
          }}
          className={color}
        />
      </svg>

      <span
        className="
          absolute
          text-[9px]
          sm:text-[10px]
          font-mono
          text-white/50
        "
      >
        {level}%
      </span>
    </div>
  );
};

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-20
        md:py-32
        bg-cyber-black
        relative
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

      <div
        className="
          absolute
          top-1/2
          left-0
          w-[800px]
          h-[800px]
          bg-neon-blue/5
          blur-[80px]
          md:blur-[150px]
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        "
      />

      {/* Main Container */}
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
        <SectionHeading
          title="TECHNICAL_STACK"
          subtitle="Operational Readiness & Competencies"
          number="02"
        />

        {/* =========================================
            Categories
        ========================================= */}

        <div
          className="
            space-y-16
            md:space-y-24
          "
        >
          {skillCategories.map(
            (
              category,
              catIdx
            ) => {
              const style =
                colorMap[
                  category.color as keyof typeof colorMap
                ];

              return (
                <div
                  key={
                    category.id
                  }
                  className="relative"
                >
                  {/* Category Header */}

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      mb-8
                      md:mb-12
                      border-b
                      border-white/5
                      pb-4
                    "
                  >
                    <div
                      className={`
                        w-2
                        h-8
                        rounded-full
                        ${style.bg}
                        ${style.shadow}
                      `}
                    />

                    <h3
                      className="
                        font-display
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-white
                        tracking-widest
                        uppercase
                      "
                    >
                      {
                        category.title
                      }
                    </h3>

                    <div
                      className="
                        flex-1
                        h-[1px]
                        bg-gradient-to-r
                        from-white/10
                        to-transparent
                      "
                    />
                  </div>

                  {/* Skills Grid */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      lg:grid-cols-3
                      gap-5
                      md:gap-8
                    "
                  >
                    {category.skills.map(
                      (
                        skill,
                        skillIdx
                      ) => (
                        <motion.div
                          key={
                            skill.name
                          }
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
                              skillIdx *
                              0.1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          className="
                            group
                            relative
                            isolate
                            min-h-[320px]
                            p-5
                            sm:p-6
                            md:p-8
                            bg-cyber-gray/30
                            border
                            neon-border-blue
                            rounded-xl
                            hover:border-white/20
                            transition-all
                            duration-500
                            overflow-hidden
                            touch-manipulation
                          "
                        >
                          {/* Gloss Effect */}

                          <div
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-br
                              from-white/0
                              via-white/5
                              to-white/0
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity
                              pointer-events-none
                            "
                          />

                          <div className="relative z-10">
                            {/* Top Row */}

                            <div
                              className="
                                flex
                                items-start
                                justify-between
                                gap-4
                                mb-8
                              "
                            >
                              {/* Icon */}

                              <div
                                className="
                                  p-3
                                  bg-black/40
                                  rounded-lg
                                  border
                                  border-white/5
                                  text-white
                                  transition-transform
                                  md:group-hover:scale-110
                                  md:group-hover:rotate-3
                                  will-change-transform
                                "
                              >
                                <div className="w-5 h-5 sm:w-6 sm:h-6">
                                  {
                                    skill.icon
                                  }
                                </div>
                              </div>

                              {/* Progress */}

                              <CircularProgress
                                level={
                                  skill.level
                                }
                                color={
                                  style.text
                                }
                              />
                            </div>

                            {/* Title */}

                            <h4
                              className="
                                font-display
                                text-lg
                                sm:text-xl
                                font-bold
                                text-white
                                uppercase
                                tracking-tight
                                mb-3
                              "
                            >
                              {
                                skill.name
                              }
                            </h4>

                            {/* Description */}

                            <p
                              className="
                                text-gray-500
                                text-sm
                                font-sans
                                mb-8
                                leading-relaxed
                                min-h-[48px]
                              "
                            >
                              {
                                skill.desc
                              }
                            </p>

                            {/* Status */}

                            <div
                              className="
                                flex
                                items-center
                                gap-2
                                pt-4
                                border-t
                                border-white/5
                              "
                            >
                              <div
                                className="
                                  w-1.5
                                  h-1.5
                                  rounded-full
                                  bg-neon-green
                                  animate-pulse
                                "
                              />

                              <span
                                className="
                                  font-mono
                                  text-[9px]
                                  uppercase
                                  tracking-widest
                                  text-gray-500
                                "
                              >
                                Node_Stable
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* =========================================
            Analytics Bar
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
            mt-20
            md:mt-32
            p-5
            sm:p-6
            md:p-8
            bg-cyber-gray/40
            border
            neon-border-blue
            rounded-2xl
            flex
            flex-col
            gap-8
            overflow-hidden
            isolate
          "
        >
          {/* Protocol Health */}

          <div
            className="
              flex
              flex-col
              gap-3
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
              Protocol_Health
            </span>

            <div className="flex gap-1 items-end">
              {[14, 22, 18, 28, 20, 26, 16, 24, 18, 22, 20, 16].map(
                (
                  height,
                  i
                ) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [
                        height,
                        height + 8,
                        height,
                      ],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat:
                        Infinity,
                      delay:
                        i * 0.05,
                    }}
                    className="
                      w-1.5
                      rounded-full
                      bg-neon-blue
                      shadow-[0_0_8px_rgba(0,209,255,0.4)]
                    "
                  />
                )
              )}
            </div>
          </div>

          {/* Learning Section */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <Activity
              className="
                w-5
                h-5
                text-neon-green
                animate-pulse
              "
            />

            <div>
              <span
                className="
                  block
                  font-mono
                  text-[10px]
                  text-gray-600
                  uppercase
                  tracking-widest
                "
              >
                Learning_In_Progress
              </span>

              <span
                className="
                  block
                  font-display
                  text-lg
                  sm:text-xl
                  font-bold
                  text-white
                  uppercase
                  tracking-wide
                "
              >
                Quantum_Synthesis
              </span>
            </div>
          </div>

          {/* Progress */}

          <div className="w-full">
            <div
              className="
                flex
                items-center
                justify-between
                mb-3
                gap-4
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  text-gray-500
                  uppercase
                  tracking-widest
                "
              >
                Mastery_Convergence
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  text-neon-blue
                  uppercase
                  whitespace-nowrap
                "
              >
                94.2%_OPTIMIZED
              </span>
            </div>

            <div
              className="
                h-2
                bg-white/5
                rounded-full
                overflow-hidden
              "
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width:
                    '94.2%',
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                }}
                className="
                  h-full
                  bg-neon-blue
                  shadow-[0_0_10px_rgba(0,209,255,0.5)]
                "
              />
            </div>
          </div>

          {/* Connect Button */}

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
              px-6
              py-4
              border
              border-neon-blue/20
              bg-neon-blue/5
              rounded-full
              group
              cursor-pointer
              hover:bg-neon-blue/10
              transition-all
              duration-300
              touch-manipulation
              w-fit
              overflow-hidden
              relative
              isolate
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                bg-neon-blue/5
              "
            />

            <Zap
              className="
                relative
                z-10
                w-4
                h-4
                text-neon-blue
                md:group-hover:scale-125
                transition-transform
              "
            />

            <span
              className="
                relative
                z-10
                font-mono
                text-[9px]
                sm:text-[10px]
                text-neon-blue
                font-bold
                tracking-[0.15em]
                sm:tracking-[0.3em]
                uppercase
                whitespace-nowrap
              "
            >
              Connect_Neural_Node
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}