import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import styles from './Course.module.css';
import AuthModal from '../components/AuthModal';

function Course() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleJoinCourse = async () => {
    if (!auth.currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    setLoading(true);
    try {
      // Создаем запись о прогрессе пользователя в Firestore
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        courseProgress: {
          videos: [false, false, false],
          articles: [false, false],
          testCompleted: false
        },
        enrolledAt: new Date().toISOString()
      }, { merge: true });

      // Перенаправляем на страницу с содержимым курса
      navigate('/course-content');
    } catch (error) {
      console.error('Error enrolling in course:', error);
      // Здесь можно добавить обработку ошибок
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <div className={styles.hero}>
        <div className={styles.courseLabel}>COURSE</div>
        <h1 className={styles.title}>User Experience. Principles of Human-Centered Design</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutTitle}>About the course</h2>
          <p className={styles.aboutText}>
            Master the skills of user-centered design and user experience. Learn how to create convenient and effective interfaces, conduct user research, and apply best practices in real projects. You will understand the main principles of UX, learn to design prototypes, and test hypotheses. The course will help you become a sought-after UX specialist.
          </p>
          <div className={styles.learnBlock}>
            <div className={styles.learnTitle}>You will learn:</div>
            <ul className={styles.learnList}>
              <li>To create and optimize user experience for digital products.</li>
              <li>To conduct user research and analyze user needs.</li>
              <li>To design prototypes and test your ideas.</li>
              <li>To use modern UX tools and methods.</li>
              <li>To implement best practices in real projects.</li>
              <li>To improve usability and accessibility of interfaces.</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLabel}>DATES</div>
          <div className={styles.cardValueRed}>Sept 7 – Nov 2</div>
          <div className={styles.cardText}>Metus turpis sit lorem lacus, in elit tellus lacus.</div>

          <div className={styles.cardLabel}>DURATION</div>
          <div className={styles.cardValueRed}>2 months – 8 lessons</div>
          <div className={styles.cardText}>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</div>

          <div className={styles.cardLabel}>PRICE</div>
          <div className={styles.cardValueBigRed}>$120 per month</div>
          <div className={styles.cardText}>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</div>

          <button 
            className={styles.cardButton}
            onClick={handleJoinCourse}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Join the course'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
