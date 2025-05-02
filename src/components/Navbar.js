import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/button';
import { FaUser } from 'react-icons/fa';
import { auth } from '../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import styles from './Navbar.module.css';

const Navbar = ({ onAuthOpen }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        {user ? (
          <div className={styles.userMenu} ref={dropdownRef}>
            <img 
              src={user.photoURL} 
              alt={user.displayName} 
              className={styles.userAvatar}
            />
            <button 
              className={styles.userNameButton}
              onClick={toggleDropdown}
            >
              {user.displayName}
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button 
                  className={styles.dropdownItem}
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button type="button" className={styles.authLink} onClick={onAuthOpen}>
            <FaUser />
            <span>Log in / Register</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
