// EDIT THIS: About content and highlights
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';
import { Code as Code2, Lightbulb, Target, Heart } from 'lucide-react';

export function About() {
  // DO NOT CHANGE: Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // EDIT THIS: Highlight icons
  const highlightIcons = [
    { icon: Code2, title: portfolioData.about.highlights[0] },
    { icon: Target, title: portfolioData.about.highlights[1] },
    { icon: Lightbulb, title: portfolioData.about.highlights[2] },
    { icon: Heart, title: portfolioData.about.highlights[3] },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{portfolioData.about.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {/* EDIT THIS: Your personal bio */}
              {portfolioData.about.content}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlightIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-background hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{item.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 text-center">
              <CardContent>
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code2 className="h-16 w-16 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Passionate Developer</h3>
                <p className="text-muted-foreground">
                  Dedicated to creating clean, efficient, and user-friendly web applications
                  that make a positive impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}