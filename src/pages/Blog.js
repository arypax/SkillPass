import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const posts = [
  {
    id: 1,
    type: 'podcast',
    category: 'Marketing',
    date: 'September 4, 2020',
    duration: '36 min',
    title: 'What is traffic, arbitrage and does it really make money?',
    description: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus dignissim. Convallis...',
    image: '/images/blog/podcast.jpg'
  },
  {
    id: 2,
    type: 'article',
    category: 'Development',
    date: 'September 1, 2020',
    title: 'How to choose the first programming language for a beginner',
    description: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    image: '/images/blog/article.jpg'
  },
  {
    id: 3,
    type: 'video',
    category: 'Design',
    date: 'August 8, 2020',
    duration: '40 min',
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    description: 'Curabitur leo nisi, varius sit consectetur velit vestibulum ac velit. Duis ornare ut morbi...',
    image: '/images/blog/video.jpg'
  },
  {
    id: 4,
    type: 'article',
    category: 'HR & Recruiting',
    date: 'August 3, 2020',
    title: 'HR statistics: job search, interviews, hiring and recruiting',
    description: 'Massa, tempus tortor blandit rhoncus. Leo risus nam pharetra morbi...',
    image: '/images/blog/article2.jpg'
  },
  {
    id: 5,
    type: 'video',
    category: 'Management',
    date: 'August 2, 2020',
    duration: '45 min',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    description: 'Neque a dui tincidunt porttitor blandit sed vestibulum...',
    image: '/images/blog/article3.jpg'
  },
  {
    id: 6,
    type: 'podcast',
    category: 'Design',
    date: 'July 28, 2020',
    duration: '36 min',
    title: 'What are color profiles and how they work in graphic design',
    description: 'Aliquam vulputate hendrerit quam sollicitudin urna enim...',
    image: '/images/blog/podcast2.jpg'
  },
  {
    id: 7,
    type: 'video',
    category: 'Management',
    date: 'July 15, 2020',
    duration: '45 min',
    title: 'Startup: how to build a team that will live longer than a year',
    description: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo...',
    image: '/images/blog/video2.jpg'
  },
  {
    id: 8,
    type: 'article',
    category: 'Marketing',
    date: 'July 9, 2020',
    title: 'How to get customers to love your business from the start',
    description: 'Elementum at placerat risus metus. Amet sem at vitae...',
    image: '/images/blog/article4.jpg'
  },
  {
    id: 9,
    type: 'video',
    category: 'Design',
    date: 'July 15, 2021',
    duration: '55 min',
    title: 'What about the colors?',
    description: 'Aliquam vulputate hendrerit quam sollicitudin urna enim...',
    image: '/images/blog/video3.jpg'
  }
];

function Blog() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCategory, setActiveCategory] = useState('all themes');

  const filters = [
    { id: 'All', label: 'All' },
    { 
      id: 'Articles', 
      label: 'Articles',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.5 2h-11c-.827 0-1.5.673-1.5 1.5v9c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5zm-11 1h11c.276 0 .5.224.5.5v1.5h-12v-1.5c0-.276.224-.5.5-.5zm11 10h-11c-.276 0-.5-.224-.5-.5v-6.5h12v6.5c0 .276-.224.5-.5.5z"/>
        </svg>
      )
    },
    { 
      id: 'Videos', 
      label: 'Videos',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12 8l-6 4V4z"/>
        </svg>
      )
    },
    { 
      id: 'Podcasts', 
      label: 'Podcasts',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 11a3 3 0 003-3V3a3 3 0 00-6 0v5a3 3 0 003 3zm-2-8a2 2 0 114 0v5a2 2 0 11-4 0V3zm7 5a1 1 0 00-2 0 3 3 0 01-6 0 1 1 0 00-2 0 5 5 0 0010 0z"/>
        </svg>
      )
    }
  ];

  const categories = ['all themes', 'Marketing', 'Management', 'HR & Recruiting', 'Design', 'Development'];

  return (
    <div className={styles.blogPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>SkillPass School Journal</h1>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterTabs}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterTab} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.filterControls}>
          <div className={styles.categorySelect}>
            <span>Blog category</span>
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className={styles.search}>
            <input type="text" placeholder="Search blog..." />
          </div>
        </div>
      </div>

      <div className={styles.blogGrid}>
        {posts.map(post => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.cardImage}>
              <img src={post.image} alt={post.title} />
              <span className={styles.postType} data-type={post.type}>
                {post.type}
              </span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
                {post.duration && <span className={styles.duration}>{post.duration}</span>}
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDescription}>{post.description}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className={`${styles.cardLink} ${
                  post.type === 'video' ? styles.watch : 
                  post.type === 'podcast' ? styles.listen : 
                  styles.read
                }`}
              >
                {post.type === 'video' ? 'Watch' : 
                 post.type === 'podcast' ? 'Listen' : 
                 'Read'}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
