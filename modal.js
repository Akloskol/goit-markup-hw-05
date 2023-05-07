const modalBackground = document.querySelector('.modal-background');
const modalToggle = document.querySelectorAll('[data-modal]');

function toggleModal() {
  modalBackground.classList.toggle('is-hidden');
}

modalToggle.forEach(toggle => {
  toggle.addEventListener('click', toggleModal);
});