import { Link } from 'react-router-dom';
import '../styles/blog.css';

export default function Blog() {
  return (
    <div className="blog-page">
      {/* Blog Header */}
      <header className="blog-header">
        <h1>Hi, I'm Sumit Pandey</h1>
        <p>Web Developer & Designer crafting functional and aesthetic experiences.</p>
      </header>

      {/* Blog Content */}
      <div className="blog-content">

        {/* Latest Blog Posts */}
        <section>
          <h2 className="section-title">Latest from the Blog</h2>
          <div className="blog-posts">
            <div className="blog-post">
              <h2>Blog Post Title</h2>
              <p className="post-date">April 28, 2025</p>
              <p>Brief excerpt from your blog post goes here. Make it engaging to encourage readers to click through.</p>
              <Link to="/blog" className="read-more">Read more →</Link>
            </div>
            <div className="blog-post">
              <h2>Another Blog Post</h2>
              <p className="post-date">April 20, 2025</p>
              <p>Brief excerpt from your second blog post. Keep it short but interesting enough to capture attention.</p>
              <Link to="/blog" className="read-more">Read more →</Link>
            </div>
          </div>
          <div className="center-button">
            <Link to="/blog" className="read-more">Visit the Blog</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
