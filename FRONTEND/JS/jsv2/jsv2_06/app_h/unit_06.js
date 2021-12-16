//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _
// с помощью внешнего.</p>

const button1 = document.querySelector('.b-1');
const div1    = document.querySelector('.out-1');

function t1() {
    let out = ``;
    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 3; k++) {
            out += `*`;
        }
        out += `_`
    }
    div1.innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и
//перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>

const butn2 = document.querySelector('.b-2');
const div02 = document.querySelector('.out-2');

function t2() {
    let m = ``;
    for(let i = 1; i < 4; i++) {
        m += `<br>${i}<br>`;
        for(let k = 0; k < 3; k++){
            m += `*_`;
        }
        // можно еще тут размещать
    }
    div02.innerHTML = m;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит
// *_,  внешний цикл выводит перенос строки br.</p>

const btn3 = document.querySelector('.b-3');
const div3 = document.querySelector('.out-3');

function t3() {
    let r = ``;

    for(let i = 0; i < 4; i++) {
        for(let k = 0; k < 3; k++){
            r += `*_`;
        }
        r += `<br>`
    }
    div3.innerHTML = r;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *

const btn4 = document.querySelector('.b-4');
const div4 = document.querySelector('.out-4');

function t4() {
    let r = ``;

    for(let i = 1; i < 4; i++) {
        r += `${i}_`;
        for(let k = 1; k <= 5; k++) {
            r += `${k}*`
        }
    }
    div4.innerHTML = r;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла)
// рисует или 0 или 1. Внешний цикл - br.</p>

const btn5 = document.querySelector('.b-5');
const div5 = document.querySelector('.out-5');

function t5() {
    let r = ``;
    for(let k = 0; k < 3; k++){
        for(let i = 0; i < 6; i++) {
            if(i % 2 == 0) {
                r += `1`;
            } else {
                r += `0`;
            }
        }
        r += `<br>`;
    }

    div5.innerHTML = r;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x

const btn6 = document.querySelector('.b-6');
const div6 = document.querySelector('.out-6');

function t6() {
    let r = ``;

    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 1; k++){
            r += `1`;
            for(let l = 0; l < 1; l++){
                r += `0`;
                for(let x = 0; x < 1; x++){
                    r += `x`;
                }
                r += `0`;
            }
            r += `1`;
        }
        r += `x<br>`;
    }
    div6.innerHTML = r;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

const btn7 = document.querySelector('.b-7');
const div7 = document.querySelector('.out-7');

function t7() {
    let r = ``;

    for(let i = 0; i < 4; i++){
        // i = 1
        for(let k = 0; k <= i; k++){
            // k = 0 < 1(i) k++
            r += `*`;
        }
    r += `<br>`;
    }
    div7.innerHTML = r;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

const btn8 = document.querySelector('.b-8');
const div8 = document.querySelector('.out-8');

function t8() {
    let r = ``;

    for(let i = 1; i < 6; i++){
        for(let k = i; k < 6; k++){
            r += `*`;
        }
        r += `<br>`;
    }
    div8.innerHTML = r;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

const btn9 = document.querySelector('.b-9');
const div9 = document.querySelector('.out-9');

function t9() {
    let r = ``;

    for(let i = 0; i < 7; i++){
        r += `<br>`;
        for(let k = 1; k < i; k++){
            r += `${k}_`;
        }
    }
    div9.innerHTML = r;

}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

const btnX = document.querySelector('.b-10');
const divX = document.querySelector('.out-10');


function t10() {
    let r = ``;

    for(let i = 0; i < 5; i++){
        for(let k = 1; k <= 10; k++){
            if(i === 0 && k < 10){
                r += '0';
            }
            r += (10 * i + k) + '_';
        }
        r += `<br>`;
    }
    divX.innerHTML = r;
}

document.querySelector('.b-10').onclick = t10;
