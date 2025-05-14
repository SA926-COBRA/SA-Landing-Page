document.addEventListener('DOMContentLoaded', function() {
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
      };
      
      // Check if this is a real environment or a demo
      // In a real environment, you would send this data to a server
      // For demo purposes, we'll just simulate a successful form submission
      
      // Simulate form processing
      formStatus.style.display = 'block';
      formStatus.textContent = 'Sending message...';
      formStatus.className = 'form-status';
      
      setTimeout(() => {
        // Simulate successful form submission
        formStatus.textContent = (document.documentElement.lang === 'es') 
          ? 'Mensaje enviado correctamente. ¡Gracias por contactarnos!' 
          : 'Message sent successfully. Thank you for contacting us!';
        formStatus.className = 'form-status success';
        
        // Reset the form
        contactForm.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      }, 1500);
      
      /* 
      // Real implementation would look like this:
      
      fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        formStatus.textContent = 'Message sent successfully. Thank you for contacting us!';
        formStatus.className = 'form-status success';
        contactForm.reset();
      })
      .catch(error => {
        formStatus.textContent = 'An error occurred. Please try again later.';
        formStatus.className = 'form-status error';
      });
      */
    });
  }
  
  // WhatsApp integration
  const whatsappLinks = document.querySelectorAll('.whatsapp-link, .whatsapp-float');
  
  whatsappLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Track WhatsApp clicks if analytics were implemented
      console.log('WhatsApp clicked');
    });
  });
});