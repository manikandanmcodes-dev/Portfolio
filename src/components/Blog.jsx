import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';
import EditableText from './EditableText';
import { ArrayItemOverlay, ArrayAddBtn } from './ArrayControls';
import './Blog.css';

export default function Blog() {
  const { data } = useAppContext();
  const { blog } = data;

  return (
    <section className="section blog reveal" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <EditableText value={blog.label} dataPath={['blog', 'label']} />
          </span>
          <h2>
            <EditableText value={blog.title} dataPath={['blog', 'title']} />
          </h2>
          <div className="divider" />
          <p>
            <EditableText value={blog.desc} dataPath={['blog', 'desc']} />
          </p>
        </div>

        <div className="blog__grid">
          {blog.posts.map((post, pIdx) => (
            <ArrayItemOverlay key={post.id} dataPath={['blog', 'posts']} index={pIdx} currentArray={blog.posts}>
              <div className="glass-card blog__card" style={{ '--accent': post.color }}>
                <div className="blog__header">
                  <span className="blog__tag" style={{ color: post.color, borderColor: post.color + '44' }}>
                    <EditableText value={post.tag} dataPath={['blog', 'posts', pIdx, 'tag']} />
                  </span>
                  <span className="blog__date text-muted">
                    <EditableText value={post.date} dataPath={['blog', 'posts', pIdx, 'date']} />
                  </span>
                </div>
                <div className="blog__num">
                  <EditableText value={post.num} dataPath={['blog', 'posts', pIdx, 'num']} />
                </div>
                <h3 className="blog__title">
                  <EditableText value={post.title} dataPath={['blog', 'posts', pIdx, 'title']} />
                </h3>
                <p className="blog__excerpt">
                  <EditableText value={post.excerpt} dataPath={['blog', 'posts', pIdx, 'excerpt']} />
                </p>
                <Link to={`/blog/${post.id}`} className="blog__read">Read More →</Link>
              </div>
            </ArrayItemOverlay>
          ))}
        </div>
        <ArrayAddBtn 
          dataPath={['blog', 'posts']} 
          defaultItem={{ tag: 'New', date: 'Today', num: '00', title: 'New Post Header', excerpt: 'Write your content snippet here.', color: '#00d4ff' }} 
        />

        {/* CTA Banner */}
        <div className="cta-banner glass-card" style={{ marginTop: '3rem' }}>
          <h2>
            <EditableText value={blog.ctaTitleStart} dataPath={['blog', 'ctaTitleStart']} />{' '}
            <span className="text-gradient">
              <EditableText value={blog.ctaTitleHighlight} dataPath={['blog', 'ctaTitleHighlight']} />
            </span>
          </h2>
          <p>
            <EditableText value={blog.ctaDesc} dataPath={['blog', 'ctaDesc']} />
          </p>
          <a href={blog.ctaBtnLink} className="btn btn-gradient">
            <EditableText value={blog.ctaBtnText} dataPath={['blog', 'ctaBtnText']} />
          </a>
        </div>
      </div>
    </section>
  );
}
