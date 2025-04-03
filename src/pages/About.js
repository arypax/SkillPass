// src/pages/About.js
import React from 'react';
import styles from './About.module.css';

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
      description: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
    },
    {
      icon: '/images/feedback.png',
      title: 'Professional Feedbacks',
      description: 'Culpa nostrud commodo ea consequat reprehenderit aliqua.'
    },
    {
      icon: '/images/efficiency.png',
      title: 'Efficiency',
      description: 'Viverra scelerisque consequat net. Adipisicing esse consequat.'
    },
    {
      icon: '/images/schedule.png',
      title: 'Flexible Schedule',
      description: 'Aute eiusmod dolore dolore deserunt veniam ad deserunt.'
    }
  ];

  const directions = [
    {
      image: '/images/direction-1.png',
      category: 'Marketing',
      description: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
    },
    {
      image: '/images/direction-2.png',
      category: 'Management',
      description: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
    },
    {
      image: '/images/direction-3.png',
      category: 'HR & Recruiting',
      description: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
    },
    {
      image: '/images/direction-4.png',
      category: 'Design',
      description: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
    },
    {
      image: '/images/direction-5.png',
      category: 'Development',
      description: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
    }
  ];

  const studyingSteps = [
    {
      step: 'STEP 1',
      title: 'Watching online video lectures',
      description: 'Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisi, imperdiet gravida massa neque.'
    },
    {
      step: 'STEP 2',
      title: 'Passing test',
      description: 'Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam.'
    },
    {
      step: 'STEP 3',
      title: "Curator's feedback",
      description: 'Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.'
    },
    {
      step: 'STEP 4',
      title: 'Corrections if needed',
      description: 'Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.'
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
            <button className={styles.primaryButton}>Explore events</button>
            <button className={styles.secondaryButton}>Browse courses</button>
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
              <a href="#" className={styles.checkCourses}>Check courses →</a>
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