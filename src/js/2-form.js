// Function to track input events and save to local storage
function handleInput(event) {
  // Collect form data from email and message fields
  const formData = {
    email: document.querySelector('input[name="email"]').value.trim(),
    message: document.querySelector('textarea[name="message"]').value.trim(),
  };

  // Save the formData object to local storage under the key "feedback-form-state"
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Function to check local storage state and fill form fields
function loadFormState() {
  // Retrieve stored form data from local storage
  const storedFormData = localStorage.getItem('feedback-form-state');

  // If stored data exists, fill the form fields with the saved values
  if (storedFormData) {
    const formData = JSON.parse(storedFormData);

    // Fill form fields with values from local storage
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

// Function to handle form submission
function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Check if both email and message fields are not empty before submitting
  const emailValue = document.querySelector('input[name="email"]').value.trim();
  const messageValue = document.querySelector('textarea[name="message"]').value.trim();

  if (!emailValue || !messageValue) {
    alert('Please fill in both email and message fields before submitting.');
    return;
  }

  // Clear local storage and reset form fields
  localStorage.removeItem('feedback-form-state');
  document.querySelector('.feedback-form').reset();

  // Log an object with email and message fields and their current values to the console
  const formData = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formData);
}

// Add an input event listener to the form using event delegation
document.querySelector('.feedback-form').addEventListener('input', handleInput);

// Call the loadFormState function when the page is loaded
document.addEventListener('DOMContentLoaded', loadFormState);

// Add a submit event listener to the form
document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);