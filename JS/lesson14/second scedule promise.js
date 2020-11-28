// утро начинается у сони или трудяжки
function liveMyDay(hours){
    return new Promise((resolve, reject) => {
        console.log("Сработал будильник №1");
        setTimeout(() => {
            console.log("Сработал будильник №2");
            if (hours < 8){
                reject(`Всего ${hours} часов утра, я не выспалась(`);
            }
            else
                resolve("ранняя пташка");
        }, 2000)
    })
}


// В зависимости от дня недели учимся или отдыхаем
function studyOrRelax(day){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Начинаем делать дела...")
        }, 1000);

        setTimeout(() => {
            if (day === "Четверг"){
                reject("Сегодня четверг, отдыхаем!");}
            else {
                resolve("javascript");}
        }, 2000);
    })
}

// если сегодня учимся
function studying(task){
    return new Promise((resolve, reject) => {
        console.log("Открываем нужные программы и лекцию на ютубе");
        setTimeout(() => {
            console.log("Кажется, что-то припоминаю... А есть ли домашка?");
            if (!task)
                reject("Не могу найти домашку, пойду искать в чатике(");
            else
                resolve(`Домашка: ${task}, начинаю писать код...`);
        }, 2000);
    })
}

// смотрим кино вечером или нет
function evening(respond){
    return new Promise((resolve, reject) => {
        console.log("А вот и вечер, время расслабиться! Посмотрим фильм?");
        if (respond === "нет"){
            console.log(`${respond}!`)
            setTimeout(() => {
                reject("Нет так нет, тогда инстаграм и спать!");
            }, 2000);}
        if (respond === "да")
            setTimeout(() => {
                console.log(`${respond}!`)
                resolve( "Ура, киношка!");
            }, 2000);
    })
}

//отловили ошибку и отдыхаем
function relax(leisure){
    return new Promise((resolve, reject) => {
        console.log("Давай выберем, чем будем заниматься!");
        setTimeout(() => {
            if(leisure === "лежать в кровати")
                reject("Будем валяться в кровати весь день и всё!");
            else
                resolve( "Пойдем гулять!");
        }, 2000);
    })
}

function walking(where){
    return new Promise((resolve, reject) => {
        console.log("Куда пойдем?");
        setTimeout(() => {
            if (where !== "за грибами")
                reject ("Просто погуляем и всё!");
            else
                resolve ("Поехали за грибами!")
        }, 2000)
    })
}

function mushroom(time){
    return new Promise((resolve) => {
        console.log(`Едем ${time} в лесок собирать грибочки...`);
        setTimeout(() => {
            console.log("Собираем только те, которые точно знаем.")
        }, 2000);
        setTimeout(() => {
            console.log("Скоро стемнеет, пора домой!")
        }, 3000)
        setTimeout(() => {
            resolve("final");
        }, 4000)
    })
}


liveMyDay(9)  // задаем время пробуждения
    .then(name => {
        console.log(`Подъем, ${name}!`);
        return studyOrRelax("Среда"); // пишем день недели, четверг - выходной
    })
    .then(lesson => {
        console.log(`Сегодня не четверг, начинаем учить ${lesson}`);
        return studying("Написать расписание дня на промисах");  //пишем или задание, или null
    })
    .then(prom =>{
        console.log(prom);
        console.log("*долго пишем код и разбираемся во всем");
        console.log("...стемнело");
        return evening("да"); // ответ да или нет на просмотр фильма
    })
    .catch(reason => {
        console.log(reason); //отлавливаем ошибку
        if (reason === "Сегодня четверг, отдыхаем!"){
            return relax(null) // лежать в кровати или что угодно другое
        .then(action =>{
            console.log(action);
            return walking("за грибами"); //за грибами или что-угодно другое
            })
        .then(mushrooms => {
            console.log(mushrooms);
            return mushroom("1 час") //указываем время, которое будем ехать
            })
        .then(film => {
            console.log("...стемнело");
            return evening("да")  // ответ да или нет на просмотр фильма
        })
        }

    })
    .finally(() =>
        console.log("Смотрим фильм и засыпаем...")
    )







