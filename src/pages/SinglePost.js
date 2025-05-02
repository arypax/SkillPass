import React from 'react';
import styles from './SinglePost.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegramPlane, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SinglePost() {
  const navigate = useNavigate();

  return (
    <div className={styles.singlePostPage}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Контент слева */}
          <div className={styles.contentCol}>
            <div className={styles.headerRow}>
              <div className={styles.breadcrumbs}>
                <span className={styles.articleType}>Article</span>
                <span className={styles.separator}>|</span>
                <span className={styles.category}>HR & Recruiting</span>
              </div>
              <h1 className={styles.title}>
                HR statistics: job search, interviews, hiring and recruiting
              </h1>
              <div className={styles.metaRow}>
                <span>August 3, 2020</span>
                <span className={styles.dot}>•</span>
                <span>4 min read</span>
                <span className={styles.metaShareGroup}>
                  <span className={styles.shareLabel}>Share:</span>
                  <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}> <FaFacebookF /></a>
                  <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}> <FaTwitter /></a>
                  <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}> <FaLinkedinIn /></a>
                  <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}> <FaYoutube /></a>
                  <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}> <FaTelegramPlane /></a>
                </span>
              </div>
            </div>
            <div className={styles.mainImageWrapper}>
              <img src="/images/blog/article2.jpg" alt="Main post visual" className={styles.mainImage} />
            </div>
            <div className={styles.articleContent}>
              <p className={styles.lead}>The rapid evolution of the job market has led to significant changes in how companies approach recruitment and talent management. The integration of new technologies and methodologies has transformed traditional hiring practices, creating both challenges and opportunities for HR professionals. The author's extensive research and industry experience provide valuable insights into these developments.</p>
              <p>In today's workplace, the role of HR has evolved beyond traditional administrative functions. The modern HR professional must navigate complex organizational structures while implementing innovative recruitment strategies. Various technological solutions have emerged to streamline these processes. From AI-powered screening tools to advanced analytics platforms, these innovations are reshaping how companies identify and attract top talent. The impact of these changes extends across all levels of the organization.</p>
              <p>Companies are increasingly recognizing the importance of data-driven decision making in HR. Modern recruitment tools provide powerful insights into candidate performance and potential. The integration of these tools requires careful consideration of both technical and human factors. Organizations must balance efficiency gains with maintaining a personal touch in the hiring process. This delicate balance is crucial for building strong, sustainable teams.</p>
              <blockquote className={styles.quoteFigma}>
                <span className={styles.quoteIconFigma}>❝</span>
                <span>
                  The future of HR lies in the successful integration of technology and human expertise. While automation can streamline many processes, the human element remains crucial in understanding candidate potential and cultural fit. The most successful organizations will be those that can effectively combine data-driven insights with human judgment to make better hiring decisions.
                </span>
              </blockquote>
              <p>Key considerations for modern HR professionals include:</p>
              <ul className={styles.checkListFigma}>
                <li><span className={styles.checkIcon}>✔</span>Implementing data-driven recruitment strategies</li>
                <li><span className={styles.checkIcon}>✔</span>Leveraging AI and automation tools effectively</li>
                <li><span className={styles.checkIcon}>✔</span>Maintaining human connection in the digital age</li>
                <li><span className={styles.checkIcon}>✔</span>Developing comprehensive talent management systems</li>
              </ul>
              <p>The landscape of HR and recruitment continues to evolve rapidly. Organizations must stay informed about emerging trends and technologies while maintaining focus on their core mission of finding and developing the best talent. By combining traditional HR expertise with modern tools and methodologies, companies can build stronger, more effective teams. The key to success lies in finding the right balance between technological innovation and human insight.</p>
              <div className={styles.tagsShareRowFigma}>
                <div className={styles.tagsLabel}>Tags:</div>
                <div className={styles.tagsBox}>
                  <span className={styles.tag}>#learning</span>
                  <span className={styles.tag}>#HR</span>
                  <span className={styles.tag}>#self-development</span>
                </div>
                <div className={styles.shareLabel}>Share:</div>
                <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}><FaFacebookF /></a>
                <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}><FaTwitter /></a>
                <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}><FaLinkedinIn /></a>
                <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}><FaYoutube /></a>
                <a href="#" className={styles.socialIcon} onClick={e => {e.preventDefault(); navigate('/under-construction');}}><FaTelegramPlane /></a>
              </div>
            </div>
          </div>
          {/* Сайдбар справа */}
          <aside className={styles.sidebar}>
            {/* Author */}
            <div className={styles.authorBoxFigma} style={{background: 'none', boxShadow: 'none', padding: 0, marginBottom: 32}}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" className={styles.authorAvatarFigma} style={{width: 64, height: 64, borderRadius: 8, objectFit: 'cover', border: 'none', boxShadow: 'none'}} />
              <div className={styles.authorInfoFigma}>
                <div className={styles.authorNameFigma}>Kristin Watson</div>
                <div className={styles.authorRoleFigma}>Curator of Marketing Course</div>
              </div>
            </div>
            {/* Trending articles */}
            <div className={styles.trendingBoxFigma}>
              <div className={styles.trendingTitleFigma}>Trending Articles</div>
              <div className={styles.trendingArticleFigma} onClick={() => navigate('/under-construction')} style={{background: 'none', cursor: 'pointer'}}>
                <div className={styles.trendingIconFigma}><FaRegCalendarAlt style={{marginRight: 4, verticalAlign: 'middle'}} /></div>
                <div>
                  <div className={styles.trendingDateFigma}>September 4, 2020</div>
                  <div className={styles.trendingTextFigma}>What is traffic arbitrage and does it really make money?</div>
                </div>
              </div>
              <div className={styles.trendingArticleFigma} onClick={() => navigate('/under-construction')} style={{background: 'none', cursor: 'pointer'}}>
                <div className={styles.trendingIconFigma}><FaRegCalendarAlt style={{marginRight: 4, verticalAlign: 'middle'}} /></div>
                <div>
                  <div className={styles.trendingDateFigma}>July 15, 2020</div>
                  <div className={styles.trendingTextFigma}>Startup: how to build a team that will live longer than a year</div>
                </div>
              </div>
              <div className={styles.trendingArticleFigma} onClick={() => navigate('/under-construction')} style={{background: 'none', cursor: 'pointer'}}>
                <div className={styles.trendingIconFigma}><FaRegCalendarAlt style={{marginRight: 4, verticalAlign: 'middle'}} /></div>
                <div>
                  <div className={styles.trendingDateFigma}>August 2, 2020</div>
                  <div className={styles.trendingTextFigma}>What to do if you want to get feedback on the product</div>
                </div>
              </div>
            </div>
            {/* Tags */}
            <div className={styles.tagsBox}>
              <span className={styles.tag}>#marketing</span>
              <span className={styles.tag}>#recruiting</span>
              <span className={styles.tag}>#coding</span>
              <span className={styles.tag}>#learning</span>
              <span className={styles.tag}>#HR</span>
              <span className={styles.tag}>#self-development</span>
            </div>
          </aside>
        </div>
        {/* Newsletter subscription */}
        <div className={styles.newsletterBox}>
          <div className={styles.newsletterLeft}>
            <img src="/images/singlepost-illustration.png" alt="Newsletter illustration" />
          </div>
          <div className={styles.newsletterRight}>
            <div className={styles.newsletterTitle}>Want to get the best articles weekly?<br/>Subscribe to our newsletter!</div>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Your working email" />
              <button type="submit">Subscribe</button>
            </form>
            <label className={styles.agreeLabel}>
              <input type="checkbox" defaultChecked />
              I agree to receive communications from SkillPass Online School
            </label>
          </div>
        </div>
        {/* You may also like */}
        <div className={styles.youMayAlsoLikeSection}>
          <div className={styles.youMayAlsoLikeTitle}>You may also like</div>
          <div className={styles.youMayAlsoLikeGrid}>
            <div className={styles.youMayAlsoLikeCard}>
              <div className={styles.youMayAlsoLikeType}>Podcast</div>
              <img src="/images/blog/podcast2.jpg" alt="Podcast" />
              <div className={styles.youMayAlsoLikeCategory}>Design</div>
              <div className={styles.youMayAlsoLikeDate}>July 28, 2020 | 36 min</div>
              <div className={styles.youMayAlsoLikeText}>What are color profiles and how they work in graphic design</div>
              <a href="#" className={styles.youMayAlsoLikeLink}>Listen</a>
            </div>
            <div className={styles.youMayAlsoLikeCard}>
              <div className={styles.youMayAlsoLikeType}>Article</div>
              <img src="/images/blog/article.jpg" alt="Article" />
              <div className={styles.youMayAlsoLikeCategory}>Development</div>
              <div className={styles.youMayAlsoLikeDate}>September 1, 2020</div>
              <div className={styles.youMayAlsoLikeText}>How to choose the first programming language for a beginner</div>
              <a href="#" className={styles.youMayAlsoLikeLink}>Read</a>
            </div>
            <div className={styles.youMayAlsoLikeCard}>
              <div className={styles.youMayAlsoLikeType}>Article</div>
              <img src="/images/blog/article4.jpg" alt="Article" />
              <div className={styles.youMayAlsoLikeCategory}>Design</div>
              <div className={styles.youMayAlsoLikeDate}>August 8, 2020</div>
              <div className={styles.youMayAlsoLikeText}>Should you choose a creative profession if you are attracted to creativity?</div>
              <a href="#" className={styles.youMayAlsoLikeLink}>Read</a>
            </div>
          </div>
        </div>
        {/* Go to blog button */}
        <div className={styles.goToBlogRow}>
          <span>Do you want more articles, podcasts and videos?</span>
          <a href="/blog" className={styles.goToBlogButton}>Go to blog</a>
        </div>
      </div>
    </div>
  );
}
