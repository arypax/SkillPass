import React, { useState } from 'react';
import styles from './Courses.module.css';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    text: "I am extremely satisfied with the course. The instructors were knowledgeable and the content was well-structured. The practical exercises helped me understand the concepts better. I would highly recommend this course to anyone interested in learning.",
    author: "Eleanor Pena",
    position: "Marketing Graduate",
    image: "/images/course-1.jpg"
  },
  {
    id: 2,
    text: "The marketing course exceeded my expectations. The real-world examples and case studies were invaluable. The instructors were always available to answer questions and provide guidance. This course has significantly improved my marketing skills.",
    author: "John Smith",
    position: "Student, Marketing Course",
    image: "/images/course-2.jpg"
  },
  {
    id: 3,
    text: "As a design graduate, I found this course to be incredibly valuable. The curriculum was comprehensive and up-to-date with industry standards. The feedback from instructors was constructive and helped me grow as a designer.",
    author: "Sarah Johnson",
    position: "Graduate, Design Course",
    image: "/images/course-7.jpg"
  }
];

const categories = ['All', 'Marketing', 'Management', 'HR & Recruiting', 'Design', 'Development'];

const courses = [
  {
    id: 1,
    title: 'The Ultimate Google Ads Training Course',
    category: 'Marketing',
    price: 100,
    instructor: 'Jerome Bell',
    image: '/images/course-3.jpg'
  },
  {
    id: 2,
    title: 'Product Management Fundamentals',
    category: 'Management',
    price: 480,
    instructor: 'Marvin McKinney',
    image: '/images/course-4.jpg'
  },
  {
    id: 3,
    title: 'HR Management and Analytics',
    category: 'HR & Recruiting',
    price: 200,
    instructor: 'Leslie Alexander Li',
    image: '/images/course-5.jpg'
  },
  {
    id: 4,
    title: 'Brand Management & PR Communications',
    category: 'Marketing',
    price: 530,
    instructor: 'Kristin Watson',
    image: '/images/course-6.jpg'
  },
  {
    id: 5,
    title: 'Graphic Design Basic',
    category: 'Design',
    price: 500,
    instructor: 'Guy Hawkins',
    image: '/images/course-3.jpg'
  },
  {
    id: 6,
    title: 'Business Development Management',
    category: 'Management',
    price: 400,
    instructor: 'Dianne Russell',
    image: '/images/course-4.jpg'
  },
  {
    id: 7,
    title: 'Highload Software Architecture',
    category: 'Development',
    price: 600,
    instructor: 'Brooklyn Simmons',
    image: '/images/course-5.jpg'
  },
  {
    id: 8,
    title: 'Human Resources – Selection and Recruitment',
    category: 'HR & Recruiting',
    price: 150,
    instructor: 'Kathryn Murphy',
    image: '/images/course-6.jpg'
  },
  {
    id: 9,
    title: 'User Experience. Human-centered Design',
    category: 'Design',
    price: 240,
    instructor: 'Cody Fisher',
    image: '/images/course-3.jpg'
  }
];

function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Подсчет количества курсов в каждой категории
  const getCategoryCount = (category) => {
    if (category === 'All') {
      return courses.length;
    }
    return courses.filter(course => course.category === category).length;
  };

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.coursesContainer}>
      <div className={styles.header}>
        <p className={styles.subtitle}>ENJOY YOUR STUDYING!</p>
        <h1 className={styles.title}>Our online courses</h1>
        
        <div className={styles.filters}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <sup>{getCategoryCount(category)}</sup>
              </button>
            ))}
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.courseGrid}>
        {filteredCourses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id} className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src={course.image} alt={course.instructor} />
            </div>
            <div className={styles.courseContent}>
              <div className={styles.categoryTag} data-category={course.category}>
                {course.category}
              </div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <div className={styles.courseFooter}>
                <span className={styles.price}>${course.price}</span>
                <span className={styles.instructor}>by {course.instructor}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className={styles.testimonials}>
        <h2 className={styles.sectionLabel}>TESTIMONIALS</h2>
        <h3 className={styles.sectionTitle}>What our students say</h3>
        <div className={styles.testimonialSlider}>
          <button 
            className={styles.sliderArrow} 
            onClick={handlePrevTestimonial}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <div className={styles.testimonialCard}>
            <blockquote className={styles.testimonialText}>
              {testimonials[currentTestimonial].text}
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].author} 
              />
              <div>
                <h4>{testimonials[currentTestimonial].author}</h4>
                <p>{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
          </div>
          <button 
            className={styles.sliderArrow} 
            onClick={handleNextTestimonial}
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
        <div className={styles.sliderDots}>
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={currentTestimonial === index ? styles.dotActive : ''}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </section>

      <section className={styles.certificate}>
        <div className={styles.certificateWrapper}>
          <div className={styles.certificateContent}>
            <h2 className={styles.sectionLabel}>CREATEX CERTIFICATE</h2>
            <h3 className={styles.sectionTitle}>Your expertise will be confirmed</h3>
            <p className={styles.certText}>
              We are accredited by international professional organizations and institutes:
            </p>
            <div className={styles.partners}>
              <img src="/images/amanat.svg" alt="Del Mar Strategy" />
              <img src="/images/iitu.png" alt="Sentinal Consulting" />
              <img src="/images/nurotan.png" alt="National Health" />
            </div>
          </div>
          <div className={styles.certificateImage}>
            <img src="/images/certificate.png" alt="Sample Certificate" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
