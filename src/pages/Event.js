import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Event.module.css';

function Event() {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState(1);

  const themes = [
    {
      id: 1,
      title: 'Understanding the basics of organizational structure.',
      description: 'Learn the fundamental principles of organizational design and how they apply to modern businesses. We will explore different types of organizational structures and their impact on company performance.'
    },
    {
      id: 2,
      title: 'Modern approaches to organizational development.',
      description: 'Learn about the latest trends in organizational development and how to implement them in your company. We will discuss practical examples and case studies from successful companies.'
    },
    {
      id: 3,
      title: 'Leadership and team management in times of change.',
      description: 'Explore the role of leadership in times of change and uncertainty. Understand how to maintain team morale and productivity during challenging periods.'
    },
    {
      id: 4,
      title: 'Remote work and communication strategies.',
      description: 'Discover effective strategies for managing remote teams and maintaining strong communication channels in a distributed work environment.'
    }
  ];

  const handleJoinEvent = () => {
    navigate('/under-construction');
  };

  return (
    <div className={styles.eventPage}>
      <div className={styles.eventHero}>
        <span className={styles.eventLabel}>ONLINE LECTURE</span>
        <h1 className={styles.eventTitle}>
          Formation of the organizational structure of the company in the face of uncertainty
        </h1>
      </div>

      <div className={styles.eventContent}>
        <div className={styles.mainContent}>
          <h2 className={styles.contentTitle}>We will talk about:</h2>
          <div className={styles.themesList}>
            {themes.map((theme) => (
              <div 
                key={theme.id}
                className={`${styles.themeItem} ${activeTheme === theme.id ? styles.active : ''}`}
                onClick={() => setActiveTheme(theme.id)}
              >
                <div className={styles.themeHeader}>
                  <span className={styles.themeNumber}>Theme {theme.id}.</span>
                  <span className={styles.themeTitle}>{theme.title}</span>
                  <span className={styles.expandIcon}>
                    {activeTheme === theme.id ? '−' : '+'}
                  </span>
                </div>
                <div className={styles.themeContent}>
                  {activeTheme === theme.id && theme.description && (
                    <p>{theme.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.eventSidebar}>
          <div className={styles.infoBlock}>
            <h3>TIME</h3>
            <p className={styles.time}>August 5, 11:00 – 14:00</p>
            <p className={styles.timeNote}>Join us for an insightful session on organizational development.</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>PRICE</h3>
            <p className={styles.price}>Free</p>
            <p className={styles.priceNote}>
              This event is free of charge. Don't miss this opportunity to learn from industry experts.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <Link to="/under-construction" className={styles.facebookLink}>EVENT ON FACEBOOK</Link>
            <button className={styles.joinButton} onClick={handleJoinEvent}>Join the event</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Event;
