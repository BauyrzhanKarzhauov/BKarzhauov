document.getElementById('run').addEventListener('click', () => {

  const numbers = [1, 2, 3, 4, 5];
  const fruits = ['apple', 'banana', 'orange'];

  // 1. push() — добавляет элемент в конец массива
  fruits.push('pear');
  console.log('push:', fruits);

  // 2. pop() — удаляет последний элемент
  fruits.pop();
  console.log('pop:', fruits);

  // 3. shift() — удаляет первый элемент
  fruits.shift();
  console.log('shift:', fruits);

  // 4. unshift() — добавляет элемент в начало
  fruits.unshift('apple');
  console.log('unshift:', fruits);

  // 5. map() — преобразует каждый элемент
  const doubled = numbers.map(n => n * 2);
  console.log('map:', doubled);

  // 6. filter() — фильтрация по условию
  const even = numbers.filter(n => n % 2 === 0);
  console.log('filter:', even);

  // 7. reduce() — сводит массив к одному значению
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  console.log('reduce:', sum);

  // 8. forEach() — выполняет действие для каждого элемента
  numbers.forEach(n => console.log('forEach:', n));

  // 9. find() — находит первый подходящий элемент
  const found = numbers.find(n => n > 3);
  console.log('find:', found);

  // 10. includes() — проверяет наличие элемента
  console.log('includes:', numbers.includes(3));

  // 11. slice() — копия части массива
  console.log('slice:', numbers.slice(1, 4));

  // 12. concat() — объединяет массивы
  console.log('concat:', numbers.concat([6, 7]));
});
