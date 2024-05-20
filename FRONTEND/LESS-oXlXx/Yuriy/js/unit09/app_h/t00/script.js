let firstSalary = '';
let secondSalary = '';
let thirdSalary = '';
let fourthSalary = '';
let fifthSalary = '';

let maximalSalary = '';
let minimalSalary = '';
let difference = '';

function randSalary() {
    // 0 12345
    let n = Math.random();
    n *= 5;
    n = Math.trunc(n);
    n += 1;

    // 0 12345
    let m = Math.random();
    m *= 8;
    m= Math.trunc(m);
    m += 1;

    return +`${n}${m}00`;
}

firstSalary = randSalary();
secondSalary = randSalary();
thirdSalary = randSalary();
fourthSalary = randSalary();
fifthSalary = randSalary();

function maxSalary() {
    let max = '';

    if (firstSalary > secondSalary && firstSalary >  thirdSalary && firstSalary > fourthSalary && firstSalary > fifthSalary) {
        max = firstSalary;
    } else if (secondSalary > firstSalary && secondSalary > thirdSalary && secondSalary > fourthSalary && secondSalary > fifthSalary) {
        max = secondSalary;
    } else if (thirdSalary > firstSalary && thirdSalary > secondSalary && thirdSalary > fourthSalary && thirdSalary > fifthSalary) {
        max = thirdSalary;
    } else if (fourthSalary > firstSalary && fourthSalary > secondSalary && fourthSalary > thirdSalary && fourthSalary > fifthSalary) {
        max = fourthSalary;
    } else {
        max = fifthSalary;
    }
    return max;
}

function minSalary() {
    let min = '';

    if (firstSalary < secondSalary && firstSalary < thirdSalary && firstSalary < fourthSalary && firstSalary < fifthSalary) {
        min = firstSalary;
    } else if (secondSalary < firstSalary && secondSalary < thirdSalary && secondSalary < fourthSalary && secondSalary < fifthSalary) {
        min = secondSalary;
    } else if (thirdSalary < firstSalary && thirdSalary < secondSalary && thirdSalary < fourthSalary && thirdSalary < fifthSalary) {
        min = thirdSalary;
    } else if (fourthSalary < firstSalary && fourthSalary < secondSalary && fourthSalary < thirdSalary && fourthSalary < fifthSalary) {
        min = fourthSalary;
    } else {
        min = fifthSalary;
    }
    return min;
}

maximalSalary = maxSalary();
minimalSalary = minSalary();
difference = maximalSalary - minimalSalary;

console.log(`▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`);
console.log(`▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`);
console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);

console.log('`````````````````````````````````````````');
console.log(`////////////. 𝔫𝔢𝔴 𝔳𝔞𝔠𝔞𝔫𝔠𝔶 .////////////`);
console.log(` ✦
Full Stack JS Developer           $${'\x1b[32m' + firstSalary + '\x1b[0m'}
---------------------------------------
Get Report is an  innovative  team that
helps customers  make  more sense  from
tons of data that they collect in their
ERPs (JIRA, mon..
    `);
console.log('`````````````````````````````````````````');
console.log(`
Middle React/Native Developer     $${'\x1b[32m' + secondSalary + '\x1b[0m'}
---------------------------------------
Requirements:           ✦
1-2years of experience with TypeScript
1-2years of experience    React/Native
Understanding of REST Web Services..
    `);
console.log('`````````````````````````````````````````');
console.log(`
Junior/middle Vue.js developer    $${'\x1b[32m' + thirdSalary + '\x1b[0m'}
---------------------------------------
We seeking a Vue.js Front-End Developer
to join our talented team. The ideal
candidate will have a minimum of 1..
    `);
console.log('`````````````````````````````````````````');
console.log(`
Vue.js Front-End Developer        $${'\x1b[32m' + fourthSalary + '\x1b[0m'}
---------------------------------------
Develop and maintain robus and scalable
Collaborate  with design  and   product
Write and maintain eficient, reusable..
    `);
console.log(`
Junior React Developer            $${'\x1b[32m' + fifthSalary + '\x1b[0m'}
---------------------------------------
Our engineering team is looking for
talents to build React and React Native
applications for start-ups from..

    `);
console.log('`````````````````````````````````````````');
console.log(`
𝓂𝒶𝓍 𝓈𝒶𝓁𝒶𝓇𝓎    ✦                   $${'\x1b[36m' + maxSalary() + '\x1b[0m'}`);
console.log('`````````````````````````````````````````');
console.log(`
𝓂𝒾𝓃 𝓈𝒶𝓁𝒶𝓇𝓎                        $${'\x1b[34m' + minSalary() + '\x1b[0m'}`);
console.log('`````````````````````````````````````````');
console.log(`
𝓈𝒶𝓁𝒶𝓇𝓎 𝒹𝒾𝒻𝒻𝑒𝓇𝑒𝓃𝓉𝒾𝒶𝓁            .  $${'\x1b[31m' + difference + '\x1b[0m'}`);
console.log('`````````````````````````````````````````');
console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
console.log(`▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`);
console.log(`▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`);
