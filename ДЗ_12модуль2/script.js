// 1) Создаем переменные разных типов

let myString = "Доброго времени суток!";          // строка
let myNumber = 42;                       // число
let myBoolean = true;                    // булевая
let myArray = [1, 2, 3, 4, 5];          // массив
let myObject = { name: "Бауыржан", age: 42 }; // объект

// 2) Сохраняем переменные в localStorage

localStorage.setItem("myString", myString);
localStorage.setItem("myNumber", myNumber.toString());
localStorage.setItem("myBoolean", myBoolean.toString());
localStorage.setItem("myArray", JSON.stringify(myArray));
localStorage.setItem("myObject", JSON.stringify(myObject));

// 3) Получаем переменные обратно из localStorage

let restoredString = localStorage.getItem("myString");               // строка
let restoredNumber = Number(localStorage.getItem("myNumber"));       // число
let restoredBoolean = localStorage.getItem("myBoolean") === "true";  // булевая
let restoredArray = JSON.parse(localStorage.getItem("myArray"));     // массив
let restoredObject = JSON.parse(localStorage.getItem("myObject"));   // объект

//  Выводим результат в консоль

console.log("Строка:", restoredString);
console.log("Число:", restoredNumber);
console.log("Булевая:", restoredBoolean);
console.log("Массив:", restoredArray);
console.log("Объект:", restoredObject);


