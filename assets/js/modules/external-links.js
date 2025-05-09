/**
 * External Links Module
 * Handles security and performance enhancements for external links
 */

// Add security attributes to external links
export function secureExternalLinks() {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    // Only process links with href attributes
    if (!link.href) return;
    
    try {
      // Check if the link is external
      const url = new URL(link.href);
      if (url.hostname !== window.location.hostname && url.hostname !== '') {
        // Add security attributes
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
        
        // Add visual indicator for external links
        if (!link.querySelector('.external-icon') && !link.classList.contains('no-external-icon')) {
          const icon = document.createElement('span');
          icon.classList.add('external-icon');
          icon.innerHTML = ' ↗';
          icon.setAttribute('aria-hidden', 'true');
          link.appendChild(icon);
        }
      }
    } catch (e) {
      // Invalid URL, skip this link
      console.warn('Invalid URL in link:', link.href);
    }
  });
}

// Preconnect to common external domains
export function preconnectToExternalDomains() {
  // List of common domains that might be linked from the site
  const commonDomains = [
    'https://github.com',
    'https://linkedin.com',
    'https://twitter.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  commonDomains.forEach(domain => {
    // Check if we already have a preconnect for this domain
    const existingLink = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    }
  });
}

// Add passive event listeners for better scroll performance
export function addPassiveEventListeners() {
  // Passive event listeners for better scroll performance
  document.addEventListener('scroll', () => {}, { passive: true });
  document.addEventListener('touchmove', () => {}, { passive: true });
  document.addEventListener('touchstart', () => {}, { passive: true });
}
