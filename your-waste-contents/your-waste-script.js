function highlightForm() {
  const form = document.getElementById('contact-form');
  form.scrollIntoView({ behavior: 'smooth' });
  form.classList.add('highlight');

  setTimeout(() => {
    form.classList.remove('highlight');
  }, 2000); // remove the highlight after 2s
}