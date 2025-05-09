/**
 * Lazy Loading Module
 * Handles lazy loading of images for improved performance
 */

export function initLazyLoading() {
  const lazyImages = document.querySelectorAll('.lazy-load');
  
  if (lazyImages.length === 0) return;
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          
          // Handle both src and background-image cases
          if (image.dataset.src) {
            image.src = image.dataset.src;
            if (image.dataset.srcset) {
              image.srcset = image.dataset.srcset;
            }
          } else if (image.dataset.bg) {
            image.style.backgroundImage = `url(${image.dataset.bg})`;
          }
          
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
      if (img.dataset.src) {
        img.src = img.dataset.src;
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
        }
      } else if (img.dataset.bg) {
        img.style.backgroundImage = `url(${img.dataset.bg})`;
      }
      img.classList.add('loaded');
    });
  }
}

// Add fade-in animation for lazy-loaded images
export function addLazyLoadStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    .lazy-load {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    
    .lazy-load.loaded {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
}

// Performance metrics logging
export function logPerformanceMetrics() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const metrics = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Performance:', {
          loadTime: Math.round(metrics.loadEventEnd - metrics.startTime) + 'ms',
          domInteractive: Math.round(metrics.domInteractive - metrics.startTime) + 'ms',
          firstByte: Math.round(metrics.responseStart - metrics.startTime) + 'ms'
        });
      }, 0);
    });
  }
}
