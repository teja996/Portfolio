import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="flex-grow container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-primary mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
          <ul className="list-disc list-inside">
            <li>React.js, Next.js, Angular</li>
            <li>HTML5, CSS3, Tailwind CSS, Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Node.js, Express.js, Django, Flask, FastAPI</li>
            <li>Python, TypeScript</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Cloud & DevOps</h3>
          <ul className="list-disc list-inside">
            <li>AWS (Lambda, S3, RDS, EC2), Azure</li>
            <li>Docker, Kubernetes, CI/CD, GitHub Actions</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">AI/ML</h3>
          <ul className="list-disc list-inside">
            <li>TensorFlow, OpenAI API (GPT), Vertex AI</li>
            <li>Generative AI, LangChain</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
