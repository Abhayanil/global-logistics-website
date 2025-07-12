import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Products.css';

const Products = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section className="products container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Our Product Categories
      </motion.h2>
      <div className="product-categories">
        <motion.div
          className="category-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-image-wrapper">
            <img src="https://via.placeholder.com/400x250?text=Home+Goods" alt="Hogar y Más" className="category-image" />
            <motion.div
              className="card-overlay"
              initial="hidden"
              whileHover="visible"
              variants={overlayVariants}
            >
              <h3>Hogar y Más...</h3>
              <p>A wide range of home goods, electronics, and general merchandise.</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="category-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="card-image-wrapper">
            <img src="https://via.placeholder.com/400x250?text=Apparel" alt="Ropa Interior y Vestuario" className="category-image" />
            <motion.div
              className="card-overlay"
              initial="hidden"
              whileHover="visible"
              variants={overlayVariants}
            >
              <h3>Ropa Interior y Vestuario</h3>
              <p>High-quality apparel, innerwear, and fashion accessories for all ages.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
