/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: oreznikov <oleksireznikov@gmail.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/18 13:07:41 by oreznikov         #+#    #+#             */
/*   Updated: 2024/01/21 09:37:42 by oreznikov        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// если потребление электричества выше 90% от вырабатываемой мощности.
// то объявить блэкаут.

function rand(from, to) {
    const range = to - from + 1;
    let number = Math.random() * range;
    return Math.trunc(number) + from;
}

const generatedPower = rand(9000, 11000);
const electricityConsumption = rand(777, 14000);

const threshold = Math.trunc(generatedPower * 0.9);


function blackoutCheck() {
    if(electricityConsumption > threshold) {
        console.log(`
        \x1b[31m>>>>>>> внимание блэкаут! <<<<<<<<<<
        ------------------------------------\x1b[0m
        произведенная энергия = ${generatedPower}

        порог %               = ${threshold}
        потребление           = ${electricityConsumption}
        \x1b[31m------------------------------------
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\x1b[0m
        `);
        return `
        \x1b[31m>>>>>>> внимание блэкаут! <<<<<<<<<<
        ------------------------------------\x1b[0m
        произведенная энергия = ${generatedPower}

        порог %               = ${threshold}
        потребление           = ${electricityConsumption}

        `;
    } else {
        console.log(`
        \x1b[32m///  электроснабжение в норме   ///
        ------------------------------------\x1b[0m
        произведенная энергия = ${generatedPower}

        порог %               = ${threshold}
        потребление           = ${electricityConsumption}
        `);
        return `
        \x1b[32m///  электроснабжение в норме   ///
        ------------------------------------\x1b[0m
        произведенная энергия = ${generatedPower}

        порог %               = ${threshold}
        потребление           =  ${electricityConsumption}
        `;
    }
}

blackoutCheck();
