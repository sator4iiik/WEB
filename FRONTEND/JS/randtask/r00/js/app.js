// alert('hello world')

// camelCase

// 1 переменные
// const firstName = 'Oleksii'
// const lastName = 'Reznikov' // string
// let age = 20                // number
// const isProgrammer = true   //bool

// firstname = 'Aleks'

// const  = 'private'
// const $= 'some value'

// const if = 'mkef'   / err
// const withNum5 = '5'
// const 5widthNum = 5 / err



//```````````````````````````````````````````````````
// 2 мутирование

// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// console.log(age.toString())
// console.log(age)

// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age) // функция не присутствует в самом языке

// const lastName = prompt( message, 'Введите фамилию')
// alert(firstName + ' ' + lastName)

// let currentYear = 2021
// const birthYear   = 1992

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// // c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(c)




// ````````````````````````````````````````````````````````````
// 4 типов данных

// const isProgrammer = true      // bool
// const firstName = 'Vladilen'   // string
// const age  = 26                // num
// let x                          // null



// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof null) // это баг он не возрвращает null (undefined)
// console.log(typeof age)
// console.log(typeof x)




//```````````````````````````````````````````````````````````````
// 5 приоритет операторов

// const fullAge = 26
// const birthYaer = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYaer >= fullAge // 26 >= 27
// console.log(isFullAge)



//``````````````````````````````````````````````````````````````
// 6 условные операторы


// const courseStatus = 'fail'              // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Инициализация завершена')
// } else if (courseStatus === 'pending') {
//     console.log('Инициализация в процессе')
// } else {
//     console.log('Fail: Ничего не вышло \x3a\x28')
// }

// const num1 = 42   // number
// const num2 = '42' // string

// const isReady = true

// if (isReady === true) {
//     console.log('Все готово!')
// }

// const isReady = false

// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log('Ничего не готово \x3a\x28')
// }

// тернарный оператор накатывается так же как и в С
// isReady ? console.log('Все готово!') : console.log('Ничего не готово \x3a\x28')

// console.log(num1 ==  num2)   //начнет сравнивать строки переведя number в string
// console.log(num1 === num2)   // начнет сравнивать включая типы данных (правильно)

// динамически типизируемый язык и тут с этим обычно возникают проблеммы


// ````````````````````````````````````````````````````````````````````
// 7 булева логика

// Логическое && И (то И другое)

// true  && true  == true
// true  && false == false
// false && true  == false
// false && false == false

// Логическое || ИЛИ (то ИЛИ другое)

// true  || true  == true
// true  || false == true
// false || true  == true
// false || false == false

// Логическое ! НЕ

// true   == true
// !true  == false
// !!true == true


//88888888888888888888888888888888888888888888888888888888888888888888
// 8 функции

// function calculateAge(year) {
//     return 2021 - year
// }
// // const myAge = calculateAge(1992)
// // console.log(calculateAge(1992))
// // console.log(calculateAge(2004))
// // console.log(calculateAge(1999))

// function logInfoAbout(firstName, yearB) {
//     const age = calculateAge(yearB)

//     if (age > 0) {
//     console.log('Человек по имени ' + firstName + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Oleksii', 1992)
// logInfoAbout('Anastasia', 1999)
// logInfoAbout('Anastasia', 2022)

//99999999999999999999999999999999999999999999999999999999999999999999
// 9 массивы

const cars = ['Nissan', 'Mersedes', 'Ford']
// const cars = new Array('Nissan', 'Mersedes', 'Ford')
console.log(cars)

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])

console.log(cars.length)



//10101010101010101010101010101010101010101010101010101010101010101010
// 10
