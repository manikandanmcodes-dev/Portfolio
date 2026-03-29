import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';
import './BlogDetails.css';

export default function BlogDetails() {
  const { id } = useParams();
  const { data } = useAppContext();
  
  const post = data.blog.posts.find(p => p.id === id);

  if (!post) {
    return (
      <section className="section blog-details">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Post Not Found</h1>
          <p className="text-muted">The article you are looking for does not exist or has been removed.</p>
          <Link to="/" className="btn btn-ghost" style={{ marginTop: '2rem' }}>← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section blog-details">
      <div className="container">
        <Link to="/#blog" className="btn btn-ghost blog-details__back">← Back to Posts</Link>
        
        <article className="glass-card blog-details__article" style={{ '--accent': post.color }}>
          <header className="blog-details__header">
            <div className="blog-details__meta">
              <span className="blog__tag" style={{ color: post.color, borderColor: post.color + '44' }}>
                {post.tag}
              </span>
              <span className="text-muted">{post.date}</span>
            </div>
            
            <h1 className="blog-details__title gradient-text">{post.title}</h1>
            <p className="blog-details__excerpt">{post.excerpt}</p>
          </header>

          <div className="divider" style={{ margin: '3rem auto' }} />

          <div className="blog-details__content">
            {post.fullContent ? (
              <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
            ) : (
              <div>
                <p>This is the full article view for <strong>{post.title}</strong>.</p>
                <p>More content coming soon... To update this content, simply edit the `fullContent` field in the data source.</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
