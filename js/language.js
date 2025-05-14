document.addEventListener('DOMContentLoaded', function() {
  // Language switcher functionality
  const languageToggle = document.getElementById('language-toggle');
  const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
  const languageSwitchers = document.querySelectorAll('.language-switcher a');
  
  // Store all translatable elements
  const translatableElements = document.querySelectorAll('[data-en][data-es]');
  
  // Function to switch language
  function switchLanguage(lang) {
    // Update language toggles
    languageSwitchers.forEach(switcher => {
      if (switcher.getAttribute('data-lang') === lang) {
        switcher.classList.add('active');
      } else {
        switcher.classList.remove('active');
      }
    });
    
    // Update all translatable elements
    translatableElements.forEach(element => {
      element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Store selected language in local storage
    localStorage.setItem('preferredLanguage', lang);
  }
  
  // Add click event to all language switchers
  languageSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
  
  // Check for stored language preference
  const storedLanguage = localStorage.getItem('preferredLanguage');
  if (storedLanguage) {
    switchLanguage(storedLanguage);
  } else {
    // Default to English if no preference stored
    switchLanguage('en');
  }
});