import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UnderConstruction.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src="/images/repair work.png" alt="Under construction" className={styles.image} />
        <h1 className={styles.title}>Page under construction</h1>
        <p className={styles.text}>This page is still under development. The opening date is always postponed.</p>
        <Link to="/" className={styles.homeBtn}>Go to homepage</Link>
      </div>
    </div>
  );
};

export default UnderConstruction; 