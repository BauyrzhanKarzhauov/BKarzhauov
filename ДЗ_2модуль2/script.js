const form = document.getElementById('form');

// При изменении любого элемента формы
form.addEventListener('input', function (event) {
  console.log(
    event.target.name + ':',
    event.target.value
  );
});

// При отправке формы
form.addEventListener('submit', function (event) {
  event.preventDefault(); // отменяем перезагрузку страницы

  const formObject = {};

  for (let element of form.elements) {
    if (element.name) {
      formObject[element.name] = element.value;
    }
  }

  console.log('Вся форма как объект:', formObject);
});
