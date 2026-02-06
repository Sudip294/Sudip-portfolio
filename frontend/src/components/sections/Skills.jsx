// EDIT THIS: Your skills list in portfolio.js
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiGithub,
  SiNodedotjs,
  SiMongodb,
  SiShadcnui,
} from 'react-icons/si';


export function Skills() {
  // DO NOT CHANGE: Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Group skills by category
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const skillIcons = {
    HTML5: SiHtml5,
    CSS3: SiCss3,
    JavaScript: SiJavascript,
    React: SiReact,
    Vite: SiVite,
    Tailwind: SiTailwindcss,
    Bootstrap: SiBootstrap,
    Framer: SiFramer,
    Git: SiGithub,
    Node: SiNodedotjs,
    MERN: SiMongodb, // or custom MERN icon
    shadcn: SiShadcnui,
  };

  const getSkillKey = (name) => {
    if (name.includes('Tailwind')) return 'Tailwind';
    if (name.includes('HTML')) return 'HTML5';
    if (name.includes('CSS')) return 'CSS3';
    if (name.includes('JavaScript')) return 'JavaScript';
    if (name.includes('React')) return 'React';
    if (name.includes('Vite')) return 'Vite';
    if (name.includes('Bootstrap')) return 'Bootstrap';
    if (name.includes('Framer')) return 'Framer';
    if (name.includes('Git')) return 'Git';
    if (name.includes('Node')) return 'Node';
    if (name.includes('MERN')) return 'MERN';
    if (name.includes('shadcn')) return 'shadcn';
    return null;
  };



  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Quick Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {portfolioData.skills.map((skill, index) => {
              const Icon = skillIcons[getSkillKey(skill.name)];

              return (
                <motion.div
                  key={skill.name}
                  className="group p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors text-center flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {Icon && (
                    <Icon className="text-3xl text-primary group-hover:scale-110 transition-transform" />
                  )}

                  <div className="font-medium text-sm">
                    {skill.name.replace(/\(.*?\)/g, '').trim()}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {skill.level}%
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}