import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="flex-grow container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-primary mb-6">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div className="p-4 border rounded shadow hover:shadow-lg transition" whileHover={{ scale: 1.02 }}>
          <h3 className="text-2xl font-semibold mb-2">Farm Assistant AI (Capstone)</h3>
          <p>
            Built an AI assistant for farmers providing data-driven insights on crops based on weather and soil data.
            Integrated OpenWeatherMap API and Google Vertex AI for real-time weather and generative AI insights.
          </p>
          <a href="https://www.kaggle.com/code/saiteja996/farm-assistant-genai-capstone-project" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
            View on Kaggle
          </a>
        </motion.div>
        <motion.div className="p-4 border rounded shadow hover:shadow-lg transition" whileHover={{ scale: 1.02 }}>
          <h3 className="text-2xl font-semibold mb-2">AI-Powered Code Assistant</h3>
          <p>
            Developed a web-based code assistant with Flask backend and React frontend using OpenAI's GPT API for intelligent code suggestions.
            Implemented real-time WebSocket communication for live coding assistance.
          </p>
          <p>Deployed on AWS with Docker and CI/CD ensuring high availability.</p>
        </motion.div>
        <motion.div className="p-4 border rounded shadow hover:shadow-lg transition" whileHover={{ scale: 1.02 }}>
          <h3 className="text-2xl font-semibold mb-2">Event Master</h3>
          <p>
            Designed a serverless event management app using AWS Lambda, DynamoDB, and S3. Integrated real-time notifications with SNS and SES.
          </p>
          <a href="https://github.com/teja996/EventMaster" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
