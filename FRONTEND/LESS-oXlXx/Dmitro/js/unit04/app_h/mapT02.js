const names = ['Alice', 'Bob', 'Charlie'];
const newAge = [16, 102, 88];
let num = newAge[0]+10
// const result = names.map(name => ({ name: name, age : 30}));
// const result = names.map(name => ({ name: name, age : num++}));
const result = names.map(name => ({ name : name, age : num}));

const arr2 = names.map((el, i) => {
    return {name : el, age : newAge[i]}
})

console.log(arr2);
