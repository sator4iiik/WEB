// Task 1
// При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать
// содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения
// - true или false выведите в .out-1.

let button1 = document.querySelector('.b-1');
let div1    = document.querySelector('div.out-1');

function f1(){
   let data = document.querySelector('.i-1').value;
   if ( data == 4 ){
      div1.innerHTML = 'true';
      document.querySelector('.out-1').value = 'true';
   } else {
      div1.innerHTML = 'false';
      document.querySelector('.out-1').value = 'false';
   }

}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция
// f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2
// число, которое больше. Вариант равенства переменных не рассматриваем.

let div2 = document.querySelector('div.out-2');
let a21  = 45;
let a22  = 32;

function f2(){
   if( a21 > a22 ) {
      div2.innerHTML = a21;
      document.querySelector('div.out-2').value;
   } else if( a22 > a21 ) {
      div2.innerHTML = a22;
      document.querySelector('div.out-2').value;
   } else {
      return;
   }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. При нажатии кнопки
// .b-3 срабатывает функция f3. Функция должна сравнить числа из input, вывести в
// .out-3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let button3 = document.querySelector('.b-3');
let div3    = document.querySelector('div.out-3');


function f3(){
   let dat1 = document.querySelector('input.i-31').value;
   let dat2 = document.querySelector('input.i-32').value;
      let a = +dat1;
      let b = +dat2;

      if( a > b ){
         div3.innerHTML = a;
         document.querySelector('div.out-3').value;
      } else if( b > a ){
         div3.innerHTML = b;
         document.querySelector('div.out-3').value;
      } else {
         return;
      }
}

document.querySelector('.b-3').onclick = f3;


// Task 4.
// Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая
// запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю
// больше или равно 18 лет, и 0 если меньше.

let button4 = document.querySelector('.b-4');
let div4    = document.querySelector('.out-4');

function f4(){
   let data = document.querySelector('.i-4').value;
   let year = 2021 - 18;
      let user = +data;
      if ( user <= year ){
         div4.innerHTML = 1;
         document.querySelector('div.out-4').value;
      } else {
         div4.innerHTML = 0;
         document.querySelector('div.out-4').value;
      }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// На странице есть input c классом i-5, куда пользователь может ввести число.
// Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5
// символ 'm' если число меньше нуля, 0 если число равно нулю и число 1 если больше.

let button5 = document.querySelector('.b-5');
let div5    = document.querySelector('.out-5');

function f5(){
   let data = document.querySelector('.i-5').value;
      let a = +data;
      if( a < 0 ){
         div5.innerHTML = 'm';
         document.querySelector('.out-5').value;
      }
         else if( a == 0 ){
            div5.innerHTML = 0;
            document.querySelector('out-5');
         } else {
            div5.innerHTML = 1;
            document.querySelector('.out-5');
      }
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// На странице есть input с классом i-6, куда пользователь может ввести число.
// Есть кнопка .b-6 которая запускает функцию f6. Функция должна вывести в
// .out-6  слово even если число четное и odd если нечетное. Для проверки
// четности используется целочисленный остаток от деления на 2 (оператор %).
// Если остаток равен нулю  - четное, нет - нечетное.

let button6 = document.querySelector('.b-6');
let div6    = document.querySelector('.out-6');

function f6(){
   let data = document.querySelector('.i-6').value;
      let a = +data;

      if ( a % 2 === 0 ){
         div6.innerHTML = 'even';
         document.querySelector('.out-6').value;
      } else {
         div6.innerHTML = 'odd';
         document.querySelector('.out-6').value;
      }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - .i-71 и .i-72, оба - input[type=number]. При нажатии кнопки
// .b-7 срабатывает функция f7. Функция должна число из .i-71 возвести в степень
// .i-72, вывести результат в  .out-7. Для возведения в степень можно использовать
// **, или Math.pow.

let button7 = document.querySelector('.b-7');
let div7    = document.querySelector('.out-7');

function f7(){
   let dat1 = document.querySelector('.i-71').value;
   let dat2 = document.querySelector('.i-72').value;
      let a = +dat1;
      let b = +dat2;
      let s = a ** b;

      div7.innerHTML = s;
      document.querySelector('.out-7').value;
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8.
// При ее  нажатии срабатывает функция f8. Функция должна получить выбранное
// в select число, потом с помощью switch case сравнить его поочередно с 1, 2,
// 3. И если число выбрано - 1, то вывести в .out-8 строку one, если 2 - two,
// если 3 - three. Напоминаю - это программирование. Как указано в задании -
// так и выводим. Т.е. Three с большой буквы - ошибка!!!

let button8 = document.querySelector('.b-8');
let div8    = document.querySelector('.out-8');

function f8(){
   let data = document.querySelector('.s-8').value;
   let a = +data;

   switch (a){
      case 1:
         div8.innerHTML = 'one';
         document.querySelector('.out-8').value;
         break;
      case 2:
         div8.innerHTML = 'two';
         document.querySelector('.out-8').value;
         break;
      case 3:
         div8.innerHTML = 'three';
         document.querySelector('.out-8').value;
      default:
   }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Есть input с классом .i-9, куда пользователь может ввести номер квартиры.
// Есть кнопка .b-9 которая запускает функцию f9. Функция должна вывести в
// .out-9 номер подъезда, в котором находится квартира.
//  если от 1 включительно до 32 включительно - то вывести цифру 1
//  если от 33 (включительно) до 43(включительно) - то вывести 2
//  если от 44(включительно) до 64 (всключительно) - то 3.
//  В противном случае, вывести 0.

let button9 = document.querySelector('.b-9');
let div9    = document.querySelector('.out-9');

function f9(){
   let data = document.querySelector('.i-9').value;
      let a = +data;

      if (1 <= a && a <= 32) {
         div9.innerHTML = '1';
         document.querySelector('.out-9').value
      }
         else if (33 <= a && a <= 43) {
            div9.innerHTML = 2;
            document.querySelector('.out-9').value;
         }
            else if (44 <= a && a <= 64) {
               div9.innerHTML = 3;
               document.querySelector('.out-9').value;
            } else {
               div9.innerHTML = 0;
               document.querySelector('.out-9').value;
            }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select .s-100. По нажатию кнопки, выведите value выбранного option в .out-10.
let button10 = document.querySelector('.b-10');
let div10      = document.querySelector('.out-10');

function f10(){
   let data = document.querySelector('.s-100').value;
   div10.innerHTML = data;
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select .s-110. По изменению состояния select (событие onchange) выведите
// value выбранного option в .out-11.
let button11 = document.querySelector('.b-11');
let div11    = document.querySelector('.out-11');

function f11(){
   let data = document.querySelector('.s-110').value;
   div11.innerHTML = data;
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input .i-120. По нажатию кнопки получите значение из input  в переменную,
// а затем выведите в .out-12 typeof полученной переменной. Typeof позволяет
// определить тип данных. Обратите внимание, данная задача уже решена, нужно
// убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12(){
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number.
// По нажатию кнопки получите значение из input  в переменную, а затем выведите
// в out-13 typeof полученной переменной. Typeof позволяет определить тип данных.
// Если вы правильно все сделали - то удивительно, но тип данных будет string!
// Подумайте почему так?

let i130 = document.querySelector('.i-130');

function f13(){
   let v = i130.value;
   document.querySelector('.out-13').innerHTML = (typeof v);
}

document.querySelector('.b-13').onclick = f13;

// потому что в <input type="number" class="i-130"> определен number и до
// тех пор пока мы не приведем тип к +num он будет string
// еще number это просто возможность пролацать цифры стрелками и не более


// Task 14
// Дан input .i-141 и .i-142, type=number.  Дан select .s-143, который содержит
// две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает
// функция f14. Функция выводит в .out-14 результат операций выбранной в 3-м select
// к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести
// результат операции 1+13 т.е.  14.

let button14 = document.querySelector('.b-14');
let div14    = document.querySelector('.out-14');

function f14(){
   let dat1 = document.querySelector('.i-141').value;
   let dat2 = document.querySelector('.i-142').value;
   let dat3 = document.querySelector('.s-143').value;
      let a = +dat1;
      let b = +dat2;
      let c = dat3;

   switch (c){
      case '\x2b' : // +
         div14.innerHTML = a + b;
         document.querySelector('.out-14').value;
         break;
      case '\x2d' : // -
         div14.innerHTML = a - b;
         document.querySelector('.out-14').value;
         break;
      case '\x2a' : // *
         div14.innerHTML = a * b;
         document.querySelector('.out-14').value;
         break;
      case '\x2f' : // /
         div14.innerHTML = a / b;
         document.querySelector('.out-14').value;
         break;
      default:
         break;
   }
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select .s-151 и .s-152, каждый из которых содержит 1 и 0.  Дан select
// .s-153, который содержит две операции - && и || . Дана кнопка .b-15, при
// нажатии на которую срабатывает функция f15. Функция выводит в .out-15 результат
// логических операций выбранных в 3 select к числам выбранным в первом и втором select.
// Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let button15 = document.querySelector('.b-15');
let div15    = document.querySelector('.out-15');

function f15(){
   let dat1 = document.querySelector('.s-151').value;
   let dat2 = document.querySelector('.s-152').value;
   let dat3 = document.querySelector('.s-153').value;
      let a = +dat1;
      let b = +dat2;
      let c = dat3;
   switch (c){
      case '\x26\x26':
         div15.innerHTML = a && b;
         document.querySelector('.out-15').value;
         break;
      case '\x7c\x7c':
         div15.innerHTML = a || b;
         document.querySelector('.out-15').value;
         break;
      default:
         break;
   }
}

document.querySelector('.b-15').onclick = f15;
