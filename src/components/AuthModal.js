import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import { FaGoogle } from 'react-icons/fa';
import { auth } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('signin'); // 'signin' или 'signup'

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose(); // Закрываем модальное окно после успешной авторизации
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">&times;</button>
        <h2 className={styles.title}>{mode === 'signin' ? 'Sign in' : 'Sign up'}</h2>
        <p className={styles.subtitle}>
          {mode === 'signin'
            ? 'Sign in to your account using email and password provided during registration.'
            : 'Registration takes less than a minute but gives you full control over your studying.'}
        </p>
        <form className={styles.form}>
          {mode === 'signup' && (
            <div className={styles.formGroup}>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" placeholder="Your full name" autoComplete="name" />
            </div>
          )}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your working email" autoComplete="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} />
          </div>
          {mode === 'signup' && (
            <div className={styles.formGroup}>
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" id="confirm" placeholder="••••••••" autoComplete="new-password" />
            </div>
          )}
          <div className={styles.formOptions}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
              {mode === 'signin' ? 'Keep me signed in' : 'Remember me'}
            </label>
            {mode === 'signin' && (
              <button type="button" className={styles.forgotBtn}>Forgot password?</button>
            )}
          </div>
          <button type="submit" className={styles.submitBtn}>
            {mode === 'signin' ? 'Sign in' : 'Sign up'}
          </button>
        </form>
        <div className={styles.switchMode}>
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button type="button" className={styles.linkBtn} onClick={() => setMode('signup')}>Sign up</button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" className={styles.linkBtn} onClick={() => setMode('signin')}>Sign in</button>
            </>
          )}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.socialBlock}>
          <span>Or sign in with</span>
          <button 
            className={styles.socialBtn} 
            type="button"
            onClick={handleGoogleLogin}
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 