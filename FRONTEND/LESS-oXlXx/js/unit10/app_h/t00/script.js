// 100 000
// 1 .. 900sec
let visitors;

// 2 000 000
let views;

let averageViews;
// 900 sec
let randomSeconds;

function randVisitors() {
    const rand_from = 0;
    const rand_to = 100000;
    const rand_range = rand_to - rand_from + 1;

    let rand_number = Math.random() * rand_range;
    rand_number = Math.trunc(rand_number) + rand_from;

    return rand_number;
}

visitors = randVisitors();

function randViews() {
    const rand_from = 0;
    const rand_to = visitors * 20;
    const rand_range = rand_to - rand_from + 1;

    let rand_number = Math.random() * rand_range;
    rand_number = Math.trunc(rand_number) + rand_from;

    return rand_number;
}

views = randViews();

function middleViewsPerVisitor() {
    let mid = views / visitors;
    mid = Math.trunc(mid);

    return mid;
}

averageViews = middleViewsPerVisitor();

function randSeconds() {
    const rand_from = 1;
    const rand_to = 900;
    const rand_range = rand_to - rand_from + 1;

    let rand_number = Math.random() * rand_range;
    rand_number = Math.trunc(rand_number) + rand_from;

    return rand_number;
}

randomSeconds = randSeconds();

function middleSecPerVisitor() {
    randomSeconds
    let mid = randomSeconds / averageViews;
    mid = Math.trunc(mid);

    return mid;
}

let midSecPerVis = middleSecPerVisitor();

console.log(`//////////////////////////////////`);
console.log('``````````````````````````````````');
console.log(`   статистика за 24 часа`);
console.log(``);
console.log(`посетители:      ${visitors}`);
console.log(`просмотры:       ${views}`);
console.log(``);
console.log('``````````````````````````````````');
console.log(``);
console.log('..................................');
console.log(`среднее время одного просмотра:
                 ${midSecPerVis}s.`);
console.log('``````````````````````````````````');
console.log(``);
console.log(`----------------------------------`);
console.log(`~ \u{1F441}  на 1 пользователя: \x1b[32m${averageViews}\x1b[0m`);
console.log(`----------------------------------`);
console.log(``);
console.log(`среднее время проведенное
пользователем на сайте: ${randomSeconds}s.`);
console.log(``);
console.log(`//////////////////////////////////`);

// посетители (visitors): первый заход на сайт за последние 24 часа от одного уникального пользователя Сети
// просмотры (views) : все заходы на сайт за последние 24 часа. в том числе повторные заходы и обновления
// страниц от одного и того же уникального пользователя Сети

// логично, что просмотров(views) будет больше чем посетителей(visitors)
// реализовать модель, имитирующую работу счётчика посещаемости сайта за последние 24 часа.
// 1) сгенерировать случайное количестово посетителей (visitors) от 0 до 100 000
// 2) сгенерировать случайное количество просмотров (views). значение не должно превышать
// 20 просмотров на посетителя
// 3) на основании сгенерированных значений количества посетителей (visitors) и просмотров (views),
// посчитать среднее количество просмотров на посетителя. округлить до десятых

// 4) сгенерировать случайное количество времени в секундах, которое посетитель (visitors)
// проводит на сайте в среднем. от 1 секунды до 900 секунд

// 5) на основании сгенерированного времени нахождения посетителя(visitors) на сайте посчитать,
// сколько в среднем по времени занимает один просмотр (views). округлить до десятых
// логично, что среднее время на один просмотр (views) будет меньше, чем среднее время
// нахождения пользователя (visitors) на сайте. потому что на одного посетителя может быть несколько просмотров
