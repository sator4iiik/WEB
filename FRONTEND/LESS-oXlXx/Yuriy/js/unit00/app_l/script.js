// console.log('Hello World');

// let a;

// console.log(a);

// a = 5;

// const A = 8;

// A = 4;
// console.log('after err');

// $ node ./script.js

// ///////////////////////////

// let a = 7;

// {
//     let a = 5;
//     console.log(a);
// }

// console.log(a);

// ///////////////////////////

// const A = 8;

{
    // A = 4;
}

// console.log(A)


// function dog() {
//     print("I m");
// }
// dog.sound = "sd";
// 'sd'


let s = "00000001111111"
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
    var mid = Math.floor((l + r) / 2);
    if(s[mid] == '1') {
        ans = mid;
        r = mid - 1;
    }
    else {
        l = mid + 1;
    }
}
console.log(ans);
