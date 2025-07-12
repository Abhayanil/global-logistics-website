import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="contact-page container">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <section className="contact-content-wrapper">
        <motion.div
          className="contact-info-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Get in Touch with Global Logistics</h2>
          <p>We are here to answer any questions you may have and provide you with the best logistics solutions. Reach out to us through the form below or directly via our contact details.</p>

          <div className="contact-details">
            <motion.div
              className="detail-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Email Us</h3>
              <p><a href="mailto:info@globallogistics.com">info@globallogistics.com</a></p>
            </motion.div>
            <motion.div
              className="detail-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
            </motion.div>
            <motion.div
              className="detail-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3>Our Offices</h3>
              <p>Panama City, Panama</p>
              <p>Hong Kong, China</p>
              <p>New York, USA</p>
              <p>Dubai, UAE</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </section>

      <motion.section
        className="map-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="section-heading">Find Us on the Map</h2>
        <div className="map-placeholder">
          <p>[Embedded Map Placeholder]</p>
          {/* You can embed a Google Map or similar here */}
        </div>
      </motion.section>

      {/* Sticky CTA Bar for Mobile */}
      <div className="sticky-cta-bar">
        <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
      </div>
    </div>
  );
};

export default Contact;
