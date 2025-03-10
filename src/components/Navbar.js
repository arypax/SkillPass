import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button'; // <-- ПРАВИЛЬНЫЙ ПУТЬ
import { FaUser } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        SKILL<span className={styles.highlight}>PASS</span>
      </Link>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className={styles.rightMenu}>
        <Button className={styles.consultationButton}>Get consultation</Button>
        <Link to="/login" className={styles.authLink}>
          <FaUser />
          <span>Log in / Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
