/* ....................................
 * /////////////DAY 1//////////////////
 * ```````````````````````````````````
 * OREZNIKOV 2021
 *
 * day 1
 * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 1:

const city = "Kyiv";
const country = "Ukraine";

let population = 2951952;

let stadium = Boolean(true);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 2:

let   h = 40;
let   w = 70;
const d = "см";

let areaRectangle = h * w;

console.log(areaRectangle + d);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 3:

let      time = 2;

speedOfFirst  = 95;
speedOfSecond = 114;

let distance  = (speedOfFirst + speedOfSecond) * time;

console.log(distance);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 4:

const randomNumber = Math.floor(Math.random() * 100);
const infoT04 = "if ↓";

console.log(infoT04);

if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 5:

const randomNumber2 = Math.floor(Math.random() * 100);

const infoT05 = "switch ↓";

console.log(infoT05);
switch (true) {
    case (randomNumber2 < 20):
        console.log("randomNumber меньше 20");
        break;

    case (randomNumber2 > 50):
        console.log("randomNumber больше 50");
        break;

    default:
        console.log("randomNumber больше 20, и меньше 50");

}
