//000000000000000000000000000000000000000000000000000000
// 00 Number

// const num   = 42    // integer
// const float = 42.42 // float
// const pow   = 10e3  // возвести в степень

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER + 1)
// console.log('Math.pow 53', Math.pow(2, 53) -1 )
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('делю на ноль 1/0', 1 / 0)
// console.log(Number.NaN)  // Not a number(ошибка)
// console.log(typeof NaN)  // Но забавно то что представлено оно числом
// console.log(2 / undefined)


// const negative = -42
// console.log(negative < 10)

// const weird = 2 / undefined
// console.log(isNaN(weird))            // проверка числа на NaN
// console.log(Number.isNaN(weird))     // доступна у объекта так же Number
// console.log(Number.isNaN(42))        // доступна у объекта так же Number
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))     // конечно ли это число

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)


// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// ```````````````````````````````````````

// console.log(0.4 + 0.2) // 0.6
// console.log((2 / 5) + (1 / 5))
// console.log((0.4 + 0.2).toFixed(5)) // знаков после запятой но оно в строку превратилось
// console.log(parseFloat((0.4 + 0.2).toFixed(5))) // переводит в число правильно

//````````````````````````````````````````
// BigInt (новый тип данных в js)
// console.log(9007199254740991) // safe integer
// console.log(9007199254740991999999) // неадекватное поведение

// console.log(9007199254740991999999n) // big int работает только с big int
// console.log(-9007199254740991999999n) // big int работает только с big int
// console.log(9007199254740991999999n * 9007199254740999999n) // big int работает только с big int
// // //console.log(9007199254740991999999.32409n) // only integer (other error)
// // //console.log((10n - 4) //error
// console.log(parseInt(10n) - 4)
// console.log((10n) - BigInt(4))
// console.log(5n / 2n)

//````````````````````````````````````````
// MATH

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(42, 12, 23, 11, 422))
console.log(Math.min(42, 12, 23, 11, 422))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.trunc(4.9))
console.log(Math.random(0, 100))

//``````````````````````````````````````````````````````````
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} // генератор рандомных чисел

console.log(getRandomBetween(10, 42)) // диапазон рандома

//1111111111111111111111111111111111111111111111111111111111
// 01
