import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="services container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      <div className="service-cards">
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-icon">📦</div> {/* Placeholder Icon */}
          <h3>Import/Export</h3>
          <p>Seamless customs clearance and freight forwarding, connecting your business to global markets.</p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="service-icon">✈️</div> {/* Placeholder Icon */}
          <h3>Logistics & Supply Chain</h3>
          <p>End-to-end supply chain management solutions, optimizing efficiency and reducing costs.</p>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="service-icon">📄</div> {/* Placeholder Icon */}
          <h3>Documentation & Compliance</h3>
          <p>Handling all necessary trade and shipping documents, ensuring regulatory compliance.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
