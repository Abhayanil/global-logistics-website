import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Global Logistics transformed our supply chain. Their efficiency and reliability are unmatched!",
      author: "- Sarah Chen, CEO of Tech Innovations",
      logo: "https://via.placeholder.com/100x50?text=Client+A"
    },
    {
      quote: "Outstanding service from start to finish. Our shipments always arrive on time and in perfect condition.",
      author: "- David Kim, Operations Manager at Fashion Forward",
      logo: "https://via.placeholder.com/100x50?text=Client+B"
    },
    {
      quote: "The team at Global Logistics is incredibly professional and responsive. A true partner in our growth.",
      author: "- Maria Rodriguez, Import Director at Global Foods",
      logo: "https://via.placeholder.com/100x50?text=Client+C"
    }
  ];

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const logoVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(255, 152, 0, 0.5)" }
  };

  return (
    <section className="testimonials container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-item"
            variants={testimonialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p className="quote">{testimonial.quote}</p>
            <h4 className="author">{testimonial.author}</h4>
            <motion.img
              src={testimonial.logo}
              alt={`Client ${index + 1} Logo`}
              className="client-logo"
              variants={logoVariants}
              initial="rest"
              whileHover="hover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
