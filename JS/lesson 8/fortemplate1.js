// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// let elem1 = document.getElementById("content").textContent
// console.log(elem1);
// let elem2 = document.getElementById("rules").textContent
// console.log(elem2);

// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// let elem1 = document.getElementById("content").textContent = "Текст элемента  изменён на этот";
// console.log(elem1);
// let elem2 = document.getElementById("rules").textContent = "Тут тоже заменим текст на какой-нибудь другой"
// console.log(elem2);

// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// let elem1 = document.getElementById("content");
// elem1.style.background = 'red';
// let elem2 =document.getElementById("rules");
// elem2.style.background = 'red';
// let elem3 = document.getElementsByTagName("ul");
// for (let i = 0; i < elem3.length; i++) {
//     elem3[i].style.background = 'red';}
// elem1.style.background = 'blue';
// elem2.style.background = 'blue';
// for (let i = 0; i < elem3.length; i++) {
//     elem3[i].style.background = 'blue';}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let elements = document.getElementById("rules");
// var elementClasses = elements.classList;
// console.log(elementClasses);

// - отримати всі елементи з класом fc_rules
// let elements2 = document.getElementsByClassName("fc_rules");
// console.log(elements2);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let elements2 = document.getElementsByClassName("fc_rules");
// for (let i = 0; i < elements2.length; i++) {
// elements2[i].style.backgroundColor = 'red';}

