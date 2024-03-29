// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

const button1 = document.querySelector('.b-1');
const div1    = document.querySelector('div.out-1');

function f1() {
div1.innerHTML = 1;
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число
// 2. Т.е. как видите, мы можем повесить клик на любой элемент.

let div2 = document.querySelector('.out-2');

function f2() {
    div2.innerHTML = 2;
}

document.querySelector('.i-2').onclick = f2; // кнопкой служит i-2


// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число
// 3. Т.е. как видите, мы можем повеcить клик на любой элемент.

let div3 = document.querySelector('.out-3');

function f3() {
    let input = document.querySelector('.i-3')
    div3.innerHTML = 3;
}

document.querySelector('.p-3').onclick = f3;


// Task 4.
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет
// состояние .i-4 и если он checked - выводит true, если не выбран - false.
// Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер
// задачи. В данном случае - div.out-4

let button4 = document.querySelector('.b-4');
let div4    = document.querySelector('.out-4');

function f4() {
    let myCheckBox = document.querySelector('.i-4');
    if (myCheckBox.checked) {
        div4.innerHTML = true;
        console.log('нажат');
    } else {
        div4.innerHTML = false;
        console.log('не нажат');
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет
// состояние .i-5 и если он checked - выводит value данного элемента, если не
// выбран - false. Вывод везде в задачах, где не указано другое, осуществляется
// в div.out-номер задачи. В данном случае div.out-5

let button5 = document.querySelector('.b-5');
let div5    = document.querySelector('.out-5');

function f5() {
    let myCheckBox = document.querySelector('.i-5');
    let val        = document.querySelector('.i-5').value; // навесил VAL что бы подтянуть значение
    if (myCheckBox.checked) {
        div5.innerHTML = val;
    } else {
        div5.innerHTML = 'false';
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите
// внимание, что даже скрытый hidden input - нам не помеха.

let button6 = document.querySelector('.b-6');
let div6    = document.querySelector('.out-6');

function f6() {
    let val = document.querySelector('.i-6').value;
    div6.innerHTML = val;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input
// .i-7. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если
// меньше. Для подсчета количества символов в строке используйте length.

let button7 = document.querySelector('.b-7');
let div71   = document.querySelector('.out-71');
let div72   = document.querySelector('.out-72');

function f7() {
    let dat = document.querySelector('.i-7').value;
    div71.innerHTML = dat;
    if (dat.length >= 6) {
        div72.innerHTML = 1;
    }
        else if (dat.length < 6) {
            div72.innerHTML = 0;
            } else {
                return;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью innerHTML
// создает в .out-8 новый div с классом "js2" и текстом "new div". Нажали
// несколько раз? Создаем несколько раз!

let button8 = document.querySelector('.b-8');
let div8    = document.querySelector('.out-8');

function f8() {
let dat =  document.querySelector('div.out-8').innerHTML
        = '<div class="js2">new div</div>';
            dat.className = 'js2';
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked
// элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value
// radiobutton. Если не выбран - выводит false.

let button9 = document.querySelector('.b-9');
let div9    = document.querySelector('.out-9');

function f9() {
    let myRadioB = document.querySelector('.r-9');
    let val = document.querySelector('.r-9').value;

    if(myRadioB.checked) {
        div9.innerHTML = val;
    } else {
        div9.innerHTML = 'false';
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из
// .i-10 значение цвета и окрашивает style.background элемента .out-10 в
// этот цвет.

let button10 = document.querySelector('.b-10');
let div10    = document.querySelector('.out-10');

function f10() {
    let dat = document.querySelector('.i-10').value;
    document.querySelector('.b-10').style.background =
    document.querySelector('.i-10').value;
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает
// цвет из .i-111 и присваивает как value элементу .i-112. Т.е. после
// нажатия кнопки выбранный цвета в первом и втором input станут одинаковые.

let button11 = document.querySelector('.b-11');

function f11() {
    // let dat1 = document.querySelector('.i-111').value;
    //             document.querySelector('.i-112').value = dat1;
    document.querySelector('.i-112').value =
    document.querySelector('.i-111').value;
    // console.log(document.querySelector('.i-111').value);
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит
// дату из .i-12 в out-12.

const button12 = document.querySelector('.b-12');
const div12    = document.querySelector('.out-12');

function f12() {
    let data   = document.querySelector('.i-12').value;
    div12.innerHTML = data;
    // console.log(document.querySelector('.i-12').value)
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При изменении положения ползунка .i-13 выводите его значение в out-13.
// Обратите внимание на событие.

const button13 = document.querySelector('.b-13');
const div13    = document.querySelector('.out-13');

function f13() {
    let data   = document.querySelector('.i-13').value;
    div13.innerHTML = data;


}

document.querySelector('.i-13').oninput = f13; // .oninput именно это отвечает за вывод

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.

const button14 = document.querySelector('.b-14');
const div14    = document.querySelector('.out-14');

function f14() {
    let data   = document.querySelector('.t-14').value;
    div14.innerHTML = data;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в
// textarea .t-15 и в .out-15.

const button15 = document.querySelector('.b-14');
const div15    = document.querySelector('.out-15');

function f15() {
    let inp15  = document.querySelector('.i-15').value;
    let tex15  = document.querySelector('.t-15').value;
    div15.innerHTML = `${inp15}${tex15}`;
    // div15.innerHTML = inp15 + ' ' + tex15;

}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option
// из .s-16.

const button16 = document.querySelector('.b-16');
const div16    = document.querySelector('.out-16');

function f16() {
    // для получения выбранного option просто получите select в переменную
    // и select.value;
    let sel161 = document.querySelector('.s-16').value;

    // console.log(document.querySelector('.s-16').value);
    div16.innerHTML = sel161;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного
// option из .s-17.

const button17 = document.querySelector('.b-17');
const div17    = document.querySelector('.out-17')

function f17() {
    let sel17  = document.querySelector('.s-17').value;
    div17.innerHTML = sel17;

}

document.querySelector('.s-17').onchange = f17; // эта штука позволяет сходу же отдавать знаяения при смене

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного
// option и присвойте данный value в input .i-18.

function f18() {
    document.querySelector('.i-18').value = document.querySelector('.s-18').value;
    // console.log(document.querySelector('.s-18').value);
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст и
// присвойте в value элемента .i-19.

const button19 = document.querySelector('.b-19');

function f19() {
    document.querySelector('.i-19').value = document.querySelector('.out-19').textContent;
    console.log(document.querySelector('.out-19').textContent);
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201
// будет аналогично изменять выбранный option в .s-202.

function f20() {
    document.querySelector('.s-202').value = document.querySelector('.s-201').value;
}

document.querySelector('.s-201').onchange = f20;
