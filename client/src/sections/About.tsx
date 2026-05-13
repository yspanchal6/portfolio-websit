import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';

import {
  Shield,
  Brain,
  Search,
  Zap,
  Cpu,
  Target,
  Workflow,
  History,
  Binary,
  Microchip,
  Activity,
  Trophy,
  Briefcase,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';

/* =========================================
   COLOR MAP (Production Safe Tailwind)
========================================= */

const colorMap = {
  'neon-blue': {
    text: 'text-neon-blue',
    border: 'border-neon-blue',
    bg: 'bg-neon-blue',
    glow: 'shadow-[0_0_25px_rgba(0,209,255,0.25)]',
  },

  'neon-green': {
    text: 'text-neon-green',
    border: 'border-neon-green',
    bg: 'bg-neon-green',
    glow: 'shadow-[0_0_25px_rgba(0,255,0,0.25)]',
  },
};

/* =========================================
   TRAITS
========================================= */

const traits = [
  {
    id: 'gate',
    icon: <Target className="w-5 h-5" />,
    title: 'GATE_ASPIRANT',
    desc: 'Deep-diving into Computer Science fundamentals and architectural theory for high-level specialization.',
    color: 'neon-blue',
  },

  {
    id: 'scale',
    icon: <Binary className="w-5 h-5" />,
    title: 'SCALABILITY_LOGIC',
    desc: 'Passionate about building distributed systems that handle high-concurrency traffic efficiently.',
    color: 'neon-green',
  },

  {
    id: 'hunt',
    icon: <Search className="w-5 h-5" />,
    title: 'BUG_HUNTER',
    desc: 'Focused on security analysis, OWASP concepts, and proactive vulnerability assessment.',
    color: 'neon-blue',
  },

  {
    id: 'ai',
    icon: <Brain className="w-5 h-5" />,
    title: 'AI_INTEGRATOR',
    desc: 'Bridging neural intelligence with production-ready scalable infrastructures.',
    color: 'neon-green',
  },
];

/* =========================================
   STATS
========================================= */

const stats = [
  {
    value: 12,
    label: 'Projects_Built',
    color: 'neon-green',
  },

  {
    value: 5,
    label: 'Certifications',
    color: 'neon-blue',
  },

  {
    value: 500,
    label: 'Learning_Hours',
    color: 'neon-green',
  },

  {
    value: 8,
    label: 'Tech_Stacks',
    color: 'neon-blue',
  },
];

/* =========================================
   JOURNEY
========================================= */

const journey = [
  {
    period: '2021 - 2025',
    title: 'DIPLOMA IN IT',
    org: 'B & B Institute of Technology',
    status: 'FOUNDATION_SECURED',
    desc: 'Built strong engineering foundations in networking, programming, database systems, and web development.',
    skills: ['Python', 'SQL', 'Networking', 'Web Dev'],
  },

  {
    period: '2025 - PRESENT',
    title: 'B.TECH IN IT',
    org: 'Madhuben & Bhanubhai Patel Institute of Technology',
    status: 'SYS_EXPANSION_ACTIVE',
    desc: 'Advancing into scalable infrastructures, cybersecurity, AI systems, and system architecture engineering.',
    skills: [
      'Cybersecurity',
      'Scalable Systems',
      'AI',
      'GATE',
    ],
  },
];

export default function About() {
  const [terminalLines, setTerminalLines] =
    useState<string[]>([]);

  const [hoveredTrait, setHoveredTrait] =
    useState<string | null>(null);

  const fullTerminalText = useMemo(
    () => [
      '> INITIALIZING_CORE_DRIVES...',
      '> SCANNING_DIPLOMA_ENGINEERING_PATHWAY...',
      '> LOADING_BTECH_INFRASTRUCTURE_MODULE...',
      '> SECURITY_PROTOCOL: ENABLED',
      '> STATUS: SYSTEM_ARCHITECTURE_ACTIVE',
      '> DEPLOYMENT_READY.',
    ],
    []
  );

  useEffect(() => {
    let lineIndex = 0;

    const interval = setInterval(() => {
      if (
        lineIndex < fullTerminalText.length
      ) {
        setTerminalLines((prev) => [
          ...prev,
          fullTerminalText[lineIndex],
        ]);

        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 900);

    return () =>
      clearInterval(interval);
  }, [fullTerminalText]);

  return (
    <section
      id="about"
      className="
        relative
        py-20
        md:py-32
        bg-cyber-black
        overflow-hidden
        border-y
        border-white/5
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.02),transparent)]
          pointer-events-none
        "
      />

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.08] pointer-events-none" />

      {/* Floating Particles */}
      <div className="hidden md:block">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              w-1
              h-1
              bg-neon-blue
              rounded-full
              opacity-20
              pointer-events-none
            "
            animate={{
              y: [
                Math.random() * 800,
                Math.random() * -800,
              ],

              x: [
                Math.random() * 1000,
                Math.random() * 1200,
              ],

              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration:
                15 + Math.random() * 10,

              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${
                Math.random() * 100
              }%`,
              top: `${
                Math.random() * 100
              }%`,
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
          title="IDENTITY_PROFILE"
          subtitle="System Architect & Security Engineer"
          number="01"
        />

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            md:gap-10
            mt-12
            md:mt-16
          "
        >
          {/* =========================================
              LEFT COLUMN
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              lg:col-span-7
              space-y-8
              md:space-y-10
            "
          >
            {/* Mission Card */}
            <div
              className="
                relative
                group
                p-5
                sm:p-6
                lg:p-8
                bg-cyber-gray/40
                border
                border-neon-blue/30
                rounded-2xl
                backdrop-blur-md
                md:backdrop-blur-xl
              "
            >
              <div className="absolute top-0 left-0 w-24 md:w-32 h-[1px] bg-neon-blue" />

              <div className="absolute top-0 left-0 w-[1px] h-24 md:h-32 bg-neon-blue" />

              {/* Header */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-4
                  mb-6
                "
              >
                <div className="p-3 bg-neon-blue/10 rounded-xl w-fit">
                  <Activity className="w-7 h-7 text-neon-blue animate-pulse" />
                </div>

                <div>
                  <h3
                    className="
                      font-display
                      text-xl
                      sm:text-2xl
                      font-bold
                      uppercase
                      text-white
                      tracking-widest
                    "
                  >
                    MISSION_PROTOCOL
                  </h3>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      sm:text-[9px]
                      text-gray-500
                      uppercase
                      tracking-[0.3em]
                    "
                  >
                    System.State:
                    Continuous_Evolution
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className="
                  space-y-5
                  text-gray-400
                  text-base
                  sm:text-lg
                  leading-relaxed
                "
              >
                <p>
                  I am a{' '}
                  <span className="text-white font-bold">
                    System-Oriented
                    Thinker
                  </span>{' '}
                  with a
                  security-first
                  mindset focused on
                  scalable and secure
                  engineering systems.
                </p>

                <p>
                  My journey began at{' '}
                  <span className="text-neon-green font-semibold">
                    B & B Institute
                    of Technology
                  </span>{' '}
                  during my Diploma
                  in Information
                  Technology where I
                  established strong
                  foundations in
                  programming,
                  networking,
                  databases, and web
                  systems.
                </p>

                <p>
                  Currently pursuing{' '}
                  <span className="text-neon-blue font-semibold">
                    B.Tech
                    Information
                    Technology
                  </span>
                  , I am actively
                  exploring scalable
                  infrastructures,
                  cybersecurity,
                  AI-driven systems,
                  and advanced system
                  architecture.
                </p>

                <div
                  className="
                    bg-neon-green/5
                    border-l-2
                    border-neon-green
                    p-4
                    font-mono
                    text-sm
                    italic
                  "
                >
                  "Engineering secure
                  digital systems
                  where scalability,
                  resilience, and
                  intelligence coexist
                  seamlessly."
                </div>
              </div>
            </div>

            {/* Journey */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              "
            >
              {journey.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    p-5
                    sm:p-6
                    bg-white/[0.03]
                    border
                    border-neon-green/20
                    rounded-xl
                    transition-all
                    duration-500
                    group
                  "
                >
                  {/* Top */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        sm:text-[10px]
                        text-neon-green
                        tracking-widest
                      "
                    >
                      {item.period}
                    </span>

                    <div
                      className="
                        px-2
                        py-1
                        bg-neon-green/10
                        border
                        border-neon-green/30
                        rounded
                        text-[8px]
                        font-mono
                        text-neon-green
                        uppercase
                      "
                    >
                      {item.status}
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      font-display
                      text-lg
                      sm:text-xl
                      font-bold
                      uppercase
                      text-white
                      mb-1
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      font-mono
                      text-[9px]
                      sm:text-[10px]
                      text-gray-500
                      mb-4
                      uppercase
                      tracking-wider
                    "
                  >
                    {item.org}
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mb-5
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="
                            px-2
                            py-1
                            bg-white/5
                            rounded
                            text-[9px]
                            font-mono
                            text-gray-400
                          "
                        >
                          //{skill}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Internship */}
            <div
              className="
                p-5
                sm:p-6
                lg:p-8
                bg-gradient-to-br
                from-neon-blue/10
                via-transparent
                to-transparent
                border
                border-neon-blue/30
                rounded-2xl
                relative
                overflow-hidden
                group
              "
            >
              <div className="absolute top-4 right-4">
                <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-neon-blue opacity-10 group-hover:opacity-30 transition-opacity" />
              </div>

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  gap-8
                "
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <History className="w-4 h-4 text-neon-blue" />

                    <span
                      className="
                        font-mono
                        text-[9px]
                        sm:text-[10px]
                        text-neon-blue
                        uppercase
                        tracking-widest
                      "
                    >
                      Field_Report:
                      Active_Duty
                    </span>
                  </div>

                  <h3
                    className="
                      font-display
                      text-xl
                      sm:text-2xl
                      font-bold
                      uppercase
                      text-white
                      mb-2
                    "
                  >
                    Tech Elecon Pvt
                    Ltd
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-400
                      leading-relaxed
                      max-w-xl
                    "
                  >
                    Practical
                    cybersecurity
                    engineering
                    exposure involving
                    security analysis,
                    vulnerability
                    awareness, and
                    system security
                    practices.
                  </p>
                </div>

                {/* Certifications */}
                <div className="flex flex-col gap-3">
                  <div
                    className="
                      px-4
                      py-3
                      border
                      border-white/10
                      bg-black/40
                      rounded-lg
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Shield className="w-3 h-3 text-neon-green" />

                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        font-mono
                        text-white
                        uppercase
                      "
                    >
                      Cybersecurity
                      Analyst
                    </span>
                  </div>

                  <div
                    className="
                      px-4
                      py-3
                      border
                      border-white/10
                      bg-black/40
                      rounded-lg
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Zap className="w-3 h-3 text-neon-blue" />

                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        font-mono
                        text-white
                        uppercase
                      "
                    >
                      Ethical Hacking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              lg:col-span-5
              space-y-8
            "
          >
            {/* Stats */}
            <div
              className="
                grid
                grid-cols-2
                gap-4
              "
            >
              {stats.map((stat, i) => {
                const style =
                  colorMap[
                    stat.color as keyof typeof colorMap
                  ];

                return (
                  <div
                    key={i}
                    className="
                      p-5
                      sm:p-6
                      bg-cyber-gray/30
                      border
                      border-white/5
                      rounded-xl
                      text-center
                      group
                      relative
                      overflow-hidden
                    "
                  >
                    <div className="relative z-10">
                      <div
                        className={`
                          font-mono
                          text-2xl
                          sm:text-3xl
                          font-bold
                          mb-1
                          ${style.text}
                        `}
                      >
                        {stat.value}+
                      </div>

                      <div
                        className="
                          font-mono
                          text-[8px]
                          sm:text-[9px]
                          text-gray-600
                          uppercase
                          tracking-widest
                        "
                      >
                        {stat.label}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors" />
                  </div>
                );
              })}
            </div>

            {/* Traits */}
            <div className="space-y-4">
              {traits.map((trait) => {
                const style =
                  colorMap[
                    trait.color as keyof typeof colorMap
                  ];

                return (
                  <motion.div
                    key={trait.id}
                    onHoverStart={() =>
                      setHoveredTrait(
                        trait.id
                      )
                    }
                    onHoverEnd={() =>
                      setHoveredTrait(
                        null
                      )
                    }
                    className={`
                      relative
                      p-5
                      sm:p-6
                      border
                      rounded-xl
                      transition-all
                      duration-500
                      cursor-pointer
                      group

                      ${
                        hoveredTrait ===
                        trait.id
                          ? `
                            bg-cyber-gray/50
                            ${style.border}
                            ${style.glow}
                          `
                          : `
                            bg-cyber-gray/20
                            border-white/5
                            opacity-80
                            hover:opacity-100
                          `
                      }
                    `}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`
                          p-3
                          bg-black/40
                          rounded-lg
                          border
                          ${style.border}/20
                          ${style.text}
                        `}
                      >
                        {trait.icon}
                      </div>

                      <div>
                        <h4
                          className="
                            font-display
                            text-sm
                            font-bold
                            uppercase
                            text-white
                            mb-2
                            tracking-wider
                          "
                        >
                          {trait.title}
                        </h4>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            leading-relaxed
                          "
                        >
                          {trait.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Terminal */}
            <div className="relative">
              <div className="absolute inset-0 bg-neon-green/5 blur-3xl opacity-20" />

              <div
                className="
                  relative
                  bg-black/80
                  rounded-2xl
                  border
                  border-white/10
                  overflow-hidden
                  font-mono
                  shadow-2xl
                "
              >
                {/* Header */}
                <div
                  className="
                    px-5
                    py-3
                    bg-white/5
                    border-b
                    border-white/10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />

                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />

                    <div className="w-2.5 h-2.5 rounded-full bg-neon-green/30" />
                  </div>

                  <span
                    className="
                      text-[8px]
                      sm:text-[9px]
                      text-gray-600
                      uppercase
                      tracking-widest
                    "
                  >
                    USER:
                    YASH_PANCHAL_SYS
                  </span>
                </div>

                {/* Body */}
                <div
                  className="
                    p-5
                    sm:p-6
                    md:p-8
                    h-40
                    sm:h-48
                    text-[10px]
                    sm:text-[11px]
                    text-neon-green
                    leading-loose
                    overflow-y-auto
                    uppercase
                  "
                >
                  {terminalLines.map(
                    (line, i) => (
                      <div
                        key={i}
                        className="flex gap-3"
                      >
                        <span className="text-white/20">
                          [
                          {1024 + i}]
                        </span>

                        <motion.span
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                        >
                          {line}
                        </motion.span>
                      </div>
                    )
                  )}

                  <motion.span
                    animate={{
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="
                      inline-block
                      w-2.5
                      h-1.5
                      bg-neon-green
                      align-middle
                      ml-1
                    "
                  />
                </div>
              </div>
            </div>

            {/* Vision */}
            <div
              className="
                p-5
                sm:p-6
                bg-neon-blue/5
                border
                border-neon-blue/30
                rounded-2xl
                flex
                items-center
                justify-between
                group
              "
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-neon-blue/10 rounded-lg">
                  <Microchip className="w-5 h-5 text-neon-blue" />
                </div>

                <div>
                  <div
                    className="
                      text-[8px]
                      sm:text-[9px]
                      text-gray-500
                      uppercase
                      tracking-widest
                    "
                  >
                    Future_Status
                  </div>

                  <div
                    className="
                      text-xs
                      font-bold
                      text-white
                      uppercase
                    "
                  >
                    System Architect
                    v5.0
                  </div>
                </div>
              </div>

              <Trophy className="w-5 h-5 text-neon-blue opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>

        {/* =========================================
            Global Mission Statement
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mt-16
            md:mt-24
            text-center
            max-w-4xl
            mx-auto
            space-y-8
          "
        >
          <div
            className="
              inline-block
              px-4
              py-2
              bg-neon-green/10
              border
              border-neon-green/30
              rounded-full
              font-mono
              text-[8px]
              sm:text-[10px]
              text-neon-green
              uppercase
              tracking-[0.3em]
            "
          >
            Mission_Statement_Protocol
          </div>

          <h2
            className="
              font-display
              text-2xl
              sm:text-3xl
              md:text-5xl
              font-black
              text-white
              uppercase
              italic
              tracking-tight
              leading-tight
            "
          >
            Engineering secure and
            scalable digital
            ecosystems where{' '}
            <span className="text-neon-blue">
              AI intelligence
            </span>{' '}
            meets{' '}
            <span className="text-neon-green">
              resilient architecture.
            </span>
          </h2>

          {/* Tags */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              sm:gap-6
              md:gap-10
              pt-4
            "
          >
            {[
              {
                color:
                  'bg-neon-green',
                text:
                  'Analytical_Thinker',
              },

              {
                color:
                  'bg-neon-blue',
                text:
                  'Security_First',
              },

              {
                color:
                  'bg-white',
                text:
                  'Future_Engineer',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className={`
                    w-1.5
                    h-1.5
                    rounded-full
                    ${item.color}
                  `}
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    sm:text-[10px]
                    text-gray-500
                    uppercase
                  "
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}