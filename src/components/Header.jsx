import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false); // State for locale dropdown
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLocaleOpen(false); // Close locale dropdown on route change
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLocaleOpen(false); // Close locale dropdown when opening/closing menu
  };

  const toggleLocale = () => {
    setIsLocaleOpen(!isLocaleOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  const localeDropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2, ease: "easeOut" } }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-text">
              <motion.span
                className="logo-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                W Group
              </motion.span>
              <motion.span
                className="logo-subtitle"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Global Trade, Simplified.
              </motion.span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  className="nav-item"
                  variants={navItemVariants}
                  custom={i}
                >
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="nav-item locale-switcher">
                <button onClick={toggleLocale} className="locale-toggle">
                  EN <span className="arrow">&#9660;</span>
                </button>
                <motion.div
                  className="locale-dropdown"
                  initial="hidden"
                  animate={isLocaleOpen ? "visible" : "hidden"}
                  variants={localeDropdownVariants}
                  style={{ originY: "top" }}
                >
                  <button>ES</button>
                </motion.div>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary btn-small">
              Get Quote
            </Link>

            <button
              className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;