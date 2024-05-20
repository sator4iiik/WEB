// Task 01
// По нажатию кнопки .b-1 запускается функция f01. Функция должна присвоить
// переменной s_1 введенный в input.i-1 текст. Тип переменной s_1 задайте
// самостоятельно. Для проверки выведите s_1 в консоль.

// тут объявляете s_1
let s_1 : string;
let i_1 = document.querySelector('.i-1') as HTMLInputElement;


function f01 () : void {
    s_1 = String(i_1.value);

    if (s_1 != '') {
        console.log(s_1);
    }
}

document.querySelector('.b-1').addEventListener('click', f01);

// Task 02

// По нажатию кнопки .b-2 запускается функция f02. Функция должна присвоить
// переменной res_2  ЧИСЛО введенное в input.i-2. Тип переменной res_2
// задайте самостоятельно. Для проверки выведите res_2 в консоль.

// тут объявляете res_2
let res_2 : string;
let i_2 = document.querySelector('.i-2') as HTMLInputElement;

function f02 () : void {
    res_2 = String(i_2.value);

    if (res_2 != '') {
        console.log(res_2);
    }
}

document.querySelector('.b-2').addEventListener('click', f02);


// Task 03
// Созданы две переменные n_31 и n_31. Напишите функцию f03, которая присваивает
// в переменную max_3 большее из данных двух переменных значение.
// Для проверки выведите max в консоль.

let n_31 : number = 22;
let n_32 : number = 44;
// тут объявляем max_3
let max_3 : number;

function f03 () : void {
    if (n_31 > n_32) {
        max_3 = n_31;
    } else if (n_32 > n_31) {
        max_3 = n_32
    }
    console.log(max_3);

}

document.querySelector('.b-3').addEventListener('click', f03);


// Task 04
// Напишите функцию, f04, которая получает два ЧИСЛА из input.i-41 и
// input.i-42 и меньшее присваивает в переменную min_4. Тип данных min_4
// определите самостоятельно. Для проверки выведите min_4 в консоль.


let i_41 = document.querySelector('.i-41');
let i_42 = document.querySelector('.i-42');
console.log(i_41);
console.log(i_42);


// тут объявляем min_4
let min_4 : number;

function f04 () : void {
    if (i_41 < i_42) {
        min_4 = Number(i_41);
    } else if (i_42 < i_41) {
        min_4 = Number(i_42);
    }

    console.log(min_4);

}

document.querySelector('.b-4').addEventListener('click', f04);


// Task 05
// Напишите функцию, f05, которая проверяет что в input.i-51 и input.i-52 введены числа и при положительном результате проверки в переменную sum_5 кладет результат - сумму данных чисел, при отрицательном результате в переменную error_5 (начальное значение всегда false) кладется значение true. Типы данных определите самостоятельно. Выведите переменные в консоль.

// тут объявляем sum_5
// тут объявляем error_5


function f05 () : void {

}

document.querySelector('.b-5').addEventListener('click', f05);


// Task 06
// Напишите функцию, f06, что проверяет что в input.i-61 и input.i-62 введены строки, которые можно привести к числам. При положительном результате проверки в переменную sum_6 кладет результат - сумму данных чисел, а в переменную error_6 кладем false, при отрицательном результате в переменную error_6 кладется значение true, а в переменную sum_6 кладем 0. Типы данных определите самостоятельно. Переменную sum_6 выведите в .out-6. Переменную error_6 в консоль.

// тут объявляем sum_6
// тут объявляем error_6


function f06 () : void {

}

document.querySelector('.b-6').addEventListener('click', f06);


// Task 07
// Функция f07 получает строки из input.i-71 и input.i-72. В переменную max_7 функция должна записать большую из двух строк. Прямым сравнением. Тип переменной max_7 задайте самостоятельно. Выведите переменную max_7 в .out-7.

// тут объявляем max_7


function f07 () : void {

}

document.querySelector('.b-7').addEventListener('click', f07);


// Task 08
// Функция f08 должна прочитать выбранное value из select.s-8 и записать значение в переменную val_8. Тип val_8 определите самостоятельно. Выведите val_8 в .out-8.


// тут объявляем val_8


function f08 () : void {

}

document.querySelector('.b-8').addEventListener('click', f08);

// Task 09
// Создайте переменную val_9 и пропишите ей любое целое число от 2 до 6. Тип данных задайте самостоятельно. Напишите функцию f09, которая будучи запущена сделает option внутри select.s-9 с таким value selected. Значение val_9 выводите в .out-9.

// тут объявляем val_9


function f09 () : void {

}

document.querySelector('.b-9').addEventListener('click', f09);


// //Task 10
// Создайте переменную res_10 тип boolean, значение false. При изменении состояния checkbox.ch-10 изменяйте содержимое переменной res_10. Если checkbox выбран записывайте true, если нет - false. Выводите res_10 в .out-10.

// тут объявляем res_10


function f10 () : void {

}

document.querySelector('.ch-10').addEventListener('change', f10);


// // Task 11
// Создайте переменную res_11 тип number значение 0. При изменении состояния checkbox.ch-11 изменяйте содержимое переменной res_11. Если checkbox выбран записывайте в res_11 значение value, если нет - 0. Выводите res_11 в .out-11.

// тут объявляем res_11

function f11 () : void {

}

document.querySelector('.ch-11').addEventListener('change', f11);


// // Task 12
// Создайте переменную res_12 тип number значение 0. При нажатии кнопки .b-12 функция должна читать содержимое переменной res_12 и если она равна 1 то делать checkbox.ch-12 состояние checked, если равна нулю сбрасывать состояние checked.

// тут объявляем res_12


function f12 () : void {

}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
// Функция f13 получает из input.i-13 число и выводит в .out-13 строку вида 43210 т.е. от введенного числа до нуля. Если ввели 5, то вывод должен быть 543210.

function f13 () : void {


}

document.querySelector('.b-13').addEventListener('click', f13);

// Task 14
// Функция f14 получает из input.i-14 число и присваивает переменной res_14 true если введенное число является четным, false если не четным. Переменную res_14 выведите в .out-14.

// тут объявляем res_14


function f14 () : void {


}

document.querySelector('.b-14').addEventListener('click', f14);


// Task 15
// Создайте переменную s_15 со значением'cdcdbdcsd'. И переменную res_15. Функция должна считать сколько в переменной s_15 символов 'c'. Количество присваивать в переменную res_15. Функция должна выводить s_15 в .out-151 и res_15 в .out-152.

// тут объявляем s_15
// тут объявляем res_15


function f15 () : void {

}

document.querySelector('.b-15').addEventListener('click', f15);



// Task 16
// Создан элемент input.i-16. При вводе символов в него выводите количество введенных символов в переменную res_16. Выводите переменную res_16 в .out-16.

// тут объявляем res_16


function f16 () : void {

}

document.querySelector('.i-16').addEventListener('input', f16);


// Task 17
// Создайте переменную res_17 тип boolean значение false. Создан элемент input.i-17. Функция при нажатии кнопки читает содержимое res_17 и если значение false то делает input.i-17 disabled. Если true - enabled.

// тут объявляем res_17


function f17 () : void {

}

document.querySelector('.b-17').addEventListener('click', f17);


// Task 18
// Создайте строку переменную s_18 равную '10000'. Создайте переменную count_18 равную 0.  При нажатии кнопки .b-18 запускается функция f18. Функция прибавляет единицу к count_18, а потом s_18[count_18] делает равной единице. Остальные символы строки 0.
// Т.е. когда count = 0 строка выглядит '10000'
// Т.е. когда count = 1 строка выглядит '01000'
// Т.е. когда count = 2 строка выглядит '00100'
// Т.е. когда count = 3 строка выглядит '00010'
// Т.е. когда count = 4 строка выглядит '00001'
// Выведите count_18 в .out-181 и s_18 в .out-182

// тут объявляем


function f18 () : void {



}

document.querySelector('.b-18').addEventListener('click', f18);

// Task 19
// Создайте с помощью цикла строку s_19 в которой идет ряд 5_x_3_x_1_x_. Т.е. пользователь вводит число, например 5, а функция генерирует строку от 5 до 0 и заменяет четные числа на x. Разделитель подчеркивание. Число функция берет из input.i-19. Выведите строку в .out-19.

// тут объявляем s_19


function f19 () : void {

}

document.querySelector('.b-19').addEventListener('click', f19);


// Тask 20
// Создайте переменную s_20 куда положите значение нуль. При нажатии кнопки запускается функция f20, которая получает число с .i-20 и считает сумму ряда чисел от введеного до нуля. Например введено 5, искомая сумма 5 + 4 + 3 + 2 + 1. Сумма присваивается в s_20. Выведите s_20 в .out-20.

// тут объявляем s_20



function f20 () : void {


}

document.querySelector('.b-20').addEventListener('click', f20);
