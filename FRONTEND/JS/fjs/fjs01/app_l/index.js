function f1(a,b,c){

}
function sum() {
    const x = 5;
    const y = 6;
    console.log(x+y);
}
sum3(500, 2500); /////////////////аргумент заведенный ниже


sum(); // просто вызов функции

let x = 55;
let y = 66;
function sum2() {
    console.log(x + y);
}

sum2();

x = 100;
y = 200;
sum2();

/////////////////////аргументы//////////////////////

function sum3(x1, y1) { // формаьные аргументы или формальные параметры
    console.log(x1 + y1);
}

sum3(44, 11); // в момент вызова функции первое значение подставится в х1 а второе в у2
sum3(100, 200);

let z = 77;
sum3(z, 10);

sum3(z, z * 2);

//////аргументов больше чем нужно
sum3(2, 3, 4, 5, 6); // выведет только первых два, остальные будут проигнорированы
/////////////////////////////////

//////аргументов менше чем полоено
sum3(9); // NaN
/////////////////////////////////

//////в ES6 задание параметров по умолчанию
function sumD(a1 = 990, b1 = 9) { // параметры по умолчанию(в том случае если аргументы не зайдут)
    console.log(`sumD ${a1 + b1}`);
}

sumD(9); // будет 18 так как за первый аргумент войдет 9 + `b1 = 9` res = 18
sumD();


function showSumM(elem, x, y) {
    document.querySelector(elem).textContent = x + y;
}

function showSum7(elem, x, y) {
    elem.textContent = x + y;
}

showSum7('.out-2', 5, 6);
const out1 = document.querySelector('.out-1');
showSum7(out1, 70, 6);

////////////////////// массив аргументов

function showSum5(x3, y3, elem = '.out-2') {
    console.log(arguments); // теперь не важно сколько параметров было передано в функцию
    document.querySelector(arguments[2]).textContent = arguments[0] + arguments[1];
} // их может быть много

showSum5(10, 15, '.out-2');


////////

function showSumAll() { // поток данных с ардуино прилетает как пример
    console.log(arguments); // проверка на то пришли ли параметры или нет
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    let sum = Array.from(arguments).reduce( (accum, item) => accum += item);
    console.log(sum);
}

showSumAll(4,5,6,20);

function showSumAll2(...args) { // ...args дает возможность закидывать много аргументов
    console.log(arguments); // проверка на то пришли ли параметры или нет
    let sum = args.reduce((accum, item) => accum += item);
    console.log(sum);
}

showSumAll(4,5,6,20,11);


//////// функция как аргумент

function showAll(result) {
    document.querySelector('.out-1').innerHTML = `<b>${result}</b>`;
}

function showSumAll3(num, drawFunction) {
    drawFunction(num); // num => 45 | drawFunction => showAll
}

showSumAll3(45, showAll);


/////// бонус


function showAll7(result) {
    document.querySelector('.out-1').innerHTML = `<b>${result}</b>`;
}

function showSumAll88(drawFunction, ...num) { // ...num должно в конце выводиться
    drawFunction(num);
}

showSumAll88(showAll, 31, 32, 10, 432);  // showAll выводится в начале
