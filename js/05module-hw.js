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

/* 4. Выполни рефакторинг функции-конструктора Car так, чтобы она принимала 
один параметр - объект со свойсвами brand, model и price. 
Деструктуризируй объект в сигнатуре (подписи) функции. */

// function Car({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const myCar1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const myCar2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(myCar);
// console.log(myCar1);
// console.log(myCar2);

/*5. Добавь в свойство prototype функции-конструктора Car два метода:
getPrice() - возвращает значение свойства price из объекта который 
его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта 
который его будет вызывать на newPrice. */

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function(){
//   return this.price;
// }

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(myCar.getPrice());
// myCar.changePrice(35000);
// console.log(myCar.getPrice());

/*6. С помощью Function Declaration напиши функцию-конструктор Storage, 
которая будет создавать объекты для управления складом товаров. 
Функция ожидает только один аргумент - начальный массив товаров, 
который записывается на создаваемый объект в свойство items.
Добавь методы на прототип:
getItems() - возвращает массив текущих товаров в свойстве items объекта, 
который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его 
в массив товаров в свойстве items объекта, который вызывает этот метод.
removeItem(item) - принимает товар item и удаляет его из массива товаров 
в свойстве items объекта, который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
в той последовательности, в которой твой код будут проверять тесты. 
Пожалуйста ничего там не меняй. */

// function Storage(items) {
//   [
//     this.items = items,
//   ]
// }
// Storage.prototype.getItems = function (){
//   return this.items;
// }
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// }

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
//   return this.items;
// }


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]