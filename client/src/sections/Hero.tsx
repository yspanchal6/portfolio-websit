import { motion } from 'motion/react';
import {
  ChevronRight,
  Zap,
  Target,
  Cpu,
  Shield,
  Activity,
  Network
} from 'lucide-react';
import { useState, useEffect } from 'react';

const specialties = [
  'Cybersecurity Specialist',
  'System Architect',
  'AI Integration Engineer',
  'Scalable Systems Engineer',
  'Ethical Bug Hunter',
  'GATE Aspirant'
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = specialties[index];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % specialties.length);
      } else {
        setDisplayText(
          currentText.substring(
            0,
            isDeleting
              ? displayText.length - 1
              : displayText.length + 1
          )
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        lg:min-h-screen
        flex
        items-center
        justify-center
        pt-24
        lg:pt-20
        overflow-hidden
        bg-cyber-black
      "
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 lg:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(0,255,0,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, rgba(0,209,255,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(0,255,0,0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Scan Effect */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-5">
        <motion.div
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="w-full h-[1px] bg-neon-blue shadow-[0_0_20px_rgba(0,209,255,1)]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/20 to-cyber-black z-0" />

      {/* Main Container */}
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
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Top Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-4
              py-2
              rounded-full
              bg-neon-blue/10
              border
              neon-border-blue
              text-neon-blue
              text-[9px]
              sm:text-[10px]
              font-mono
              uppercase
              tracking-[0.25em]
              mb-8
            "
          >
            <Target className="w-3.5 h-3.5 animate-pulse" />
            SYSTEM_ARCHITECT v4.2.0_STABLE
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-8xl
              font-bold
              tracking-tight
              mb-6
              leading-[1]
              lg:leading-[0.9]
            "
          >
            HI, I'M <span className="text-white">YASH</span>
            <br />
            <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]">
              PANCHAL
            </span>
          </h1>

          {/* Typing Text */}
          <div
            className="
              min-h-[50px]
              mb-8
              lg:mb-10
              flex
              items-center
              justify-center
              lg:justify-start
              font-mono
              text-sm
              sm:text-base
              md:text-xl
              text-neon-green
            "
          >
            <span className="mr-3 text-white/40">{'>'}</span>

            <span className="uppercase tracking-[0.1em] font-bold">
              {displayText}
            </span>

            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity
              }}
              className="ml-2 w-2 sm:w-3 h-5 sm:h-7 bg-neon-green"
            />
          </div>

          {/* Description */}
          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              font-sans
              max-w-xl
              mx-auto
              lg:mx-0
              mb-10
              lg:mb-12
              leading-relaxed
            "
          >
            Architecting robust digital ecosystems for the next
            generation of web infrastructure. Specializing in{' '}
            <span className="text-white">
              secure scalability
            </span>{' '}
            and{' '}
            <span className="text-white">
              AI integration
            </span>.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:gap-5
              w-full
              sm:w-auto
              justify-center
              lg:justify-start
            "
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="
                px-6
                sm:px-8
                lg:px-10
                py-4
                lg:py-5
                bg-neon-blue
                text-black
                font-mono
                font-bold
                uppercase
                tracking-widest
                hover:bg-white
                transition-all
                flex
                items-center
                justify-center
                gap-3
                shadow-[0_0_25px_rgba(0,209,255,0.4)]
              "
            >
              EXECUTE_INIT()
              <ChevronRight className="w-5 h-5" />
            </motion.a>

<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="https://drive.google.com/uc?export=download&id=1PHxOVy0hVEYOuDOCGR7sUQ9x_DlDB0aM"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-6
    sm:px-8
    lg:px-10
    py-4
    lg:py-5
    border
    border-neon-green/30
    text-neon-green
    font-mono
    font-bold
    uppercase
    tracking-widest
    hover:bg-neon-green/5
    transition-all
    flex
    items-center
    justify-center
    gap-3
  "
>
  DOWNLOAD_CV
  <Zap className="w-4 h-4" />
</motion.a>
          </div>
        </motion.div>

        {/* RIGHT DASHBOARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotateY: -10
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0
          }}
          transition={{
            duration: 1.2,
            ease: 'easeOut'
          }}
          className="relative hidden lg:block perspective-1000"
        >
          <div
            className="
              relative
              w-full
              aspect-square
              neon-border-blue
              border
              rounded-3xl
              p-6
              overflow-hidden
              bg-cyber-gray/20
              backdrop-blur-3xl
              shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent" />

            {/* Inner Dashboard */}
            <div
              className="
                relative
                h-full
                bg-black/80
                rounded-2xl
                p-8
                font-mono
                text-sm
                border
                border-white/5
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/30" />
                  <div className="w-3 h-3 rounded-full bg-neon-green/30" />
                </div>

                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-neon-blue animate-pulse" />

                  <span className="text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    Core_Process: Active
                  </span>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <div className="text-[9px] text-gray-500 uppercase mb-2 tracking-widest">
                    NETWORK_BANDWIDTH
                  </div>

                  <div className="flex items-end gap-2 h-12">
                    {[40, 70, 45, 90, 60, 80].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1
                        }}
                        className="flex-1 bg-neon-blue/60 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex flex-col justify-center items-center">
                  <div className="text-[9px] text-gray-500 uppercase mb-2 tracking-widest">
                    ENCRYPTION_LVL
                  </div>

                  <div className="text-3xl text-neon-green font-bold">
                    256-BIT
                  </div>

                  <div className="text-[8px] text-neon-green/50 mt-1 uppercase tracking-tighter">
                    AES_PROTOCOL_ACTIVE
                  </div>
                </div>
              </div>

              {/* Systems */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-gray-600 uppercase border-b border-white/5 pb-2">
                  <span>SUBSYSTEM</span>
                  <span>LATENCY</span>
                </div>

                {[
                  {
                    name: 'Firewall_Node',
                    val: '0.4ms',
                    icon: <Shield className="text-neon-green" />
                  },
                  {
                    name: 'Neural_Engine',
                    val: '1.2ms',
                    icon: <Cpu className="text-neon-blue" />
                  },
                  {
                    name: 'Sync_Cluster',
                    val: 'Synced',
                    icon: <Network className="text-white/40" />
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center"
                  >
                    <span className="flex items-center gap-3 text-xs text-white/80">
                      <span className="opacity-50">
                        {item.icon}
                      </span>

                      {item.name}
                    </span>

                    <span className="text-neon-blue text-xs font-bold">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Logs */}
              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-ping" />

                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    System_Logs
                  </span>
                </div>

                <div className="text-[11px] text-gray-400 space-y-1">
                  <p className="flex gap-2">
                    <span className="text-neon-green">$</span>
                    <span>boot --secure_layer_active</span>
                  </p>

                  <p className="flex gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="opacity-50">
                      verifying_neural_handshake...
                    </span>
                  </p>

                  <p className="flex gap-2">
                    <span className="text-neon-green">$</span>
                    <span className="animate-pulse">
                      listening_for_intercepts...
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute top-0 right-0 p-8">
              <Zap className="w-8 h-8 text-neon-blue/20 rotate-12" />
            </div>

            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-neon-blue opacity-30" />

            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-neon-blue opacity-30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}