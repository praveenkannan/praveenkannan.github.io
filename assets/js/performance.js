// Performance and Lazy Loading Optimization
document.addEventListener('DOMContentLoaded', () => {
  // Lazy Load Images
  const lazyImages = document.querySelectorAll('.lazy-load');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }

  // Performance Metrics Logging
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const metrics = performance.getEntriesByType('navigation')[0];
      console.log('Page Load Performance:', {
        loadTime: metrics.loadEventEnd - metrics.startTime,
        domInteractive: metrics.domInteractive - metrics.startTime,
        firstByte: metrics.responseStart - metrics.startTime
      });
    });
  }

  // Resource Hints for Performance
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

// Passive Event Listeners for Scrolling
document.addEventListener('scroll', () => {}, { passive: true });
document.addEventListener('touchmove', () => {}, { passive: true });
