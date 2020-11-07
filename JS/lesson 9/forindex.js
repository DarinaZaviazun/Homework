// - створити функцію яка виводить масив
// function mass(){
//     console.log([1, 2, 3, 4, 5, 6, 7])
// }
// mass()

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню
// функцію.
// let mass2 = []
// function random(){
//     for(let i=1; i < 11; i++)
//         mass2.push(Math.floor(Math.random()*(100 - 1)))
// return mass2;
// }
// function mass(){
//     console.log(random())
// }
//
// mass()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minimum(){
//     let mass3 = [];
//     for(let i=1; i < 10; i++)
//         mass3.push(Math.floor(Math.random()*(100 - 1)))
//     console.log(mass3)
//     if (mass3[0]<mass3[1] && mass3[0]<mass3[2])
//         return mass3[0]
//     if (mass3[1]<mass3[0] && mass3[1]<mass3[2])
//         return mass3[1]
//     if (mass3[2]<mass3[1] && mass3[2]<mass3[0])
//         return mass3[2]
// }
// console.log(minimum())

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maximum() {
//     let mass4 = [];
//     for (let i = 1; i < 4; i++)
//         mass4.push(Math.floor(Math.random()*(100 - 1)))
//     console.log(mass4);
//     if (mass4[0]>mass4[1] && mass4[0]>mass4[2])
//         return mass4[0];
//     if (mass4[1]>mass4[0] && mass4[1]>mass4[2])
//         return mass4[1];
//     if (mass4[2]>mass4[0] && mass4[2]>mass4[1])
//         return mass4[2];
// }
// console.log(maximum())

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function fun1() {
//     let args = [Number.MIN_SAFE_INTEGER]
//     for (let i = 0; i < arguments.length; i++){
//         if (args[0] < arguments[i])
//             args[0] = arguments[i]}
//     console.log(args)
//
//     for (let i = 0; i < arguments.length; i++){
//         if (args[0] > arguments[i])
//             args[0] = arguments[i]}
//     return args
// }
// console.log(fun1(2, 5, 9, 1, 7, 3, 6, 8, 4, 45, 0, 98, 4, 7, 66, -5))

// - створити функцію яка виводить масив
// function mass5(){
//     console.log([92, 66, 63, 36, 48, 34, 60, 82, 87])
// }
// mass5()

// - створити функцію яка повертає найбільше число з масиву
// function mass6() {
//     let a = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (a < arguments[i])
//             a = arguments[i]
//             }
// return a
// }
// console.log(mass6(9, 66, 63, 36, 48, 34, 60, 82, 87))

// - створити функцію яка повертає найменьше число з масив у
// function mass7() {
//     let a = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (a > arguments[i])
//             a = arguments[i]
//             }
// return a
// }
// console.log(mass7(9, 66, 63, 36, 48, 34, 60, 82, 87))

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function mass8() {
//     let a = 0
//     for (let i = 0; i < arguments.length; i++) {
//             a += arguments[i]
//             }
// return a
// }
// console.log(mass8(9, 6, 63, 36, 4, 34, 0, 82, 7))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function mass9() {
//     let a = 0
//     for (let i = 0; i < arguments.length; i++) {
//             a += arguments[i]
//             }
// return (a/arguments.length)
// }
// console.log(mass9(9, 6, 63, 36, 4, 34, 0, 82, 7))

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let mass10 = [1, true, "totosha", 99, -0.8, false, "gogol", "mogol"]
// let number = fun2(mass10)
// console.log(number)
// function fun2(massiv){
//     return massiv.length
// }

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let mass11 = [{name: "Pavel", age: 29}, {name:"Davel", age: 50}, {name: "Oleg", age: 10}]
// let pole = fun3(mass11)
// console.log(pole);
// function fun3(massiv) {
//     let a = 0;
//     for (i of massiv)
//        a += Object.keys(i).length
//     return a
// }

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]
// let summ = summa(arr1, arr2)
// console.log(summ)
// function summa(massiv1, massiv2){
//     let arr3 = []
//     for (let i = 0; i < massiv1.length; i++){
//         let a = massiv1[i] +massiv2[i]
//         arr3.push(a)
//     }
//       return arr3
// }

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let mass12 =[1, "true", 22, true, "kon", 25, "robot", false, {name: "nana", age: 29}]
// let i = 5
// console.log(mass12)
// let nov = fun5(mass12, i)
// console.log(nov)
// function fun5(massiv, a){
//     let arr = massiv[a]
//     massiv[a] = massiv[a+1]
//     massiv[a+1] = arr
//     return massiv
// }

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не
// нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// let mass13 = [0, 5, 0, 8, 0, 6, 7, 4, 0, 88, 2, 6, 0, 47, 6, 0, 9]
// console.log(mass13);
// let a = fun6(mass13)
// console.log(a);
// function fun6(massiv){
//     mass14 =[]
//     for(let i = massiv.length-1; i >= 0; i--) {
//         if (massiv[i] == 0) {
//             mass14.push(massiv[i])
//         }
//         else mass14.unshift(massiv[i])
//     }
//     return mass14
// }

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// let str1 = "Hello owu"
// fun7(str1)
// function fun7(string){
//     let textNode = document.createElement("div")
//     document.body.appendChild(textNode)
//     textNode.textContent = string;
// }

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// fun8("p", "а тут какой-то текст")
// function fun8(){
//     let a = arguments[0]
//     let b = arguments[1]
//     let textNode = document.createElement(a)
//     document.body.appendChild(textNode)
//     textNode.textContent = b;
// }

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список
// цих автомобілів. Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі
// // властивості авто в обному блоці
// let car1 = {model: "Audi", year: 2015, horsepower: 100, color: "blue metallic", owner: false};
// let car2 = {model: "Jeep", year: 2018, horsepower: 120, color: "black", owner: true};
// let car3 = {model: "Nissan", year: 2019, horsepower: 150, color: "grey", owner: false};
// let car4 = {model: "Jiguli", year: 1995, horsepower: 70, color: "yellow", owner: true};
// let car5 = {model: "Tavria", year: 1998, horsepower: 80, color: "white", owner: false};
// let cars = [car1, car2, car3, car4, car5];
// let a = "p"
//
// fun8(cars, a)
// function fun8(massiv, i){
//     for (let j = 0; j < massiv.length; j++){
//     let block = document.createElement(i)
//     document.body.appendChild(block)
//             block.innerText = (j+1) +` model:  ${massiv[j].model}  year:  ${massiv[j].year}
//             horsepower:  ${massiv[j].horsepower}  color:  ${massiv[j].color}  owner:  ${massiv[j].owner}`
//     }
// }

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати
// список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// let car1 = {model: "Audi", year: 2015, horsepower: 100, color: "blue metallic", owner: false};
// let car2 = {model: "Jeep", year: 2018, horsepower: 120, color: "black", owner: true};
// let car3 = {model: "Nissan", year: 2019, horsepower: 150, color: "grey", owner: false};
// let car4 = {model: "Jiguli", year: 1995, horsepower: 70, color: "yellow", owner: true};
// let car5 = {model: "Tavria", year: 1998, horsepower: 80, color: "white", owner: false};
// let cars = [car1, car2, car3, car4, car5];
// let a = "ul"
// fun9(cars, a)
//
// function fun9(massiv, i){
//     for (let j = 0; j < massiv.length; j++){
//     let ul = document.createElement(a)
//         let li1 = document.createElement("li")
//             li1.innerText = `${massiv[j].model}`;
//         let li2 = document.createElement("li")
//             li2.innerText = `${massiv[j].year}`;
//         let li3 = document.createElement("li")
//             li3.innerText = `${massiv[j].horsepower}`;
//         let li4 = document.createElement("li")
//             li4.innerText = `${massiv[j].color}`;
//         let li5 = document.createElement("li")
//             li5.innerText = `${massiv[j].owner}`;
//         ul.appendChild(li1);
//         ul.appendChild(li2);
//         ul.appendChild(li3);
//         ul.appendChild(li4);
//         ul.appendChild(li5);
//         document.body.appendChild(ul)
//     }
//     document.body.appendChild(prob)
// }


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
// let users = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let cities = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine',
//     city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA',
//     city: 'Miami'},];
// function united(array1, array2){
//     let user = JSON.parse(JSON.stringify(users))
//     let city = JSON.parse(JSON.stringify(cities))
//     for (const user of users) {
//         for (const city of cities){
//             if (user.id === city.user_id)
//                 user.address = city
//         }
//     }
// return users;
// }
//
// console.log(united(users, cities))
// //
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========