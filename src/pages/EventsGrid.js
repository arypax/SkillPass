import React from 'react';
import styles from './EventsGrid.module.css';

const events = [
  {
    id: 1,
    title: 'Formation of the organizational structure of the company in the face of uncertainty.',
    date: { day: '05', month: 'Aug' },
    time: '11:00 - 14:00',
    type: 'Online master class',
  },
  {
    id: 2,
    title: 'Building a customer service department. Best Practices.',
    date: { day: '24', month: 'Jul' },
    time: '11:00 - 12:30',
    type: 'Online lecture',
  },
  {
    id: 3,
    title: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    date: { day: '16', month: 'Jul' },
    time: '10:00 - 13:00',
    type: 'Online workshop',
  },
  {
    id: 4,
    title: 'Find and evaluate search and assessment tools for candidates.',
    date: { day: '10', month: 'Jul' },
    time: '9:00 - 14:00',
    type: 'Online workshop',
  },
  {
    id: 5,
    title: 'Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI',
    date: { day: '27', month: 'Jun' },
    time: '15:00 - 17:00',
    type: 'Online master class',
  },
  {
    id: 6,
    title: 'How to brief a client and present your design to approve it from the first show.',
    date: { day: '02', month: 'Jul' },
    time: '11:00 - 13:00',
    type: 'Online lecture',
  },
  {
    id: 7,
    title: 'Who is a project manager and do I want to be PM?',
    date: { day: '29', month: 'May' },
    time: '11:00 - 12:00',
    type: 'Online lecture',
  },
  {
    id: 8,
    title: "The company's business page as an additional tool to support the announcement of vacancies.",
    date: { day: '18', month: 'May' },
    time: '10:00 - 12:00',
    type: 'Online lecture',
  }
];

function EventsGrid() {
  return (
    <div className={styles.eventsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lectures, workshops & master-classes</h1>
      </div>

      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.day}>{event.date.day}</span>
              <span className={styles.month}>{event.date.month}</span>
            </div>
            <div className={styles.eventTime}>{event.time}</div>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <div className={styles.eventType}>{event.type}</div>
            <button className={styles.viewMore}>View more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsGrid;
