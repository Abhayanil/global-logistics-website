import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/FAQs.css';

const FAQItem = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="faq-item"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What types of goods do you handle?",
      answer: "We handle a wide range of goods, including general merchandise, electronics, apparel, and more. Please contact us for specific inquiries."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we specialize in international import and export, providing comprehensive freight forwarding services worldwide."
    },
    {
      question: "How can I track my shipment?",
      answer: "We provide advanced tracking systems that allow you to monitor your shipment's progress in real-time. Details will be provided upon service confirmation."
    },
    {
      question: "What are your business hours?",
      answer: "Our offices are open Monday to Friday, from 9 AM to 5 PM local time. Our online support is available 24/7."
    }
  ];

  return (
    <section className="faqs container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;