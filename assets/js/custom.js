// Custom JavaScript for ShardedInsights
document.addEventListener('DOMContentLoaded', function() {
  // Initialize page transitions
  initPageTransitions();
  
  // Initialize dark mode toggle
  initDarkModeToggle();
  
  // Initialize terminal effects
  initTerminalEffects();
});

// Page transitions for smooth navigation
function initPageTransitions() {
  // Add transition class to content
  const pageContent = document.querySelector('.page');
  if (pageContent) {
    pageContent.classList.add('page-transition', 'page-fade-in');
  }
  
  // Handle internal links
  document.querySelectorAll('a').forEach(link => {
    // Only apply to internal links
    if (link.hostname === window.location.hostname || link.hostname === '') {
      link.addEventListener('click', e => {
        // Don't handle if modifier keys are pressed
        if (e.metaKey || e.ctrlKey) return;
        
        const href = link.getAttribute('href');
        // Skip anchor links and non-HTML links
        if (href.startsWith('#') || href.match(/\.(pdf|zip|png|jpg|jpeg|gif)$/i)) return;
        
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

// Dark mode toggle functionality
function initDarkModeToggle() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (!darkModeToggle) return;
  
  // Check for saved preference
  const savedMode = localStorage.getItem('darkMode');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial state
  if (savedMode === 'dark' || (savedMode === null && prefersDarkMode)) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  } else if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    darkModeToggle.checked = false;
  }
  
  // Handle toggle changes
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('darkMode', 'light');
    }
  });
}

// Terminal text effect for command-line elements
function initTerminalEffects() {
  const terminalElements = document.querySelectorAll('.terminal-text');
  
  terminalElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, Math.random() * 50 + 30);
      }
    }
    
    // Start typing effect when element is in viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(element);
  });
  
  // Add blinking cursor to terminal headers
  const terminalHeaders = document.querySelectorAll('.terminal-header');
  terminalHeaders.forEach(header => {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.innerHTML = '&#9608;';
    cursor.style.opacity = '1';
    cursor.style.animation = 'blink 1s step-end infinite';
    header.appendChild(cursor);
  });
}

// Syntax highlighting enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add line numbers to code blocks
  document.querySelectorAll('pre code').forEach((block) => {
    if (!block.classList.contains('language-terminal')) {
      const lines = block.innerHTML.split('\n');
      let numbered = '';
      lines.forEach((line, index) => {
        if (index < lines.length - 1 || line.trim() !== '') {
          numbered += `<span class="line-number">${index + 1}</span>${line}\n`;
        }
      });
      block.innerHTML = numbered;
      block.classList.add('line-numbers');
    }
  });
});

// Add CSS for the cursor blinking animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.cursor {
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
.line-number {
  display: inline-block;
  width: 2em;
  color: #75715e;
  text-align: right;
  margin-right: 1em;
  user-select: none;
}
`;
document.head.appendChild(style);
