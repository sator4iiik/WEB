// find map filter (3 кита) должен очень хорошо знать
// создаю 5 arr (обьект ) - find создать функцию которая аргументом принимает id
// функция должна вернуть тот обьект.id который совпадает с аргументом

const arr6 = [{id : 1, user : 'dogo'}, {id : 2, user : 'catz'}, {id : 3, user : 'parrot'}, {id : 4, user : 'shiba'},];

const f4 = (id) => { // find проходится до того що треба, i зупиняе свою роботу
    const res =  arr6.find((el) => {
        if (el.id === id) {
            return true;
        }
    });
    return console.log(res);
}
