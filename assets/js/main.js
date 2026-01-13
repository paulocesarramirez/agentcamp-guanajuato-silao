/**
 * AgentCamp Guanajuato 2026 - Main JavaScript
 * Handles dark mode toggle and language switching
 */

(function () {
  'use strict';

  // ========================================
  // DARK MODE FUNCTIONALITY
  // ========================================

  /**
   * Initialize dark mode based on user preference or system setting
   */
  function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply saved theme or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      updateDarkModeButton(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      updateDarkModeButton(false);
    }
  }

  /**
   * Toggle dark mode on/off
   */
  function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeButton(newTheme === 'dark');
  }

  /**
   * Update dark mode button icon/state
   */
  function updateDarkModeButton(isDark) {
    const button = document.getElementById('dark-mode-toggle');
    if (button) {
      const icon = button.querySelector('.toggle-icon');
      if (icon) {
        // When in dark mode, show sun (to switch to light); when in light mode, show moon (to switch to dark)
        icon.textContent = isDark ? '🌙' : '☀️';
      }
      button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }
  }

  // ========================================
  // LANGUAGE TOGGLE FUNCTIONALITY
  // ========================================

  /**
   * Toggle between Spanish and English versions
   */
  function toggleLanguage() {
    const currentPath = window.location.pathname;
    const baseUrl = window.location.origin;
    // Get base path from meta tag or default to empty string
    const basePath = document.querySelector('meta[name="baseurl"]')?.content || '';

    // Page mappings: Spanish -> English
    const pageMap = {
      '/galeria.html': '/en/gallery.html',
      '/perfiles/creadores/': '/en/profiles/creators/',
      '/perfiles/aceleradores/': '/en/profiles/accelerators/',
      '/logistica.html': '/en/logistics.html',
      '/recursos.html': '/en/resources.html',
      '/agenda.html': '/en/agenda.html',
      '/speakers.html': '/en/speakers.html'
    };

    let newPath;

    // Check if we're on an English page
    if (currentPath.includes('/en/')) {
      // Switch to Spanish - reverse mapping
      newPath = currentPath.replace('/en/gallery.html', '/galeria.html')
        .replace('/en/profiles/creators/', '/perfiles/creadores/')
        .replace('/en/profiles/accelerators/', '/perfiles/aceleradores/')
        .replace('/en/logistics.html', '/logistica.html')
        .replace('/en/resources.html', '/recursos.html')
        .replace('/en/agenda.html', '/agenda.html')
        .replace('/en/speakers.html', '/speakers.html')
        .replace('/en/', '/');

      // Clean up the base path
      if (basePath) {
        newPath = newPath.replace(basePath, '');
        newPath = basePath + newPath;
      }
    } else {
      // Switch to English
      if (currentPath === basePath + '/' || currentPath === basePath || currentPath === '/' || currentPath.endsWith('index.html')) {
        newPath = basePath + '/en/';
      } else {
        // Try to find English equivalent using mapping
        let mapped = false;
        const pathWithoutBase = currentPath.replace(basePath, '');

        for (const [spanish, english] of Object.entries(pageMap)) {
          if (pathWithoutBase === spanish || pathWithoutBase.endsWith(spanish)) {
            newPath = basePath + english;
            mapped = true;
            break;
          }
        }

        // If no mapping found, default to English home
        if (!mapped) {
          newPath = basePath + '/en/';
        }
      }
    }

    window.location.href = newPath;
  }

  /**
   * Update language toggle button text based on current language
   */
  function updateLanguageButton() {
    const button = document.getElementById('language-toggle');
    if (button) {
      const currentPath = window.location.pathname;
      const isEnglish = currentPath.includes('/en/');
      // When in English, show ES (to switch to Spanish); when in Spanish, show EN (to switch to English)
      button.textContent = isEnglish ? 'ES' : 'EN';
      button.setAttribute('aria-label', isEnglish ? 'Switch to Spanish' : 'Cambiar a inglés');
    }
  }

  // ========================================
  // INITIALIZATION
  // ========================================

  /**
   * Set up event listeners when DOM is ready
   */
  function init() {
    // Initialize dark mode
    initDarkMode();

    // Set up dark mode toggle button
    const darkModeButton = document.getElementById('dark-mode-toggle');
    if (darkModeButton) {
      darkModeButton.addEventListener('click', toggleDarkMode);
    }

    // Set up language toggle button
    const languageButton = document.getElementById('language-toggle');
    if (languageButton) {
      languageButton.addEventListener('click', toggleLanguage);
      updateLanguageButton();
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateDarkModeButton(e.matches);
      }
    });
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
