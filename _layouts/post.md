---
layout: default
---

<div class="post-container">
  <article class="post">
    <header class="post-header">
      <h1 class="post-title">{{ page.title }}</h1>
      <div class="post-meta">
        <time datetime="{{ page.date | date_to_xmlschema }}">
          {{ page.date | date: "%B %d, %Y" }}
        </time>
        {% if page.categories.size > 0 %}
        <div class="post-categories">
          {% for category in page.categories %}
          <span class="post-category">{{ category }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </header>

    <div class="post-content">
      {{ content }}
    </div>

    {% if page.tags.size > 0 %}
    <div class="post-tags">
      <h3>Tags</h3>
      <div class="tags-list">
        {% for tag in page.tags %}
        <a href="/tags#{{ tag | slugify }}" class="post-tag">{{ tag }}</a>
        {% endfor %}
      </div>
    </div>
    {% endif %}

    <div class="post-navigation">
      {% if page.previous.url %}
      <a class="prev-post" href="{{ page.previous.url | relative_url }}">
        <span class="nav-label">Previous Post</span>
        <span class="post-title">{{ page.previous.title }}</span>
      </a>
      {% else %}
      <div></div>
      {% endif %}
      
      {% if page.next.url %}
      <a class="next-post" href="{{ page.next.url | relative_url }}">
        <span class="nav-label">Next Post</span>
        <span class="post-title">{{ page.next.title }}</span>
      </a>
      {% else %}
      <div></div>
      {% endif %}
    </div>

    <div class="back-to-blog">
      <a href="/blog" class="btn btn-outline">Back to Blog</a>
    </div>
  </article>
</div>
