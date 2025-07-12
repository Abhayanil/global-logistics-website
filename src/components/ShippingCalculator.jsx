import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ShippingCalculator.css';

const ShippingCalculator = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const inputFocusVariants = {
    focused: { borderColor: "var(--vibrant-orange)", boxShadow: "0 0 0 2px rgba(255, 152, 0, 0.2)" },
    unfocused: { borderColor: "var(--light-gray)", boxShadow: "none" }
  };

  const countUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="shipping-calculator container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Shipping Cost Calculator
      </motion.h2>
      <motion.div
        className="calculator-content"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form className="shipping-form">
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <motion.input
              type="text" id="from" placeholder="Origin"
              whileFocus="focused"
              animate="unfocused"
              variants={inputFocusVariants}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <motion.input
              type="text" id="to" placeholder="Destination"
              whileFocus="focused"
              animate="unfocused"
              variants={inputFocusVariants}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <motion.input
              type="number" id="weight" placeholder="e.g., 100"
              whileFocus="focused"
              animate="unfocused"
              variants={inputFocusVariants}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mode">Mode:</label>
            <motion.select
              id="mode"
              whileFocus="focused"
              animate="unfocused"
              variants={inputFocusVariants}
            >
              <option value="air">Air Freight</option>
              <option value="sea">Sea Freight</option>
              <option value="land">Land Transport</option>
            </motion.select>
          </div>
          <button type="submit" className="btn btn-primary">Get Estimate</button>
        </form>
        <div className="estimate-result">
          <motion.h3
            variants={countUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Estimated Cost:
          </motion.h3>
          <motion.p
            className="price"
            variants={countUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            $ [Calculated Price]
          </motion.p>
          <motion.h3
            variants={countUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Estimated Time:
          </motion.h3>
          <motion.p
            className="time"
            variants={countUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            [Estimated Days] days
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ShippingCalculator;