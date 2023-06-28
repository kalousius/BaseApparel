function validateEmail(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.querySelector('.email');
  const emailError = document.getElementById('email-error');

  // Regular expression to check the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value) || !emailInput.value.includes('@')) {
    emailError.textContent = 'Please provide a valid email.';
    emailError.style.color = 'red';
    emailInput.classList.add('error');
  } else {
    // Email format is valid
    emailError.textContent = '';
    emailError.style.color = '';
    emailInput.classList.remove('error');

    // Here you can submit the form or perform further actions
    // For example: form.submit();
  }
}

