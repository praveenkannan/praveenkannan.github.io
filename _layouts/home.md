---
layout: default
title: Home
---

<div class="home-container">
  <section class="hero">
    <div class="hero-content">
      <h1>Sharded Insights</h1>
      <p class="tagline">Exploring software engineering, AI, and cloud technologies</p>
      <div class="hero-buttons">
        <a href="/about" class="btn btn-primary">About Me</a>
        <a href="/blog" class="btn btn-secondary">Read Blog</a>
      </div>
    </div>
  </section>

  <section class="featured-posts">
    <h2 class="section-title">Latest Insights</h2>
    <div class="posts-grid">
      {% for post in site.posts limit:3 %}
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
            <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
          </div>
        </div>
      {% endfor %}
    </div>
    <div class="view-all">
      <a href="/blog" class="btn btn-outline">View All Posts</a>
    </div>
  </section>

  <section class="quick-links">
    <h2 class="section-title">Explore More</h2>
    <div class="links-grid">
      <a href="/projects" class="quick-link-card">
        <div class="quick-link-icon">📂</div>
        <h3>Projects</h3>
        <p>Explore my technical projects and case studies</p>
      </a>
      <a href="/about" class="quick-link-card">
        <div class="quick-link-icon">👨‍💻</div>
        <h3>About</h3>
        <p>Learn more about my experience and expertise</p>
      </a>
      <a href="/contacts" class="quick-link-card">
        <div class="quick-link-icon">📬</div>
        <h3>Contact</h3>
        <p>Get in touch for collaborations or inquiries</p>
      </a>
    </div>
  </section>
</div>
