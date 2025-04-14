import React, { useState } from 'react';
import styles from './Event.module.css';

function Event() {
  const [activeTheme, setActiveTheme] = useState(1);

  const themes = [
    {
      id: 1,
      title: 'Aliquet lectus urna viverra in odio.',
      description: 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
    },
    {
      id: 2,
      title: 'Orci commodo, viverra orci mollis ut euismod.'
    },
    {
      id: 3,
      title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
    },
    {
      id: 4,
      title: 'In id dolor quis nunc, urna hendrerit pharetra.'
    }
  ];

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
                  <span className={styles.expandIcon}>
                    {activeTheme === theme.id ? '−' : '+'}
                  </span>
                </div>
                <div className={styles.themeContent}>
                  <h3>{theme.title}</h3>
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
            <p className={styles.timeNote}>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>PRICE</h3>
            <p className={styles.price}>Free</p>
            <p className={styles.priceNote}>
              Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3>EVENT ON FACEBOOK</h3>
            <button className={styles.joinButton}>Join the event</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Event;
