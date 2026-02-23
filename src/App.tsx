/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ChevronLeft, 
  MessageSquare, 
  Heart,
  ArrowRight
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity"
        >
          <ChevronLeft size={16} />
          Back to Journal
        </motion.button>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif italic text-2xl"
        >
          Lumina
        </motion.div>
        <div className="flex gap-6">
          <button className="hover:opacity-60 transition-opacity"><Share2 size={20} /></button>
          <button className="hover:opacity-60 transition-opacity"><Bookmark size={20} /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/journal/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-brand-bg" />
        </motion.div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-3 py-1 border border-white/30 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold">
              Architecture & Design
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] text-balance"
          >
            The Silent <br /> <span className="italic">Language</span> of Light
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-8 text-xs uppercase tracking-widest opacity-60 font-medium"
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>Feb 22, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>12 Min Read</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </header>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 py-24 relative">
        <div className="flex flex-col gap-12 text-lg leading-relaxed text-brand-accent/80 font-light">
          <p className="text-2xl font-serif italic text-brand-accent leading-snug first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:mt-2">
            In the realm of modern architecture, light is not merely a utility but a primary building material. It shapes our perception of space, defines the rhythm of our days, and influences the very core of our emotional well-being.
          </p>

          <p>
            When we speak of the "silent language" of light, we refer to the subtle ways in which illumination interacts with surfaces—the soft gradient across a concrete wall, the sharp shadow cast by a cantilevered roof, or the ethereal glow of a translucent screen at dusk.
          </p>

          <blockquote className="my-12 pl-8 border-l border-white/20">
            <p className="text-3xl font-serif italic text-brand-accent leading-tight">
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
            <cite className="block mt-4 text-sm uppercase tracking-widest opacity-50 not-italic">— Le Corbusier</cite>
          </blockquote>

          <h2 className="text-4xl font-serif text-brand-accent mt-8 mb-4">The Geometry of Shadows</h2>
          
          <p>
            Shadows are as vital as light itself. Without the absence of light, we lose the sense of depth and texture. In the works of masters like Tadao Ando, the deliberate introduction of shadow creates a sanctuary of stillness. The "Cross of Light" in the Church of the Light is perhaps the most poignant example of how a simple void can transform a space into a spiritual experience.
          </p>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img 
                src="https://picsum.photos/seed/arch1/800/1000" 
                alt="Architecture detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl md:mt-12"
            >
              <img 
                src="https://picsum.photos/seed/arch2/800/1000" 
                alt="Architecture detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <p>
            As we move further into the digital age, our relationship with physical light becomes even more precious. We spend our hours bathed in the artificial blue glow of screens, making the encounter with natural, atmospheric light a form of luxury.
          </p>

          <p>
            Designing for light requires a deep understanding of the site's orientation, the seasonal shifts of the sun, and the local climate. It is a dance between the permanent structure and the ephemeral atmosphere.
          </p>
        </div>

        {/* Article Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <img src="https://picsum.photos/seed/author/100/100" alt="Author" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-sm font-semibold">Elena Vance</p>
                <p className="text-xs opacity-50 uppercase tracking-widest">Architectural Critic</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm">
                <Heart size={16} /> 1.2k
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm">
                <MessageSquare size={16} /> 48
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Related Posts Section */}
      <section className="bg-white/5 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">Next in Journal</span>
              <h3 className="text-5xl font-serif mt-4">Further Reading</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-semibold hover:gap-4 transition-all">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "The Brutalist Revival", category: "Trends", img: "arch3" },
              { title: "Sustainable Urbanism", category: "Environment", img: "arch4" },
              { title: "Minimalist Interiors", category: "Design", img: "arch5" }
            ].map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={`https://picsum.photos/seed/${post.img}/800/500`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{post.category}</span>
                <h4 className="text-2xl font-serif mt-2 group-hover:italic transition-all">{post.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Join the Lumina Journal</h2>
          <p className="opacity-60 mb-10 font-light">Receive a monthly curation of architectural insights and design philosophy directly in your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button className="bg-brand-accent text-brand-bg px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">
          © 2026 Lumina Journal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
