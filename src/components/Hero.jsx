import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const sentence = "Moving Your Business Forward — Globally.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.1 }
    })
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero">
      <div className="hero-content container">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sentence.map((word, index) => (
            <motion.span
              key={index}
              variants={childVariants}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Your trusted partner for seamless global logistics solutions.
        </motion.p>
        <motion.div
          className="hero-buttons"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          <Link to="/services" className="btn btn-secondary">Explore Services</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
