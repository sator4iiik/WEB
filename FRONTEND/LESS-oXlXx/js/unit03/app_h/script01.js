// сгенерировать число от 8 до 11

let n = Math.random();

// 01234567 8 9 10 11

n *= 4;
n = Math.trunc(n);
n += 8;

n

console.log(n);
