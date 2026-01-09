// EDIT THIS: Footer social links and copyright info
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

export function Footer() {
  // EDIT THIS: Social links
  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.social.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: portfolioData.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: portfolioData.social.Instagram,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Name/Brand */}
          <motion.h3
            className="text-2xl font-bold text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {portfolioData.personal.name}
          </motion.h3>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              {/* EDIT THIS: Copyright text */}
              © {new Date().getFullYear()} {portfolioData.personal.name}. Built with
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              using React & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}