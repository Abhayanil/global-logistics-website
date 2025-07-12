import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        <motion.div
          className="footer-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Global Logistics</h3>
          <p>Your trusted partner for global logistics solutions, connecting businesses worldwide.</p>
        </motion.div>
        <motion.div
          className="footer-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@globallogistics.com">info@globallogistics.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Business Hours: Mon-Fri: 9 AM - 5 PM</p>
        </motion.div>
        <motion.div
          className="footer-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Global Logistics. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;