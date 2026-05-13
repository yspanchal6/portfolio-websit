import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
} from 'motion/react';
import emailjs from '@emailjs/browser';

import SectionHeading from '../components/SectionHeading';

import {
  Mail,
  Linkedin,
  Zap,
  ShieldCheck,
  Activity,
  SendHorizonal,
  Github,
  Globe,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

/* =========================================
   Color Map
========================================= */

const colorMap = {
  'neon-blue': {
    text: 'text-neon-blue',
    border: 'neon-border-blue',
  },

  'neon-green': {
    text: 'text-neon-green',
    border: 'neon-border-green',
  },
};

/* =========================================
   Contact Links
========================================= */

const contactLinks = [
  {
    icon: <Mail />,
    label: 'Neural_Endpoint',
    value: 'yspanchal6@gmail.com',
    color: 'neon-blue',
    link: 'mailto:yspanchal6@gmail.com',
  },

  {
    icon: <Linkedin />,
    label: 'Social_Linkage',
    value: 'linkedin/yashpanchal2106',
    color: 'neon-green',
    link: 'https://linkedin.com/in/yashpanchal2106',
  },

  {
    icon: <Github />,
    label: 'Source_Access',
    value: 'github/yspanchal6',
    color: 'neon-blue',
    link: 'https://github.com/yspanchal6',
  },

  {
    icon: <Globe />,
    label: 'Web_Locator',
    value: 'yashpanchal.sys',
    color: 'neon-green',
    link: '#',
  },
];

/* =========================================
   Component
========================================= */

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      type: 'Project',
      message: '',
    });

  const [errors, setErrors] =
    useState<{
      name?: string;
      email?: string;
    }>({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSuccess, setIsSuccess] =
    useState(false);

  const [isError, setIsError] = useState(false);

  /* =========================================
     Validation
  ========================================= */

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name =
        'IDENTITY_REQUIRED';
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email =
        'CHANNEL_REQUIRED';
    } else if (
      !emailRegex.test(
        formData.email
      )
    ) {
      newErrors.email =
        'INVALID_ENCRYPTION_FORMAT';
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };

  /* =========================================
     Submit
  ========================================= */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setIsError(false);

      try {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          category: formData.type,
          message: formData.message,
        };

        await emailjs.send(
          'service_g2h15ax',
          'template_kmpcv56',
          templateParams,
          'v4YIb6NEEeW4CXkZc'
        );

        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          type: 'Project',
          message: '',
        });

        setTimeout(() => {
          setIsSuccess(false);
        }, 8000);
      } catch (error) {
        console.error('Transmission_Failure:', error);
        setIsError(true);
        setTimeout(() => setIsError(false), 8000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="
        py-20
        md:py-32
        bg-cyber-black
        relative
        overflow-hidden
      "
    >
      {/* =========================================
          Background Effects
      ========================================= */}

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
          bg-neon-blue/5
          rounded-full
          blur-[80px]
          md:blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[250px]
          md:w-[400px]
          h-[250px]
          md:h-[400px]
          bg-neon-green/5
          rounded-full
          blur-[60px]
          md:blur-[100px]
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
          overflow-hidden
        "
      >
        <SectionHeading
          title="TRANSMISSION_HUB"
          subtitle="Establish Secure Link-Up"
          number="06"
        />

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            md:gap-16
          "
        >
          {/* =========================================
              LEFT SIDE
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
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              lg:col-span-5
              space-y-10
            "
          >
            {/* Hero Text */}
            <div className="space-y-6">
              <h3
                className="
                  font-display
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  uppercase
                  leading-tight
                  text-white
                "
              >
                Initiate
                <br />

                <span className="text-neon-blue">
                  Digital
                  Handshake.
                </span>
              </h3>

              <p
                className="
                  text-base
                  sm:text-lg
                  text-gray-400
                  leading-relaxed
                  max-w-md
                "
              >
                Bridging the gap
                between raw code and
                secure scalable
                infrastructure.
                Let's collaborate on
                futuristic engineering
                systems and digital
                resilience.
              </p>

              {/* Quote */}
              <div
                className="
                  p-4
                  rounded-xl
                  bg-neon-green/5
                  border
                  neon-border-green
                "
              >
                <p
                  className="
                    text-xs
                    font-mono
                    text-neon-green
                    leading-relaxed
                  "
                >
                  <span className="opacity-50">
                    "TECH_QUOTE":
                  </span>{' '}
                  "Security is not an
                  afterthought. It is
                  the foundation."
                </p>
              </div>
            </div>

            {/* Transmission Card */}
            <div
              className="
                relative
                overflow-hidden
                p-5
                sm:p-6
                rounded-2xl
                bg-cyber-gray/30
                border
                neon-border-blue
                backdrop-blur-sm
                md:backdrop-blur-xl
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-neon-blue/40
                  to-transparent
                "
              />

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  mb-6
                "
              >
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-neon-blue animate-pulse" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      sm:text-[9px]
                      text-gray-500
                      uppercase
                      tracking-widest
                    "
                  >
                    Signal_Status:
                    Optimal
                  </span>
                </div>

                <div
                  className="
                    px-2
                    py-1
                    rounded
                    bg-neon-blue/10
                    border
                    border-neon-blue/30
                    text-[8px]
                    font-mono
                    text-neon-blue
                  "
                >
                  ENCRYPTED_V2
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-gray-400
                    "
                  >
                    Transmission_Security
                  </span>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-neon-green
                    "
                  >
                    AUTHENTICATED
                  </span>
                </div>

                <div
                  className="
                    h-1
                    rounded-full
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
                      duration: 1.5,
                    }}
                    className="
                      h-full
                      bg-neon-blue
                      shadow-[0_0_10px_rgba(0,209,255,0.5)]
                    "
                  />
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-4
              "
            >
              {contactLinks.map(
                (link, idx) => {
                  const style =
                    colorMap[
                      link.color as keyof typeof colorMap
                    ];

                  return (
                    <motion.a
                      key={idx}
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.02,
                      }}
                      className={`
                        p-4
                        sm:p-5
                        rounded-xl
                        bg-cyber-gray/30
                        border
                        ${style.border}
                        hover:border-white/20
                        transition-all
                        group
                        touch-manipulation
                      `}
                    >
                      <div
                        className={`
                          p-2
                          rounded-lg
                          w-fit
                          mb-4
                          bg-black/40
                          ${style.text}
                        `}
                      >
                        {link.icon}
                      </div>

                      <div
                        className="
                          font-mono
                          text-[9px]
                          text-gray-600
                          uppercase
                          tracking-widest
                          mb-1
                        "
                      >
                        {link.label}
                      </div>

                      <div
                        className="
                          font-mono
                          text-xs
                          text-white
                          truncate
                        "
                      >
                        {link.value}
                      </div>
                    </motion.a>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE FORM
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
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              lg:col-span-7
            "
          >
            <form
              ref={form}
              onSubmit={
                handleSubmit
              }
              className="
                relative
                space-y-8
                rounded-2xl
                p-5
                sm:p-8
                md:p-10
                bg-cyber-gray/30
                border
                neon-border-blue
                backdrop-blur-sm
                md:backdrop-blur-xl
                overflow-hidden
              "
            >
              {/* Top Glow */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-neon-blue/40
                  to-transparent
                "
              />

              {/* Inputs */}
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                  md:gap-8
                "
              >
                {/* Name */}
                <div className="space-y-3">
                  <label
                    className="
                      flex
                      justify-between
                      gap-3
                      font-mono
                      text-[10px]
                      text-neon-blue
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    User_Identity

                    <AnimatePresence>
                      {errors.name && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: 10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="
                            flex
                            items-center
                            gap-1
                            text-[8px]
                            text-red-500
                          "
                        >
                          <AlertCircle className="w-2 h-2" />

                          {
                            errors.name
                          }
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </label>

                  <input
                    type="text"
                    placeholder="ENTER_NAME"
                    value={
                      formData.name
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name:
                          e.target
                            .value,
                      })
                    }
                    className={`
                      w-full
                      rounded-xl
                      bg-black/40
                      border
                      px-4
                      sm:px-5
                      py-3.5
                      sm:py-4
                      font-mono
                      text-xs
                      text-white
                      focus:outline-none
                      transition-all

                      ${
                        errors.name
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-neon-blue'
                      }
                    `}
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label
                    className="
                      flex
                      justify-between
                      gap-3
                      font-mono
                      text-[10px]
                      text-neon-blue
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    Communication_Channel

                    <AnimatePresence>
                      {errors.email && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: 10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="
                            flex
                            items-center
                            gap-1
                            text-[8px]
                            text-red-500
                          "
                        >
                          <AlertCircle className="w-2 h-2" />

                          {
                            errors.email
                          }
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </label>

                  <input
                    type="email"
                    placeholder="USER@DOMAIN.SYS"
                    value={
                      formData.email
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email:
                          e.target
                            .value,
                      })
                    }
                    className={`
                      w-full
                      rounded-xl
                      bg-black/40
                      border
                      px-4
                      sm:px-5
                      py-3.5
                      sm:py-4
                      font-mono
                      text-xs
                      text-white
                      focus:outline-none
                      transition-all

                      ${
                        errors.email
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-neon-blue'
                      }
                    `}
                  />
                </div>
              </div>

              {/* Type */}
              <div className="space-y-3">
                <label
                  className="
                    font-mono
                    text-[10px]
                    text-neon-blue
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Payload_Description
                </label>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Project',
                    'Collab',
                    'Security',
                    'Other',
                  ].map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormData(
                            {
                              ...formData,
                              type,
                            }
                          )
                        }
                        className={`
                          px-3
                          sm:px-4
                          py-2.5
                          rounded-lg
                          border
                          font-mono
                          text-[9px]
                          transition-all
                          touch-manipulation

                          ${
                            formData.type ===
                            type
                              ? `
                                bg-neon-blue/20
                                border-neon-blue
                                text-white
                              `
                              : `
                                bg-white/5
                                border-white/10
                                text-gray-500
                                hover:text-white
                              `
                          }
                        `}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label
                  className="
                    font-mono
                    text-[10px]
                    text-neon-blue
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Message_Data_Stream
                </label>

                <textarea
                  rows={4}
                  style={{
                    minHeight:
                      '120px',
                  }}
                  placeholder="INPUT_TRANSMISSION_DATA_HERE..."
                  value={
                    formData.message
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message:
                        e.target
                          .value,
                    })
                  }
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    bg-black/40
                    border
                    border-white/10
                    px-4
                    sm:px-5
                    py-4
                    font-mono
                    text-xs
                    text-white
                    focus:outline-none
                    focus:border-neon-blue
                    transition-all
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  isSuccess
                }
                className={`
                  relative
                  overflow-hidden
                  w-full
                  py-4
                  sm:py-5
                  rounded-xl
                  font-mono
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.4em]
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  touch-manipulation

                  ${
                    isSuccess
                      ? 'bg-neon-green text-black'
                      : isError
                      ? 'bg-red-500 text-white'
                      : 'bg-neon-blue text-black hover:bg-white'
                  }
                `}
              >
                <span className="relative z-10">
                  {isSubmitting
                    ? 'UPLOADING...'
                    : isSuccess
                    ? 'TRANSMISSION_SUCCESSFUL'
                    : isError
                    ? 'PROTOCOL_ERROR'
                    : 'UPLOAD_MESSAGE'}
                </span>

                {isSubmitting ? (
                  <Loader2 className="relative z-10 w-5 h-5 animate-spin text-black" />
                ) : isSuccess ? (
                  <CheckCircle2 className="relative z-10 w-5 h-5" />
                ) : isError ? (
                  <AlertCircle className="relative z-10 w-5 h-5" />
                ) : (
                  <SendHorizonal
                    className="relative z-10 w-5 h-5"
                  />
                )}

                {/* Loading Progress Bar */}
                <AnimatePresence>
                  {isSubmitting && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ originX: 0 }}
                      transition={{ 
                        duration: 2, 
                        ease: "linear",
                        repeat: Infinity 
                      }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-20"
                    />
                  )}
                </AnimatePresence>

                {!isSuccess && (
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      hover:opacity-100
                      transition-opacity
                      bg-gradient-to-r
                      from-neon-blue
                      via-white
                      to-neon-blue
                    "
                  />
                )}
              </button>

              {/* Footer */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  pt-2
                  opacity-60
                "
              >
                <ShieldCheck className="w-4 h-4 text-neon-green" />

                <span
                  className="
                    font-mono
                    text-[7px]
                    sm:text-[9px]
                    text-gray-400
                    uppercase
                    tracking-widest
                    text-center
                  "
                >
                  Secure_Layer_Active
                  //
                  End-to-End
                  Encryption
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}