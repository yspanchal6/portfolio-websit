import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import {
  GraduationCap,
  ShieldCheck,
  Clock,
  MapPin,
  Cpu,
  Workflow,
} from 'lucide-react';

const colorStyles = {
  blue: {
    border: 'border-neon-blue',
    text: 'text-neon-blue',
    bg: 'bg-neon-blue',
    glow: 'shadow-[0_0_25px_rgba(0,209,255,0.35)]',
    gradient: 'from-neon-blue/20',
  },

  green: {
    border: 'border-neon-green',
    text: 'text-neon-green',
    bg: 'bg-neon-green',
    glow: 'shadow-[0_0_25px_rgba(0,255,0,0.35)]',
    gradient: 'from-neon-green/20',
  },

  red: {
    border: 'border-red-500',
    text: 'text-red-500',
    bg: 'bg-red-500',
    glow: 'shadow-[0_0_25px_rgba(239,68,68,0.35)]',
    gradient: 'from-red-500/20',
  },
};

const events = [
  {
    date: '2021 - 2025',
    title: 'DIPLOMA IN INFORMATION TECHNOLOGY',
    org: 'B & B Institute of Technology, Vallabh Vidyanagar (GTU)',
    desc:
      'Built strong engineering foundations through hands-on learning in programming, networking, database management, and system fundamentals. Developed practical technical skills through real-world technology exposure.',
    metrics: ['Python', 'SQL', 'Networking', 'Web Dev'],
    type: 'FOUNDATION_PHASE',
    color: 'blue',
    icon: <GraduationCap className="w-5 h-5" />,
  },

  {
    date: 'SUMMER 2024',
    title: 'CYBER SECURITY ENGINEERING INTERN',
    org: 'Tech Elecon Pvt Ltd',
    desc:
      'Worked on cybersecurity engineering concepts including security analysis, vulnerability awareness, and technical security workflows. Gained practical exposure to real-world security operations.',
    metrics: [
      'Cybersecurity',
      'Security Analysis',
      'Ethical Hacking',
      'Security Engineering',
    ],
    type: 'SECURITY_OPERATION_PHASE',
    color: 'red',
    icon: <ShieldCheck className="w-5 h-5" />,
  },

  {
    date: '2025 - PRESENT',
    title: 'B.TECH IN INFORMATION TECHNOLOGY',
    org: 'Madhuben & Bhanubhai Patel Institute of Technology (CVMU)',
    desc:
      'Currently focusing on Cybersecurity, System Architecture, AI-driven systems, and scalable infrastructures while balancing academics with practical technical projects and GATE preparation.',
    metrics: [
      'Cybersecurity',
      'AI Systems',
      'Scalable Arch',
      'GATE Prep',
    ],
    type: 'ADVANCED_ENGINEERING_PHASE',
    color: 'green',
    icon: <Cpu className="w-5 h-5" />,
  },

  {
    date: '2026 - PRESENT',
    title: 'TECHNICAL LEADERSHIP & ARCHITECTURE',
    org: 'MYTH Startup Initiative & Projects',
    desc:
      'Focused on scalable system thinking, architecture planning, and engineering leadership. Spearheading technical roadmaps and innovation-driven development.',
    metrics: [
      'System Design',
      'Architecture',
      'Leadership',
      'Scalability',
    ],
    type: 'SYSTEM_ARCHITECT_PHASE',
    color: 'blue',
    icon: <Workflow className="w-5 h-5" />,
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="
        py-20
        md:py-32
        bg-cyber-black
        relative
        overflow-hidden
      "
    >
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          md:w-[1000px]
          h-[700px]
          md:h-[1000px]
          bg-neon-green/5
          blur-[100px]
          md:blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      {/* Floating Particles */}
      <div className="hidden md:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [Math.random() * 800, -800],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main */}
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
          title="MISSION_LOG"
          subtitle="Operational Journey & Progression"
          number="04"
        />

        {/* Timeline */}
        <div className="relative mt-16 md:mt-20">
          {/* Main Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="
              absolute
              left-3
              md:left-1/2
              top-4
              bottom-4
              w-[2px]
              bg-gradient-to-b
              from-neon-blue
              via-neon-green
              to-transparent
              md:-translate-x-1/2
              pointer-events-none
            "
          />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {events.map((event, idx) => {
              const styles =
                colorStyles[
                  event.color as keyof typeof colorStyles
                ];

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: idx % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`
                    relative
                    flex
                    flex-col
                    md:flex-row
                    items-start
                    md:items-center
                    gap-10
                    md:gap-12
                    ${
                      idx % 2 === 0
                        ? 'md:flex-row-reverse'
                        : ''
                    }
                  `}
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-3
                      md:left-1/2
                      top-2
                      md:top-1/2
                      -translate-x-1/2
                      md:-translate-y-1/2
                      z-20
                    "
                  >
                    <div
                      className={`
                        w-6
                        h-6
                        md:w-8
                        md:h-8
                        rounded-full
                        bg-cyber-black
                        border-2
                        ${styles.border}
                        flex
                        items-center
                        justify-center
                        ${styles.glow}
                      `}
                    >
                      <div
                        className={`
                          w-2
                          h-2
                          md:w-3
                          md:h-3
                          rounded-full
                          ${styles.bg}
                          animate-pulse
                        `}
                      />
                    </div>

                    <div
                      className={`
                        absolute
                        inset-0
                        rounded-full
                        border
                        ${styles.border}
                        animate-ping
                        opacity-20
                      `}
                    />
                  </div>

                  {/* Desktop Date Side */}
                  <div
                    className={`
                      hidden
                      md:block
                      w-1/2
                      px-12
                      ${
                        idx % 2 === 0
                          ? 'text-left'
                          : 'text-right'
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        flex-col
                        ${
                          idx % 2 === 0
                            ? 'items-start'
                            : 'items-end'
                        }
                      `}
                    >
                      <span
                        className={`
                          font-mono
                          text-sm
                          font-bold
                          uppercase
                          tracking-[0.5em]
                          mb-2
                          ${styles.text}
                        `}
                      >
                        {event.date}
                      </span>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-gray-500
                          font-mono
                          text-[10px]
                          uppercase
                        "
                      >
                        <Clock className="w-3 h-3" />
                        Phase_Status: Synchronized
                      </div>
                    </div>
                  </div>

                  {/* Card Side */}
                  <div
                    className="
                      w-full
                      md:w-1/2
                      pl-10
                      md:pl-0
                    "
                  >
                    <div
                      className={`
                        group
                        relative
                        p-5
                        sm:p-6
                        lg:p-8
                        bg-cyber-gray/40
                        border
                        ${styles.border}
                        rounded-2xl
                        backdrop-blur-md
                        md:backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:border-white/20
                        hover:bg-white/[0.05]
                        ${
                          idx % 2 === 0
                            ? 'md:mr-12'
                            : 'md:ml-12'
                        }
                      `}
                    >
                      {/* Hover Glow */}
                      <div
                        className={`
                          absolute
                          -inset-[1px]
                          bg-gradient-to-br
                          ${styles.gradient}
                          via-transparent
                          to-transparent
                          rounded-2xl
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                          -z-10
                        `}
                      />

                      {/* Icon */}
                      <div
                        className="
                          absolute
                          top-0
                          right-0
                          p-5
                          md:p-6
                          opacity-5
                          group-hover:opacity-20
                          transition-opacity
                          duration-500
                          transform
                          group-hover:rotate-12
                        "
                      >
                        {event.icon}
                      </div>

                      {/* Mobile Date */}
                      <div className="md:hidden mb-4">
                        <span
                          className={`
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            font-bold
                            ${styles.text}
                          `}
                        >
                          {event.date}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="mb-6">
                        <span
                          className={`
                            inline-block
                            font-mono
                            text-[9px]
                            sm:text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            pb-1
                            border-b
                            ${styles.border}
                            ${styles.text}
                          `}
                        >
                          [ {event.type} ]
                        </span>

                        <h3
                          className="
                            font-display
                            text-xl
                            sm:text-2xl
                            font-bold
                            text-white
                            uppercase
                            mt-4
                            leading-tight
                          "
                        >
                          {event.title}
                        </h3>

                        <div
                          className="
                            flex
                            items-start
                            gap-2
                            text-gray-400
                            font-mono
                            text-[10px]
                            sm:text-[11px]
                            mt-3
                            uppercase
                            tracking-wider
                          "
                        >
                          <MapPin className="w-3.5 h-3.5 text-gray-600 mt-[1px]" />

                          <span>{event.org}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          text-gray-500
                          text-sm
                          leading-relaxed
                          mb-8
                          font-sans
                        "
                      >
                        {event.desc}
                      </p>

                      {/* Metrics */}
                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                          sm:gap-3
                          pt-6
                          border-t
                          border-white/5
                        "
                      >
                        {event.metrics.map(
                          (metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="
                                px-3
                                py-1.5
                                bg-white/5
                                border
                                border-white/5
                                rounded-md
                                flex
                                items-center
                                gap-2
                                transition-colors
                                hover:border-white/10
                              "
                            >
                              <div
                                className={`
                                  w-1
                                  h-1
                                  rounded-full
                                  ${styles.bg}
                                `}
                              />

                              <span
                                className="
                                  font-mono
                                  text-[10px]
                                  text-gray-400
                                  uppercase
                                  tracking-tight
                                "
                              >
                                {metric}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mt-20
            md:mt-32
            p-6
            md:p-8
            bg-white/[0.02]
            border
            border-white/5
            rounded-3xl
            backdrop-blur-sm
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
            text-center
            md:text-left
          "
        >
          <div className="space-y-2">
            <div
              className="
                font-mono
                text-[10px]
                text-neon-blue
                uppercase
                tracking-[0.4em]
              "
            >
              Current_Trajectory
            </div>

            <h4
              className="
                font-display
                text-lg
                md:text-xl
                font-bold
                text-white
                uppercase
                tracking-tight
              "
            >
              System Architecture & Engineering Mastery
            </h4>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="font-mono text-neon-green text-xl font-bold">
                2021
              </div>

              <div
                className="
                  font-mono
                  text-[9px]
                  text-gray-600
                  uppercase
                "
              >
                Genesis
              </div>
            </div>

            <div className="w-[1px] h-10 bg-white/5 hidden md:block" />

            <div className="text-center">
              <div className="font-mono text-neon-blue text-xl font-bold">
                ACTIVE
              </div>

              <div
                className="
                  font-mono
                  text-[9px]
                  text-gray-600
                  uppercase
                "
              >
                Execution
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}