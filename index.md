---
layout: home
title: Home
permalink: /
---

# Welcome to Sharded Insights

Explore cutting-edge insights in software engineering, AI, and cloud technologies. 

## Latest Blog Posts

{% for post in site.posts limit:3 %}
### [{{ post.title }}]({{ site.baseurl }}{{ post.url }})

**{{ post.date | date: "%B %d, %Y" }}**

{{ post.description }}

[Read More]({{ site.baseurl }}{{ post.url }})

---
{% endfor %}

[View All Posts]({{ site.baseurl }}/blog)
