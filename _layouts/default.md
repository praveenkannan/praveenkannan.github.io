---
layout: base
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO and privacy meta tags -->
  <meta name="robots" content="index, follow">
  <meta name="googlebot" content="index, follow">
  <meta name="referrer" content="no-referrer">
  <meta http-equiv="Permissions-Policy" content="interest-cohort=()">
  
  {% if page.title %}
    <title>{{ page.title }} | {{ site.title }}</title>
  {% else %}
    <title>{{ site.title }}</title>
  {% endif %}
  
  <!-- Favicon -->
  <link rel="icon" href="{{ '/assets/img/favicon.png' | relative_url }}">
  
  <!-- Styles -->
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
  
  <!-- Dark mode toggle -->
  {% include dark-mode-toggle.html %}
</head>
<body class="page">
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <a href="/" class="site-title">{{ site.title }}</a>
        
        <nav class="main-nav">
          <ul class="nav-links">
            <li><a href="/about" {% if page.url == '/about/' %}class="active"{% endif %}>About</a></li>
            <li><a href="/projects" {% if page.url == '/projects/' %}class="active"{% endif %}>Projects</a></li>
            <li><a href="/blog" {% if page.url == '/blog/' %}class="active"{% endif %}>Blog</a></li>
            <li><a href="/contacts" {% if page.url == '/contacts/' %}class="active"{% endif %}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <main class="site-content">
    {{ content }}
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; {{ 'now' | date: "%Y" }} {{ site.title }}. All rights reserved.</p>
    </div>
  </footer>
  
  <!-- JavaScript modules -->
  <script type="module" src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
