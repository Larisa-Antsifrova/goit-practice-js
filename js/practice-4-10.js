// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і
// запропонує користувачу вгадати його Користувач вводить свій
// варіант і отримує результат(Виграв чи ні) Вивести результат
// в форматі "Вітаю ви вгадали число (тут варіант компютера)"
// або "Ви програли, компютер загадав (тут варіант компютера)"

// const userNumber = prompt(
//   "Try to guess the computer's mind! Enter the number from 1 to 0"
// );
// const computerNumber = Math.floor(Math.random() * 10 + 1);

// console.log(typeof userNumber);
// console.log(typeof computerNumber);

// if (userNumber === null) {
//   console.log("Okay! See you next time!");
// } else {
//   if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
//     console.log("Check your number! You should enter a number from 1 to 10.");
//   } else if (+userNumber === computerNumber) {
//     console.log(`Congrats! You've guessed the number ${computerNumber}`);
//   } else {
//     console.log(
//       `Sorry, you've lost! The computer's number is ${computerNumber}`
//     );
//   }
// }

// Module 2
// task 1

// // == task-1 == //
// Написати ф-ю capitalize яка буде приймати строку
// і буде вертати нову строку де кожне слово буде
// починатися з великої літери.

// const capitalize = function (string) {
//   console.log(string);
//   const array = string.split(" ");
//   console.log(array);

//   let capitalizedArray = [];
//   for (const word of array) {
//     let capitalizedWords = word[0].toUpperCase() + word.slice(1);
//     capitalizedArray.push(capitalizedWords);
//   }
//   console.log(capitalizedArray);

//   let result = capitalizedArray.join(" ");
//   return result;
// };

// console.log(capitalize("the quick brown fox")); // 'The Quick Brown Fox '

// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і
// буде вертати кількість голосних літер.aeiouAEIOU -
// рядок з голосними в англ алфавіті

// const countVowels = function (string) {
//   let vowels = "aeiouAEIOU";
//   let total = 0;

//   for (let letter of string) {
//     if (vowels.includes(letter)) {
//       total += 1;
//     }
//   }

//   return total;
// };

// console.log(countVowels("The quick brown fox.")); // 5
// console.log(countVowels("Lemons live on the lemon trees. Don't disturb them.")); //14
