import {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  motion,
  AnimatePresence,
} from 'motion/react';

import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  ChevronRight,
  Sparkles,
  Shield,
  Cpu,
  Terminal,
  BrainCircuit,
} from 'lucide-react';

/* =========================================
   Types
========================================= */

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

/* =========================================
   Knowledge Base
========================================= */

const KNOWLEDGE_BASE: Record<
  string,
  string
> = {
  'who are you':
    "I am Yash's Autonomous Portfolio Assistant (v2.0). I can provide detailed information about his education, projects, cybersecurity expertise, AI interests, and technical journey.",

  'tell me about yourself':
    'Yash Panchal is a security-focused System Architecture enthusiast currently pursuing B.Tech Information Technology. His core interests include Cybersecurity, AI Systems, Scalable Infrastructure, and Enterprise-level engineering.',

  'what are your skills':
    'Primary skills include Python, Java, SQL, JavaScript, HTML/CSS, React, Database Management, Networking, Cybersecurity, System Design, and scalable architecture engineering.',

  'what projects have you built':
    'Major projects include Student Information System (SIS), UIDAI Hackathon Security Infrastructure, MYTH Identity Intelligence Platform, Credit Card Fraud Detection System, and custom cybersecurity tools.',

  'what is myth':
    'MYTH is a sovereign-grade identity intelligence platform that cross-references biometric data against government databases for secure, instant verification.',

  'tell me about your education':
    'Yash completed a Diploma in Information Technology at B & B Institute of Technology (2021-2025) and is currently pursuing B.Tech Information Technology at MBIT (CVMU).',

  'internship':
    'Completed Cyber Security Engineering Internship at Tech Elecon Pvt Ltd with practical exposure to infrastructure security and vulnerability analysis.',

  'career goals':
    'Goal: Become a world-class System Architect specializing in secure, scalable, and AI-driven infrastructures.',

  'cybersecurity':
    'Yash actively studies ethical hacking, security analysis, vulnerability assessment, and secure infrastructure engineering.',

  'contact':
    'You can connect through LinkedIn, GitHub, Instagram, or the contact form on this portfolio website.',

  default:
    'I currently do not have enough information about that topic. Try asking about projects, education, cybersecurity, AI, skills, certifications, or career goals.',
};

/* =========================================
   Suggestions
========================================= */

const SUGGESTIONS = [
  'Who are you?',
  'Skills',
  'Projects',
  'Cybersecurity',
  'Education',
  'Career Goals',
];

/* =========================================
   Component
========================================= */

export default function ChatBot() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [input, setInput] =
    useState('');

  const [isTyping, setIsTyping] =
    useState(false);

  const [
    messages,
    setMessages,
  ] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content:
        "SYSTEM READY. I am Yash Panchal's AI Assistant. Ask me about his projects, cybersecurity journey, skills, education, or technical expertise.",
      timestamp: new Date(),
    },
  ]);

  const scrollRef =
    useRef<HTMLDivElement>(null);

  /* =========================================
     Scroll To Bottom
  ========================================= */

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  /* =========================================
     Body Scroll Lock
  ========================================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        'hidden';
    } else {
      document.body.style.overflow =
        '';
    }

    return () => {
      document.body.style.overflow =
        '';
    };
  }, [isOpen]);

  /* =========================================
     Generate Response
  ========================================= */

  const getResponse = (
    text: string
  ) => {
    const query =
      text.toLowerCase();

    for (const [
      key,
      value,
    ] of Object.entries(
      KNOWLEDGE_BASE
    )) {
      if (
        query.includes(key)
      ) {
        return value;
      }
    }

    return KNOWLEDGE_BASE.default;
  };

  /* =========================================
     Send Message
  ========================================= */

  const handleSend = (
    text: string
  ) => {
    if (!text.trim())
      return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id:
          (
            Date.now() + 1
          ).toString(),
        type: 'bot',
        content:
          getResponse(text),
        timestamp: new Date(),
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);

      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* =========================================
          Floating Toggle Button
      ========================================= */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="
          fixed
          bottom-5
          right-4
          sm:bottom-24
          sm:right-8
          z-[120]
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-cyber-black
          border-2
          border-neon-blue
          flex
          items-center
          justify-center
          text-neon-blue
          shadow-[0_0_30px_rgba(0,209,255,0.35)]
          touch-manipulation
        "
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{
                opacity: 0,
                rotate: -90,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat:
                    Infinity,
                }}
                className="
                  absolute
                  -top-1
                  -right-1
                  w-3
                  h-3
                  bg-neon-green
                  rounded-full
                  border-2
                  border-cyber-black
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* =========================================
          Chat Window
      ========================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              bottom-24
              right-3
              sm:right-8
              z-[120]
              w-[calc(100vw-1.5rem)]
              sm:w-[420px]
              h-[75vh]
              sm:h-[600px]
              max-h-[85vh]
              pb-[env(safe-area-inset-bottom)]
              bg-cyber-black/95
              backdrop-blur-sm
              md:backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              flex
              flex-col
              shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            "
          >
            {/* =========================================
                Background Effects
            ========================================= */}

            <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

            <div
              className="
                absolute
                top-0
                left-0
                w-40
                h-40
                bg-neon-blue/10
                blur-3xl
                rounded-full
              "
            />

            {/* =========================================
                Header
            ========================================= */}

            <div
              className="
                relative
                z-10
                p-4
                sm:p-6
                border-b
                border-white/10
                bg-gradient-to-r
                from-neon-blue/10
                to-neon-green/5
                flex
                items-center
                justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    relative
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-xl
                    bg-black/40
                    border
                    border-neon-blue/20
                    flex
                    items-center
                    justify-center
                    text-neon-blue
                  "
                >
                  <BrainCircuit className="w-5 h-5" />

                  <div
                    className="
                      absolute
                      -bottom-1
                      -right-1
                      w-3
                      h-3
                      rounded-full
                      bg-neon-green
                      border-2
                      border-cyber-black
                      animate-pulse
                    "
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-xs
                      sm:text-sm
                      font-bold
                      text-white
                      uppercase
                      tracking-widest
                    "
                  >
                    YP_NEURAL_CORE
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />

                    <span
                      className="
                        text-[7px]
                        sm:text-[8px]
                        font-mono
                        text-gray-500
                        uppercase
                        tracking-[0.2em]
                      "
                    >
                      Autonomous Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-neon-blue opacity-50" />

                <Cpu className="w-4 h-4 text-neon-green opacity-50" />
              </div>
            </div>

            {/* =========================================
                Messages
            ========================================= */}

            <div
              ref={scrollRef}
              className="
                relative
                z-10
                flex-1
                overflow-y-auto
                overscroll-contain
                p-4
                sm:p-6
                space-y-5
                bg-black/30
              "
            >
              {/* Session */}
              <div className="flex justify-center">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-white/[0.03]
                    border
                    border-white/5
                    text-[7px]
                    sm:text-[8px]
                    font-mono
                    text-gray-600
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  SESSION ACTIVE
                </span>
              </div>

              {/* Messages */}
              {messages.map(
                (msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{
                      opacity: 0,
                      x:
                        msg.type ===
                        'user'
                          ? 20
                          : -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className={`
                      flex
                      ${
                        msg.type ===
                        'user'
                          ? 'justify-end'
                          : 'justify-start'
                      }
                    `}
                  >
                    <div
                      className={`
                        max-w-[92%]
                        sm:max-w-[85%]
                        flex
                        gap-3

                        ${
                          msg.type ===
                          'user'
                            ? 'flex-row-reverse'
                            : 'flex-row'
                        }
                      `}
                    >
                      {/* Avatar */}
                      <div
                        className={`
                          w-7
                          h-7
                          sm:w-8
                          sm:h-8
                          shrink-0
                          rounded-lg
                          flex
                          items-center
                          justify-center
                          border

                          ${
                            msg.type ===
                            'user'
                              ? `
                                bg-neon-blue/10
                                border-neon-blue/20
                                text-neon-blue
                              `
                              : `
                                bg-neon-green/10
                                border-neon-green/20
                                text-neon-green
                              `
                          }
                        `}
                      >
                        {msg.type ===
                        'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>

                      {/* Bubble */}
                      <div>
                        <div
                          className={`
                            p-4
                            rounded-2xl
                            text-sm
                            leading-relaxed
                            border

                            ${
                              msg.type ===
                              'user'
                                ? `
                                  bg-neon-blue/10
                                  border-neon-blue/20
                                  text-white
                                  rounded-tr-none
                                `
                                : `
                                  bg-white/[0.03]
                                  border-white/10
                                  text-gray-300
                                  rounded-tl-none
                                `
                            }
                          `}
                        >
                          {msg.content}
                        </div>

                        <span
                          className={`
                            mt-1
                            block
                            text-[7px]
                            sm:text-[8px]
                            font-mono
                            text-gray-600

                            ${
                              msg.type ===
                              'user'
                                ? 'text-right'
                                : 'text-left'
                            }
                          `}
                        >
                          {msg.timestamp.toLocaleTimeString(
                            [],
                            {
                              hour:
                                '2-digit',
                              minute:
                                '2-digit',
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              )}

              {/* Typing */}
              {isTyping && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex justify-start"
                >
                  <div
                    className="
                      px-4
                      py-3
                      rounded-2xl
                      rounded-tl-none
                      bg-white/[0.03]
                      border
                      border-white/10
                    "
                  >
                    <div className="flex gap-1.5">
                      <motion.div
                        animate={{
                          y: [
                            0, -4, 0,
                          ],
                        }}
                        transition={{
                          repeat:
                            Infinity,
                          duration:
                            0.8,
                        }}
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-neon-green
                        "
                      />

                      <motion.div
                        animate={{
                          y: [
                            0, -4, 0,
                          ],
                        }}
                        transition={{
                          repeat:
                            Infinity,
                          duration:
                            0.8,
                          delay:
                            0.2,
                        }}
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-neon-green
                        "
                      />

                      <motion.div
                        animate={{
                          y: [
                            0, -4, 0,
                          ],
                        }}
                        transition={{
                          repeat:
                            Infinity,
                          duration:
                            0.8,
                          delay:
                            0.4,
                        }}
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-neon-green
                        "
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* =========================================
                Suggestions
            ========================================= */}

            <div
              className="
                px-3
                sm:px-4
                pt-3
                flex
                gap-2
                overflow-x-auto
                no-scrollbar
              "
            >
              {SUGGESTIONS.map(
                (
                  suggestion,
                  index
                ) => (
                  <motion.button
                    key={index}
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() =>
                      handleSend(
                        suggestion
                      )
                    }
                    className="
                      flex-shrink-0
                      px-3
                      sm:px-4
                      py-2
                      rounded-full
                      bg-white/[0.03]
                      border
                      border-white/10
                      text-[10px]
                      font-mono
                      text-gray-400
                      hover:text-neon-blue
                      hover:border-neon-blue/20
                      transition-all
                      flex
                      items-center
                      gap-2
                      touch-manipulation
                    "
                  >
                    {suggestion}

                    <ChevronRight className="w-3 h-3" />
                  </motion.button>
                )
              )}
            </div>

            {/* =========================================
                Input Area
            ========================================= */}

            <div
              className="
                relative
                z-10
                p-3
                sm:p-4
                border-t
                border-white/10
                bg-black/40
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-3
                  sm:py-4
                "
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) =>
                    setInput(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key ===
                      'Enter'
                    ) {
                      handleSend(
                        input
                      );
                    }
                  }}
                  placeholder="Communicate with Neural_Core..."
                  className="
                    flex-1
                    bg-transparent
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-gray-600
                    font-mono
                  "
                />

                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  onClick={() =>
                    handleSend(
                      input
                    )
                  }
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-gradient-to-br
                    from-neon-blue
                    to-neon-green
                    flex
                    items-center
                    justify-center
                    text-black
                    shadow-[0_0_20px_rgba(0,209,255,0.2)]
                    touch-manipulation
                  "
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Footer */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                "
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-yellow-500" />

                  <span
                    className="
                      text-[7px]
                      sm:text-[8px]
                      font-mono
                      text-gray-600
                      uppercase
                    "
                  >
                    AI_MODEL:
                    PortAssist_v2
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Terminal className="w-3 h-3 text-neon-green" />

                  <span
                    className="
                      text-[7px]
                      sm:text-[8px]
                      font-mono
                      text-gray-700
                      uppercase
                    "
                  >
                    SECURED
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}