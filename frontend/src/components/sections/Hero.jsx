// EDIT THIS: Hero content and profile image
import { motion } from 'framer-motion';
import { Download, Mail, Github, ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

export function Hero() {
  // DO NOT CHANGE: Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // DO NOT CHANGE: Scroll to next section
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 md:order-1 text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-primary font-medium text-lg">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
              {/* EDIT THIS: Your name */}
              {portfolioData.personal.name}
              <br />
              <span className="text-primary">{portfolioData.personal.title}</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              {/* EDIT THIS: Your headline */}
              {portfolioData.hero.subheadline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                {portfolioData.hero.cta.primary}
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {/* EDIT THIS: Resume download link */}
                <a href="/assets/resume.pdf" download>
                  {portfolioData.hero.cta.secondary}
                </a>
              </Button>
              
              <Button 
                variant="ghost"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {portfolioData.hero.cta.tertiary}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {/* EDIT THIS: Your social links */}
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <motion.div
              className="relative w-80 h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* EDIT THIS: Replace with your profile image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/60 p-2">
                <img
                  src= {portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating decorations */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full blur-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          variants={itemVariants}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.button>
      </motion.div>
    </section>
  );
}