const v1 = 'string';
const v2 = 33;
const v3 = true;
var v4; // undefined
const v5 = null;
const v6 = {
    name: 'fff',
};

console.log(typeof v1);


// function f1(arg) {
//     if(typeof arg === 'number' && !isNaN(arg)) {
//         console.log('number');
//     } else {
//         console.log('Not a number');
//     }
// }

// const f1 = (arg) => {
//     if (typeof arg === 'number') {
//      console.log('number');
//     } else {
//      console.log('Not a number');
//     }
// }

// const f1 = (arg) => {
//     if(typeof arg === 'number') {
//         console.log('number');
//     } else {
//         console.log('Not a number');
//     }
// }
// вслитiе дiе на function declaration() через це функцiя може працювати некорректно
// вслитiе не дiе на function expression(стрiлочна функцiя)

// f1('Петро Порошенко');
// f1(6);

const arr1 = [10, 2, 3, 4, 5, 1];
arr1.map((el, index) => {

});

const modal = () => {
    return 'error';
}

const ff = () => modal() // => и есть return

const ff2 = () => {
    return console.log('davids');
}

// proto - це обьект в якому зберiгаются всi обьекти, всi фiтчи, всi функцii, всi методи

const f2 = (arg) => {// expreeion function
    let min = arg[0]; //first element from arras
    for (let i = 0; i < arg.length; i++) { // cyckle
        console.log(arg[i]);
        if(arg[i] < min) { // elemnet from array < min(first element from arras)
            min = arg[i];
        }
    }
    console.log('result: ', min, 'ggg');
}

f2(arr1);

// sho treba dlya wurishennya
// instrument wurishennya
// logika wurishennya

const obj1 = {
    fff: 'ff1',
}

const obj2 = {
    fff: 'ff1',
}


const obj3 = {
    ccc: 'cc2',
}

// примитивний тип данних це той який не мае своiх методiв(функцii вiд js)
// не примiтиви це {obj}, [arr] бо вони мають методи та своi функцii map, for in, indexOf
// не примiтиви це ссилочний тип данних

// примiтиви === порiвнюются по типу даниих а не примiтиви по сииках на них

// {} === {} обьекты сравниваются в js по ссылкам(ячейки в памяти)
if (obj1 === obj2) console.log('true'); // false тому шо зрiвнюются не типи данних а ссилки в них
else console.log('false');
const r = 5
// r(4, -1);

// r = function f3() {
//     return 0;
// }

// r(4);

// почитати за MAP (приймае callback функцiю, та вона приймае el з масииву та index пiд яким цей el знаходится)
// 2.10, 2.11, 2.13, 2.15, 2.14, 2.17, 5.5
// дiаграмма коду

// строковые литералы

// 42
// 'hello'
// "world"
// `foobar`
// true
// false
// {}
// []
// undefined
// null



const cccc = {
    name : 'di',

}


const obj4 = {
    vvvv: 'vvvv',
    xxxx: 22222,
}

obj4.bbbb = false;
obj4['nnnn'] = 'mmmm';

delete obj4.nnnn;

console.log(obj4);


// boolean

// Пустая строка, 0, null, undefined, NaN, false - эти значения дают - false
//


// map array methood
const arr = [{id : 1}, {id : 2}, {id : 3}, {id : 4}]
arr[0];



arr.map((el, index, arr) => {

    console.log(arr);

    if(el.user) console.log(el.user);
    else  console.log('22');


    console.log(el.user);
    console.log(el.id);
    console.log(index);

});

// MAP принимает callback(лямбда) функцию аргументом, в свою очередь callback функция
// аргументами принимает текущий эелемент массива индекс под которым елемент
// находится в массиве и массив на котором осуществляется проход
// аргументы callback(лямбда) функции принимают обязательные аргументы и
// необязательные аргументы. el - обязательный, index, arr - необяз

// map возвращает измененную копию оригинального массива
// и используется для отрисовки рендера 95% (невсегда 5%)

// find
const arr2 = [{id : 1, user : 'pwen'}, {id : 2, user : 'rivaldo'}, {id : 3, user : 'backham'}, {id : 4, user : 'figo'}]

const f3 = (id) => {
    // el это каждый елемент массива
    const obj = arr2.find((el) => { //  и map и find для
        if (el.id === id) {
            return true;
        }
        // find проходится по массиву и возвращает и когда находит то что он искал - true
        // и останавливает свою работу
    });
    return console.log(obj);
    // метод find аргументом принимает callback(лямбда) функцию,
    // el, index, arr - по котором проходит эта колбек функция
    // необязательные аргументы. el - обязательный, index, arr - необяз
}

f3(3)

const arr3 = [1, 2, 3];
const arr4 = ['a', 'b', 'c'];
const arr5 = [{name : 'dd'}, {name :'ff'}, {name : 'ff'}];

console.log(
    arr5.map((el) => {
        console.log(el.name);
    })
);

// find map filter (3 кита) должен очень хорошо знать
// создаю 5 arr (обьект ) - find создать функцию которая аргументом принимает id
// функция должна вернуть тот обьект.id который совпадает с аргументом
