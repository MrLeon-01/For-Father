const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const messageButton = document.getElementById('messageButton');
const hiddenMessage = document.getElementById('hiddenMessage');

messageButton.addEventListener('click', () => {
  const isOpen = hiddenMessage.classList.toggle('show');
  messageButton.innerHTML = isOpen
    ? 'Спрятать послание <span>↑</span>'
    : 'Открыть последнее послание <span>♥</span>';

  if (isOpen) {
    hiddenMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
