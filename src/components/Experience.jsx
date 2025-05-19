import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="flex-grow container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-primary mb-6">Work Experience</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Software Engineer</h3>
          <p className="text-gray-600">Reliant Technologies LLC, Charlotte, NC | July 2024 - Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Designed and implemented high-performance RESTful APIs using Python (v3.12), improving data exchange efficiency by 30%.</li>
            <li>Orchestrated containerized deployments with Docker and Kubernetes on Azure (AKS), increasing deployment efficiency by 45%.</li>
            <li>Implemented Datadog monitoring for real-time performance tracking, reducing downtime.</li>
            <li>Debugged complex threading issues and memory leaks in production.</li>
            <li>Optimized database queries and implemented Redis caching, reducing API response times by 25%.</li>
            <li>Implemented CI/CD pipelines with GitHub Actions, automating deployments and reducing errors by 40%.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Associate Software Engineer</h3>
          <p className="text-gray-600">Carelon (Elevance Health), India | Jun 2021 - Jul 2022</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Developed cloud-native microservices using Node.js and TypeScript for scalable healthcare data processing.</li>
            <li>Designed RESTful APIs with Express.js and integrated AWS Lambda and API Gateway.</li>
            <li>Built CI/CD pipelines using Jenkins and Docker for AWS ECS deployments.</li>
            <li>Utilized MongoDB and DynamoDB for efficient healthcare data storage.</li>
            <li>Implemented real-time data analytics dashboards with React.js and Chart.js.</li>
            <li>Led migration of legacy Python scripts to AWS Lambda, improving performance and reducing costs.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Web Developer Intern</h3>
          <p className="text-gray-600">Technocolabs, India | Aug 2020 - Oct 2020</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Developed a React Native marketplace app with Stripe integration for 1,000+ users.</li>
            <li>Implemented responsive UI components with React Native and styled-components.</li>
            <li>Created RESTful API endpoints with Node.js and Express.js handling 10,000+ daily requests.</li>
            <li>Utilized Firebase for real-time database and authentication, reducing development time by 30%.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
