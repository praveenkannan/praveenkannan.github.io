---
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  {% if page.title %}
    <title>{{ page.title }} | {{ site.title }}</title>
  {% else %}
    <title>{{ site.title }}</title>
  {% endif %}
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="{{ '/assets/img/favicon.png' | relative_url }}">
  
  <!-- SEO and Metadata -->
  {% seo %}
</head>
<body>
  <!-- Dark Mode Toggle -->
  <button id="dark-mode-toggle" class="dark-mode-toggle" aria-label="Toggle Dark Mode">
    🌓
  </button>

  <div class="container">
    <!-- Main Content -->
    <main>
      {{ content }}
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-content">
        <p>&copy; {{ site.time | date: '%Y' }} {{ site.title }}. All rights reserved.</p>
        <nav class="footer-nav">
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contacts">Contact</a>
        </nav>
      </div>
    </footer>
  </div>

  <!-- Dark Mode Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      const savedTheme = localStorage.getItem('site-theme');

      // Set initial theme
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      }

      // Toggle Dark Mode
      darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('site-theme', isDarkMode ? 'dark' : 'light');
      });
    });
  </script>

  <!-- Optional JavaScript -->
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
