const names = ['Alice', 'Bob', 'Charlie'];
const newAge = [16, 102, 88];
const result = names.map(name => ({ name: name, age : num++}));


const app2 = names.map((el, i) => {
    return {name : el, age : newAge[i]}
})

console.log(app2);

// const result = names.map(name => ({ name: name, age : 30}));
// const result = names.map(name => ({ name: name, age : num++}));

// console.log(result);
