const uniqueArrEl = (arr) => {
    return arr.filter((el, index) => arr.indexOf(el) === index);

    // const res = new Set(arr);
    // return Array.from(res);
}

let strings = ['cecs', 'aeve', 'arve', ')))))', 'aeve', ':D', 'cecs', 'arve', ')))))'];

console.log(uniqueArrEl(strings));

module.exports = uniqueArrEl;

// Пошук унікальних елементів у масиві: Напишіть функцію, яка приймає масив і
// повертає новий масив, який містить лише унікальні елементи з початкового
// масиву. або через метод new Set або через умову
