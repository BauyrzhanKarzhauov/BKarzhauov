const btn = document.getElementById('btn');
const input = document.getElementById('input');
const select = document.getElementById('select');
const form = document.getElementById('form');
const box = document.getElementById('box');

/* 1. click — клик мышью */
btn.addEventListener('click', () => {
  console.log('click: нажали кнопку');
});

/* 2. dblclick — двойной клик */
btn.addEventListener('dblclick', () => {
  console.log('dblclick: двойной клик');
});

/* 3. input — ввод данных */
input.addEventListener('input', (e) => {
  console.log('input:', e.target.value);
});

/* 4. change — изменение значения */
select.addEventListener('change', (e) => {
  console.log('change:', e.target.value);
});

/* 5. focus — получение фокуса */
input.addEventListener('focus', () => {
  console.log('focus: поле в фокусе');
});

/* 6. blur — потеря фокуса */
input.addEventListener('blur', () => {
  console.log('blur: фокус потерян');
});

/* 7. submit — отправка формы */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit: форма отправлена');
});

/* 8. keydown — нажатие клавиши */
document.addEventListener('keydown', (e) => {
  console.log('keydown:', e.key);
});

/* 9. mouseover — наведение мыши */
box.addEventListener('mouseover', () => {
  console.log('mouseover: курсор над элементом');
});

/* 10. mouseout — уход мыши */
box.addEventListener('mouseout', () => {
  console.log('mouseout: курсор ушёл');
});

/* 11. load — загрузка страницы */
window.addEventListener('load', () => {
  console.log('load: страница загружена');
});

/* 12. scroll — прокрутка */
window.addEventListener('scroll', () => {
  console.log('scroll: прокрутка страницы');
});
