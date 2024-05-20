let mountainA = '';
let mountainB = '';
let mountainC = '';
let mountainD = '';
let mountainE = '';

function randHeight() {
    // 0 12
    let n = Math.random();
    n *= 2;
    n = Math.trunc(n);
    n += 1;

    // 0 12345
    let m = Math.random();
    m *= 5;
    m = Math.trunc(m);
    m += 1;

    // 0 123456789
    let v = Math.random();
    v *= 9;
    v = Math.trunc(v);
    v += 1;

    // 0 123456789
    let q = Math.random();
    q *= 9;
    q = Math.trunc(q);
    q += 1;

    return +`${n}${m}${v}${q}`;
}

mountainA = randHeight();
mountainB = randHeight();
mountainC = randHeight();
mountainD = randHeight();
mountainE = randHeight();

function randMax() {
    const arr = [mountainA, mountainB, mountainC, mountainD, mountainE];
    let max = Math.max(...arr);
    return max;
}

function randMin() {
    const arr = [mountainA, mountainB, mountainC, mountainD, mountainE];
    let min = Math.min(...arr);
    return min;
}

let maximalHeight = randMax();
let minimalHeight = randMin();

let difference = maximalHeight - minimalHeight;


console.log('````````````````````````````');
console.log(`Fjeldarfjell  height: ${mountainA}m.`);
//           Фьельдарфьелл
console.log('````````````````````````````');
console.log(`Isbergskald   height: ${mountainB}m.`);
//           Исбергскальд
console.log('````````````````````````````');
console.log(`Gleisisshtadt height: ${mountainC}m.`);
//           Глейсисштадт
console.log('````````````````````````````');
console.log(`Burevir       height: ${mountainD}m.`);
//           Буревир
console.log('````````````````````````````');
console.log(`Gorgelfjell   height: ${mountainE}m.`);
//           Горгелфьелл
console.log('````````````````````````````');
console.log(`${maximalHeight}m. maximum height`);
console.log(`${minimalHeight}m. minimal height`);
console.log(' ');
console.log(`height in difference ${difference}m.`);
console.log('````````````````````````````');
