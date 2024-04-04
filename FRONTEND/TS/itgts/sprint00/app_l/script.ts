// для того что бы тайпскрипт превратить в джаваскрипт нужно создать tsconfig.json
// потом обязательно нужно скомпилировать командой tsc после подключить в штмл папку сгенерированную и файл
//    <script src="./javascript/script.js"></script>
// tsc -watch запустит проект в режиме лайв, и будет подхватывать сразу же изменения

console.log('1');
console.log(5);

let n = 4;
console.log(n);
n = 5;
console.log(n);
// n = 'hello'; Тип "string" не может быть назначен для типа "number".

// в тайпскрипте можно явно задавать тип данных
let m : number = 8; // number
console.log(m);
let n1 = 99;
console.log(n1);


n = 66;
n = + '3';
console.log()

const n2 : number = 77;
console.log(n2);

const s1 : string = 'hello';
const s2 : string = ' TS'
console.log(typeof s1);
console.log(s1 + s2);

let s3 : string = s1 + s2;
console.log(s3);

let s4;
// нужно стараться не терять преимущиства тайпскрипта соблюдая типизацию
// есть тип данных any это любой тип данных

let s5 : any;
console.log(s3, typeof s3);

// тип данных определяет операции над переменными(или константами)
// когда мы указываем явно тип мы накладываем ограничение на работу с ней что позволяет более строго писать код

const b1 : boolean = true && false;
const b2 : boolean = true;
console.log(b1, typeof b1)

// переобразование типов

// const c1 : number = 4;
// const c1 : number = +'4'; первый способ
// const c1 : number = Number('4');
const c1 : number = parseInt('4', 10); // '4' само число, 10 система изчесления десятичная
console.log(c1);

const c2 : string = ''+888; // переобразование number в строку
const c3 : string = String(888);
const c4 : boolean = false;
console.log(c3);

// const c5 : boolean = 1 && 1; // ошибка изза того что в буль хотят всунуть num
const c6 : boolean = Boolean(10);
console.log(c3);

document.querySelector('.out-1').textContent = c3;
// если кто-то попытается вывести в текстконтент number, вылетит ошибка
// нужно преобразовывать к тому типу что собираешся вцводить
document.querySelector('.out-1').textContent = String(s1);

const n5 : number = +document.querySelector('.out-2').textContent;
// не совсем правильный вариант написания тайпскрипта
console.log(n5, typeof n5);
