// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
// let div1 = document.createElement("div");
// document.body.appendChild(div1);
// div1.textContent = "";
//
// function printer(string){
//     setTimeout(() => {
//         if (string.length > 0){
//         div1.textContent += string[0];
//         printer(string.slice(1))
//         }
//     }, Math.random()*1000)
// }
//
// printer("Hello world this is Dasha")

// доп таска:
//     отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов
//
// let array = [4, 1, 3, 2, 5];
// let array2 = [];
//
// for (let a of array){
//     setTimeout(() =>{
//         array2.push(a)
//     }, a)
// }
//
// setTimeout(() => {
//     console.log(array2)
// }, 1000)

// Знайти найбільший існуючий поліндром який може утворитися завдяки добутку двох простих пятизначних чисел.

let arr =[]

findNumb:
    for (let i = 10000; i <= 99999; i++) { // Для всех i
        for (let j = 2; j < i; j++) { // проверить, делится ли число
            if (i % j === 0) continue findNumb; // не подходит, берём следующее
        }
        arr.push(i)
    }

console.log("Нашли массив простых чисел...");

let a;
let b;
let arr2 = [];

for (a = 0; a < arr.length; a++){
    for (b = 1; b < arr.length; b++){

        let c = arr[a] * arr[b];
        let c1 = (c + '').split('');
        if (c1[0] === c1[c1.length-1] && c1[1] === c1[c1.length-2] && c1[2] === c1[c1.length-3] && c1[3] === c1[c1.length-4] && c1[4] === c1[c1.length-5]){
            arr2.push({A: arr[a], B: arr[b], Palindrom: c});
        }
    }
}
console.log("Нашли массив палиндромов...");

let rezult = arr2[0];

for (let a = 1; a < arr2.length; a++){
    if (rezult.Palindrom < arr2[a].Palindrom){
        rezult = arr2[a];
    }
}
console.log("Самый большой палиндром:");
console.log(rezult)