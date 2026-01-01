// 1. Обмен значений переменных без третьей
let a = 5, b = 10;
document.getElementById('swapBtn').addEventListener('click', () => {
  [a,b] = [b,a]; // деструктуризация
  document.getElementById('swapOutput').textContent = `a=${a}, b=${b}`;
});

// 2. Проверка чётного числа
function isEven(num) { return num % 2 === 0; }
document.getElementById('evenBtn').addEventListener('click', () => {
  const num = Number(document.getElementById('evenInput').value);
  document.getElementById('evenOutput').textContent = isEven(num);
});

// 3. Сумма чисел от 1 до N
function sumTo(n) {
  let sum = 0;
  for(let i=1;i<=n;i++) sum+=i; // складываем числа от 1 до n
  return sum;
}
document.getElementById('sumBtn').addEventListener('click', () => {
  const n = Number(document.getElementById('sumInput').value);
  document.getElementById('sumOutput').textContent = sumTo(n);
});

// 4. Переворот строки
function reverseString(str) { return str.split('').reverse().join(''); }
document.getElementById('reverseBtn').addEventListener('click', () => {
  const str = document.getElementById('reverseInput').value;
  document.getElementById('reverseOutput').textContent = reverseString(str);
});

// 5. Фильтрация массива по чётным числам
function filterEven(arr) { return arr.filter(n => n%2===0); }
document.getElementById('filterBtn').addEventListener('click', () => {
  document.getElementById('filterOutput').textContent = filterEven([1,2,3,4,5]);
});

// 6. Конвертер температуры
function celsiusToFahrenheit(c) { return c*9/5+32; }
function fahrenheitToCelsius(f) { return (f-32)*5/9; }
document.getElementById('cToFBtn').addEventListener('click', () => {
  const c = Number(document.getElementById('celsiusInput').value);
  document.getElementById('cToFOutput').textContent = celsiusToFahrenheit(c);
});
document.getElementById('fToCBtn').addEventListener('click', () => {
  const f = Number(document.getElementById('fahrenheitInput').value);
  document.getElementById('fToCOutput').textContent = fahrenheitToCelsius(f);
});

// 7. Проверка строки на палиндром
function isPalindrome(str) {
  const clean = str.replace(/\s+/g,'').toLowerCase(); // убираем пробелы и делаем нижний регистр
  return clean === clean.split('').reverse().join('');
}
document.getElementById('palindromeBtn').addEventListener('click', () => {
  const str = document.getElementById('palindromeInput').value;
  document.getElementById('palindromeOutput').textContent = isPalindrome(str);
});

// 8. Сумма элементов массива
function sumArray(arr){ 
  let sum=0; 
  for(let i=0;i<arr.length;i++) sum+=arr[i]; 
  return sum; 
}
document.getElementById('sumArrayBtn').addEventListener('click', () => {
  document.getElementById('sumArrayOutput').textContent = sumArray([1,2,3,4]);
});

// 9. Самое длинное слово в массиве
function longestWord(words){ 
  let longest=''; 
  for(const w of words) if(w.length>longest.length) longest=w; 
  return longest; 
}
document.getElementById('longestBtn').addEventListener('click', () => {
  document.getElementById('longestOutput').textContent = longestWord(["apple","banana","kiwi"]);
});

// 10. Подсчёт количества свойств объекта
function countProps(obj){ 
  let count=0; 
  for(const key in obj) count++; 
  return count; 
}
document.getElementById('countPropsBtn').addEventListener('click', () => {
  document.getElementById('countPropsOutput').textContent = countProps({a:1,b:2,c:3});
});

// 11. Вывести числа от 1 до N в консоль
function printTo(n){ 
  let i=1; 
  while(i<=n){ 
    console.log(i); 
    i++; 
  } 
}
document.getElementById('printBtn').addEventListener('click', () => {
  const n = Number(document.getElementById('printInput').value);
  printTo(n);
  alert("Проверьте консоль браузера для чисел от 1 до " + n);
});

// 12. Найти число в массиве вручную
function manualFindIndex(arr,value){ 
  for(let i=0;i<arr.length;i++) if(arr[i]===value) return i; 
  return undefined; 
}
document.getElementById('findBtn').addEventListener('click', () => {
  document.getElementById('findOutput').textContent = manualFindIndex([1,2,3],2);
});

