/*1. Измени код так, чтобы объект parent 
стал прототипом для объекта в переменной сhild.*/

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);
// console.log(child);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

/* 2. Измени код, построив цепочку прототипов так, чтобы объект 
ancestor был прототипом для parent, а тот в свою очередь был 
прототипом для child. */

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;


// console.log(child);

/*3. Объяви функцию-конструктор Car которая принимает три параметра:
brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Функция Car должна создавать объект с одноимёнными свойствами brand, 
model и price, значениями которых должны быть переданные аргументы во 
время её вызова с оператором new. */

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car();

// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));

/*Выполни рефакторинг функции-конструктора Car так, чтобы она принимала 
один параметр - объект со свойсвами brand, model и price. 
Деструктуризируй объект в сигнатуре (подписи) функции. */

function Car({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
const myCar1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
const myCar2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

console.log(myCar);
console.log(myCar1);
console.log(myCar2);