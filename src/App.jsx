import React from 'react';
import Dock from './components/Dock';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Contact from './components/Contact';
import styles from './App.module.css';

const dockItems = [
  { label: 'Home', onClick: () => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Services', onClick: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Products', onClick: () => document.getElementById('products').scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Team', onClick: () => document.getElementById('team').scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Contact', onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) },
];

export default function App() {
  return (
    <div className={styles.appRoot}>
      <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />
      <main>
        <section id="hero" className={styles.section}><Hero /></section>
        <section id="services" className={styles.section}><Services /></section>
        <section id="products" className={styles.section}><Products /></section>
        <section id="team" className={styles.section}><Team /></section>
        <section id="contact" className={styles.section}><Contact /></section>
      </main>
    </div>
  );
}