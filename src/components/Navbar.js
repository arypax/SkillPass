import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/button';
import { FaUser } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ onAuthOpen }) => {
  const navigate = useNavigate();
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
          <Link to="/events-grid">Events</Link>
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
        <Button className={styles.consultationButton} onClick={() => navigate('/under-construction')}>
          Get consultation
        </Button>
        <button type="button" className={styles.authLink} onClick={onAuthOpen}>
          <FaUser />
          <span>Log in / Register</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
