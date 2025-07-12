import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Team.css';

const Team = () => {
  const memberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const valueVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const coreValues = [
    { icon: "✅", title: "Quality", description: "Upholding the highest standards in every operation." },
    { icon: "⚖️", title: "Compliance", description: "Adhering to all regulations for secure and legal trade." },
    { icon: "⚡", title: "Speed", description: "Delivering efficient and timely logistics solutions." }
  ];

  return (
    <section className="team container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Expert Team
      </motion.h2>
      <div className="team-members">
        <motion.div
          className="member-card"
          variants={memberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="https://via.placeholder.com/150" alt="John Doe" className="member-photo" />
          <h3>John Doe</h3>
          <p className="member-title">CEO & Founder</p>
          <p className="member-bio">John has over 20 years of experience in global logistics and supply chain management.</p>
        </motion.div>
        <motion.div
          className="member-card"
          variants={memberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src="https://via.placeholder.com/150" alt="Jane Smith" className="member-photo" />
          <h3>Jane Smith</h3>
          <p className="member-title">Logistics Operations Director</p>
          <p className="member-bio">Jane specializes in optimizing complex logistics operations and ensuring timely deliveries.</p>
        </motion.div>
        <motion.div
          className="member-card"
          variants={memberVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src="https://via.placeholder.com/150" alt="David Lee" className="member-photo" />
          <h3>David Lee</h3>
          <p className="member-title">International Trade Specialist</p>
          <p className="member-bio">David provides expert guidance on international trade regulations and customs compliance.</p>
        </motion.div>
      </div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Our Core Values
      </motion.h2>
      <div className="core-values">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="value-card"
            variants={valueVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
          >
            <div className="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
