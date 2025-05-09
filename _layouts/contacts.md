---
layout: default
title: Contact
permalink: /contacts/
---

<div class="contact-container">
  <h1 class="section-title">Get in Touch</h1>
  <p class="section-description">Feel free to reach out for professional inquiries, collaboration opportunities, or just to say hello.</p>
  
  <div class="contact-grid">
    <div class="contact-card">
      <div class="contact-icon">
        <i class="fas fa-envelope"></i>
      </div>
      <h3>Email</h3>
      <p>
        <a href="mailto:praveen7484@gmail.com" class="contact-link">
          praveen7484@gmail.com
        </a>
      </p>
      <p class="contact-note">For direct inquiries and collaborations</p>
    </div>
    
    <div class="contact-card">
      <div class="contact-icon">
        <i class="fab fa-github"></i>
      </div>
      <h3>GitHub</h3>
      <p>
        <a href="https://github.com/praveenkannan" target="_blank" rel="noopener noreferrer" class="contact-link">
          github.com/praveenkannan
        </a>
      </p>
      <p class="contact-note">Check out my open source contributions</p>
    </div>
    
    <div class="contact-card">
      <div class="contact-icon">
        <i class="fab fa-linkedin"></i>
      </div>
      <h3>LinkedIn</h3>
      <p>
        <a href="https://linkedin.com/in/praveenkannan" target="_blank" rel="noopener noreferrer" class="contact-link">
          linkedin.com/in/praveenkannan
        </a>
      </p>
      <p class="contact-note">Connect professionally</p>
    </div>
    
    <div class="contact-card">
      <div class="contact-icon">
        <i class="fab fa-twitter"></i>
      </div>
      <h3>Twitter</h3>
      <p>
        <a href="https://twitter.com/praveenkannan" target="_blank" rel="noopener noreferrer" class="contact-link">
          @praveenkannan
        </a>
      </p>
      <p class="contact-note">Follow for tech insights and updates</p>
    </div>
  </div>
  
  <div class="contact-disclaimer">
    <p>
      <strong>Note:</strong> I'm always open to interesting conversations about technology, 
      software engineering, and innovative solutions. However, please note that I may not 
      be able to respond to every message immediately.
    </p>
  </div>
</div>

<style>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.section-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.contact-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 30px;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.contact-card h3 {
  margin-bottom: 15px;
  color: var(--text-color);
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  word-break: break-word;
}

.contact-link:hover {
  color: var(--primary-dark);
}

.contact-note {
  margin-top: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
}

.contact-disclaimer {
  max-width: 800px;
  margin: 0 auto;
  padding: 25px;
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.contact-disclaimer p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks.forEach(link => {
    if (link.getAttribute('href').startsWith('http')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
</script>
