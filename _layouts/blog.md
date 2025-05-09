---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-container">
  <h1 class="section-title">Sharded Insights Blog</h1>
  
  <div class="posts-grid">
    {% for post in site.posts %}
      <div class="post-card">
        <div class="post-card-content">
          <h3 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%B %d, %Y" }}
            </time>
          </p>
          {% if post.description %}
            <p class="post-description">{{ post.description }}</p>
          {% endif %}
          <div class="post-tags">
            {% if post.tags %}
              {% for tag in post.tags %}
                <span class="post-tag">{{ tag }}</span>
              {% endfor %}
            {% endif %}
          </div>
          <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<style>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: var(--text-color);
  position: relative;
}

.section-title:after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
  margin: 15px auto 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.post-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  height: 100%;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.post-card-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.post-title {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.post-title a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-title a:hover {
  color: var(--primary-color);
}

.post-meta {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.post-description {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.post-tag {
  background-color: var(--tag-bg, #e1e4e8);
  color: var(--tag-color, #24292e);
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
}

.read-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
  align-self: flex-start;
  margin-top: auto;
}

.read-more:hover {
  color: var(--primary-dark);
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
