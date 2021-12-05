// String Challenge

// Have the function StringChallenge(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark or mathematical symbol.
// 4. It cannot have the word "password" in the string.
// 5. It must be longer than 7 characters and shorter than 31 characters.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".
// Examples

// Input: "passWord123!!!!"
// Output: false
// Input: "turkey90AAA="
// Output: true

// "passWord123!!!!"

let button1 = document.querySelector('.b-1');
let div1    = document.querySelector('.out-1');

function StringChallenge(str) {
    let res    = '';
    let strLen = str.length;
    console.log('strLen');
      for (let i = 0; i < strLen; i++) {
        switch (str) {
          case (str[i] === str[i].toUpperCase()):
            res += 1;

          case (typeof(parseInt(str[i])) === 'number'):
            res += 1;

          case (str.match(/password/i)):
            return false;

          case (str.length > 7 && str.length < 31):
            res += 1;

          case (str.match(/+|-|<|>|=|*|%|'\x2f'|^/)):
            res += 1;

          case (result.length === 5):
            return true;
          default:
        }
      }

    return str;

  }

document.querySelector('.b-1').onclick = StringChallenge;

  // keep this function call here
  console.log(StringChallenge(readline()));
