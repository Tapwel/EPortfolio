// Simple interaction for project modal popup
document.querySelectorAll('.project img').forEach(img => {
  img.addEventListener('click', () => {
    alert('You clicked on a project image!');
  });
});

// Basic form validation (enhanced user feedback)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('All fields are required.');
    e.preventDefault();
  }
});
