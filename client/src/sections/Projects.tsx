import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
} from 'motion/react';

import SectionHeading from '../components/SectionHeading';

import {
  ExternalLink,
  Github,
  Terminal,
  Zap,
  Cpu,
  Monitor,
  Shield,
  BrainCircuit,
} from 'lucide-react';

/* =========================================
   Categories
 ========================================= */

const categories = [
  'ALL_NODES',
  'SYSTEMS_ARCHITECTURE',
  'CYBER_SECURITY',
  'STARTUP_INFRASTRUCTURE',
];

/* =========================================
   Projects
 ========================================= */

const projects = [
  {
    id: '01',
    title: 'STUDENT INFO SYSTEM (SIS)',
    description: 'Developed a scalable relational ecosystem for managing multi-departmental student records, authentication workflows, and database automation systems.',
    achievement: '40% LATENCY_REDUCTION',
    tags: ['Java', 'SQL', 'Database', 'JavaFX'],
    category: 'SYSTEMS_ARCHITECTURE',
    role: 'LEAD_ARCHITECT',
    icon: <Cpu className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/yspanchal6',
    demo: '#',
  },
  {
    id: '02',
    title: 'UIDAI HACKATHON PROTOCOL',
    description: 'Engineered a secure Aadhaar verification dashboard with encrypted authentication workflows and real-time citizen service validation systems.',
    achievement: 'SECURE_API_ENFORCED',
    tags: ['Python', 'Cybersecurity', 'API', 'JavaScript'],
    category: 'CYBER_SECURITY',
    role: 'SECURITY_ENGINEER',
    icon: <Shield className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/yspanchal6',
    demo: '#',
  },
  {
    id: '03',
    title: 'MYTH STARTUP INITIATIVE',
    description: 'Technical leadership for a modular AI-driven infrastructure prototype focused on scalable automation and decentralized architecture workflows. This sovereign-grade identity intelligence platform cross-references biometric data against government databases.',
    achievement: 'SCALABLE_CORE_V1.0',
    tags: ['React', 'AI', 'Python', 'Tailwind'],
    category: 'STARTUP_INFRASTRUCTURE',
    role: 'FOUNDING_CTO',
    icon: <BrainCircuit className="w-4 h-4" />,
    image: '/images/myth_initiative.png',
    images: [
      '/images/myth_initiative.png',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    ],
    github: 'https://github.com/yspanchal6/deepfake.git',
    demo: 'https://myth-system.vercel.app/',
  },
];

/* =========================================
   Sub-Components
 ========================================= */

function ProjectImage({ project }: { project: any }) {
  const images = project.images || [project.image];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIdx((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIdx}
          loading="lazy"
          src={images[currentIdx]}
          alt={`${project.title} - View ${currentIdx + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.5, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 md:group-hover:rotate-1"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200';
          }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
          {images.map((_: any, i: number) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentIdx ? 'w-4 bg-neon-blue' : 'w-1 bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================
   Main Component
 ========================================= */

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL_NODES');

  const filteredProjects = activeCategory === 'ALL_NODES'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-cyber-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-neon-green/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-neon-blue/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="PROJECT_REGISTRY" subtitle="Deployment & Architecture Showcase" number="03" />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-6 py-2.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] border transition-all duration-500 ${
                activeCategory === cat
                  ? 'border-neon-blue text-white bg-neon-blue/10 shadow-[0_0_15px_rgba(0,209,255,0.2)]'
                  : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="activeTabGlow" className="absolute inset-0 border border-neon-blue animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative will-change-transform"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="relative p-5 sm:p-6 bg-cyber-gray/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:bg-cyber-gray/60 group-hover:border-neon-blue/30 transition-all duration-500">
                  
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-8 border border-white/5">
                    <ProjectImage project={project} />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-80 pointer-events-none z-10" />
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-blue/50 shadow-[0_0_15px_rgba(0,209,255,0.8)] animate-scanner z-10 pointer-events-none" />
                    
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-neon-green/30 rounded-lg flex items-center gap-2 z-10">
                      <Zap className="w-3 h-3 text-neon-green animate-pulse" />
                      <span className="font-mono text-[8px] sm:text-[9px] text-neon-green uppercase tracking-tight font-bold">{project.achievement}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-lg font-mono text-[8px] text-neon-blue uppercase tracking-widest flex items-center gap-2">
                        {project.icon} {project.id} // {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-neon-blue transition-colors leading-snug">
                        {project.title}
                      </h4>
                      <Terminal className="w-4 h-4 text-gray-700 group-hover:text-neon-blue transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] sm:text-[10px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-gray-500">
                          <Cpu className="w-3 h-3" /> NODE_READY
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-gray-500">
                          <Monitor className="w-3 h-3" /> V1.0.4
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <motion.a 
                          whileHover={{ scale: 1.15, rotate: 10 }} whileTap={{ scale: 0.95 }}
                          href={project.github} target="_blank" rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a 
                          whileHover={{ scale: 1.15, rotate: -10 }} whileTap={{ scale: 0.95 }}
                          href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="text-neon-blue hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Repository Status */}
        <div className="mt-20 md:mt-24 p-5 sm:p-6 md:p-8 border border-neon-green/20 rounded-2xl bg-white/[0.02] backdrop-blur-sm flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="font-mono text-2xl text-white mb-1">200+</div>
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-widest">Commits_Logged</div>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-white/5" />
          <div className="text-center">
            <div className="font-mono text-2xl text-neon-green mb-1">04</div>
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-widest">Beta_Testing</div>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-white/5" />
          <div className="text-center">
            <div className="font-mono text-2xl text-white mb-1">08</div>
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-widest">Active_Nodes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
