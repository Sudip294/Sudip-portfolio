// EDIT THIS: Your experience in portfolio.js
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My journey in web development and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        {/* <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div> */}
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-primary" />
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.year}
                        </div>
                         <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.grade}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}