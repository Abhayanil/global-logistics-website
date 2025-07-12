import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Timeline from '../components/Timeline'; // Import the new Timeline component
import '../styles/About.css';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 }
    })
  };

  const principles = [
    "Quality",
    "Innovation",
    "Sustainability"
  ];

  return (
    <div className="about-page container">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <motion.section
        className="company-overview"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Our Story, Mission & Principles</h2>
        <p>Global Logistics was founded with a vision to simplify international trade and provide seamless logistics solutions across the globe. Our mission is to connect businesses worldwide through efficient, reliable, and sustainable supply chain management.</p>
        <p>We are committed to
          {principles.map((principle, i) => (
            <motion.strong
              key={i}
              custom={i}
              variants={quoteVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              style={{ display: "inline-block", marginLeft: "0.5em" }}
            >
              {principle}{i < principles.length - 1 ? "," : "."}
            </motion.strong>
          ))}
        </p>
      </motion.section>

      <Timeline /> {/* Integrated Timeline component */}

      <motion.section
        className="leadership-profiles"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="section-heading">Leadership Team</h2>
        <Team /> {/* Reusing the Team component for leadership profiles */}
      </motion.section>

      <motion.section
        className="client-testimonials"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="section-heading">Client Success Stories</h2>
        <Testimonials /> {/* Reusing the Testimonials component */}
      </motion.section>

      <motion.section
        className="global-presence"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="section-heading">Our Global Reach</h2>
        <p>With a strong network spanning continents, Global Logistics has a significant presence in key trade hubs. Our offices and partnerships ensure we can serve your needs wherever you are.</p>
        <div className="office-list">
          <h3>Key Office Locations:</h3>
          <ul>
            <li>Panama City, Panama</li>
            <li>Hong Kong, China</li>
            <li>New York, USA</li>
            <li>Dubai, UAE</li>
          </ul>
          {/* Placeholder for a global presence map */}
          <div className="map-placeholder">
            <p>[Interactive Global Map Placeholder]</p>
            {/* <img src="map_image.jpg" alt="Global Presence Map" /> */}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;