// Террагард - Terragarður
// Сустайнгланд - Sustainingland
// Бъиория - Björland
// Веллурания - Vellurania
// Эльмария - Elmaría

function twoDigitRand() {
    // 0123456789
    let m = Math.random();
    m *= 10;
    m = Math.trunc(m);

    // 0123456789
    let v = Math.random();
    v *= 9;
    v = Math.trunc(v);

    return +`${m}${v}`;
}

function threeDigitRand() {
    // 0 1234
    let n = Math.random();
    n *= 4;
    n = Math.trunc(n);
    n += 1;

    // 0 123456789
    let m = Math.random();
    m *= 9;
    m = Math.trunc(m);
    m += 1;

    // 0 123456789
    let v = Math.random();
    v *= 9;
    v = Math.trunc(v);
    v += 1;

    return +`${n}${m}${v}`;
}

// Террагард - Terragarður
let tAir = threeDigitRand();
let tWhater = twoDigitRand();
let tBiodiversity = twoDigitRand();
let tAirTenY = threeDigitRand();
let tWhaterTenY = twoDigitRand();
let tBiodiversityTenY = twoDigitRand();

// Сустайнгланд - Sustainingland
let sAir = threeDigitRand();
let sWhater = twoDigitRand();
let sBiodiversity = twoDigitRand();
let sAirTenY = threeDigitRand();
let sWhaterTenY = twoDigitRand();
let sBiodiversityTenY = twoDigitRand();

// Бъиория - Björland
let bAir = threeDigitRand();
let bWhater = twoDigitRand();
let bBiodiversity = twoDigitRand();
let bAirTenY = threeDigitRand();
let bWhaterTenY = twoDigitRand();
let bBiodiversityTenY = twoDigitRand();

// Веллурания - Vellurania
let vAir = threeDigitRand();
let vWhater = twoDigitRand();
let vBiodiversity = twoDigitRand();
let vAirTenY = threeDigitRand();
let vWhaterTenY = twoDigitRand();
let vBiodiversityTenY = twoDigitRand();

// Эльмария - Elmaría
let eAir = threeDigitRand();
let eWhater = twoDigitRand();
let eBiodiversity = twoDigitRand();
let eAirTenY = threeDigitRand();
let eWhaterTenY = twoDigitRand();
let eBiodiversityTenY = twoDigitRand();

let tAlertCoef = '';
let tNotif = '';

function tAlertRand() {
    // 0 123456789
    let m = Math.random();
    m *= 10;
    m = Math.trunc(m);

    if (m === 0) {
        tAlertCoef = 0;
        tAir = twoDigitRand();
        tNotif = `\x1b[32m▲ рост\x1b[0m`;
        return `
        \x1b[32m[ОБЩЕСТВО ПРОЦВЕТАЕТ]\x1b[0m`;
    } else if (m === 1) {
        tAlertCoef = 1;
        tAir = twoDigitRand();
        tNotif = `\x1b[32m▲\x1b[0m рост`;
        return `
        [УГРОЗЫ ОТСУТСВУЮТ]`;
    } else if (m === 2) {
        tAlertCoef = 2;
        tAir = twoDigitRand();
        tNotif = `\x1b[32m▲\x1b[0m рост`;
        return `        нормализация выбросов
        [НОРМАЛИЗАЦИЯ ВЫБРОСОВ]`;
    } else if (m === 3) {
        tAlertCoef = 3;
        tAir = twoDigitRand();
        tNotif = `\x1b[32m▲\x1b[0m улучшился`;
        return `обнаружена переработка твердых отходов
            [ЭКОСИСТЕМА ОЧИЩАЕТСЯ]`;
    } else if (m === 4) {
        tAlertCoef = 4;
        tNotif = `\x1b[32m▲\x1b[0m допустимо`;
        return `обнаружена массивная вырубка лесов
        [БИОМ СОКРАЩАЕТСЯ]`;
    } else if (m === 5) {
        tAlertCoef = 5;
        tBiodiversity = tBiodiversity - 30;
        tNotif = `\x1b[33m▼\x1b[0m падение`;
        return ` промысшленность
[ВЫСОКИЙ УРОВЕНЬ ИНДУСТРИАЛЬНЫХ ВЫБРОСОВ]`;
    } else if (m === 6) {
        tAlertCoef = 6;
        tNotif = `\x1b[33m▼\x1b[0m падение`;
        return `высокий уровень индустриальных выбросов
            \x1b[33m[БИОМ ВЫМЕРАЕТ]\x1b[0m`;
    } else if (m === 7) {
        tAlertCoef = 7;
        tNotif = `\x1b[33m▼ негативный\x1b[0m`;
        tWhater = -999;
        tCoefWhater = -999;
        tBiodiversity = -999;
        tCoefBiodiversity = -999;
        return `    \x1b[33m⚠ высокий уровень загрязнения ⚠
        [НЕ ПРИГОДНА ДЛЯ ЖИЗНИ]\x1b[0m`;

    } else if (m === 8) {
        tAlertCoef = 8;
        tNotif = `\x1b[31m▼ критически\x1b[0m`;
        tWhater = -999;
        tCoefWhater = -999;
        return `\x1b[31m☢ обнаружен высокий уровень радиации ☢
        [НАХОЖДЕНИЕ ОГРАНИЧЕНО]\x1b[0m`;

    } else {
        tAlertCoef = 9;
        tNotif = `\x1b[31m▼ критически\x1b[0m`;
        tAir = 999;
        tWhater = -999;
        tBiodiversity = -999;
        tCoefAir = 999;
        tCoefWhater = -999;
        tCoefBiodiversity = -999;
        return `\x1b[31m☠ внимание немедленно покиньте территорию ☠
            [ОПАСНО ДЛЯ ЖИЗНИ]
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\x1b[0m`;
    }
}


let tCoefAir = tAirTenY - tAir;
let tCoefWhater = tWhater - tWhaterTenY;
let tCoefBiodiversity = tBiodiversity - tBiodiversityTenY;

let tAlertNotif = tAlertRand();


let sAlertCoef = '';
let sNotif = '';


function sAlertRand() {
    // 0 123456789
    let m = Math.random();
    m *= 10;
    m = Math.trunc(m);

    if (m === 0) {
        sAlertCoef = 0;
        sAir = twoDigitRand();
        sNotif = `\x1b[32m▲ рост\x1b[0m`;
        return `
        \x1b[32m[ОБЩЕСТВО ПРОЦВЕТАЕТ]\x1b[0m`;
    } else if (m === 1) {
        sAlertCoef = 1;
        sAir = twoDigitRand();
        sNotif = `\x1b[32m▲\x1b[0m рост`;
        return `
        [УГРОЗЫ ОТСУТСВУЮТ]`;
    } else if (m === 2) {
        sAlertCoef = 2;
        sAir = twoDigitRand();
        sNotif = `\x1b[32m▲\x1b[0m рост`;
        return `        нормализация выбросов
        [НОРМАЛИЗАЦИЯ ВЫБРОСОВ]`;
    } else if (m === 3) {
        sAlertCoef = 3;
        sAir = twoDigitRand();
        sNotif = `\x1b[32m▲\x1b[0m улучшился`;
        return `обнаружена переработка твердых отходов
            [ЭКОСИСТЕМА ОЧИЩАЕТСЯ]`;
    } else if (m === 4) {
        sAlertCoef = 4;
        sNotif = `\x1b[32m▲\x1b[0m допустимо`;
        return `обнаружена массивная вырубка лесов
        [БИОМ СОКРАЩАЕТСЯ]`;
    } else if (m === 5) {
        sAlertCoef = 5;
        sBiodiversity = sBiodiversity - 30;
        sNotif = `\x1b[33m▼\x1b[0m падение`;
        return ` обнаружена высокая индустриальная активность
[ВЫСОКИЙ УРОВЕНЬ ИНДУСТРИАЛЬНЫХ ВЫБРОСОВ]`;
    } else if (m === 6) {
        sAlertCoef = 6;
        sNotif = `\x1b[33m▼\x1b[0m падение`;
        return `высокий уровень индустриальных выбросов
            \x1b[33m[БИОМ ВЫМЕРАЕТ]\x1b[0m`;
    } else if (m === 7) {
        sAlertCoef = 7;
        sNotif = `\x1b[33m▼ негативный\x1b[0m`;
        sWhater = -999;
        sCoefWhater = -999;
        sBiodiversity = -999;
        sCoefBiodiversity = -999;
        return `    \x1b[33m⚠ высокий уровень загрязнения ⚠
        [НЕ ПРИГОДНА ДЛЯ ЖИЗНИ]\x1b[0m`;

    } else if (m === 8) {
        sAlertCoef = 8;
        sNotif = `\x1b[31m▼ критически\x1b[0m`;
        sWhater = -999;
        sCoefWhater = -999;
        return `\x1b[31m☢ обнаружен высокий уровень радиации ☢
        [НАХОЖДЕНИЕ ОГРАНИЧЕНО]\x1b[0m`;

    } else {
        sAlertCoef = 9;
        sNotif = `\x1b[31m▼ критически\x1b[0m`;
        sAir = 999;
        sWhater = -999;
        sBiodiversity = -999;
        sCoefAir = 999;
        sCoefWhater = -999;
        sCoefBiodiversity = -999;
        return `\x1b[31m☠ внимание немедленно покиньте территорию ☠
            [ОПАСНО ДЛЯ ЖИЗНИ]
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\x1b[0m`;
    }
}

let sCoefAir = sAirTenY - sAir;
let sCoefWhater = sWhater - sWhaterTenY;
let sCoefBiodiversity = sBiodiversity - sBiodiversityTenY;

let sAlertNotif = sAlertRand();


let bAlertCoef = '';
let bNotif = '';


function bAlertRand() {
    // 0 123456789
    let m = Math.random();
    m *= 10;
    m = Math.trunc(m);

    if (m === 0) {
        bAlertCoef = 0;
        bAir = twoDigitRand();
        bNotif = `\x1b[32m▲ рост\x1b[0m`;
        return `
        \x1b[32m[ОБЩЕСТВО ПРОЦВЕТАЕТ]\x1b[0m`;
    } else if (m === 1) {
        bAlertCoef = 1;
        bAir = twoDigitRand();
        bNotif = `\x1b[32m▲\x1b[0m рост`;
        return `
        [УГРОЗЫ ОТСУТСВУЮТ]`;
    } else if (m === 2) {
        bAlertCoef = 2;
        bAir = twoDigitRand();
        bNotif = `\x1b[32m▲\x1b[0m рост`;
        return `        нормализация выбросов
        [НОРМАЛИЗАЦИЯ ВЫБРОСОВ]`;
    } else if (m === 3) {
        bAlertCoef = 3;
        bAir = twoDigitRand();
        bNotif = `\x1b[32m▲\x1b[0m улучшился`;
        return `обнаружена переработка твердых отходов
            [ЭКОСИСТЕМА ОЧИЩАЕТСЯ]`;
    } else if (m === 4) {
        bAlertCoef = 4;
        bNotif = `\x1b[32m▲\x1b[0m допустимо`;
        return `обнаружена массивная вырубка лесов
        [БИОМ СОКРАЩАЕТСЯ]`;
    } else if (m === 5) {
        bAlertCoef = 5;
        bBiodiversity = bBiodiversity - 30;
        bNotif = `\x1b[33m▼\x1b[0m падение`;
        return ` обнаружена высокая индустриальная активность
[ВЫСОКИЙ УРОВЕНЬ ИНДУСТРИАЛЬНЫХ ВЫБРОСОВ]`;
    } else if (m === 6) {
        bAlertCoef = 6;
        bNotif = `\x1b[33m▼\x1b[0m падение`;
        return `высокий уровень индустриальных выбросов
            \x1b[33m[БИОМ ВЫМЕРАЕТ]\x1b[0m`;
    } else if (m === 7) {
        bAlertCoef = 7;
        bNotif = `\x1b[33m▼ негативный\x1b[0m`;
        bWhater = -999;
        bCoefWhater = -999;
        bBiodiversity = -999;
        bCoefBiodiversity = -999;
        return `    \x1b[33m⚠ высокий уровень загрязнения ⚠
        [НЕ ПРИГОДНА ДЛЯ ЖИЗНИ]\x1b[0m`;

    } else if (m === 8) {
        bAlertCoef = 8;
        bNotif = `\x1b[31m▼ критически\x1b[0m`;
        bWhater = -999;
        bCoefWhater = -999;
        return `\x1b[31m☢ обнаружен высокий уровень радиации ☢
        [НАХОЖДЕНИЕ ОГРАНИЧЕНО]\x1b[0m`;

    } else {
        bAlertCoef = 9;
        bNotif = `\x1b[31m▼ критически\x1b[0m`;
        bAir = 999;
        bWhater = -999;
        bBiodiversity = -999;
        bCoefAir = 999;
        bCoefWhater = -999;
        bCoefBiodiversity = -999;
        return `\x1b[31m☠ внимание немедленно покиньте территорию ☠
            [ОПАСНО ДЛЯ ЖИЗНИ]
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\x1b[0m`;
    }
}

let bCoefAir = bAirTenY - bAir;
let bCoefWhater = bWhater - bWhaterTenY;
let bCoefBiodiversity = bBiodiversity - bBiodiversityTenY;

let bAlertNotif = bAlertRand();

////////////////////////////////////////////

let vAlertCoef = '';
let vNotif = '';


function vAlertRand() {
    // 0 123456789
    let m = Math.random();
    m *= 10;
    m = Math.trunc(m);

    if (m === 0) {
        vAlertCoef = 0;
        vAir = twoDigitRand();
        vNotif = `\x1b[32m▲ рост\x1b[0m`;
        return `
        \x1b[32m[ОБЩЕСТВО ПРОЦВЕТАЕТ]\x1b[0m`;
    } else if (m === 1) {
        vAlertCoef = 1;
        vAir = twoDigitRand();
        vNotif = `\x1b[32m▲\x1b[0m рост`;
        return `
        [УГРОЗЫ ОТСУТСВУЮТ]`;
    } else if (m === 2) {
        vAlertCoef = 2;
        vAir = twoDigitRand();
        vNotif = `\x1b[32m▲\x1b[0m рост`;
        return `        нормализация выбросов
        [НОРМАЛИЗАЦИЯ ВЫБРОСОВ]`;
    } else if (m === 3) {
        vAlertCoef = 3;
        vAir = twoDigitRand();
        vNotif = `\x1b[32m▲\x1b[0m улучшился`;
        return `обнаружена переработка твердых отходов
            [ЭКОСИСТЕМА ОЧИЩАЕТСЯ]`;
    } else if (m === 4) {
        vAlertCoef = 4;
        vNotif = `\x1b[32m▲\x1b[0m допустимо`;
        return `обнаружена массивная вырубка лесов
        [БИОМ СОКРАЩАЕТСЯ]`;
    } else if (m === 5) {
        vAlertCoef = 5;
        vBiodiversity = vBiodiversity - 30;
        vNotif = `\x1b[33m▼\x1b[0m падение`;
        return ` обнаружена высокая индустриальная активность
[ВЫСОКИЙ УРОВЕНЬ ИНДУСТРИАЛЬНЫХ ВЫБРОСОВ]`;
    } else if (m === 6) {
        vAlertCoef = 6;
        vNotif = `\x1b[33m▼\x1b[0m падение`;
        return `высокий уровень индустриальных выбросов
            \x1b[33m[БИОМ ВЫМЕРАЕТ]\x1b[0m`;
    } else if (m === 7) {
        vAlertCoef = 7;
        vNotif = `\x1b[33m▼ негативный\x1b[0m`;
        vWhater = -999;
        vCoefWhater = -999;
        vBiodiversity = -999;
        vCoefBiodiversity = -999;
        return `    \x1b[33m⚠ высокий уровень загрязнения ⚠
        [НЕ ПРИГОДНА ДЛЯ ЖИЗНИ]\x1b[0m`;

    } else if (m === 8) {
        vAlertCoef = 8;
        vNotif = `\x1b[31m▼ критически\x1b[0m`;
        vWhater = -999;
        vCoefWhater = -999;
        return `\x1b[31m☢ обнаружен высокий уровень радиации ☢
        [НАХОЖДЕНИЕ ОГРАНИЧЕНО]\x1b[0m`;

    } else {
        vAlertCoef = 9;
        vNotif = `\x1b[31m▼ критически\x1b[0m`;
        vAir = 999;
        vWhater = -999;
        vBiodiversity = -999;
        vCoefAir = 999;
        vCoefWhater = -999;
        vCoefBiodiversity = -999;
        return `\x1b[31m☠ внимание немедленно покиньте территорию ☠
            [ОПАСНО ДЛЯ ЖИЗНИ]
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\x1b[0m`;
    }
}

let vCoefAir = vAirTenY - vAir;
let vCoefWhater = vWhater - vWhaterTenY;
let vCoefBiodiversity = vBiodiversity - vBiodiversityTenY;

let vAlertNotif = vAlertRand();

////////////////////////////////////////////

let eAlertCoef = '';
let eNotif = '';


function eAlertRand() {
    // 0 123456789
    let m = Math.random();
    m *= 10;
    m = Math.trunc(m);

    if (m === 0) {
        eAlertCoef = 0;
        eAir = twoDigitRand();
        eNotif = `\x1b[32m▲ рост\x1b[0m`;
        return `
        \x1b[32m[ОБЩЕСТВО ПРОЦВЕТАЕТ]\x1b[0m`;
    } else if (m === 1) {
        eAlertCoef = 1;
        eAir = twoDigitRand();
        eNotif = `\x1b[32m▲\x1b[0m рост`;
        return `
        [УГРОЗЫ ОТСУТСВУЮТ]`;
    } else if (m === 2) {
        eAlertCoef = 2;
        eAir = twoDigitRand();
        eNotif = `\x1b[32m▲\x1b[0m рост`;
        return `        нормализация выбросов
        [НОРМАЛИЗАЦИЯ ВЫБРОСОВ]`;
    } else if (m === 3) {
        eAlertCoef = 3;
        eAir = twoDigitRand();
        eNotif = `\x1b[32m▲\x1b[0m улучшился`;
        return `обнаружена переработка твердых отходов
            [ЭКОСИСТЕМА ОЧИЩАЕТСЯ]`;
    } else if (m === 4) {
        eAlertCoef = 4;
        eNotif = `\x1b[32m▲\x1b[0m допустимо`;
        return `обнаружена массивная вырубка лесов
        [БИОМ СОКРАЩАЕТСЯ]`;
    } else if (m === 5) {
        eAlertCoef = 5;
        eBiodiversity = eBiodiversity - 30;
        eNotif = `\x1b[33m▼\x1b[0m падение`;
        return ` обнаружена высокая индустриальная активность
[ВЫСОКИЙ УРОВЕНЬ ИНДУСТРИАЛЬНЫХ ВЫБРОСОВ]`;
    } else if (m === 6) {
        eAlertCoef = 6;
        eNotif = `\x1b[33m▼\x1b[0m падение`;
        return `высокий уровень индустриальных выбросов
            \x1b[33m[БИОМ ВЫМЕРАЕТ]\x1b[0m`;
    } else if (m === 7) {
        eAlertCoef = 7;
        eNotif = `\x1b[33m▼ негативный\x1b[0m`;
        eWhater = -999;
        eCoefWhater = -999;
        eBiodiversity = -999;
        eCoefBiodiversity = -999;
        return `    \x1b[33m⚠ высокий уровень загрязнения ⚠
        [НЕ ПРИГОДНА ДЛЯ ЖИЗНИ]\x1b[0m`;

    } else if (m === 8) {
        eAlertCoef = 8;
        eNotif = `\x1b[31m▼ критически\x1b[0m`;
        eWhater = -999;
        eCoefWhater = -999;
        return `\x1b[31m☢ обнаружен высокий уровень радиации ☢
        [НАХОЖДЕНИЕ ОГРАНИЧЕНО]\x1b[0m`;

    } else {
        eAlertCoef = 9;
        eNotif = `\x1b[31m▼ критически\x1b[0m`;
        eAir = 999;
        eWhater = -999;
        eBiodiversity = -999;
        eCoefAir = 999;
        eCoefWhater = -999;
        eCoefBiodiversity = -999;
        return `\x1b[31m☠ внимание немедленно покиньте территорию ☠
            [ОПАСНО ДЛЯ ЖИЗНИ]
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\x1b[0m`;
    }
}

let eCoefAir = eAirTenY - eAir;
let eCoefWhater = eWhater - eWhaterTenY;
let eCoefBiodiversity = eBiodiversity - eBiodiversityTenY;

let eAlertNotif = eAlertRand();

////////////////////////////////////////////

let countryHigh = '';
let airHigh = '';
let whaterHigh = '';
let biodiversityHigh = '';

function highCoef() {
    if (tAlertCoef <= sAlertCoef && tAlertCoef <= bAlertCoef && tAlertCoef <= vAlertCoef && tAlertCoef <= vAlertCoef) {
        countryHigh = 'Terragarður';
        airHigh = tAir;
        whaterHigh = tWhater;
        biodiversityHigh = tBiodiversity;

    } else if(sAlertCoef <= tAlertCoef && sAlertCoef <= bAlertCoef && sAlertCoef <= vAlertCoef && sAlertCoef <= vAlertCoef) {
        countryHigh = 'Sustainingland';
        airHigh = sAir;
        whaterHigh = sWhater;
        biodiversityHigh = sBiodiversity;
    } else if (bAlertCoef <= tAlertCoef && bAlertCoef <= sAlertCoef && bAlertCoef <= vAlertCoef && bAlertCoef <= vAlertCoef) {
        countryHigh = 'Björland';
        airHigh = bAir;
        whaterHigh = bWhater;
        biodiversityHigh = bBiodiversity;
    } else if (vAlertCoef <= tAlertCoef && vAlertCoef <= bAlertCoef && vAlertCoef <= sAlertCoef && vAlertCoef <= vAlertCoef) {
        countryHigh = 'Vellurania';
        airHigh = vAir;
        whaterHigh = vWhater;
        biodiversityHigh = vBiodiversity;
    } else if (eAlertCoef <= tAlertCoef && eAlertCoef <= sAlertCoef && eAlertCoef <= bAlertCoef && eAlertCoef <= vAlertCoef) {
        countryHigh = 'Elmaría';
        airHigh = eAir;
        whaterHigh = eWhater;
        biodiversityHigh = eBiodiversity;
    } else {
        return;
    }
}

highCoef();

console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
console.log(`//////////ЭКОЛОГИЧЕСКИЙ ИНДЕКС///////////////`);
console.log('`````````````````````````````````````````````');
console.group(`Террагард - Terragarður          ${tNotif}`);
console.log(`Индекс качества воздуха ${tAir}`);
console.log(`Индекс качества воды    ${tWhater}`);
console.log(`Индекс биоразнообразия  ${tBiodiversity}`);
console.log(`------------------------------------`);
console.log(`     лучшие показатели за 10 лет     `);
console.log('````````````````````````````````````');
console.log(`воздух ${tAirTenY}| вода ${tWhaterTenY}| биом ${tBiodiversityTenY}| угроз нет`);
console.log('````````````````````````````````````');
console.log(`          коефициент разницы          `);
console.log('````````````````````````````````````');
console.log(`воздух ${tCoefAir}| вода ${tCoefWhater}| биом ${tCoefBiodiversity}| угроза ${tAlertCoef}`);
console.log('````````````````````````````````````');
console.log(`               СТАТУС               `);
console.log(`${tAlertNotif}`)
console.groupEnd();
console.log(`.............................................`);
console.log('`````````````````````````````````````````````');
console.group(`Сустайнгланд - Sustainingland    ${sNotif}`);
console.log(`Индекс качества воздуха ${sAir}`);
console.log(`Индекс качества воды    ${sWhater}`);
console.log(`Индекс биоразнообразия  ${sBiodiversity}`);
console.log(`------------------------------------`);
console.log(`     лучшие показатели за 10 лет     `);
console.log('````````````````````````````````````');
console.log(`воздух ${sAirTenY}| вода ${sWhaterTenY}| биом ${sBiodiversityTenY}| угроз нет`);
console.log('````````````````````````````````````');
console.log(`          коефициент разницы          `);
console.log('````````````````````````````````````');
console.log(`воздух ${sCoefAir}| вода ${sCoefWhater}| биом ${sCoefBiodiversity}| угроза ${sAlertCoef}`);
console.log('````````````````````````````````````');
console.log(`               СТАТУС               `);
console.log(`${sAlertNotif}`)
console.groupEnd();
console.log(`.............................................`);
console.log('`````````````````````````````````````````````');
console.group(`Бъиория - Björland               ${bNotif}`);
console.log(`Индекс качества воздуха ${bAir}`);
console.log(`Индекс качества воды    ${bWhater}`);
console.log(`Индекс биоразнообразия  ${bBiodiversity}`);
console.log(`------------------------------------`);
console.log(`     лучшие показатели за 10 лет     `);
console.log('````````````````````````````````````');
console.log(`воздух ${bAirTenY}| вода ${bWhaterTenY}| биом ${bBiodiversityTenY}| угроз нет`);
console.log('````````````````````````````````````');
console.log(`          коефициент разницы          `);
console.log('````````````````````````````````````');
console.log(`воздух ${bCoefAir}| вода ${bCoefWhater}| биом ${bCoefBiodiversity}| угроза ${bAlertCoef}`);
console.log('````````````````````````````````````');
console.log(`               СТАТУС               `);
console.log(`${bAlertNotif}`)
console.groupEnd();

console.log(`.............................................`);
console.log('`````````````````````````````````````````````');
console.group(`Веллурания - Vellurania          ${vNotif}`);
console.log(`Индекс качества воздуха ${vAir}`);
console.log(`Индекс качества воды    ${vWhater}`);
console.log(`Индекс биоразнообразия  ${vBiodiversity}`);
console.log(`------------------------------------`);
console.log(`     лучшие показатели за 10 лет     `);
console.log('````````````````````````````````````');
console.log(`воздух ${vAirTenY}| вода ${vWhaterTenY}| биом ${vBiodiversityTenY}| угроз нет`);
console.log('````````````````````````````````````');
console.log(`          коефициент разницы          `);
console.log('````````````````````````````````````');
console.log(`воздух ${vCoefAir}| вода ${vCoefWhater}| биом ${vCoefBiodiversity}| угроза ${vAlertCoef}`);
console.log('````````````````````````````````````');
console.log(`               СТАТУС               `);
console.log(`${vAlertNotif}`)
console.groupEnd();

console.log(`.............................................`);
console.log('`````````````````````````````````````````````');
console.group(`Эльмария - Elmaría               ${eNotif}`);
console.log(`Индекс качества воздуха ${eAir}`);
console.log(`Индекс качества воды    ${eWhater}`);
console.log(`Индекс биоразнообразия  ${eBiodiversity}`);
console.log(`------------------------------------`);
console.log(`     лучшие показатели за 10 лет     `);
console.log('````````````````````````````````````');
console.log(`воздух ${eAirTenY}| вода ${eWhaterTenY}| биом ${eBiodiversityTenY}| угроз нет`);
console.log('````````````````````````````````````');
console.log(`          коефициент разницы          `);
console.log('````````````````````````````````````');
console.log(`воздух ${eCoefAir}| вода ${eCoefWhater}| биом ${eCoefBiodiversity}| угроза ${eAlertCoef}`);
console.log('````````````````````````````````````');
console.log(`               СТАТУС               `);
console.log(`${eAlertNotif}`)
console.groupEnd();
console.log(``);
console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
console.log(`качество воздуха - рост индекса проблема`);
console.log(`качество воды - падение индекса проблема`);
console.log(`биоразнообразие - падение индекса проблема`);
console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
console.group(`▞▟■▟▜▙▚▛ САМЫЙ ВЫСОКИЙ КОЕФИЦИЕНТ РОСТА`);
console.log(``);
console.log(`             \x1b[32m${countryHigh}\x1b[0m`);
console.log(`       \x1b[32mвоздух ${airHigh}| вода ${whaterHigh}| биом ${biodiversityHigh}\x1b[0m`);
console.groupEnd();
console.log(`.............................................`);
console.log(`/////////////////////////////////////////////`);
console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
