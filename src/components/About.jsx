import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="flex-grow container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        Results-driven full stack developer with expertise in Python and JavaScript ecosystems, specializing in building scalable, user-centric web applications. Proven track record of leveraging modern frameworks like React.js, Node.js, and Django to deliver efficient solutions that drive business growth. Combines technical proficiency with collaborative problem-solving skills to create innovative software in Agile environments.
      </p>
      <p className="text-lg text-gray-700">
        Passionate about continuous learning and applying new technologies to solve real-world problems.
      </p>
    </motion.section>
  );
}
