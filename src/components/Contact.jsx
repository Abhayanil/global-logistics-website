import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <motion.div
      className={styles.contact}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className={styles.title}>Contact Us</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <textarea placeholder="Message" className={styles.input} rows={4} />
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </motion.div>
  );
}
