//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// function Teg(name, description, attributes) {
//     this.name = name;
//     this.description = description;
//     this.attributes = attributes;
// }
//
// let name = "<a>";
// let description = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.";
// let attributes = [{href: "задает адрес документа, на который следует перейти."},
//     {rel: "отношения между ссылаемым и текущим документами"},
//     {title: "добавляет всплывающую подсказку к тексту ссылки."}]
// let a = new Teg(name, description, attributes)
// console.log(a)
//
// let name1 = "<div>";
// let description1 = "Тег <div> является блочным элементом и предназначен для выделения фрагмента документа " +
//     "с целью изменения вида содержимого.";
// let attributes1 = [{align: "Задает выравнивание содержимого тега <div>"},
//     {title: "Добавляет всплывающую подсказку к содержимому"}]
// let div = new Teg(name1, description1, attributes1)
// console.log(div)
// //
// let name2 = "<h1>";
// let description2 = "Тег <h1> представляет собой наиболее важный заголовок первого уровня, отображается " +
//     "самым крупным шрифтом жирного начертания";
// let attributes2 = [{align: "Определяет выравнивание заголовка."}]
// let h1 = new Teg(name2, description2, attributes2)
// console.log(h1)
// //
// let name3 = "<span>";
// let description3 = "Тег <span> предназначен для определения строчных элементов документа.";
// let attributes3 = [{class: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//                     {id: "Указывает имя стилевого идентификатора."},
//                     {title: "Описывает содержимое элемента в виде всплывающей подсказки."}]
// let span = new Teg(name3, description3, attributes3)
// console.log(span)
// //
// let name4 = "<input>";
// let description4 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать " +
//     "разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let attributes4 = [{accept: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
// {disabled: "Блокирует доступ и изменение элемента."},
// {maxlength: "Максимальное количество символов разрешенных в тексте."}]
// let input = new Teg(name4, description4, attributes4)
// console.log(input)
// //
// let name5 = "<form>";
// let description5 = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена" +
//     " данными между пользователем и сервером.";
// let attributes5 = [{accept_charset: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
//     {enctype: "Способ кодирования данных формы."},
//     {method: "Метод протокола HTTP."}]
// let form = new Teg(name5, description5, attributes5)
// console.log(form)
// //
// let name6 = "<option>";
// let description6 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ";
// let attributes6 = [{disabled: "Заблокировать для доступа элемент списка."},
// {selected: "Заранее устанавливает определенный пункт списка выделенным."},
// {value: "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."}]
// let option = new Teg(name6, description6, attributes6)
// console.log(option)
// //
// let name7 = "<select>";
// let description7 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, " +
//     "а также список с одним или множественным выбором";
// let attributes7 = [{autofocus: "Устанавливает, что список получает фокус после загрузки страницы."},
// {form: "Связывает список с формой."},
// {required: "Список обязателен для выбора перед отправкой формы."}]
// let select = new Teg(name7, description7, attributes7)
// console.log(select)

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Teg{
//     constructor(name, description, attributes) {
//         this.name = name;
//         this.description = description;
//         this.attributes = attributes;
//     }
// }
// let name = "<a>";
// let description = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.";
// let attributes = [{href: "задает адрес документа, на который следует перейти."},
//     {rel: "отношения между ссылаемым и текущим документами"},
//     {title: "добавляет всплывающую подсказку к тексту ссылки."}]
// let a = new Teg(name, description, attributes)
// console.log(a)
// //
// let name1 = "<div>";
// let description1 = "Тег <div> является блочным элементом и предназначен для выделения фрагмента документа " +
//     "с целью изменения вида содержимого.";
// let attributes1 = [{align: "Задает выравнивание содержимого тега <div>"},
//     {title: "Добавляет всплывающую подсказку к содержимому"}]
// let div = new Teg(name1, description1, attributes1)
// console.log(div)
// //
// let name2 = "<h1>";
// let description2 = "Тег <h1> представляет собой наиболее важный заголовок первого уровня, отображается " +
//     "самым крупным шрифтом жирного начертания";
// let attributes2 = [{align: "Определяет выравнивание заголовка."}]
// let h1 = new Teg(name2, description2, attributes2)
// console.log(h1)
// //
// let name3 = "<span>";
// let description3 = "Тег <span> предназначен для определения строчных элементов документа.";
// let attributes3 = [{class: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//     {id: "Указывает имя стилевого идентификатора."},
//     {title: "Описывает содержимое элемента в виде всплывающей подсказки."}]
// let span = new Teg(name3, description3, attributes3)
// console.log(span)
// //
// let name4 = "<input>";
// let description4 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать " +
//     "разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let attributes4 = [{accept: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//     {disabled: "Блокирует доступ и изменение элемента."},
//     {maxlength: "Максимальное количество символов разрешенных в тексте."}]
// let input = new Teg(name4, description4, attributes4)
// console.log(input)
// //
// let name5 = "<form>";
// let description5 = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена" +
//     " данными между пользователем и сервером.";
// let attributes5 = [{accept_charset: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
//     {enctype: "Способ кодирования данных формы."},
//     {method: "Метод протокола HTTP."}]
// let form = new Teg(name5, description5, attributes5)
// console.log(form)
// //
// let name6 = "<option>";
// let description6 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ";
// let attributes6 = [{disabled: "Заблокировать для доступа элемент списка."},
//     {selected: "Заранее устанавливает определенный пункт списка выделенным."},
//     {value: "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."}]
// let option = new Teg(name6, description6, attributes6)
// console.log(option)
// //
// let name7 = "<select>";
// let description7 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, " +
//     "а также список с одним или множественным выбором";
// let attributes7 = [{autofocus: "Устанавливает, что список получает фокус после загрузки страницы."},
//     {form: "Связывает список с формой."},
//     {required: "Список обязателен для выбора перед отправкой формы."}]
// let select = new Teg(name7, description7, attributes7)
// console.log(select)

//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {model: "nissan",
//     plant: "pajero",
//     year: 2015,
//     maxspeed: 189,
//     volume: 1.7,
//
//     drive: function(){
//     console.log(`Едем со скоростью ${car.maxspeed} км/ч`);
// },
//     info: function(){
//         console.log(`Модель: ${this.model},
// Завод: ${this.plant}
// Год производства: ${this.year}
// Максимальная скорость: ${this.maxspeed}
// Объём двигателя: ${this.volume}
// Водитель: ${this.driver.name}`);
// },
//     increaseMaxSpeed: function(newSpeed){
//     car.maxspeed += newSpeed;
//     console.log(`Новая максимальная скорость ${car.maxspeed}`);
// },
//     changeYear: function(newValue){
//     car.year = newValue;
//     console.log(`Новый год выпуска ${car.year}`)
// },
//     driver: function(name, age, experience){
//     car.driver = {name, age, experience};
//     console.log(`Водитель: ${car.driver.name}`)
// }
// };
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10)
// car.changeYear(2000)
// car.driver("Олег", 30, 5)
// car.info();

//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function createCar(name, plant, year, maxspeed, volume) {
//     this.name = name;
//     this.plant = plant;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`Едем со скоростью ${maxspeed} км/ч`);
//     }
//
//     this.info = function () {
//         console.log(`
//         Модель: ${name},
//         Завод: ${plant}
//         Год производства: ${year}
//         Максимальная скорость: ${maxspeed}
//         Объём двигателя: ${volume}
//         `);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         maxspeed += newSpeed;
//         console.log(`Новая скорость: ${maxspeed} км/ч`);
//     }
//
//     this.changeYear = function (newValue) {
//         year = newValue;
//         console.log(`Новый год производства: ${year}`)
//     }
//
//     this.driver = function (name, age, experience) {
//         this.driver = {name, age, experience};
//         console.log(`Водитель: ${this.driver.name}`)
//     }
// }
//
// let car1 = new createCar("nissan", "pajero", 2015, 170, 1.7);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(17)
// car1.changeYear(2030)
// car1.driver("Олег", 30, 5)
// console.log("-----------------------------------------------------")
// let car2 = new createCar("jeep", "jeepjeep", 2020, 200, 2.1);
// console.log(car2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(7)
// car2.changeYear(2000)
// car2.driver("Таня", 40, 20)

//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class createCar {
//     constructor(name, plant, year, maxspeed, volume) {
//         this.name = name;
//         this.plant = plant;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//
//         this.drive = function () {
//             console.log(`Едем со скоростью ${maxspeed} км/ч`);
//         }
//
//         this.info = function () {
//             console.log(`
//         Модель: ${name},
//         Завод: ${plant}
//         Год производства: ${year}
//         Максимальная скорость: ${maxspeed}
//         Объём двигателя: ${volume}
//         `);
//         }
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             maxspeed += newSpeed;
//             console.log(`Новая скорость: ${maxspeed} км/ч`);
//         }
//
//         this.changeYear = function (newValue) {
//             year = newValue;
//             console.log(`Новый год производства: ${year}`)
//         }
//
//         this.driver = function (name, age, experience) {
//             this.driver = {name, age, experience};
//             console.log(`Водитель: ${this.driver.name}`)
//         }
//     }
// }
//
// let car1 = new createCar("nissan", "pajero", 2015, 170, 1.7);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(17)
// car1.changeYear(2030)
// car1.driver("Олег", 30, 5)
// console.log("-----------------------------------------------------")
// let car2 = new createCar("jeep", "jeepjeep", 2020, 200, 2.1);
// console.log(car2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(7)
// car2.changeYear(2000)
// car2.driver("Таня", 40, 20)

//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella{
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }
// let girl1 = new Cinderella("Vika", 20, 30);
// let girl2 = new Cinderella("Nastya", 21, 31);
// let girl3 = new Cinderella("Lena", 22, 32);
// let girl4 = new Cinderella("Vera", 23, 33);
// let girl5 = new Cinderella("Lida", 24, 34);
// let girl6 = new Cinderella("Veronika", 25, 35);
// let girl7 = new Cinderella("Katya", 26, 36);
// let girl8 = new Cinderella("Liza", 27, 37);
// let girl9 = new Cinderella("Ksusha", 28, 38);
// let girl10 = new Cinderella("Natasha", 29, 39);
// let girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10]
//
// class Prince{
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let boy1 = new Prince("Boris", 25, 35)
//
// function match(prince, girls){
//     for (let girl of girls){
//         if (girl.foot == prince.shoe)
//             console.log(`Девушка ${girl.name} должна быть с принцем ${prince.name}`)
//     }
// }
// match(boy1, girls);


//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
class Cinderella{
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}
let girl1 = new Cinderella("Vika", 20, 30);
let girl2 = new Cinderella("Nastya", 21, 31);
let girl3 = new Cinderella("Lena", 22, 32);
let girl4 = new Cinderella("Vera", 23, 33);
let girl5 = new Cinderella("Lida", 24, 34);
let girl6 = new Cinderella("Veronika", 25, 35);
let girl7 = new Cinderella("Katya", 26, 36);
let girl8 = new Cinderella("Liza", 27, 37);
let girl9 = new Cinderella("Ksusha", 28, 38);
let girl10 = new Cinderella("Natasha", 29, 39);
let girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10]

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;

        this.match = function (girls){
            for (let girl of girls){
                if (girl.foot == this.shoe)
                    console.log(`Девушка ${girl.name} должна быть с принцем ${this.name}`)
            }
        }
    }
}
let boy1 = new Prince("Boris", 25, 35)
boy1.match(girls);