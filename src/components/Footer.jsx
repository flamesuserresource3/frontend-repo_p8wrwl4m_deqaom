import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something exceptional</h3>
          <p className="mt-3 text-white/70">
            I’m open to freelance projects, collaborations, and full-time roles. If you have a vision in mind, let’s make it real.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition shadow-sm"
            >
              <Mail className="h-4 w-4" />
              hello@example.com
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            >
              View work
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#projects" className="hover:text-white/80">Projects</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
