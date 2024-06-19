// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      submitContactForm();
    });
  });
  
  function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate an API call to submit the form data
    setTimeout(() => {
      const contactResponse = document.getElementById('contact-response');
      contactResponse.textContent = 'Thank you for your message. We will get back to you shortly.';
      contactResponse.classList.add('alert', 'alert-success');
  
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, 1000); // Simulate network delay
  }