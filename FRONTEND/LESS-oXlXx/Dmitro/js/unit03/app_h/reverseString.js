const args = process.argv.slice(2);

const reverseString = (args) => {
    const message = args.map(str => str.split('').reverse().join(''));
    const reversed = message.join(' ')
    console.log(reversed);
    return reversed;
}

reverseString(args);

module.exports = reverseString;

// console.error('usage: node ./reverseString.js Hello World!');

// Перевертання рядка: Напишіть функцію, яка приймає рядок і повертає
// його в оберненому вигляді. methoods split/ reverse/ join

//////////////////////////////////////////////////////////////////////

// const reverseString = require('./reverseString');

// const args = process.argv.slice(2);
// reverseString(args);
