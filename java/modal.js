const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.close-modal');

function openModal() {
  modal.classList.remove('is-hidden');
}

function closeModal() {
  modal.classList.add('is-hidden');
}

// Відкрити модальне вікно при кліку на елемент з id="open-modal"
document.querySelector('#open-modal').addEventListener('click', openModal);

// Закрити модальне вікно при кліку на кнопку "Закрити"
closeModalButton.addEventListener('click', closeModal);