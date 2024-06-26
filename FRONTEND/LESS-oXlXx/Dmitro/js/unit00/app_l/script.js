// console.log(v1);    // undefined {компiлятор не стопнувся з помилками}
// console.log(c1);    // err {компiлятор зупинився}
// console.log(l1);    // {також помилка але компiлятор стопнувся}
var v1 = 0;    // глобальна область бачення
const c1 = 1;  // блочна область бачення
let l1 = 2;    // блочна область бачення

// дз погратись з тими 3 переменними

const o1 = {
    name: "Alex",
    city: "LA",
    age: 30,
    'lastname': 'BR',
    // fn: function() {
    //     console.log('1');
    // }

    // fn: () => {
    //     console.log(this);
    // }
}

console.log(o1.name);
console.log(o1['name']);

// console.log(o1);

// const arr1 = [1];

const fn = () => {
    console.log(o1.name);
    console.log(o1['name']); // тiльки такий запис, щоб витягнути з глобальноi областi вiдiмостi | 'name' тому що це string
}

fn()

// console.log(o1.hasOwnProperty('city')); // чи э ключ в obj повертае тру або false, приймае параметри строку вiд назви ключа

console.log('name' in o1 ); // краще використовувати hasOwnProperty(легше) тому що in полiзе в прототипи(важче)

for (const last in o1) { // key || lastname || щозавгодно: поверне ключi 'name', 'city', 'age'
    console.log(last);
    console.log(o1['name']);
    console.log(o1[last]); 'Alex', 'LA', '30' // щоб витягнути з глобальноi областi вiдiмостi використовуемо []
}



// домашка 2.13, 2.5, 2.9 прочитати, " в чому рiзниця через точку з глобальноi точки бачення, та через дужки "

// const b1 = {
//     name : 'davids'
// }



// for (const key in object) {

// console.log(b1.name);
// console.log(b1[name]);
// }

// ПН 09:30


// У вашому коді різниця між o1.name і o1['name'] полягає в тому, як ви
// отримуєте доступ до властивостей об'єкта o1:

// o1.name:
// Це синтаксичний спосіб доступу до властивостей об'єкта, коли ви знаєте ім'я
// властивості наперед. У цьому випадку, якщо ключ (name) є властивістю об'єкта
//  o1, ви можете просто використовувати o1.name, щоб отримати доступ до значення,
// яке відповідає цьому ключу.

// o1['name']:
// Це альтернативний спосіб доступу до властивостей об'єкта, де ім'я властивості
// передається як рядок. Використовуючи квадратні дужки і передавши ім'я властивості
// як рядок ('name'), ви також можете отримати доступ до значення властивості.
// У вашому прикладі o1.name та o1['name'] звертаються до тієї ж самої властивості
// об'єкта o1 з ключем 'name', тому вони повернуть те ж саме значення. Це може бути
// корисним, коли ім'я властивості відоме наперед і не міняється. Якщо ж ім'я властивості
// генерується динамічно або містить спеціальні символи, то використання квадратних дужок є більш гнучким підходом.
