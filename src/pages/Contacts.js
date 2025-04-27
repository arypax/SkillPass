import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contacts.module.css';
import Map from '../components/Map';
import { FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';

const Contacts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreement: false
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg }
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '18962192-e71d-4229-9316-157240529053');
    formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      handleServerResponse(response.ok, result.message);
    } catch (error) {
      handleServerResponse(false, 'An error occurred when submitting the form');
    }
  };

  return (
    <div className={styles.contactsPage}>
      <div className={styles.container}>
        {/* Contact Info Section */}
        <section className={styles.contactInfo}>
          <div className={styles.contactLeft}>
            <span className={styles.subtitle}>CONTACT INFO</span>
            <h2 className={styles.title}>Get in touch</h2>
            
            <div className={styles.contactDetails}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </span>
                <div className={styles.infoContent}>
                  <h4>Talk to us:</h4>
                  <a href="mailto:skillpass@gmail.com">skillpass@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="currentColor"/>
                  </svg>
                </span>
                <div className={styles.infoContent}>
                  <h4>Call us:</h4>
                  <a href="tel:+77777777777">+7 (777) 77-77-777</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                </span>
                <div className={styles.infoContent}>
                  <h4>Address:</h4>
                  <p>34/1 Manasa St., Almaty, Kazakhstan</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4>FOLLOW US:</h4>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon} aria-label="Facebook" onClick={(e) => { e.preventDefault(); navigate('/under-construction'); }}>
                    <FaFacebookF />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Twitter" onClick={(e) => { e.preventDefault(); navigate('/under-construction'); }}>
                    <FaTwitter />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="YouTube" onClick={(e) => { e.preventDefault(); navigate('/under-construction'); }}>
                    <FaYoutube />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Telegram" onClick={(e) => { e.preventDefault(); navigate('/under-construction'); }}>
                    <FaTelegramPlane />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="LinkedIn" onClick={(e) => { e.preventDefault(); navigate('/under-construction'); }}>
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <Map />
        </section>

        {/* Contact Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <div className={styles.formImage}>
              <img src="/images/contact-illustration.png" alt="Contact us illustration" />
            </div>
            
            <div className={styles.formContent}>
              <h4>ANY QUESTIONS?</h4>
              <h3>Drop us a line</h3>
              
              {status.submitted ? (
                <div className={styles.successMessage}>
                  Thank you for your message! We will contact you as soon as possible.
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                        disabled={status.submitting}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                        disabled={status.submitting}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your working email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        disabled={status.submitting}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        disabled={status.submitting}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      disabled={status.submitting}
                    ></textarea>
                  </div>

                  <div className={styles.formCheckbox}>
                    <input
                      type="checkbox"
                      id="agreement"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                      required
                      disabled={status.submitting}
                    />
                    <label htmlFor="agreement">
                      I agree to receive communications from SkillPass
                    </label>
                  </div>

                  {status.info.error && (
                    <div className={styles.errorMessage}>
                      {status.info.msg}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={status.submitting}
                  >
                    {status.submitting ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
