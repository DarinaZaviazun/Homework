 // утро начинается у сони или трудяжки
function liveMyDay(hours, cb){
     console.log("Сработал будильник №1");
     setTimeout(() => {
         console.log("Сработал будильник №2");
         if (hours > 8){
             cb("соня");
         }
         else
             cb("ранняя пташка");
     }, 2000)
 }

 // В зависимости от дня недели учимся или отдыхаем
 function studyOrRelax (day, cb){
     setTimeout(() => {
         console.log("Начинаем делать дела...")
     }, 1000);

     setTimeout(() => {
         if (day !== "Четверг"){
             cb(null, "javascript");}
         else if (day === "Четверг"){
             cb(day, null);}
     }, 2000);
 }

// если сегодня отдыхаем
 function relax(leisuretime, cb){
     console.log("Давай выберем, чем будем заниматься!");
setTimeout(() => {
    if(leisuretime === "leisure")
        cb("bad", null);
    else if(leisuretime !== "leisure")
        cb(null, "walk");
}, 2000);
}

 function walking(where, cb){
     console.log("Куда пойдем?");
     setTimeout(() => {
         if (where === "грибы")
             cb("грибы", null)
         else
             cb(null, "просто погуляем")
     }, 2000)

 }

 function mushroom(time, cb){
     console.log(`Едем ${time} в лесок собирать грибочки...`);
     setTimeout(() => {
         console.log("Собираем только те, которые точно знаем.")
     }, 2000);
     setTimeout(() => {
         console.log("Скоро стемнеет, пора домой!")
     }, 3000)
     setTimeout(() => {
         console.log("...стемнело");
     }, 4000)
     setTimeout(() => {
         cb("final");
     }, 5000)

 }

// если сегодня учимся
function studying(task, cb){
    console.log("Открываем нужные программы и лекцию на ютубе");
    setTimeout(() => {
        console.log("Кажется, что-то припоминаю... А есть ли домашка?");
        if (!task)
            cb("find", null);
        else
            cb (null, task);
    }, 2000);
}

function doHW(task, cb){
    console.log("Ладно, сейчас посмотрим...");
    if (task === "пишем код"){
    setTimeout(() => {
        console.log(`Чтож, ${task}...`);
        cb(null, "write")
    }, 2000);}
    if (task === "нет домашки!"){
        setTimeout(() => {
            console.log(`Чтож, ${task}...`);
            cb("skip", null)
        }, 2000);}
}

function evening(respond, cb){
    console.log("А вот и вечер, время расслабиться! Посмотрим фильм?");
    if (respond === "да")
    setTimeout(() => {
        console.log(`${respond}!`)
        cb (null, "ура, киношка!");
    }, 2000);

    if (respond === "нет"){
        console.log(`${respond}!`)
        setTimeout(() => {
            cb ("нет так нет, тогда инстаграм и спать!", null);
        }, 2000);}
}


//запуск основной программы выполнения дня
 liveMyDay(7, (name) => { // тут можно поменять время подъема
     console.log(`Подъем, ${name}!`);
     studyOrRelax ("Среда", (dayoff, lesson) =>{  //тут можно поменять день недели
         if (dayoff){
             console.log("Отдохнем, сегодня же " + dayoff);
             relax("walk", (bad, walk) => {  // тут можно поменять вид отдыха leisure или walk
                 if(bad) {
                     console.log("Будем валяться весь день в кровати и смотреть фильмы");
                 }
                 if (!bad && walk) {
                     console.log("Давай куда-нибудь сходим!");
                     walking("грибы", (mush, walk) => { //грибы или просто погуляем
                         if (mush) {
                             console.log("Поехали за грибами в лес!")
                             mushroom("час", (final) => { //можно задать другое время
                                 if (final){
                                 evening("нет", (sleep, watch) => {    //ответ да или нет
                                     if (sleep) {
                                         console.log(sleep)
                                         console.log("Тупим в инсту и засыпаем...")  // end
                                     }
                                     if (watch){
                                         console.log(watch)
                                         console.log("Смотрим фильм и засыпаем...") //end
                                     }
                                     })
                                }
                             });
                         }
                         else{
                             console.log("Давай просто погуляем в центре города!")
                             console.log("...стемнело");
                             evening("нет", (sleep, watch) =>{    //ответ да или нет
                                 if (sleep) {
                                     console.log(sleep)
                                     console.log("Тупим в инсту и засыпаем...") // end
                                 }
                                 if (watch){
                                     console.log(watch)
                                     console.log("Смотрим фильм и засыпаем...") //end
                                 }
                             })
                         }
                     });
                 }
             })
         }
         else{
             console.log(`Сегодня не четверг, начинаем учить ${lesson}`);
             studying(null, (find, doing) => { //тут можно поменять домашку или убрать ее
                 if(find)
                     console.log("Пойду поищу домашку в чатике");


                 doHW("пишем код", (skip, write) =>{   //task == пишем код || нет домашки!
                     if(skip){
                         console.log("Перейдем сразу к отдыху")
                         evening("нет", (sleep, watch) =>{    //ответ да или нет
                             if (sleep) {
                                 console.log(sleep)
                                 console.log("Тупим в инсту и засыпаем...")   // end
                             }
                             if (watch){
                                 console.log(watch)
                                 console.log("Смотрим фильм и засыпаем...") //end
                             }
                         });
                     }
                     if(write){
                         console.log("*долго пишем код и разбираемся во всем");
                         console.log("...стемнело");
                         evening("да", (sleep, watch) =>{    //ответ да или нет
                             if (sleep) {
                                 console.log(sleep)
                                 console.log("Тупим в инсту и засыпаем...")   // end
                             }
                             if (watch){
                                 console.log(watch)
                                 console.log("Смотрим фильм и засыпаем...") //end
                             }
                         });
                     }
                 })
             });
         }
     })
 });


