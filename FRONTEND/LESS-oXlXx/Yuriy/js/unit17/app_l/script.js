let age = 33

const student = {
    name: 'Petya',
    // age: 21,
    // сокращенная запись от 'age: age,' (взять переменную из глобальной области видимости)
    age,
    ['university faculty']: 'computer science',
    nouniversity_faculty: 'nocomputer science',
}

// 55 = {}

// const obj = 55
// obj = {}
// obj = obj Assigment to constant variable;

// . (точка это оператор доступа, с помощью которой можно получить доступ)
console.log(student);
console.log(student.name);
// student.name дает доступ к полю name а именно вданном случае к его стоке 'Petya'

// второй способ обращения к обьекту является прямые скобочки console.log(student["name"]);
// скобочная нотация

console.log(student["name"]);

// строка, переменная, выражение


let findProp = 'name';
console.log(student[findProp]);
console.log(student.findProp);
// обращение к полю по строке лежащей в переменной

// student.findProp = 'oh no';

console.log(student);

student.course = 1

console.log(student);


student["course"] = 2;
console.log(student.course);


delete student.age;
console.log(student);
console.log(student["university faculty"]);
// console.log(student.university faculty); // ERR!

student.name = 'Vladimir';

console.log(student);

// хорошая практика обьявлять object через const, так как адрес остается тот же, но мы меняем данные внутри

const cars = ['Mercedes', 'BMW', 'Audi'];

cars.push('Ferrari');

cars.pop();


// скоросной способ сделать обьект

let brand = 'Mersedes';
let type = 'Coupe';
let price = 120000;
let isUsed = false;

const obj = {brand, type, price, isUsed}

obj

function createCar(brand, type, price, isUsed) {
    const objectCar = {brand, type,price, isUsed, fuel: 100}
    objectCar.run = function() {
        this.fuel -= 10;
    }
    return objectCar;
}

const objectCar = createCar('Lamborgini', 'Coupe', 400000, false);

objectCar;

objectCar.run();

objectCar

// домашнее задание (бросаешь трижды кости, после каждого твоего хода бросает компьютер) у кого больше сумма после трех бросков, тот и выиграл
// програмированние коментариями, сначала пишешь ком, потом превращаешь в код
// TODO:
