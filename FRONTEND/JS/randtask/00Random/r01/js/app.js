//000000000000000000000000000000000000000000000000000000000000000
// 00 типы данных в JS
// console.log(typeof 'Hi') // "", '', `` - литералы (различные динамические данные)

// //null, undefined, boolean, number, string, object, symbol, BigInt

// //typeof
// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof undefined) // используется тогда когда переменная не обьявлена, либо var в котором нет никакого значения + функции которые ничего не возвращают они по умолчанию возвращают андефайнед
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null) //(неточность в тайпоф имеет) | говорит о том что отсутствует значение, переменная обьявлена но в ней нет значения (обнулили)
// console.log(typeof function() {})
// console.log(typeof NaN)
// console.log(undefined * 1)
// console.log(typeof (1 / 0))

// // Приведение типов
// let lang = 'JS'

// if (lang) {
//     console.log('the best lang is:', lang)
// }

// // приводятся всегда к false если привести их к типу boolean
// // '', 0, null, undefined, NaN, false
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function(){}))
// console.log(Boolean('Hello'))
// console.log(Boolean(' '))
// console.log(Boolean('0'))

// // Строки и числа
// console.log(1 + '2')       // string 12
// console.log('' + 1 + 0)    // stirng
// console.log('' - 1 + 0)    // number потому что -1 не может быть в строке
// console.log('3' * '8')     // number потому что не +
// console.log(4 + 10 + 'px') // 14px
// console.log('42' - 40)     // 2 число
// console.log('42px' - 2)    // NaN потому что дополнительный алфавитный стринг
// console.log(null + 2)      // 2
// console.log(undefined + 42)// undefined

// == vs ===
// ==  - сравнение по значению
// === - сравнение по типу данных и по значению

// console.log(2 == '2')
// console.log(2 === '2')
// console.log(undefined == null)
// console.log(undefined === null)
// console.log('0' == false)
// console.log('0' == '0')
// console.log(0 === 0)

// -=-=-=-=-=-=
// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0)     // true
// console.log('' == [])    // true
// console.log('' == {})    // false
// console.log(0 == [])     // true
// console.log(0 == {})     // false
// console.log(0 == null)   // false

//11111111111111111111111111111111111111111111111111111111111111111
// 01 Значения и ссылки
// (вычесляемые типы данных и их мутации)

// let a = 42
// let b = a
// b++
// console.log('a', a)
// console.log('b', b)

// let a = [1, 2, 3]
// let b = a
// b.push(4)

// let c = [1, 2, 3, 4]

// console.log('a', a)
// console.log('b', b)

// console.log(a === b)
// console.log(a === c)

//22222222222222222222222222222222222222222222222222222222222222222
// 02 Scope

// function funcA() {
//     let a = 1

//     function funcB() {
//         let b = 2

//         function funcC() {
//             let c = 3

//             console.log('funcC:', a, b, c)
//         }

//         funcC()
//         console.log('funcB:', a, b)
//     }

//     funcB()
//     console.log('funcA:', a)
// }

// funcA()

//333333333333333333333333333333333333333333333333333333333333333333333
// 03 Hosting

// console.log(sum (1, 41))

// function sum(a, b) {
//     return a + b
// }

// var i
// console.log(i)
// i = 42
// console.log(i)

//44444444444444444444444444444444444444444444444444444444444444444444
// 04 Замыкания closures

// function sayHelloTo(fname) {
//     const message = 'Hello ' + fname

//     return function() {
//         console.log(message)
//     }
// }

// const helloToValeria = sayHelloTo('Valeria')
// const helloToVladislav = sayHelloTo('Vladislav')
// // console.log(helloToValeria)
// helloToValeria()
// helloToVladislav()

//-------------

// function createFrameworkManager() {
//     const fw = ['Angular', 'React']

//     return {
//         print: function() {
//             console.log(fw.join(' '))
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// // console.log(manager)
// manager.print()
// manager.add('VueJS')
// manager.print()

// // setTimeout

// const fib = [1, 2, 3, 5, 8, 13]

// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function() {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }


// const fib = [1, 2, 3, 5, 8, 13]

// for (let i = 0; i < fib.length; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(`fib[${j}] = ${fib[j]}`)
//         }, 1500)
//     })(i)

// }

//5555555555555555555555555555555555555555555555555555555555
// IIFE Immediate Invoked Function Expression
//      Выражение функции с немедленным вызовом

// let result = []
// for (var i = 0; i < 5; i++) {
//     result.push( function() {
//         console.log(i)
//     })
// }

// result[2]()
// result[4]()

// for (var i = 0; i < 5; i++) {
//     (function() {
//         var j = i
//         result.push( function() { console.log(j)})
//     })()
// }

// result[2]()
// result[4]()

//

// __proto__
// ees6 до
// function Cat(name, color) {
//     this.name  = name
//     this.color = color
// }

// Cat.prototype.voice = function() {
//     console.log(`Cat ${this.name} says myay`)
// }

// const cat = new Cat('kot', 'white')
// console.log(Cat.prototype) // это поле является указателем на обьект у которого есть конструктор и соответствующие поля которые будут созданы от этого класса
// cat.voice()


// forEach – для перебора массива.
// filter – для фильтрации массива.
// every/some – для проверки массива.
// map – для трансформации массива в массив.
// reduce/reduceRight – для прохода по массиву с вычислением значения.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const f     = 'Fizz';
// const bu    = 'Buzz';
// const fb    = 'FizzBuzz';

// let sum     = '0';


// button.onclick = function () {
//     console.log('кнопка нажата')
//     console.log( inputIn.value );
//     let b = +inputIn.value;
//     div.innerHTML = b;
//     inputIn.value = '';
// }

// function FizzBuzzF(inputIn, f, bu, fb) {
//     if(inputIn % 3 === 0 && inputIn % 5 === 0) {
//         return sum = fb;
//     }
//         else if(inputIn % 5 === 0) {
//             return sum = f;
//         }
//             else if(inputIn % 3 === 0) {
//                 return sum = bu;
//             } else {
//                 return sum = inputIn;
//             }
// }
// div.innerHTML = sum;
// console.log(sum)


// for (b; b <= 100; b++) {
//     switch(true) {
//         case b % 3 === 0 && b % 5 === 0 : {
//             sum = fb;
//             console.log(sum);
//             break;
//         }
//         case b % 3 === 0 : {
//             sum = f;
//         }
//         case b % 5 === 0 : {
//             sum = bu;
//         }
//         default : {
//             sum = b;
//             break;
//         }
//     }
// }

// let FizzBuzzV = inputIn % 5 === 0 ? 'Buzz' : inputIn % 3 === 0
//             ? 'Fizz' : inputIn % 3 === 0 && inputIn % 5 === 0
//             ? inputIn :'FizzBuzz';

// for (let i = 1; i <= 100; i++) {
//     switch(true) {
//         case i % 3 === 0 && i % 5 === 0 : {
//             console.log('FizzBuzz');
//             break;
//         }
//         case i % 3 === 0 : {
//             console.log('Fizz');
//         }
//         case i % 5 === 0 : {
//             console.log('Buzz')
//         }
//         default : {
//             console.log(i);
//             break;
//         }
//     }
// }

// let FizzBuzzV = i % 5 === 0 ? 'Buzz' : i % 3 === 0
//                  ? 'Fizz' : i % 3 === 0 && i % 5 === 0
//                  ? i :'FizzBuzz';
// console.log(FizzBuzzV)

// let inputIn = document.querySelector('.input-in');
// let button  = document.querySelector('button');
//                 document.querySelector('.out-1')
// let sum;
// let b       = 0;
// const f     = 'Fizz';
// const bu    = 'Buzz';
// const fb    = 'FizzBuzz';


// button.onclick = function () {
//     console.log('Ping')
//     let b = inputIn.value;
//     console.log(b);
//     inputIn.value = '';
// }



// function FizzBuzzF(b, sum, f, bu, fb) {
//     if(b % 3 === 0 && b % 5 === 0) {
//         return sum = fb;
//     }
//         else if(b % 5 === 0) {
//             return sum = f;
//         }
//             else if(b % 3 === 0) {
//                 return sum = bu;
//             } else {
//                 return sum = b;
//             }
// } console.log(sum);

// let outF = document.querySelector('div.out-1')
//             outF.textContent = sum;
