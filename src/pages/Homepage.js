import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.showreel}>
            SkillPass - The world's first completely free educational platform
          </p>
          <h1>Enjoy studying with SkillPass Online Courses</h1>
          <div className={styles.heroButtons}>
            <Link to="/about" className={styles.outlineButton}>
              About us
            </Link>
            <Link to="/courses" className={styles.primaryButton}>
              Explore courses
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/hero-image.png" alt="Hero Section" />
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div>
          <h2>1200</h2>
          <p>Students graduated</p>
        </div>
        <div>
          <h2>84</h2>
          <p>Completed courses</p>
        </div>
        <div>
          <h2>16</h2>
          <p>Qualified tutors</p>
        </div>
        <div>
          <h2>5</h2>
          <p>Years of experience</p>
        </div>
      </section>

      {/* Why SkillPass? */}
      <section className={styles.whySkillPass}>
        <div className={styles.textContent}>
          <h2>Why SkillPass?</h2>
          <ul>
            <li>✅ Modern approaches to education</li>
            <li>✅ Internship & employment support</li>
            <li>✅ Flexible learning process</li>
          </ul>
          <Link to="/about" className={styles.outlineButton}>
            More about us
          </Link>
        </div>
        <div className={styles.infoImage}>
          <img src="/images/who-we-are.jpg" alt="Who we are" />
        </div>
      </section>

      {/* Featured Courses */}
      <section className={styles.featuredCourses}>
        <h2>Featured Courses</h2>
        <div className={styles.courseGrid}>
          <div className={styles.courseCard}>
            <div className={styles.courseImage}></div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.marketing}`}>
                Marketing
              </span>
              <h3>The Ultimate Google Ads Training Course</h3>
              <p className={styles.price}>
                $100 <span>by Jerome Bell</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}></div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.hr}`}>
                HR & Recruiting
              </span>
              <h3>HR Management and Analytics</h3>
              <p className={styles.price}>
                $200 <span>by Leslie Alexander Li</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-3.jpg" alt="Business Development" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.management}`}>
                Management
              </span>
              <h3>Business Development Management</h3>
              <p className={styles.price}>
                $400 <span>by Dianne Russell</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-4.jpg" alt="Product Management" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.management}`}>
                Management
              </span>
              <h3>Product Management Fundamentals</h3>
              <p className={styles.price}>
                $480 <span>by Marvin McKinney</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-5.jpg" alt="Brand Management" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.marketing}`}>
                Marketing
              </span>
              <h3>Brand Management & PR Communications</h3>
              <p className={styles.price}>
                $530 <span>by Kristin Watson</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-6.jpg" alt="Graphic Design" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.design}`}>
                Design
              </span>
              <h3>Graphic Design Basic</h3>
              <p className={styles.price}>
                $500 <span>by Guy Hawkins</span>
              </p>
            </div>
          </div>
        </div>

        <Link to="/courses" className={styles.outlineButton}>
          View all courses
        </Link>
      </section>

      {/* Lectures & Workshops */}
      <section className={styles.events}>
        <h2>Lectures & Workshops</h2>
        <div className={styles.eventList}>{/* Карточки событий */}</div>
        <Link to="/events" className={styles.primaryButton}>
          Explore all events
        </Link>
      </section>

      {/* Certificate Section */}
      <section className={styles.certificate}>
        <h2>Your expertise will be confirmed</h2>
        <p>We are accredited by top institutions</p>
        <div className={styles.certImage}>
          {/* Вставь изображение сертификата */}
        </div>
      </section>

      {/* Meet our team */}
      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>{/* Карточки команды */}</div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>What our students say</h2>
        <div className={styles.testimonial}>{/* Отзывы студентов */}</div>
      </section>

      {/* Blog Section */}
      <section className={styles.blog}>
        <h2>Latest Posts</h2>
        <div className={styles.blogGrid}>{/* Блог-карточки */}</div>
        <Link to="/blog" className={styles.outlineButton}>
          Go to blog
        </Link>
      </section>
    </div>
  );
};

export default Homepage;
