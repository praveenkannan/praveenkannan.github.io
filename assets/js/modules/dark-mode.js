/**
 * Dark Mode Module
 * Handles dark/light mode toggle functionality and persistence
 */

export function initDarkMode() {
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

// Add support for system preference changes
export function watchSystemPreference() {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  darkModeMediaQuery.addEventListener('change', (e) => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const savedMode = localStorage.getItem('darkMode');
    
    // Only auto-switch if user hasn't explicitly set a preference
    if (savedMode === null) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        if (darkModeToggle) darkModeToggle.checked = false;
      }
    }
  });
}
