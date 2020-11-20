// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let form1 = document.createElement("form");
// let textarea1 = document.createElement("textarea");
// form1.appendChild(textarea1);
// document.body.appendChild(form1);
//
// textarea1.onblur = () =>{
//      localStorage.setItem('text1', textarea1.value);
// }
// textarea1.value =  localStorage.getItem('text1');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let form2 = document.createElement("form");
//
// let textarea2 = document.createElement("textarea");
// let input2 = document.createElement("input");
// let input3 = document.createElement("input");
// let radio2 = document.createElement("input");
// radio2.type = "radio";
// let check2 = document.createElement("input");
// check2.type = "checkbox";
// let check3 = document.createElement("input");
// check3.type = "checkbox";
// let check4 = document.createElement("input");
// check4.type = "checkbox";
//
// input2.placeholder = "Введите имя";
// input3.placeholder = "Введите фамилию";
// textarea2.placeholder = "Опишите вашу проблему";
//
// let ent1 = document.createElement("br");
// let ent2 = document.createElement("br");
// let ent3 = document.createElement("br");
//
// const label2 = document.createElement("label");
// const label3 = document.createElement("label");
// const label4 = document.createElement("label");
// const label5 = document.createElement("label");
// label2.innerText = "Я прочел все правила";
// label3.innerText = "Я все осознаю";
// label4.innerText = "Я достаточно умный";
// label5.innerText = "Опциональный выбор";
// label2.style.marginRight = "15px";
// label3.style.marginRight = "15px";
// label4.style.marginRight = "15px";
// label5.style.marginRight = "15px";
//
// form2.style.width = "200px";
// textarea2.style.width = "200px";
// textarea2.style.padding = "10px";
// input2.style.padding = "10px";
// input3.style.padding = "10px";
// textarea2.style.marginBottom = "10px";
// input2.style.marginBottom = "10px";
// input3.style.marginBottom = "10px";
// form2.appendChild(input2);
// form2.appendChild(input3);
// form2.appendChild(textarea2);
// form2.appendChild(radio2);
// form2.appendChild(label5);
// form2.appendChild(ent1);
// form2.appendChild(check2);
// form2.appendChild(label2);
// form2.appendChild(ent2);
// form2.appendChild(check3);
// form2.appendChild(label3);
// form2.appendChild(ent3);
// form2.appendChild(check4);
// form2.appendChild(label4);
// document.body.appendChild(form2);
//
// input2.value = localStorage.getItem('name');
// input3.value = localStorage.getItem('surname');
// textarea2.value = localStorage.getItem('problem');
// radio2.checked =  JSON.parse(localStorage.getItem('option'));
// check2.checked = JSON.parse(localStorage.getItem('firstcheck'));
// check3.checked = JSON.parse(localStorage.getItem('secondcheck'));
// check4.checked = JSON.parse(localStorage.getItem('thirdcheck'));
//
// form2.onmouseleave = () =>{
//     localStorage.setItem('name', input2.value);
//     localStorage.setItem('surname', input3.value);
//     localStorage.setItem('problem', textarea2.value);
//     if (radio2.checked)
//         localStorage.setItem('option', 'true')
//     if (check2.checked)
//         localStorage.setItem('firstcheck', 'true');
//     if (check3.checked)
//         localStorage.setItem('secondcheck', 'true');
//     if (check4.checked)
//         localStorage.setItem('thirdcheck', 'true');
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем
// поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let form3 = document.createElement("form");
// let textarea3 = document.createElement("textarea");
// let btn3 = document.createElement("button");
// let btn4 = document.createElement("button");
// let btn5 = document.createElement("button");
// form3.style.width = "350px";
// textarea3.style.width = "100%";
// btn3.style.height = "25px";
// btn3.innerText = "Save";
// btn4.style.height = "25px";
// btn4.innerText = "Back";
// btn4.style.visibility = "hidden";
// btn5.style.height = "25px";
// btn5.innerText = "Forward";
// btn5.style.visibility = "hidden";
//
// document.body.appendChild(btn4);
// document.body.appendChild(btn5);
// form3.appendChild(textarea3);
// document.body.appendChild(form3);
// document.body.appendChild(btn3);
//
// let story = [""];
//
// if ((localStorage.getItem("story") && localStorage.getItem("story").length > 1)){
//     let resume = JSON.parse(localStorage.getItem("story"));
//     story = JSON.parse(JSON.stringify(resume));
//     localStorage.setItem("story", JSON.stringify(story));
//     textarea3.value = resume[resume.length - 1];
//
//     functionParse();
// }
//
//
// btn3.onclick = () => {
//
//     story.push(textarea3.value);
//     localStorage.setItem("story", JSON.stringify(story));
//     functionParse();
// }
//
// function functionParse() {
//     btn4.style.visibility = "visible";
//     let history = JSON.parse(localStorage.getItem("story"));
//
//     let u = history.length - 1;
//
//     // кнопка назад
//     btn4.onclick = () => {
//         textarea3.value = history[u - 1];
//         u--;
//         if (u === 0)
//             btn4.style.visibility = "hidden";
//
//         //кнопка вперед
//         btn5.style.visibility = "visible";
//
//         btn5.onclick = () => {
//             textarea3.value = history[u + 1];
//             u++;
//             btn4.style.visibility = "visible";
//             if (u === history.length - 1)
//                 btn5.style.visibility = "hidden";
//         }
//     }
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта
// //
// //
// // ВАРИАНТ 1
// //
// //
// let form4 = document.createElement("form");
//
// let textarea4 = document.createElement("textarea");
// let textarea5 = document.createElement("textarea");
// let textarea6 = document.createElement("textarea");
// let textarea7 = document.createElement("textarea");
// let textarea8 = document.createElement("textarea");
// let textarea9 = document.createElement("textarea");
// textarea4.placeholder = "ФИО";
// textarea5.placeholder = "Номер телефона";
// textarea6.placeholder = "e-mail";
// textarea7.placeholder = "Фирма";
// textarea8.placeholder = "Отдел";
// textarea9.placeholder = "День рождения";
// form4.style.width = "350px";
// textarea4.style.width = "100%";
// textarea5.style.width = "100%";
// textarea6.style.width = "100%";
// textarea7.style.width = "100%";
// textarea8.style.width = "100%";
// textarea9.style.width = "100%";
//
// document.body.appendChild(form4);
// form4.appendChild(textarea4);
// form4.appendChild(textarea5);
// form4.appendChild(textarea6);
// form4.appendChild(textarea7);
// form4.appendChild(textarea8);
// form4.appendChild(textarea9);
//
// let btnSave = document.createElement("button");
// let btnDel = document.createElement("button");
// let btnEdit = document.createElement("button");
// btnSave.innerText = "Сохранить";
// btnDel.innerText = "Удалить контакт";
// btnEdit.innerText = "Сохранить изменения";
// btnDel.style.visibility = "hidden";
// btnEdit.style.visibility = "hidden";
//
// document.body.appendChild(btnSave);
// document.body.appendChild(btnDel);
// document.body.appendChild(btnEdit);
//
// let book = [];
// let newObj = document.createElement("div");
// let Book = document.createElement("p");
// Book.innerText = "Записная книга";
// newObj.appendChild(Book);
// document.body.appendChild(newObj);
//
// btnSave.onclick = () =>{
//     localStorage.setItem('FIO', textarea4.value);
//     localStorage.setItem('telephone', textarea5.value);
//     localStorage.setItem('mail', textarea6.value);
//     localStorage.setItem('firm', textarea7.value);
//     localStorage.setItem('otdel', textarea8.value);
//     localStorage.setItem('birthdaydate', textarea9.value);
//     textarea4.value = '';
//     textarea5.value = '';
//     textarea6.value = '';
//     textarea7.value = '';
//     textarea8.value = '';
//     textarea9.value = '';
//
//     let object = {
//         'FIO': localStorage.getItem('FIO'),
//         'telephone': localStorage.getItem('telephone'),
//         'mail': localStorage.getItem('mail'),
//         'firm': localStorage.getItem('firm'),
//         'otdel': localStorage.getItem('otdel'),
//         'birthdaydate': localStorage.getItem('birthdaydate')
//     }
//     book.push(object)
//
//     let newStr = document.createElement("p");
//     let newBtn = document.createElement("button");
//
//     if (localStorage.getItem('FIO') === "")
//         newBtn.innerText = "Не помню имя";
//     else
//         newBtn.innerText = localStorage.getItem('FIO');
//
//         newStr.appendChild(newBtn);
//         newObj.appendChild(newStr);
//
// newBtn.onclick = () => {
//     textarea4.value = object.FIO;
//     textarea5.value = object.telephone;
//     textarea6.value = object.mail;
//     textarea7.value = object.firm;
//     textarea8.value = object.otdel;
//     textarea9.value = object.birthdaydate;
//     btnDel.style.visibility = "visible";
//     btnEdit.style.visibility = "visible";
//     console.log(book);
//
//     btnDel.onclick = () => {
//         let del = book.indexOf(object);
//         book.splice(del, 1);
//         textarea4.value = '';
//         textarea5.value = '';
//         textarea6.value = '';
//         textarea7.value = '';
//         textarea8.value = '';
//         textarea9.value = '';
//         console.log(book);
//         newBtn.remove();
//         btnDel.style.visibility = "hidden";
//         btnEdit.style.visibility = "hidden";
//     }
//
//     btnEdit.onclick = () =>{
//         object = {
//             'FIO': textarea4.value,
//             'telephone': textarea5.value,
//             'mail': textarea6.value,
//             'firm': textarea7.value,
//             'otdel': textarea8.value,
//             'birthdaydate': textarea9.value
//         }
//         newBtn.innerText = object.FIO;
//         textarea4.value = '';
//         textarea5.value = '';
//         textarea6.value = '';
//         textarea7.value = '';
//         textarea8.value = '';
//         textarea9.value = '';
//         btnDel.style.visibility = "hidden";
//         btnEdit.style.visibility = "hidden";
//     }
// }
// }

// //
// //
// // ВАРИАНТ 2
// //
// //
let form4 = document.createElement("form");
let textarea4 = document.createElement("textarea");
let textarea5 = document.createElement("textarea");
let textarea6 = document.createElement("textarea");
let textarea7 = document.createElement("textarea");
let textarea8 = document.createElement("textarea");
let textarea9 = document.createElement("textarea");
textarea4.placeholder = "ФИО";
textarea5.placeholder = "Номер телефона";
textarea6.placeholder = "e-mail";
textarea7.placeholder = "Фирма";
textarea8.placeholder = "Отдел";
textarea9.placeholder = "День рождения";
form4.style.width = "350px";
textarea4.style.width = "100%";
textarea5.style.width = "100%";
textarea6.style.width = "100%";
textarea7.style.width = "100%";
textarea8.style.width = "100%";
textarea9.style.width = "100%";
document.body.appendChild(form4);
form4.appendChild(textarea4);
form4.appendChild(textarea5);
form4.appendChild(textarea6);
form4.appendChild(textarea7);
form4.appendChild(textarea8);
form4.appendChild(textarea9);
let btnSave = document.createElement("button");
let btnSave2 = document.createElement("button");
btnSave.innerText = "Сохранить";
btnSave2.innerText = "Сохранить изменения";
btnSave2.style.visibility = "hidden";
document.body.appendChild(btnSave);
document.body.appendChild(btnSave2);

let book = [];
let newObj = document.createElement("div");
let Book = document.createElement("p");
Book.innerText = "Записная книга";
newObj.appendChild(Book);
document.body.appendChild(newObj);



function Creation(){
    let object = {'FIO': textarea4.value,
        'Telephone': textarea5.value,
        'Mail': textarea6.value,
        'Firm': textarea7.value,
        'Depart': textarea8.value,
        'Birthday': textarea9.value}

    book.push(object);

    let newStr = document.createElement("p");
    newStr.innerText = `ФИО: ${object.FIO};  Телефон: ${object.Telephone};  Почта: ${object.Mail};  Фирма: ${object.Firm};  Отдел: ${object.Depart};  Дата рождения: ${object.Birthday}`
    newObj.appendChild(newStr);

    let btnDel = document.createElement("button");
    btnDel.innerText = "Удалить контакт";
    btnDel.onclick = Deletion;
    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Редактировать";
    btnEdit.onclick = Edit;

    newStr.appendChild(btnDel)
    newStr.appendChild(btnEdit);
    newObj.appendChild(newStr);

    function Deletion() {

        let c = JSON.parse(localStorage.getItem('BOOK'))
        let b = btnDel.parentNode.childNodes[0].textContent;
        let rez = b.split(": ")[1].split("; ")[0];
        let rez2 = b.split(": ")[2].split("; ")[0];
        for (let a = 0; a < c.length; a++){

            if (c[a].FIO === rez && c[a].Telephone === rez2) {
                c.splice(a, 1);
                localStorage.setItem('BOOK', JSON.stringify(c));
            }
        }
        let bad = btnDel.parentNode;
        bad.parentNode.removeChild(bad);
    }

    function Edit() {

            btnSave.style.visibility = "hidden"
            btnSave2.style.visibility = "visible";

            let c = JSON.parse(localStorage.getItem('BOOK'))
            let b = btnDel.parentNode.childNodes[0].textContent;
            let rez = b.split(": ")[1].split("; ")[0];
            let rez2 = b.split(": ")[2].split("; ")[0];
            for (let a = 0; a < c.length; a++) {
                if (c[a].FIO === rez && c[a].Telephone === rez2) {
                    textarea4.value = c[a].FIO;
                    textarea5.value = c[a].Telephone;
                    textarea6.value = c[a].Mail;
                    textarea7.value = c[a].Firm;
                    textarea8.value = c[a].Depart;
                    textarea9.value = c[a].Birthday;


                    btnSave2.onclick = () => {
                        c[a].FIO = textarea4.value;
                        c[a].Telephone = textarea5.value;
                        c[a].Mail = textarea6.value;
                        c[a].Firm = textarea7.value;
                        c[a].Depart = textarea8.value;
                        c[a].Birthday = textarea9.value;
                        localStorage.setItem('BOOK', JSON.stringify(c));
                        btnSave.style.visibility = "visible";
                        location.reload()
                    }
                }
            }
        }
}

// // нажатие на кнопку save

btnSave.onclick = () => {
    Creation();

    localStorage.setItem('BOOK', JSON.stringify(book));

    textarea4.value = '';
    textarea5.value = '';
    textarea6.value = '';
    textarea7.value = '';
    textarea8.value = '';
    textarea9.value = '';
}


// часть если уже есть сохраненные номера
if (localStorage.getItem('BOOK')){
    let a = JSON.parse(localStorage.getItem('BOOK'));
    for (let one of a) {
        let newStr = document.createElement("p");
        newStr.innerText = `ФИО: ${one.FIO};  Телефон: ${one.Telephone};  Почта: ${one.Mail};  Фирма: ${one.Firm};  Отдел: ${one.Depart};  Дата рождения: ${one.Birthday}`

        let btnDel = document.createElement("button");
        btnDel.innerText = "Удалить контакт";
        btnDel.onclick = Deletion;
        let btnEdit = document.createElement("button");
        btnEdit.innerText = "Редактировать";
        btnEdit.onclick = Edit;

        newStr.appendChild(btnDel)
        newStr.appendChild(btnEdit);
        newObj.appendChild(newStr);

        book.push(one);

        function Deletion() {

            let c = JSON.parse(localStorage.getItem('BOOK'))
            let b = btnDel.parentNode.childNodes[0].textContent;
            let rez = b.split(": ")[1].split("; ")[0];
            let rez2 = b.split(": ")[2].split("; ")[0];
            for (let a = 0; a < c.length; a++){

                if (c[a].FIO === rez && c[a].Telephone === rez2) {
                    c.splice(a, 1);
                    localStorage.setItem('BOOK', JSON.stringify(c));
                }
            }
            let bad = btnDel.parentNode;
            bad.parentNode.removeChild(bad);
        }

        function Edit(){
            btnSave.style.visibility = "hidden"
            btnSave2.style.visibility = "visible";

            let c = JSON.parse(localStorage.getItem('BOOK'))
            let b = btnDel.parentNode.childNodes[0].textContent;
            let rez = b.split(": ")[1].split("; ")[0];
            let rez2 = b.split(": ")[2].split("; ")[0];
            for (let a = 0; a < c.length; a++) {
                if (c[a].FIO === rez && c[a].Telephone === rez2) {
                    textarea4.value = c[a].FIO;
                    textarea5.value = c[a].Telephone;
                    textarea6.value = c[a].Mail;
                    textarea7.value = c[a].Firm;
                    textarea8.value = c[a].Depart;
                    textarea9.value = c[a].Birthday;

                    //c.splice(a, 1)
                    btnSave2.onclick = () => {
                        c[a].FIO = textarea4.value;
                        c[a].Telephone = textarea5.value;
                        c[a].Mail = textarea6.value;
                        c[a].Firm = textarea7.value;
                        c[a].Depart = textarea8.value;
                        c[a].Birthday = textarea9.value;
                        localStorage.setItem('BOOK', JSON.stringify(c));

                        btnSave.style.visibility = "visible";
                        location.reload()
                    }
                }
            }
        }
    }
}












