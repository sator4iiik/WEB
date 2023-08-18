const data = 'Петренко Дмитрий Васильевич [Ноутбук Dell Inspiron G15 5510] 45990грн Предоплата НоваПошта Киев #60';
const data1 = 'Ким Чен Ын [Спички] 9грн Наложенный_Платёж Укрпочта Ужгород #11';

let lastName,
    firstName,
    patronymic,
    item,
    value,
    prepayment,
    mailService,
    city,
    unit;

let pivot1 = data.indexOf(' ');
lastName = data.substring(0, pivot1);

let pivot2 = data.indexOf(' ', pivot1 + 1)
firstName = data.substring(pivot1, pivot2);
firstName = firstName.trim();

let pivot3 = data.indexOf(' ', pivot2 + 1)
patronymic = data.substring(pivot2, pivot3);
patronymic = patronymic.trim();

let pivotStrongOpen = data.indexOf('[');
let pivotStrongClosed = data.indexOf(']');
item = data.substring(pivotStrongOpen + 1, pivotStrongClosed);

let pivot4 = data.indexOf(']') + 1;
let pivot5 = data.indexOf(' ', pivot4 + 1);
value = data.substring(pivot4, pivot5);
value = value.trim();

let pivot6 = data.indexOf(' ', pivot5 + 1);
prepayment = data.substring(pivot5, pivot6);
prepayment = prepayment.trim();

let pivot7 = data.indexOf(' ', pivot6 + 1);
mailService = data.substring(pivot6, pivot7);
mailService = mailService.trim();

let pivot8 = data.indexOf(' ', pivot7 + 1);
city = data.substring(pivot7, pivot8);
city = city.trim();

let pivot9 = data.indexOf('#');
unit = data.substring(pivot9);

console.log(` `);
console.log(`=========================================`);
console.log(` `);
console.log(`Призвище: ${lastName}`);
console.log(`Ім'я: ${firstName}`);
console.log(`По Батькові: ${patronymic}`);
console.log(`----------------`);
console.log(`Посилка: ${item}`);
console.log(`Вартiсть: ${value}`);
console.log(`Передплата: ${prepayment}`);
console.log(`Пошта: ${mailService}`);
console.log(`Мiсто: ${city}`);
console.log(`Вiддiлення: ${unit}`);
console.log(` `);
console.log(`=========================================`);
console.log(` `);
