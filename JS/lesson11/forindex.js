// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// mass1 = [];
// for (let i = 0; i < 20; i++)
//     mass1.push(Math.floor(Math.random()*100))
// console.log(mass1);
// let sort = mass1.sort((a, b) => a - b)
// console.log(sort);
//
// let sort2 = mass1.sort((a, b) => b - a)
// console.log(sort2);
//
// let filter1 = mass1.filter((value) => value%3==0)
// console.log(filter1);
//
// let filter2 = mass1.filter(value => value % 10 == 0)
// console.log(filter2);
//
// mass1.forEach(value => console.log(value))
//
// let map = mass1.map(value => value*3)
// console.log(map);

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 6 символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mass2 = ["Banana", "Apple", "Pomegranate", "Ananas", "Orange", "Mandarin", "Grape", "Blueberry", "Blackberry",
// "Cherry", "Plum", "Strawberry"];
// console.log(mass2);
// // let sort3 = mass2.sort();
// // console.log(sort3);
// // let sort4 = mass2.reverse();
// // console.log(sort4);
// // let filter3 = mass2.filter(
// //     value => value.length > 5
// // )
// // console.log(filter3);
// let map3 = mass2.map(value => value + "!");
// console.log(map3);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];
// console.log(users);
// let cloneusers = JSON.parse(JSON.stringify(users))
// let sort5 = cloneusers.sort((a, b) => a.age - b.age);
// console.log(sort5);
// let sort6 = cloneusers.sort((a, b) => b.age - a.age);
// console.log(sort6);
// let sort6 = cloneusers.sort((a, b) => a.name.length - b.name.length)
// console.log(sort6);
// let sort7 = cloneusers.sort((a, b) => b.name.length - a.name.length)
// console.log(sort7);
// let map5 = cloneusers.map((user) => user.id = user.age + 2)
// console.log(cloneusers);
// let sort6 = cloneusers.sort((a, b) => a.id - b.id)
// console.log(sort6);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// let a = parseInt(prompt("Vvedite pervoe chislo:"));
// let b = prompt("Vvedite operaciju:");
// let c = parseInt(prompt("Vvedite vtoroe chislo:"));
//
// let d = alert(calculate1(a, b, c))
// function calculate1(a, b, c){
//     let result;
//     switch (b) {
//         case '+':
//             result = a + c;
//             break;
//         case '-':
//             result = a - c;
//             break;
//         case '*':
//             result = a * c;
//             break;
//         case '/':
//             if (b) {
//                 result = a / c;
//             } else {
//                 result = 'бесконечность';
//             }
//             break;}
//     return result;
// }

// -- наисать функцию калькулятора с 3мя числами и колбеком
let a = parseInt(prompt("Vvedite pervoe chislo:"));
let b = prompt("Vvedite operaciju:");
let c = parseInt(prompt("Vvedite vtoroe chislo:"));
let d = prompt("Vvedite operaciju:");
let i = parseInt(prompt("Vvedite tretje chislo:"));

let l = alert(calculate1(a, b, c, d, i))

function calculate1(a, b, c, d, i){
    let result;
    if (b == "+")
    result = a + c;
    if (b == "-")
    result = a - c;
    if (b == "*")
    result = a * c;
    if (b == "/")
    result = a / c;
    if (d == "+")
        result = result + i;
    if (d == "-")
        result = result - i;
    if (d == "*")
        result = result * i;
    if (d == "/")
        result = result / i;
    return result;
}



