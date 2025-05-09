---
layout: default
title: Blog
terminal_style: true
terminal_command: "ls -la ~/blog"
permalink: /blog/
---

<div class="blog-container">
  <h1>Sharded Insights Blog</h1>
  
  <div class="posts-grid">
    {% for post in site.posts %}
      <div class="post-card">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
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
      </div>
    {% endfor %}
  </div>
</div>

<style>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.posts-grid {
  display: grid;
  gap: 20px;
}

.post-card {
  border: 1px solid var(--border-color, #e1e4e8);
  padding: 15px;
  border-radius: 6px;
  background-color: var(--card-bg, #f6f8fa);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.post-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.post-card a {
  color: var(--link-color, #0366d6);
  text-decoration: none;
  font-weight: 600;
}

.post-card a:hover {
  text-decoration: underline;
}

.post-meta {
  color: var(--text-muted, #6a737d);
  font-size: 0.9em;
  margin-bottom: 10px;
}

.post-description {
  color: var(--text-color, #24292e);
  line-height: 1.5;
  margin-bottom: 10px;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.post-tag {
  background-color: var(--tag-bg, #e1e4e8);
  color: var(--tag-color, #24292e);
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) {
  .posts-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
