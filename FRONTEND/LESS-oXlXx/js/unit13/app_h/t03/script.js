/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: oreznikov <oleksireznikov@gmail.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/19 14:09:14 by oreznikov         #+#    #+#             */
/*   Updated: 2024/02/10 10:54:13 by oreznikov        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// если номер вагона, номер купе в вагоне, и номер места в купе совпадают,
// то принести бесплатный чай.

// 15 вагонов 9 купе 4 спальных места

let wagon = 15;
let coupe = 9;
let place = 4;

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

wagon = rand(1, 15);
coupe = rand(1, 9);
place = rand(1, 4);

wagon = 3;
coupe = 3;
place = 3;

let timeH = numStub(rand(0, 23));
let timeM = numStub(rand(0, 23));
let dispatch = rand(39999, 90000);
let assignment = rand(39999, 90000);
let train = rand(1900, 3000);

function teaCompliment() {
    if (wagon == coupe && coupe == place) {
        console.log(`
         ______________________________________________________
        /____________________БИЛЕТ НА ПОЕЗД____________________\\
        |  |                        *                          |
        |  |  откуда: ${dispatch}                  куда : ${assignment}      |
        |  |  время : ${timeH}:${timeM}                  поезд: ${train}
        |  |                                                   |
        |  |  вагон : ${numStub(wagon)}      купе: ${numStub(coupe)}       место: ${numStub(place)}
        |  |                                                   |
        \\  |       счастливые циферки, уже несем чай!)         /
          ----------------------------------------------------
        `);
        return `чай подайте`;
    } else {
        console.log(`
         ______________________________________________________
        /____________________БИЛЕТ НА ПОЕЗД____________________\\
        |  |                        *                          |
        |  |  откуда: ${dispatch}                  куда : ${assignment}      |
        |  |  время : ${timeH}:${timeM}                  поезд: ${train}
        |  |                                                   |
        |  |  вагон : ${numStub(wagon)}      купе: ${numStub(coupe)}       место: ${numStub(place)}
        |  |                                                   |
        \\  |                                                   /
          ----------------------------------------------------
        `);
    }
}

teaCompliment();
