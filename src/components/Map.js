import React from 'react';
import styles from '../pages/Contacts.module.css';

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe 
        src="https://yandex.ru/map-widget/v1/?ll=76.909910%2C43.235141&z=17&l=map" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Карта МУИТ"
        style={{border: 0}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map; 