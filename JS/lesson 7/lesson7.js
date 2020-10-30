// let mass1 = [1, 2, 3, 4, 5];
// let mass2 = ["masluk", 'polski', 'muhomor', 'mohovik', 'borovik'];
// let mass3 = [1, "mush", 33, "room", true];
// let mass4 = [];
// mass4[0] = "tutnol";
// mass4[1] = "tutodin";
// mass4[2] = "tutdva";
// mass4[3] = "tuttri";
// console.log(mass1);
// console.log(mass2);
// console.log(mass3);
// console.log(mass4);

// let text = "<div>probuem cikl for 10 raz</div>";
// for (let i = 0; i < 10; i++)
//     document.write(text);

// for (let i = 0; i < 10; i++)
//     document.write(`<h1>probuem cikl for ` + i + ` raz</h1>`);

// let text2 = "<h1> Tut bolshoi text budet</h1>"
// for (let i = 0; i < 10; i++)
//      document.write(text2);

// for (let i = 0; i < 10; i++)
//       document.write(`<h1>Tut bolshoi text budet ` + i + `</h1>`);

// let massiv1 = [1, 2, 5, 8, 9, 13, 55, 47, -2, 0.008];
// for(let i = 0; i < massiv1.length; i++)
// console.log(massiv1[i]);

// let massiv2 = ["asa", "dada", "fafa", "lala", "gaga", "jaja", "kaka", "rara", "tata", "papa"];
// for(let i = 0; i < massiv2.length; i++)
//     console.log(massiv2[i]);

// let massiv3 = ["asa", 7, "fafa", true, "gaga", ['ololo', 6, 17, "stol"], "kaka", -0.000025, "tata", "papa"];
// for(let i = 0; i < massiv3.length; i++)
//     console.log(massiv3[i]);

// let massiv4 = [false, 7, "fafa", true, "gaga", ['ololo', 6, 17, "stol"] , false, -0.000025, "tata"];
// for(let i = 0; i < massiv4.length; i++){
//     if(typeof massiv4[i] == "boolean")
//         console.log("boolean = " + massiv4[i])
//     if(typeof massiv4[i] == "number")
//         console.log("number = " + massiv4[i])
//     if(typeof massiv4[i] == "string")
//         console.log("string = " + massiv4[i])
// }

// let massiv5 = [];
// massiv5[0] = 5;
// massiv5[1] = true;
// massiv5[2] = [1, 2, "tri"];
// massiv5[3] = "kon";
// massiv5[4] = 'stul';
// massiv5[5] = 28;
// massiv5[6] = false;
// massiv5[7] = 173;
// massiv5[9] = "gagara";
// massiv5[8] = -0.00002;
// for(let i = 0; i < massiv5.length; i++)
//      console.log(massiv5[i]);

// for (let i = 0; i < 10; i++){
//     console.log(i)
// document.write(i + "<p>")}

// for (let i = 0; i < 100; i++){
//     console.log(i)
//     document.write(i + "<p>")}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний
//номер кроку через console.log та document.write

// for (let i = 0; i < 200; i+=2){
//     console.log(i/2)
//     document.write(i/2 + "<p>")}

// for (let i = 0; i < 100; i++){
//     if (i%2 == 0){
//     console.log(i)
//     document.write(i + "<p>")}}

// for (let i = 0; i < 100; i++){
//     if (i%2 !== 0){
//         console.log(i)
//         document.write(i + "<p>")}}

// for (let i = 0; i < 2; i++){
//     for(let j = 0; j < 60; j++){
//         console.log(i + " minut " + j + " secund")
//         document.write(i + " minut " + j + " secund <p>")}}

// for (let i = 0; i < 3; i++){ //godyny
//     for(let j = 0; j < 60; j++){
//         if (i == 2 && j == 20)
//             break;
//         for (let k = 0; k < 60; k++){
//         console.log(i + " chasov " + j + " minut " + k + " secund")
//         document.write(i + " chasov " + j + " minut " + k + " secund <p>")
//         }}}

// let mass = ['a', 'b', 'c']
// for (let i = 0; i < mass.length; i++)
//     document.write(mass[i])

// let mass = ['a', 'b', 'c'];
//     let i = 0;
//  while (i < mass.length){
//     document.write(mass[i])
//      i++}

// let mass = ['a', 'b', 'c']
// for (let i of mass){
//     document.write(i)
//     i++}

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//let mass = [2,17,13,6,22,31,45,66,100,-18];
//1
// let i = 0;
// while(i < mass.length){
//     console.log(mass[i])
//     i++
// }
//2
// for (let k = 0; k < mass.length; k++)
//     console.log(mass[k])
//3
// for (let i = 0; i < mass.length; i++){
//     if (i%2 !== 0)
//         console.log(mass[i])}
//4
// let k = 0
// while(k < mass.length){
//     if (k%2 == 0)
//     console.log(mass[k])
//     k++
// }
//5
// for (let i = 0; i < mass.length; i++){
//     if (mass[i]%2 !== 0)
//         console.log(mass[i])}
//6
// let k = 0
// while(k < mass.length){
//     if (mass[k]%2 == 0)
//         console.log(mass[k])
//     k++
// }
//7
// for (let i = 0; i < mass.length; i++)
//     if (mass[i]%3 == 0)
//         mass[i] = 'okten'
//         console.log(mass)
//8
// for (let k = mass.length-1; k >= 0; k--)
//      console.log(mass[k])
//9.1
// let i = mass.length-1;
// while(i >=0 ){
//     console.log(mass[i])
//     i--
// }
// 9.2
// for (let k = mass.length-1; k >=0 ; k--)
//     console.log(mass[k])
// 9.3
// for (let i = mass.length-1; i >=0 ; i--){
//     if (i%2 !== 0)
//         console.log(mass[i])}
// 9.4
// let k = mass.length-1
// while(k >=0 ){
//     if (k%2 == 0)
//     console.log(mass[k])
//     k--
// }
// 9.5
// for (let i = mass.length-1; i >= 0 ; i--){
//     if (mass[i]%2 !== 0)
//         console.log(mass[i])}
// 9.6
// let k = mass.length-1
// while(k >= 0 ){
//     if (mass[k]%2 == 0)
//         console.log(mass[k])
//     k--
// }
// 9.7
// for (let i = mass.length-1; i >=0 ; i--)
//     if (mass[i]%3 == 0)
//         mass[i] = 'okten'
//         console.log(mass)

//10.1
// let massiv = []
// for (let i = 0; i < 100; i++){
//     if (i%2 == 0)
//         massiv.push(i)
// }
// console.log(massiv)
//10.2
// let massiv = []
// for (let i = 0; i < 101; i++){
//     if (i%2 !== 0)
//         massiv.push(i)
// }
// console.log(massiv)

