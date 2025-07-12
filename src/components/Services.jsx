import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const Services = () => {
  return (
    <motion.div
      className={styles.services}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className={styles.title}>Our Services</h2>
      <ul className={styles.list}>
        <li>International Freight Forwarding</li>
        <li>Customs Clearance</li>
        <li>Warehousing & Distribution</li>
        <li>Supply Chain Solutions</li>
      </ul>
    </motion.div>
  );
};

export default Services;
