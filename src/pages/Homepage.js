import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
    author: "Eleanor Pena",
    position: "Position, Course",
    image: "/images/course-1.jpg"
  },
  {
    id: 2,
    text: "Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum, tellus felis congue nibh, scelerisque lectus nunc in turpis. Integer vel blandit neque. Vestibulum ante ipsum primis in faucibus.",
    author: "John Smith",
    position: "Student, Marketing Course",
    image: "/images/course-2.jpg"
  },
  {
    id: 3,
    text: "Cras eu elit congue, placerat dui ut, tincidunt nisl. Nulla leo elit, pharetra bibendum justo quis, cursus consectetur erat. Sed nec posuere magna, eu aliquam lorem. Donec molestie felis ut consectetur pretium.",
    author: "Sarah Johnson",
    position: "Graduate, Design Course",
    image: "/images/course-7.jpg"
  },
  {
    id: 4,
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    author: "Michael Brown",
    position: "Student, Development Course",
    image: "/images/course-8.jpg"
  },
  {
    id: 5,
    text: "Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt viverra suscipit. Maecenas eu molestie ex, quis sagittis mauris. Praesent eget nisi tempor, tempus erat at, viverra eros.",
    author: "Emily Davis",
    position: "Graduate, Business Course",
    image: "/images/course-4.jpg"
  }
];

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
        <div className={styles.whySkillPassContent}>
          <div className={styles.whySkillPassHeader}>
            <span className={styles.sectionLabel}>WHO WE ARE</span>
            <h2 className={styles.sectionTitle}>Why SkyllPass?</h2>
          </div>
          <div className={styles.whySkillPassList}>
            <div className={styles.whySkillPassItem}>
              <span className={styles.checkIcon}>✓</span>
              <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
            </div>
            <div className={styles.whySkillPassItem}>
              <span className={styles.checkIcon}>✓</span>
              <p>Vulputate placerat amet pulvinar lorem nisl.</p>
            </div>
            <div className={styles.whySkillPassItem}>
              <span className={styles.checkIcon}>✓</span>
              <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
            </div>
            <div className={styles.whySkillPassItem}>
              <span className={styles.checkIcon}>✓</span>
              <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
            </div>
            <div className={styles.whySkillPassItem}>
              <span className={styles.checkIcon}>✓</span>
              <p>Tincidunt sagittis neque sem ac eget.</p>
            </div>
            <div className={styles.whySkillPassItem}>
              <span className={styles.checkIcon}>✓</span>
              <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
            </div>
          </div>
          <Link to="/about" className={styles.outlineButton}>
            More about us
          </Link>
        </div>
        <div className={styles.whySkillPassImage}>
          <img src="/images/who-we-are.jpg" alt="Who we are" />
        </div>
      </section>

      {/* Featured Courses */}
      <section className={styles.featuredCourses}>
        <div className={styles.coursesHeader}>
          <div>
            <span className={styles.sectionLabel}>READY TO LEARN?</span>
            <h2 className={styles.sectionTitle}>Featured Courses</h2>
          </div>
          <Link to="/courses" className={styles.viewAllButton}>
            View all courses
          </Link>
        </div>
        <div className={styles.courseGrid}>
          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-1.jpg" alt="Google Ads Training" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.marketing}`}>
                Marketing
              </span>
              <h3>The Ultimate Google Ads Training Course</h3>
              <p className={styles.price}>
                $100 <span>| by Jerome Bell</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-8.jpg" alt="Product Management" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.management}`}>
                Management
              </span>
              <h3>Product Management Fundamentals</h3>
              <p className={styles.price}>
                $480 <span>| by Marvin McKinney</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-2.jpg" alt="HR Management" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.hr}`}>
                HR & Recruiting
              </span>
              <h3>HR Management and Analytics</h3>
              <p className={styles.price}>
                $200 <span>| by Leslie Alexander Li</span>
              </p>
            </div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImage}>
              <img src="/images/course-7.jpg" alt="Brand Management" />
            </div>
            <div className={styles.courseContent}>
              <span className={`${styles.category} ${styles.marketing}`}>
                Marketing
              </span>
              <h3>Brand Management & PR Communications</h3>
              <p className={styles.price}>
                $530 <span>| by Kristin Watson</span>
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
                $400 <span>| by Dianne Russell</span>
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
                $500 <span>| by Guy Hawkins</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures & Workshops */}
      <section className={styles.events}>
        <h2 className={styles.eventsTitle}>OUR EVENTS</h2>
        <h3 className={styles.eventsSubtitle}>Lectures & workshops</h3>
        <div className={styles.eventList}>
          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.day}>05</span>
              <span className={styles.month}>August</span>
            </div>
            <div className={styles.eventInfo}>
              <h4>Formation of the organizational structure of the company in the face of uncertainty.</h4>
              <div className={styles.eventMeta}>
                <span>11:00 - 14:00</span>
                <span>Online master class</span>
              </div>
            </div>
            <button className={styles.viewMore}>View more</button>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.day}>24</span>
              <span className={styles.month}>July</span>
            </div>
            <div className={styles.eventInfo}>
              <h4>Building a customer service department. Best Practices.</h4>
              <div className={styles.eventMeta}>
                <span>11:00 - 12:30</span>
                <span>Online lecture</span>
              </div>
            </div>
            <button className={styles.viewMore}>View more</button>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.day}>16</span>
              <span className={styles.month}>July</span>
            </div>
            <div className={styles.eventInfo}>
              <h4>How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
              <div className={styles.eventMeta}>
                <span>10:00 - 13:00</span>
                <span>Online workshop</span>
              </div>
            </div>
            <button className={styles.viewMore}>View more</button>
          </div>
        </div>
        <div className={styles.eventsFooter}>
          <p>Do you want more?</p>
          <Link to="/events" className={styles.exploreButton}>
            Explore all events
          </Link>
        </div>
      </section>

      {/* Certificate Section */}
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

      {/* Meet our team */}
      <section className={styles.team}>
        <h2 className={styles.sectionLabel}>BEST TUTORS ARE ALL HERE</h2>
        <h3 className={styles.sectionTitle}>Meet our team</h3>
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

      {/* Testimonials */}
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

      {/* Blog Section */}
      <section className={styles.blog}>
        <div className={styles.blogHeader}>
          <div>
            <span className={styles.sectionLabel}>OUR BLOG</span>
            <h3 className={styles.sectionTitle}>Latest posts</h3>
          </div>
          <Link to="/blog" className={styles.blogButton}>Go to blog</Link>
        </div>
        <div className={styles.blogGrid}>
          <article className={styles.blogCard}>
            <div className={styles.blogImageWrapper}>
              <img src="/images/blog/podcast.jpg" alt="Marketing Podcast" />
              <span className={styles.blogType}>Podcast</span>
            </div>
            <div className={styles.blogContent}>
              <div className={styles.blogMeta}>
                <span>Marketing</span>
                <span>September 4, 2020</span>
                <span>36 min</span>
              </div>
              <h4>What is traffic arbitrage and does it really make money?</h4>
              <p>In this podcast, we will explore the concept of traffic arbitrage, which involves driving traffic from one platform to another to generate profits. </p>
              <Link to="/blog/1" className={styles.blogReadMore}>Listen</Link>
            </div>
          </article>

          <article className={styles.blogCard}>
            <div className={styles.blogImageWrapper}>
              <img src="/images/blog/video.jpg" alt="Product Management Video" />
              <span className={styles.blogType}>Video</span>
            </div>
            <div className={styles.blogContent}>
              <div className={styles.blogMeta}>
                <span>Management</span>
                <span>August 25, 2020</span>
                <span>45 min</span>
              </div>
              <h4>Who can I get a product review from?</h4>
              <p>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucib...</p>
              <Link to="/blog/2" className={styles.blogReadMore}>Watch</Link>
            </div>
          </article>

          <article className={styles.blogCard}>
            <div className={styles.blogImageWrapper}>
              <img src="/images/blog/article.jpg" alt="Design Article" />
              <span className={styles.blogType}>Article</span>
            </div>
            <div className={styles.blogContent}>
              <div className={styles.blogMeta}>
                <span>Design</span>
                <span>August 8, 2020</span>
              </div>
              <h4>How to properly justify the choice of a creative profession</h4>
              <p>Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
              <Link to="/blog/3" className={styles.blogReadMore}>Read</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
