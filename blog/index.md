---
layout: default
title: Blog
---

# All Blog Posts

<div class="blog-list">
{% for post in site.posts %}
  <article class="blog-post-preview">
    <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.description }}</p>
    <a href="{{ site.baseurl }}{{ post.url }}" class="btn btn-primary">Read More</a>
  </article>
{% endfor %}
</div>
