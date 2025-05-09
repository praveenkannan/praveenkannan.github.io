---
layout: default
title: Home
---

<div class="sidebar-sticky">
  <div class="sidebar-about">
    <h1>
      <a href="{{ site.baseurl }}/">
        {{ site.title }}
      </a>
    </h1>
    <p class="lead">{{ site.description }}</p>
  </div>

  <div class="hero-section">
    <div class="hero-content">
      <h2>Welcome to Sharded Insights</h2>
      <p>Exploring cutting-edge insights in software engineering, AI, and cloud technologies.</p>
    </div>
  </div>

  <section class="featured-posts">
    <h3 class="section-title">Latest Blog Posts</h3>
    <div class="card-grid">
      {% for post in site.posts limit:3 %}
        <article class="card post-card">
          <div class="card-body">
            <h4 class="card-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h4>
            <p class="card-text">{{ post.description }}</p>
            <div class="card-footer">
              <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
              <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm">Read More</a>
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <nav class="sidebar-nav">
    <div class="nav-links">
      <a href="/blog" class="btn btn-outline-primary">View All Posts</a>
      <a href="/about" class="btn btn-outline-secondary">About Me</a>
    </div>
  </nav>
</div>

<script>
  // Optional: Add any custom JavaScript for the home page
  document.addEventListener('DOMContentLoaded', function() {
    // Example: Add animation or interactivity
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate__animated', 'animate__fadeIn');
  });
</script>
