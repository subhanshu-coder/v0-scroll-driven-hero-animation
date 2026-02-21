'use client';

import { useEffect, useRef } from 'react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load GSAP
    const loadGSAP = async () => {
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);

      // Create scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
          markers: false,
        },
      });

      tl.to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      })
        .to(
          '.scroll-element',
          {
            x: 100,
            opacity: 0.5,
            duration: 2,
          },
          0
        )
        .to(
          '.bg-animation',
          {
            backgroundPosition: '100% 0%',
            duration: 3,
          },
          0
        );
    };

    loadGSAP().catch(console.error);

    return () => {
      // Cleanup ScrollTrigger on unmount
      if (typeof window !== 'undefined') {
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="hero relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-animation bg-gradient-to-r from-blue-500/10 to-purple-500/10" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-text text-5xl md:text-7xl font-bold text-white opacity-0 transform translate-y-10 mb-6">
            ITZFIZZ
          </h1>
          <p className="hero-text text-xl md:text-2xl text-gray-300 opacity-0 transform translate-y-10">
            Scroll to see the magic unfold
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Animated Elements */}
      <section className="py-32 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto space-y-20">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="scroll-element p-8 rounded-lg bg-slate-700 border border-slate-600 transform hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Feature {item}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This element animates as you scroll. Each section reveals
                beautiful transitions powered by GSAP ScrollTrigger and
                TailwindCSS styling.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>Made with scroll magic using GSAP & Next.js</p>
        </div>
      </footer>

      {/* Load GSAP from CDN as fallback */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    </main>
  );
}
