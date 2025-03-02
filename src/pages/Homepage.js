import React from 'react';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <h1>Enjoy studying with SkillPass Online Courses</h1>
        <p>Play showreel</p>
        <button className={styles.exploreButton}>Explore courses</button>
      </div>
    </div>
  );
};

export default Homepage;
