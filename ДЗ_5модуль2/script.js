const openBtn = document.getElementById('open');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

// открыть модалку
openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

// закрыть по клику на оверлей
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// запретить закрытие при клике внутри окна
modal.addEventListener('click', (event) => {
  event.stopPropagation();
});
