import React from 'react';
import { motion } from 'framer-motion';
import styles from './Team.module.css';

export default function Team() {
  return (
    <motion.div
      className={styles.team}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className={styles.title}>Meet Our Team</h2>
      <div className={styles.members}>
        <div className={styles.member}>Jane Doe – CEO</div>
        <div className={styles.member}>John Smith – Operations</div>
        <div className={styles.member}>Emily Lee – Technology</div>
      </div>
    </motion.div>
  );
}
