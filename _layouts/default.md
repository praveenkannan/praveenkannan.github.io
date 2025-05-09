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
  
  <!-- Dark Mode Toggle Script -->
  <script>
    // Dark Mode Toggle
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    }

    // Check User's Preference
    document.addEventListener('DOMContentLoaded', () => {
      const isDarkMode = localStorage.getItem('dark-mode') === 'true';
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      }
    });
  </script>
</head>
<body>
  <div class="container">
    <!-- Dark Mode Toggle Button -->
    <button onclick="toggleDarkMode()" class="dark-mode-toggle" aria-label="Toggle Dark Mode">
      Toggle Dark Mode
    </button>

    <!-- Main Content -->
    <main>
      {{ content }}
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-content">
        <p>&copy; {{ 'now' | date: "%Y" }} {{ site.title }}. All rights reserved.</p>
        <nav class="footer-nav">
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contacts">Contact</a>
        </nav>
      </div>
    </footer>
  </div>

  <!-- Optional JavaScript -->
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
