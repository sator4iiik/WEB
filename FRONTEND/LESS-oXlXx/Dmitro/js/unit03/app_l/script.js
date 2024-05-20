///////////////////// FIND ///////////////////////////
const arr1 = [{token : 'sdv69d', data : false}, {token : 'D369dD', data : false}, {token : 'Ldf23', data : true}];

const f1 = (token) => {
    const res = arr1.find((el) => {
        if (token ==='Ldf23') {
            return true
        }
    });
    // res.data = false;
    // res['data'] = !res.data;
    res.data = !!res.data
    res;
}

f1('Ldf23');

const a = 1


if(!!a === false) console.log(1);
else console.log(2);

// console.log(a);


const arr2 = [1, 2, 3, 4, 5];

const res = arr2.find((el) => (el === 4));
console.log(res);

///////////////////// FILTER ///////////////////////////

const arr3 = [{id : '17382', user : 'ffhd'}, {id : '23425', user : 'sdwew'}, {id : '20433', user : 'asd3w'}, {id : '23425', user : 'sdwyuj'}];

const f2 = (id) => { // повертае новий массив з вирiзаними елементами
    const res = arr3.filter((el) => { // поверни нам массив
        if (el.id !== '20433') { // в якому небуде елементiв з тим айдi
            return true;
        }
    });
    console.log(res);
}

f2('20433');


const res1 = arr3.filter((el,index) => el.id !== '23425'); // filter проходить по всьому массиву без зупинок пiсля знаходження
console.log(res1);


///////////////////// FOREACTH ///////////////////////////

// forEach нiчого не повертае, вiн просто проходится по массиву
// але в тiлi форiча можна писати умови

const arr4 = [];

arr3.forEach((el) => {
    console.log(el.user);
    const res = el.id;
    // arr4.push(res);
    // форитч нiколи нiчого не повертае

    if (el.id !== '17382') {
        arr4.push(res);
    }
});

console.log(arr4);

///////////////////// MAP ///////////////////////////

const ref = arr4.map(el => {
    const res = +el;
    return res;
})

ref;


// Перевертання рядка: Напишіть функцію, яка приймає рядок і повертає
// його в оберненому вигляді. methoods split/ reverse/ join
