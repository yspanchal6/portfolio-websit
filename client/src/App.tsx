/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './sections/ChatBot';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-black text-white selection:bg-neon-blue selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <ChatBot />
    </div>
  );
}


