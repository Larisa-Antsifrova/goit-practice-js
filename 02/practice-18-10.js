// =================== Practice 18 October, 2020 ===================

// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і
// обєкт з цінами товару) Ця ф - я має повернути ціну замовлення
const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };

const toGetPrice = (prices, order) => {
  let sum = 0;

  for (const key in prices) {
    for (const product in order) {
      if (product === key) {
        sum += prices[key] * order[product];
      }
    }
  }

  return sum;
};

// console.log(toGetPrice(productsPrice, orderA));
// console.log(toGetPrice(productsPrice, orderB));

// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні.
// Якщо обєкт пустий то повернути true інакше false

// function isObjectEmpty(object) {
//   return !Object.keys(object).length > 0;
// }
// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ name: "user, age: 21" })); //false
