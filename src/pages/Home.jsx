import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Products />

      <section className="company-statement container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Global Partnerships for Global Reach
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          With strong strategic partnerships in China and India, we ensure seamless logistics and supply chain solutions from two of the world's largest manufacturing hubs. Our extensive network and local expertise guarantee efficient and reliable service for your business.
        </motion.p>
      </section>
      <Team />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
