/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: oreznikov <oleksireznikov@gmail.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/21 09:00:40 by oreznikov         #+#    #+#             */
/*   Updated: 2024/02/03 10:52:22 by oreznikov        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// если день рождения пользователя совпадет с сегодняшним днем,
// то создать всплывающее окно с поздравлением.

let inputDay = document.querySelector('#day');
let inputMonth = document.querySelector('#month');

console.log(inputDay);
console.log(inputMonth);

let today = new Date();

function numStub(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

let year = today.getFullYear();
let month = numStub(today.getMonth() + 1);
let day = numStub(today.getDate());

console.log(`сегодняшняя дата: ${day}.${month}.${year}`);
