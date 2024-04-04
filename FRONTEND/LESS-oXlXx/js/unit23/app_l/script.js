// выражения expression

// не регулярные выражения

// регулярные выражения
// выражения могут быть написаны в глобальной области, выражения могут быть отправлены в функцию аргументом, вражения могут быть возвращены ретурном
1 + 1
'a' + 'b'
1000 / 10

// программа состоит из выражений


// expression statement

// statement - что то типо команды
// statement не могут быть отправлены в функцию аргументом, вражения не могут быть возвращены ретурном,


// result = if (true) {} // if это statement
// result = let i = 0;


// function fullName(callback) {
//    const firstName = 'petya'
//    const secondName = 'petrov'
//    return callback(firstName, secondName)
// }

function concat(str1, str2) {
    return str1 + ' ' + str2
}

let result

// result = fullName(concat)
// result

// result = fullName(concat)
// result

1 + 1
'a' + 'b'
1000 / 10
typeof 42
result = 1 + concat('str1', 'str2')
'str1'.toUpperCase() + 'j'
// fullName('a' + 'b')

const obj = {
    ['a' + 'b']: 42,
}

result = obj['a' + 'b']
result

result = `!${'a' + 'b'}!`
result


42
3.14
'hello'
"world"
`foobar`
true
false
{}
[]
undefined
null

// литералы в js

const re = /ab+c/; // RegExp литерал
