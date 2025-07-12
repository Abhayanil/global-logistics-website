import React, { useEffect, useState } from 'react';
import styles from './Dock.module.css';

export default function Dock({ items, panelHeight = 68, baseItemSize = 50, magnification = 70 }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setExpanded(heroBottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={expanded ? `${styles.dock} ${styles.expanded}` : styles.dock}
      style={{ height: panelHeight }}
    >
      <ul className={styles.dockList}>
        {items.map((item, idx) => (
          <li
            key={item.label}
            className={styles.dockItem}
            style={{ minWidth: baseItemSize, minHeight: baseItemSize }}
            onClick={item.onClick}
          >
            <span className={styles.dockLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
