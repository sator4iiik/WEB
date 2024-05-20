// каллбеки
// callback это возможность сделать указатель с одной функции присвоив ей
// вторую сославшись на одну и ту же область памяти

function f1() {
    return 'hello'
}

const f2 = f1

const result = f2()

result

// const f2 = f1 ссылаются на одну и ту же область памяти
// сущности первого порядка (это что то что я могу, сущости которые я могу присвоить, передать, и вернуть из функ)

let n = 33

function primary(callback) {
    callback();
}

function secondary() {
    n = n + 9;

}


primary(secondary) // это и есть каллбек функцией котору я могу использовать внутри функции праймари
primary
console.log(n);

// сделать в паттерне MVC


// нужда в каллбеках появляется тогда, когда у меня в функции появляются данные но я не знаю что с ними сделать



function calculate(callback) {
    const a = 33;
    const b = 9;
    return callback(a, b);
}

function plus(x, y) {
    return x + y;
}

function multi(x, y) {
    return x * y;
}

// const res = calculate(plus);
const res = calculate(multi);

res;

function fullname(callback) {
    first = 'oleksandra';
    second = 'ryabchuk';

    return callback(first, second);
}

function getConcat(str1, str2) {
    return str1 + ' ' + str2;
}

let resu
resu = fullname(getConcat);

resu

function initials(str1, str2) {
    let str = str1[0]+ '.' + str2[0] + '.';
    return str.toUpperCase();
}

resu = fullname(initials);
resu
