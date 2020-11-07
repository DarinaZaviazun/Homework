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
//
// for (let i = 0; i < rules.length; i++){
//     let title = rules[i].title;
//     let body = rules[i].body
//     function1(title, body)
// }
//
// function function1 (title, body) {
//     let id1 = document.getElementById("wrap")
//     let title1 = document.createElement("h2");
//     let div1 = document.createElement("div")
//     title1.innerText = title;
//     div1.appendChild(title1)
//     let body1 = document.createElement("p")
//     body1.innerText = body;
//     div1.appendChild(body1)
//     id1.appendChild(div1)
//     document.body.appendChild(id1)
// }


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// let a = prompt("Введите целое число")
//
// console.log(function2(a))
// function function2(a){
//     if (Number.isInteger(Math.log2(a)))
//     return true;
//     return false;
// }


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// let object1 = {
//     name: "Oleg", age: 28, status: true, wife: {
//         name: "Lena", age: 26, status: false,
//         pet: {name: "Juja", age: 3, breed: "dog"}
//     }
// }
// let a = [];
// console.log(function3(object1));
//
// function function3(obj) {
//     for (let item in obj) {
//         if (typeof obj[item] === "object")
//             function3(obj[item])
//         else
//             a.push(item + ": " + obj[item])
//     }
//     return a
// }


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
let massiv = [1,3, ["Hello, World", [9,6,1]], ["oops"], 9] //-> [1, 3, "Hello, World", 9, 6, 1, "oops", 9]]
let a = [];
console.log(function4(massiv));
function function4(mass) {
    for (let item in mass) {
        if (typeof mass[item] === "object")
            function4(mass[item])
        else
            a.push(mass[item])
    }
    return a
}
