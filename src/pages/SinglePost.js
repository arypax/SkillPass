import React from 'react';
import styles from './SinglePost.module.css';

export default function SinglePost() {
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
                <span className={styles.date}>August 3, 2020</span>
                <span className={styles.dot}>•</span>
                <span className={styles.readTime}>4 min read</span>
                <span className={styles.shareLabel}>Share:</span>
                <a href="#" className={styles.socialIcon}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
                <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className={styles.mainImageWrapper}>
              <img src="/images/blog/article2.jpg" alt="Main post visual" className={styles.mainImage} />
            </div>
            <div className={styles.articleContent}>
              <p className={styles.lead}>
                Pellentesque vitae scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Author purus auctor nullam diam quis est hendrerit ac euismod.
              </p>
              <p>
                At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisi lacinia amet, odio. Mi varius viverra risus vel.
              </p>
              <p>
                Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.
              </p>
              <blockquote className={styles.quote}>
                <span className={styles.quoteIcon}>❝</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.
              </blockquote>
              <p>
                Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:
              </p>
              <ul className={styles.checkList}>
                <li>Morbi pretium aliquam adipiscing donec tempus.</li>
                <li>Placerat amet pulvinar lorem nisl.</li>
                <li>Feugiat gravida quisque elit bibendum id adipiscing sed.</li>
                <li>Duis lobortis in fames ultrices commodo nibh.</li>
              </ul>
              <p>
                Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
              </p>
            </div>
            {/* Теги и share */}
            <div className={styles.tagsShareRow}>
              <div className={styles.tagsRowDesktop}>
                <span className={styles.tag}>#learning</span>
                <span className={styles.tag}>#HR</span>
                <span className={styles.tag}>#self-development</span>
              </div>
              <div className={styles.shareRowBottom}>
                <span>Share:</span>
                <a href="#" className={styles.socialIcon}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
                <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          {/* Сайдбар справа */}
          <aside className={styles.sidebar}>
            {/* Author */}
            <div className={styles.authorBox}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" className={styles.authorAvatar} />
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Kristin Watson</div>
                <div className={styles.authorRole}>Curator of Marketing Course</div>
                <div className={styles.authorSocials}>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            {/* Trending articles */}
            <div className={styles.trendingBox}>
              <div className={styles.trendingTitle}>Trending Articles</div>
              <div className={styles.trendingArticle}>
                <div className={styles.trendingIcon}><img src="/images/blog/podcast.jpg" alt="icon" width="32" /></div>
                <div>
                  <div className={styles.trendingDate}>September 4, 2020</div>
                  <div className={styles.trendingText}>What is traffic arbitrage and does it really make money?</div>
                </div>
              </div>
              <div className={styles.trendingArticle}>
                <div className={`${styles.trendingIcon} ${styles.pink}`}><img src="/images/blog/article4.jpg" alt="icon" width="32" /></div>
                <div>
                  <div className={styles.trendingDate}>July 15, 2020</div>
                  <div className={`${styles.trendingText} ${styles.red}`}>Startup: how to build a team that will live longer than a year</div>
                </div>
              </div>
              <div className={styles.trendingArticle}>
                <div className={`${styles.trendingIcon} ${styles.green}`}><img src="/images/blog/article3.jpg" alt="icon" width="32" /></div>
                <div>
                  <div className={styles.trendingDate}>August 2, 2020</div>
                  <div className={styles.trendingText}>What to do if you want to get feedback on the product</div>
                </div>
              </div>
            </div>
            {/* Tags */}
            <div className={styles.tagsBox}>
              <span className={styles.tag}>#marketing</span>
              <span className={styles.tag}>#recruiting</span>
              <span className={`${styles.tag} ${styles.red}`}>#coding</span>
              <span className={styles.tag}>#learning</span>
              <span className={styles.tag}>#HR</span>
              <span className={styles.tag}>#self-development</span>
            </div>
          </aside>
        </div>
        {/* Newsletter subscription */}
        <div className={styles.newsletterBox}>
          <div className={styles.newsletterLeft}>
            <img src="/images/illustration-1.png" alt="Newsletter illustration" />
          </div>
          <div className={styles.newsletterRight}>
            <div className={styles.newsletterTitle}>Want to get the best articles weekly?<br/>Subscribe to our newsletter!</div>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Your working email" />
              <button type="submit">Subscribe</button>
            </form>
            <label className={styles.agreeLabel}>
              <input type="checkbox" defaultChecked />
              I agree to receive communications from Createx Online School
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
