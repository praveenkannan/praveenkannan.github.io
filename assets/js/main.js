/**
 * Main JavaScript Entry Point
 * Imports and initializes all modules for the ShardedInsights website
 */

// Import modules
import { initDarkMode, watchSystemPreference } from './modules/dark-mode.js';
import { initLazyLoading, addLazyLoadStyles, logPerformanceMetrics } from './modules/lazy-loading.js';
import { secureExternalLinks, preconnectToExternalDomains, addPassiveEventListeners } from './modules/external-links.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize dark mode
  initDarkMode();
  watchSystemPreference();
  
  // Initialize lazy loading
  addLazyLoadStyles();
  initLazyLoading();
  
  // Handle external links
  secureExternalLinks();
  preconnectToExternalDomains();
  addPassiveEventListeners();
  
  // Log performance metrics
  logPerformanceMetrics();
  
  // Initialize page transitions
  initPageTransitions();
});

// Page transitions for smooth navigation
function initPageTransitions() {
  // Add transition class to content
  const pageContent = document.querySelector('.page');
  if (!pageContent) return;
  
  pageContent.classList.add('page-transition', 'page-fade-in');
  
  // Handle internal links
  document.querySelectorAll('a').forEach(link => {
    // Only apply to internal links
    if (link.hostname === window.location.hostname || link.hostname === '') {
      link.addEventListener('click', e => {
        // Don't handle if modifier keys are pressed
        if (e.metaKey || e.ctrlKey) return;
        
        const href = link.getAttribute('href');
        // Skip anchor links and non-HTML links
        if (!href || href.startsWith('#') || href.match(/\.(pdf|zip|png|jpg|jpeg|gif)$/i)) return;
        
        e.preventDefault();
        
        // Fade out
        pageContent.classList.remove('page-fade-in');
        pageContent.classList.add('page-fade-out');
        
        // Navigate after animation
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    }
  });
}

// Add CSS for page transitions
const style = document.createElement('style');
style.innerHTML = `
  .page-transition {
    transition: opacity 0.3s ease;
  }
  
  .page-fade-in {
    opacity: 1;
  }
  
  .page-fade-out {
    opacity: 0;
  }
  
  .external-icon {
    font-size: 0.8em;
    opacity: 0.7;
    margin-left: 2px;
  }
`;
document.head.appendChild(style);
