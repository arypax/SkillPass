// src/pages/About.js
import React from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';

function About() {
  const statistics = [
    { number: '1200', text: 'students graduated' },
    { number: '84', text: 'completed courses' },
    { number: '16', text: 'qualified tutors' },
    { number: '5', text: 'years of experience' }
  ];

  const coreValues = [
    {
      icon: '/images/structured.png',
      title: 'Structured Approach',
      description: 'Our courses follow a clear, step-by-step learning path designed to help you master each concept before moving to the next.'
    },
    {
      icon: '/images/feedback.png',
      title: 'Professional Feedbacks',
      description: 'Get detailed feedback from industry experts who will help you improve your skills and knowledge.'
    },
    {
      icon: '/images/efficiency.png',
      title: 'Efficiency',
      description: 'Learn at your own pace with our optimized curriculum that focuses on practical skills and real-world applications.'
    },
    {
      icon: '/images/schedule.png',
      title: 'Flexible Schedule',
      description: 'Study whenever and wherever you want with our 24/7 accessible online platform and self-paced learning materials.'
    }
  ];

  const directions = [
    {
      image: '/images/direction-1.png',
      category: 'Marketing',
      description: 'Learn modern marketing strategies, digital advertising, and brand management to help businesses grow and succeed in the digital age.'
    },
    {
      image: '/images/direction-2.png',
      category: 'Management',
      description: 'Master the art of leadership, project management, and business strategy to effectively lead teams and drive organizational success.'
    },
    {
      image: '/images/direction-3.png',
      category: 'HR & Recruiting',
      description: 'Develop skills in talent acquisition, employee relations, and HR management to build and maintain strong, productive teams.'
    },
    {
      image: '/images/direction-4.png',
      category: 'Design',
      description: 'Explore creative design principles, user experience, and visual communication to create impactful and engaging digital products.'
    },
    {
      image: '/images/direction-5.png',
      category: 'Development',
      description: 'Learn programming languages, software development methodologies, and best practices to build robust and scalable applications.'
    }
  ];

  const studyingSteps = [
    {
      step: 'STEP 1',
      title: 'Watching online video lectures',
      description: 'Access our comprehensive video lectures anytime, anywhere. Learn at your own pace with high-quality content created by industry experts.'
    },
    {
      step: 'STEP 2',
      title: 'Passing test',
      description: 'Test your knowledge with interactive quizzes and assignments designed to reinforce your learning and ensure understanding of key concepts.'
    },
    {
      step: 'STEP 3',
      title: "Curator's feedback",
      description: 'Receive personalized feedback from experienced curators who will guide you through your learning journey and help you improve your skills.'
    },
    {
      step: 'STEP 4',
      title: 'Corrections if needed',
      description: 'Get detailed feedback on your work and make necessary improvements with the support of our expert instructors and learning resources.'
    }
  ];

  const team = [
    {
      name: 'Dianne Russell',
      position: 'Founder and CEO',
      image: '/images/team/dianne.jpg',
      social: ['facebook', 'instagram', 'linkedin']
    },
    {
      name: 'Jerome Bell',
      position: 'Founder and Program Director',
      image: '/images/team/jerome.jpg'
    },
    {
      name: 'Kristin Watson',
      position: 'Marketer, Curator of Marketing Course',
      image: '/images/team/kristin.jpg'
    },
    {
      name: 'Marvin McKinney',
      position: 'PM, Curator of Management Course',
      image: '/images/team/marvin.jpg'
    }
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.subtitle}>ABOUT US</span>
          <h1>SKILLPASS Online Courses</h1>
          <p>SkillPass Online Courses is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
          <p>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
          <div className={styles.cta}>
            <Link to="/events-grid" className={styles.primaryButton}>Explore events</Link>
            <Link to="/courses" className={styles.secondaryButton}>Browse courses</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/illustration.png" alt="Hero Section" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics}>
        <div className={styles.imageSection}>
          <img src="/images/aboutmain.png" alt="About Main" className={styles.aboutMainImage} />
        </div>
        <div className={styles.statsGrid}>
          {statistics.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statText}>{stat.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className={styles.coreValues}>
        <h2 className={styles.sectionTitle}>WE ALWAYS STAND FOR</h2>
        <h3>Our core values</h3>
        <div className={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src={value.icon} alt={value.title} />
              </div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Directions Section */}
      <section className={styles.directions}>
        <h2 className={styles.sectionTitle}>OUR MAIN DIRECTIONS</h2>
        <h3>What do we teach</h3>
        <div className={styles.directionsGrid}>
          {directions.map((direction, index) => (
            <div key={index} className={styles.directionCard}>
              <img src={direction.image} alt={direction.category} />
              <span className={styles.category}>{direction.category}</span>
              <p>{direction.description}</p>
              <Link to="/courses" className={styles.checkCourses}>Check courses →</Link>
            </div>
          ))}
          <div className={styles.comingSoon}>
            <h4>New studying program</h4>
            <p>coming soon...</p>
          </div>
        </div>
      </section>

      {/* Study Process Section */}
      <section className={styles.studyProcess}>
        <div className={styles.studyProcessWrapper}>
          <div className={styles.studyProcessContent}>
            <h2>STUDYING PROCESS</h2>
            <h3>That's how we do it</h3>
            <div className={styles.stepsGrid}>
              {studyingSteps.map((step, index) => (
                <div key={index} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.studyProcessImage}>
            <img src="/images/illustration-1.png" alt="Studying Process Illustration" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>BEST TUTORS ARE ALL HERE</h2>
        <h3>Meet our team</h3>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <img src="/images/course-1.jpg" alt="Yerassyl Sagindykov" />
            </div>
            <h4>Yerassyl Sagindykov</h4>
            <p>Team leader</p>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <img src="/images/course-2.jpg" alt="Vladislav Pineker" />
            </div>
            <h4>Vladislav Pineker</h4>
            <p>Founder and Program Director</p>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <img src="/images/course-7.jpg" alt="Abylai Sydyk" />
            </div>
            <h4>Abylai Sydyk</h4>
            <p>Marketer, Curator of Marketing Course</p>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <img src="/images/course-8.jpg" alt="Baysangur Yunusov" />
            </div>
            <h4>Baysangur Yunusov</h4>
            <p>Fullstack developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;