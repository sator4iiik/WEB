function rand(from, to) {
    const range = to - from + 1;
    let number = Math.random() * range;
    return Math.trunc(number) + from;
}

function numStub(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

// let wagon = rand(1, 15);
// let coupe = rand(1, 9);
// let place = rand(1, 4);

let wagon = 3;
let coupe = 3;
let place = 3;

let time = `${numStub(rand(0, 23))}:${numStub(rand(0, 23))}`;
let dispatch = rand(39999, 90000);
let assignment = rand(39999, 90000);
let train = rand(1900, 3000);
let tea = '';

function teaCompliment() {
    if (wagon == coupe && coupe == place) {
        tea = 'счастливые циферки, уже несем чай!)';
    } else {
        return 0;
    }
}

teaCompliment();


// html first
// добавление фитч во врема рефакторинга - очень плохая практика
// documement.quer... ни в коем случае не должно быть в model
