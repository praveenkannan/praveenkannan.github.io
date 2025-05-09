---
layout: home
title: Home
---

# Welcome to Sharded Insights

Explore cutting-edge insights in software engineering, AI, and cloud technologies. 

## Latest Blog Posts

{% for post in site.posts limit:3 %}
### [{{ post.title }}]({{ post.url }})

**{{ post.date | date: "%B %d, %Y" }}**

{{ post.description }}

[Read More]({{ post.url }})

---
{% endfor %}
