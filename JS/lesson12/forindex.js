// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".
// let a = document.createElement("div")
// document.body.appendChild(a).innerText = "ELEMENT TO DISAPPEAR IS HERE"
// a.id = "text"
// let b = document.createElement("button")
// document.body.appendChild(b).innerText = "click"
// b.style.height = "20px";
// b.style.width = "50px";
// b.style.margin = "15px";
// b.onclick = function() {
//     a.hidden = true;
// };

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let b = document.createElement("button")
// document.body.appendChild(b).innerText = "click"
// b.style.height = "20px";
// b.style.width = "50px";
// b.style.margin = "15px";
// b.onclick = function() {
//     b.style.visibility = "hidden";
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input');
// document.body.appendChild(input);
// input.id = "getage";
// input.placeholder = "Введите возраст"
//
// let button = document.createElement("button")
// document.body.appendChild(button).innerText = "Подтвердить"
// button.style.height = "20px";
// button.style.width = "100px";
// button.style.margin = "15px";
// button.onclick = function() {
//     let age = document.getElementById('getage').value;
//     console.log(age);
//     if (age < 18)
//         alert("Вам нельзя на сайт!")
// };

// - Создайте меню, которое раскрывается/сворачивается при клике
// let a = document.getElementById("control")
// let b = document.getElementsByClassName("hid")
// a.style.cursor = "pointer";
// let k = 0;
// a.onclick = function() {
//
//     if (k%2 === 0){
//         for (let i = 0; i < b.length; i++)
//         b[i].style.visibility = "hidden";
//         k++;
//         console.log(k);
//     }
//     else{
//         for (let i = 0; i < b.length; i++)
//         b[i].style.visibility = "visible";
//         k++;
//         console.log(k);
//     }
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title : 'comment1', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// {title : 'comment2', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// {title : 'comment3', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// {title : 'comment4', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// {title : 'comment5', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// {title : 'comment6', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// {title : 'comment7', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
// ];
//
// let content = document.getElementById("content");
// for (let a of comments){
//     let b = document.createElement("div");
//     content.appendChild(b);
//     let c = document.createElement("h2");
//     c.innerText = a.title
//     b.appendChild(c);
//     let d = document.createElement("p");
//     d.innerText = a.body
//     b.appendChild(d);
//
//     let btn = document.createElement("button");
//     btn.innerText = "скрыть текст"
//     btn.style.height = "20px";
//     btn.style.width = "100px";
//     let flag = false;
//     btn.onclick = () => {
//         if (flag){
//             d.style.display = "block";
//             flag = false}
//         else{
//             d.style.display = "none";
//             flag = true;
//         }
//     };
//     content.appendChild(btn);
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.createElement("form");
// let form2 = document.createElement("form");
// document.body.appendChild(form1);
// document.body.appendChild(form2);
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let input4 = document.createElement('input');
// form1.appendChild(input1);
// form1.appendChild(input2);
// form2.appendChild(input3);
// form2.appendChild(input4);
// form1.style.margin = "10px";
// form2.style.margin = "10px";
// input1.style.margin = "10px";
// input2.style.margin = "10px";
// input3.style.margin = "10px";
// input4.style.margin = "10px";
// input1.placeholder = "Введите имя";
// input2.placeholder = "Введите фамилию";
// input3.placeholder = "Введите возраст";
// input4.placeholder = "Введите id";
// let btn = document.createElement("button");
// btn.innerText = "Submit";
// document.body.appendChild(btn);
// btn.onclick = () => {
//     console.log(`имя: ${input1.value}, фамилия: ${input2.value}, возраст: ${input3.value}, id: ${input4.value}`);
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// function createTable(row1, column1, teg1){
//     let teg = document.createElement(teg1);
//     let table = document.createElement("table");
//
//     for (let i = 1; i <= row1; i++){
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//
//         for (let j = 1; j <= column1; j++){
//             let td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerText = `ячейка ${j} столбик * ${i} ряд`;
//             td.style.border = "1px solid black";
//             td.style.padding = "7px";
//         }
//         table.style.borderCollapse= "collapse";
//     }
//     teg.appendChild(table);
//     document.body.appendChild(teg);
// }
//
// createTable(5, 3, "p");

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// function createTable(row1, column1, teg1){
//     let teg = document.createElement(teg1);
//     let table = document.createElement("table");
//
//     for (let i = 1; i <= row1; i++){
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//
//         for (let j = 1; j <= column1; j++){
//             let td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerText = `ячейка ${j} столбик * ${i} ряд`;
//             td.style.border = "1px solid black";
//             td.style.padding = "7px";
//         }
//         table.style.borderCollapse= "collapse";
//     }
//     teg.appendChild(table);
//     document.body.appendChild(teg);
// }
//
// let form1 = document.createElement("form");
// document.body.appendChild(form1);
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// form1.appendChild(input1);
// form1.appendChild(input2);
// form1.appendChild(input3);
// input1.style.margin = "10px";
// input2.style.margin = "10px";
// input3.style.margin = "10px";
// input1.placeholder = "Введите кол-во столбцов";
// input2.placeholder = "Введите кол-во рядов";
// input3.placeholder = "Введите тег";
// let btn = document.createElement("button");
// btn.innerText = "Создать таблицу";
// document.body.appendChild(btn);
// btn.onclick = () => {
//     createTable(input1.value, input2.value, input3.value);
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgmass = [
//     {id: 1,
//         img_url: "images/1.jpg"},
//     {id: 2,
//         img_url: "images/2.jpg"},
//     {id: 3,
//         img_url: "images/3.jpg"},
//     {id: 4,
//         img_url: "images/4.jpg"},
//     {id: 5,
//         img_url: "images/5.jpg"},
// ];
// const content = document.getElementById("content");
// const img = document.createElement("img");
// img.style.width = "300px";
// img.src = imgmass[0].img_url;
// content.appendChild(img);
//
// let roll = 0;
//
// let leftarrow = document.createElement("img");
// leftarrow.style.width = "60px";
// leftarrow.src = "images/leftarrow.jpg";
// document.body.appendChild(leftarrow);
//
// let rightarrow = document.createElement("img");
// rightarrow.style.width = "60px";
// rightarrow.style.marginLeft = "15px";
// rightarrow.src = "images/rightarrow.jpg";
// document.body.appendChild(rightarrow);
//
// rightarrow.onclick = function rightarrowClick(){
//     if (roll < imgmass.length - 1){
//         roll++;
//         img.src = imgmass[roll].img_url;
//     }
//     else{
//         roll = 0;
//         img.src = imgmass[roll].img_url;
//     }
// }
//
// leftarrow.onclick = function leftarrowClick(){
//     if (roll > 0){
//         roll--;
//         img.src = imgmass[roll].img_url;
//     }
//     else{
//         roll = imgmass.length - 1;
//         img.src = imgmass[roll].img_url;
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let cenzor = ["лох", "пидр", "гавно", "жопа", "дебил"];
// let input = document.createElement("input");
// document.body.appendChild(input);
//
// let button = document.createElement("button")
// document.body.appendChild(button).innerText = "Подтвердить"
// button.style.height = "20px";
// button.style.width = "100px";
// button.style.margin = "15px";
// button.onclick = function() {
//     let vvod = input.value;
//     console.log(vvod);
//     for (let i of cenzor) {
//         if (vvod === i)
//             alert("не ругаться матом!");
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let cenzor = ["лох", "пидр", "гавно", "жопа", "дебил"];
// let input = document.createElement("input");
// document.body.appendChild(input);
// console.log(input.value);
//
// let button = document.createElement("button")
// document.body.appendChild(button).innerText = "Подтвердить"
// button.style.height = "20px";
// button.style.width = "100px";
// button.style.margin = "15px";
// button.onclick = function() {
//     let vvod = input.value.split(" ");
//     console.log(vvod);
//     for (let j of vvod){
//         for (let i of cenzor) {
//             if (j === i)
//                 alert("не ругаться матом!");
//         }
//     }
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let a = document.getElementsByTagName("h2");
// let b = document.createElement("div");
//
// for (let i = 0; i < a.length; i++){
//     let c = document.createElement("p");
//     c.innerText = a[i].innerText;
//     b.appendChild(c);
//     c.style.cursor = "pointer";
//     c.style.textDecoration = "underline";
//     c.style.color = "red";
//     c.style.float = "left";
//     c.onclick = () => {
//         a[i].scrollIntoView({block: "center", behavior: "smooth"})
//     }
// }
// document.body.appendChild(b);

// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let a = document.createElement("form");
let raz = document.createElement("input");
let dva = document.createElement("input");
let tri = document.createElement("input");

raz.setAttribute("type", "checkbox");
dva.setAttribute("type", "checkbox");
tri.setAttribute("type", "checkbox");

const label1 = document.createElement("label");
const label2 = document.createElement("label");
const label3 = document.createElement("label");

label1.innerText = "со статусом false";
label2.innerText = "старше 29 лет включительно";
label3.innerText = "город Киев";
label1.style.marginRight = "15px";
label2.style.marginRight = "15px";
label3.style.marginRight = "15px";

document.body.appendChild(a);
a.appendChild(raz);
a.appendChild(label1);
a.appendChild(dva);
a.appendChild(label2);
a.appendChild(tri);
a.appendChild(label3);

let button = document.createElement("button");
button.innerText = "Check!";
document.body.appendChild(button);

let new1 = document.createElement("div");
document.body.appendChild(new1);
for (let f of usersWithAddress){
    let vyvod = document.createElement("p");
    vyvod.textContent = JSON.stringify(f);
    vyvod.className = "vyvod1";
    new1.appendChild(vyvod);
    }


button.onclick = function fun() {
let array = JSON.parse(JSON.stringify(usersWithAddress));

    if (raz.checked){
        array = array.filter(value => !value.status)
    }

    if (dva.checked) {
        array = array.filter(value => value.age >= 29);
    }
    if (tri.checked){
        array = array.filter(value => value.address.city === "Kyiv");
    }
    new1.innerHTML = '';
    for (let f of array){
        let vyvod = document.createElement("p");
        vyvod.textContent = JSON.stringify(f);
        new1.appendChild(vyvod);
    }
}



