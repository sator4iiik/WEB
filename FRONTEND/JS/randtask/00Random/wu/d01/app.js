/* ....................................................................
 * /////////////DAY 2//////////////////////////////////////////////////
 * ```````````````````````````````````````````````````````````````````
 * OREZNIKOV 2021
 *
 * day 2
 * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 1:

for (let num = 10; num <= 50; num++) {
    if (num % 2 == 0) {
        console.log(num);
    }
}

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 2:

let user = {
    firstName: 'Oleksii',
    lastName: 'Reznikov',
    age: 29,
    pets: true
}

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 3:

//  Отрывок из текста Котляревского, "Енеида"

//  "Еней був парубок моторний, І хлопець хоть куди козак, Удавсь на всеє зле проворний,
//  Завзятіший од всіх бурлак. Но греки, як спаливши Трою, Зробили з неї скирту гною."

const array = [
    'Удавсь',                       // 0  |----4
    'Зробили з',                    // 1  |-----------11
    'Еней був парубок моторний,',   // 2  |-1
    'проворний,',                   // 3  |------6
    'Завзятіший од всіх',           // 4  |-------7
    'скирту гною.',                 // 5  |-------------13
    'І хлопець хоть',               // 6  |--2
    'на всеє зле',                  // 7  |-----5
    'бурлак.',                      // 8  |--------8
    'Но греки, як',                 // 9  |---------9
    'неї',                          // 10 |------------12
    'куди козак,',                  // 11 |---3
    'спаливши Трою,'                // 12 |----------10
];

let result = (array[2] + ' ' + array[6] + ' ' + array[11] + ' ' + array[0]
                + ' ' + array[7] + ' ' + array[3] + ' ' + array[4] + ' ' +
                array[8] + ' ' + array[9] + ' ' + array[12] + ' ' + array[1]
                + ' ' + array[10] + ' ' + array[5])

console.log(result)

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 4:

function nameList (firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

nameList('Oleksii', 'Reznikov');
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */ // Задание 5:

let num = 19;

while (num < 67) {
    if (num % 2 != 0) {
    console.log(num);
    }
    num++;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
