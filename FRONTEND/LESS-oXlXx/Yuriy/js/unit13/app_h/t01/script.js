let balance;
let age;

function checkUser(balance, age, parentPermission) {
    balance;
    age;
    parentPermission;
    return balance >= 300 && (age >= 18 || parentPermission);
}

function rand(from, to) {
    const range = to - from + 1;
    let number = Math.random() * range;
    return Math.trunc(number) + from;
}

checkUser(12, 31, true);

let visitors = rand(1, 100);

console.log();

const personAge = rand(7, 80);
const personBalance = rand(50, 500);
const parentPermission = Math.random() > .5;
let result;

while (visitors++) {

    console.log(personAge)        ;
    console.log(personBalance)    ;
    console.log(parentPermission);


    if (personAge <= 18) {
        parentPermission;
        result = checkUser(personBalance, personAge, parentPermission);
    } else {
        result = checkUser(personBalance, personAge);
    }
    return result;
}

console.log(result);
