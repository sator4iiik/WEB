// TASK 01
// По нажатию b-1 выполняется функция f1.
// Функция считывает значение из i-1 и с помощью indexOf и ищет
// данный элемент в массиве a1. Выводит в out-1 результат работы.
// Как тестируется - ввожу числа и проверяю результат.

let out01 = document.querySelector('.out-1');
let a1 = [4, 12, 4, 2, 15, 98];

const f1 = () => {
    let elem = +document.querySelector('.i-1').value;

    out01.innerHTML = a1.indexOf(elem);
    // обратите внимание в массиве только ЧИСЛА!
}

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из
//  i-2 и с помощью indexOf и ищет данный элемент в массиве a2.
// Выводит в out-2  false, если такого элемента нет в массиве, и
// ИНДЕКС элемента если есть.
// Как тестируется - ввожу чис

let out02 = document.querySelector('.out-2');
let a2 = [4, 12, 4, 2, 15, 98];

const f2 = () => {
    let elem = +document.querySelector('.i-2').value;
    // обратите внимание в массиве только ЧИСЛА!g('02');
    if(a2.indexOf(elem) !== -1) {
        out02.innerHTML = a2.indexOf(elem);
    } else {
        out02.innerHTML = false;
    }

}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из
// i-3 и с помощью indexOf и ищет данный элемент в массиве a3. Выводит
// в out-3  false, если такого элемента нет в массиве, и true если есть.
// Как тестируется - ввожу числа и проверяю результат.

let out03 = document.querySelector('.out-3');
let a3 = [4, 12, 4, 2, 15, 98];

const f3 = () => {
    let elem = +document.querySelector('.i-3').value;
    if(a3.indexOf(elem) !== -1) {
        out03.innerHTML = true;
    } else {
        out03.innerHTML = false;
    }
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция принимает 2 параметра,
// первый - массив, второй элемент. Функция должна с помощью indexOf найти и
// вывести в out-4 индекс искомого элемента в массиве a4 или -1 если элемента
// в массиве нет. Протестируйте задачу на строке '2' и числе 2. Сделайте выводы.

let out04 = document.querySelector('.out-4');
let a4 = [1, '1', 2, '2', '3'];

const f4 = (arr, elem) => {
    if(arr.indexOf(elem) !== -1) {
        out04.innerHTML = arr.indexOf(elem);
    } else {
        out04.innerHTML = -1;
    }
    // let elem = document.querySelector('.i-4').value;
}

document.querySelector('.b-4').addEventListener('click', () => {f4, 2});

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5-1 и
// индекс с которого начинается поиск в массиве с i-5-2 и с помощью indexOf и
// ищет данный элемент в массиве a5 c позиции указанной в i-5-2. Выводит в out-5 индекс
// если он есть в массиве, или -1 если нет.
// Введите пары и изучите поведение
// число 33 и индекс старта 2
// число 33 и индекс старта 0
// число 44 и индекс старта 50
// число 44 и индекс старта -3

let o5 = document.querySelector('.out-5');
let a5 = [22, 33, 44, 55, 66, 77, 88, 33, 44, 55, 66, 77];

const f5 = () => {
    // проблема состояла в том, что в инпуты заходил стринг, нужно было перевести в намбер
    // соответсвенно обрабатывать каждый тип данных нужно по своему
    // так же предпологается что стандартно
    // в инпут может войти только стринг и намбер
    // остальные типы д редко или почти никогда не используются

    let val = +document.querySelector('.i-5-1').value;
    let ind = +document.querySelector('.i-5-2').value;

    // необходима проверка на то, стринг это или намбер заходит
    // иначе без этой проверки будет ждать NaN
    // проверка гипотетически шла бы после проверки на пустую строку

    if (val !== '') {
        if (ind === '') {
            o5.innerHTML = a5.indexOf(val, 0);
        } else {
            o5.innerHTML = a5.indexOf(val, ind);
        }
    }
}

// TASK 06
// По нажатию b-6 выполняется функция f6. Функция считывает значение из
// i-6 и с помощью indexOf и ищет данный элемент в СТРОКЕ a6. Выводит в
// out-6 результат поиска.
// Изучите поведение введя по очереди 3, '3', 'a', 5, ytt


let a6 = '987123abcdefyttb4';

const f6 = () => {
    let ind = '';
    let inp = document.querySelector('.i-6').value;
    let arr = a6.split(''); // разбиваем строку на массив символов
    if (inp !== ''){
        ind = arr.indexOf(inp);
    }
    document.querySelector('.out-6').innerHTML = ind;
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция принимает 2 параметра,
// первый массив, второй - искомое число. Функция должна эмулировать
// работу метода indexOf с помощью цикла. Что понимается под эмуляцией?
// Мы не используем метод indexOf, а циклом перебираем массив и с помощью
// if решаем задачу. Функция должна только либо выводить в out-7 число -1,
// если искомого числа нет в массиве, или индекс числа в массиве.


let a7 = [21, 22, 23, 24, 25, 26, 27];
let num = +document.querySelector('.i-7').value;

const f7 = (arr, elem) => {
    let out = '';
    if (elem !== '') {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === elem) {
                out = i;
            }
        }
        if(out === '') {
            out = -1;
        }
    }

    document.querySelector('.out-7').innerHTML = out;
}

// TASK 08 * - сложная
// По нажатию b-8 выполняется функция f8. Функция должна получить число
// из i-8 и с помощью цикла и indexOf найти все индексы данного числа в
// массиве a8. Индексы должны быть добавлены в res08. Результат (res08)
// выведите в out-8. Если число не встречается в массиве, то res08 должен
//быть пустым.



let a8 = [1, 2, 3, 1, 3, 2, 55, 23, 53, 24, 55,3, 1, 5, 2, 3, 5, 4,6,7,12, 53];
let res08 = [];

const f8 = () => {
    // ваш код
    res08 = []; // очищаем массив при заходе в функцию
    let inp = +document.querySelector('.i-8').value;
    if (inp !== ''){
        for (let i = 0; i < a8.length; i++){
            if(inp === a8[i]) {
                res08 += `${i} `
            }
        }
    }
    document.querySelector('.out-8').innerHTML = res08;
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна получить число
// из i-9 и с помощью цикла и indexOf вывести в out-9 все индексы вложенных
//  в a9 массивов содержащие указанное число. Вывод через пробел. Если
// совпадений нет - выводите пустую строку.
// пример если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели число 5 то в out-9 должен быть вывод 2 3 поскольку
// [3,4,5] находится в a9 под индексом 2,
// a [6, 7, 5] под индексом 3
// пример 2. Если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели 3 то в out-9 будет 1 2

let a9 = [
    [55, 22, 33],
    [3,4,22, 7],
    [66, 2, 12, 55],
    [142, 12, 7, 15],
    [45, 12, 67, 32]
];
let res09 = [];

const f9 = () => {
    res09 = [];
    slicedArr = [];
    let inp = +document.querySelector('.i-9').value;
    if (inp !== ''){
        for (let i = 0; i < a9.length; i++) {
            for (let k = 0; k < a9[i].length; k++) {
                if(inp === a9[i][k]) {
                    res09 += `${i} `;
                }
            }
        }
        res09 = res09.slice(0, -1);
        // for (let i = 0; i < res09.length; i++) {
        //     slicedArr[0] = res09[i];
        // }
    }
    document.querySelector('.out-9').innerHTML = res09;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Как вы заметили,
// indexOf ищет по строгому сравнению ( 4 task ). Давайте
// напишем функцию f10 которая принимает два параметра -
// массив и искомую строку или число. Функция должна ВОЗВРАТИТЬ -1
// если никаких совпадений нет, либо индекс при нестрогом совпадении.
// Пример:

// массив a10 = [1, 2, '3'] введи 3 получили индекс 2
// массив a10 = [1, 2, '3'] введи '3' получили индекс 2
// массив a10 = [1, 2, '3'] введи '2' получили индекс 1
// массив a10 = [1, 2, '3'] введи '9' получили -1
// массив a10 = [1, 2, '2', '3'] введи '2' получили 1
// массив a10 = [1, 2, '2', '3'] введи 2 получили 1

let a10 = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11];

const f10 = (arr, elem) => {
    let out = '';
    for(let i = 0; i < arr.length; i++){
        if(elem == arr[i]) {
            return i;
        }
    }
}


document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', ()=>{
    f4(a4, '2'); // изучите какой индекс вывело. Разберитесь почему
//    f4(a4, 2); // изучите какой индекс вывело. Разберитесь почему
});
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', ()=>{
    let num = +document.querySelector('.i-7').value;
    f7(a7, num);
});
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', ()=>{
    document.querySelector('.out-10').innerHTML = f10(a10, 32);
});

        // if (val !== '') {
        //         if (val[0] && val[i].lenght == '\x27'){
        //         if (ind === '') {
        //             o5.innerHTML = a5.indexOf(val, 0);
        //             console.log('val: ', typeof val);
        //             console.log(val);
        //         } else {
        //             o5.innerHTML = a5.indexOf(val, ind);
        //         }
        //         if (val >= '\x30' && val <= '\x39'){
        //             val = +document.querySelector('.i-5-1').value;
        //             console.log('val: ', typeof val);
        //             console.log(val);
        //             if (ind === '') {
        //                 o5.innerHTML = a5.indexOf(val, 0);
        //                 console.log('val: ', typeof val);
        //                 console.log(val);
        //                     // проверка на то зашло ли в ind индекс, если строка
        //                     // пуста искать с нуля
        //             } else {
        //                 o5.innerHTML = a5.indexOf(val, ind);
        //             }
        //         }
        //     }
        // }
