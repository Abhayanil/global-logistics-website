import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import FAQs from '../components/FAQs';
import ShippingCalculator from '../components/ShippingCalculator'; // Import the new component
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="services-page container">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Comprehensive Services
      </motion.h1>

      <motion.section
        className="detailed-services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="section-heading">Detailed Service Offerings</h2>
        <Services /> {/* Reusing the Services component for a general overview */}
        <div className="service-details">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Import/Export Solutions</h3>
            <ul>
              <li>Global freight forwarding (Air, Sea, Land)</li>
              <li>Customs brokerage and compliance</li>
              <li>Trade consulting and tariff classification</li>
              <li>Cargo insurance</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Logistics & Supply Chain Management</h3>
            <ul>
              <li>Warehousing and distribution</li>
              <li>Inventory management</li>
              <li>Order fulfillment and pick-and-pack</li>
              <li>Cross-docking services</li>
              <li>Last-mile delivery solutions</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3>Documentation & Compliance</h3>
            <ul>
              <li>Preparation and submission of all necessary shipping documents</li>
              <li>Regulatory compliance assistance</li>
              <li>Permit and license acquisition</li>
              <li>Trade finance support</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <ShippingCalculator /> {/* Integrated ShippingCalculator component */}

      <motion.section
        className="distribution-overview"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="section-heading">Distribution Network Overview</h2>
        <p>Our extensive distribution network ensures your goods reach their destination efficiently and on time. We leverage strategic partnerships and advanced tracking systems to provide transparent and reliable distribution services.</p>
        <div className="distribution-placeholder">
          <p>[Distribution Network Visualization Placeholder]</p>
        </div>
      </motion.section>

      <motion.section
        className="faq-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <FAQs /> {/* Reusing the FAQs component */}
      </motion.section>
    </div>
  );
};

export default ServicesPage;