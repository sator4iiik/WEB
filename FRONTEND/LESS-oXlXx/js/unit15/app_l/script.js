const car_brands = ['Mercedes', 'BMW', 'AUDI', 'Ford'];
let len = car_brands.length;

console.log(car_brands[1]);

// car_brands[len - 1] = 'Ferrari';
// car_brands[len] = 'Lamborgini';
// car_brands[9] = 'Tesla';
car_brands

// car_brands.push('quadra');

// car_brands = 'no';

// const не может быть переопределен, но может быть изменен извнутри
car_brands

const lastItem = car_brands.pop();

lastItem;
car_brands;

// let carString = car_brands.join(' - ');
let carString = car_brands.join(')%$(');
// для того что бы сплитануть, нужны уникальные символы например%$
// let carString = car_brands.join(' ');

carString = `(${carString})`
// carString = carString.split(' - ');
carString = carString.split('%$');
carString;

// while это цикл как и for

// while (true) {
//     console.log('Бесконечный цикл');
// }


// while (false) {
//     console.log('Этот блок команд не будет исполнен');
// }

// while (5 > 7) {
//     console.log('Исполнять этот блок команд, пока 5 > 7');
// }

// let i = 0;
// while (i < 7) {
//     console.log(i, 'Исполнить блок, пока i < 7', i);
//     i++;
// }

// i;

// for (let i = 0; i < 7; i++) {
// }
