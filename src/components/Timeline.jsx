import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      year: 2011,
      title: "Founded in Panama",
      description: "W Group was established in Panama, laying the groundwork for global trade solutions.",
      icon: "📍"
    },
    {
      year: 2015,
      title: "Expanded to China",
      description: "Opened our first office in China, strengthening our presence in a key manufacturing hub.",
      icon: "🇨🇳"
    },
    {
      year: 2018,
      title: "Partnership with India",
      description: "Formed strategic alliances in India, expanding our sourcing and logistics capabilities.",
      icon: "🇮🇳"
    },
    {
      year: 2022,
      title: "Global Digital Transformation",
      description: "Launched advanced digital platforms for seamless logistics management and client interaction.",
      icon: "💻"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="timeline container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey: From Panama to the World
      </motion.h2>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="timeline-icon">{event.icon}</div>
            <div className="timeline-content">
              <h3>{event.year} - {event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;