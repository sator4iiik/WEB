const shopAdvisors  = {
    items: [
        {
            name: 'nastya',
            type: 'seller',
            age: '22',
            bonus: 0,
        },
        {
            name: 'valeria',
            type: 'seller',
            age: '25',
            bonus: 0,
        },
    ]
}

// обьект массивов
const warehousePets = {
    items: [
        {
            name: 'skibidi',
            type: 'turtle',
            age: 1,
            price: 230,
            isChip: false,
            isHungry: true,
        },
        {
            name: 'fenor',
            type: 'parrot',
            age: 120,
            price: '',
            isChip: false,
            isHungry: false,
        },
        {
            name: 'python',
            type: 'snake',
            age: 3,
            price: 800,
            isChip: true,
            isHungry: false,
        },
        {
            name: 'qwerty',
            type: 'scorpio',
            age: 3,
            price: 270,
            isChip: false,
            isHungry: false,
        },
        {
            name: 'fingers',
            type: 'mouse',
            age: 1,
            price: 20,
            isChip: false,
            isHungry: false,
        },
        {
            name: 'ratatui',
            type: 'rat',
            age: 1,
            price: 90,
            isChip: false,
            isHungry: false,
        },
        {
            name: 'hugin',
            type: 'raven',
            age: 160,
            price: 1000000,
            isChip: false,
            isHungry: false,
        },
    ]
}
// обьект массивов, масиив обьектов, обьект обьектов, массив масивов
// items entites data value key

// в обьекте petStore в котором есть ключ в котором есть массив, в котором находятся обьекты
// в обьекте petStore есть свойства и методы


// несколько вещей которых я могу сделать с массивом, одна из них map

// в обьекте petStore есть свойства и методы
const petStore = {
    products: [
        {
            name: 'Mr.Beagls', // строки, числа, булеан, не имеет роли в обьекте но есть смысл в массиве
            type: 'cat',
            age: 3,
            price: 300,
            isChip: true,
            isHungry: false,
        },
        {
            name: 'Snejock',
            type: 'dog',
            age: 1,
            price: 500,
            isChip: true,
            isHungry: true,
        },
        {
            name: 'Golden Fish',
            type: 'fish',
            age: 1,
            count: 54,
            price: 100,
            isChip: false, // держим одни и те же свойства для удобства, что бы не было undefined и базы данных не коверкать и добавляем по нужде тоже везде новый тип данных
            isHungry: true, // свойства должны быть одинаковыми везде, если эта одна база данных
        },
    ],
    employes: [],
    openHour: 8,
    closeHour: 18,
    revenue: 0,
    addres: 'c. Kyiv, Dogs str',

    addPetFormWarehouse() {
        const itemToTransfer = warehousePets.pop()
        this.products.push(itemToTransfer)
    },

    calculatePrice() {
        return petStore.products.reduce((total, product) => total + product.price, 0);
    },

    sellProduct(customer) {
        // LIFO продаем покупателю последний в массиве товар
        const product = this.products.pop();
        customer.pets.push(product);
        customer.money -= product.price;
        this.revenue += product.price; // this это petStor (this cтанет тем что у метода перед точкой стоит)(this создается когда функция вызывается)
        const totalSoldPrice = calculatePrice();
        const bonusAmount = totalSoldPrice * 0.1;
        shopAssistant.items.forEach(seller => {
            seller.bonus += bonusAmount;
        });
    },
}

const client = {
    items: [
        {
            firstName: 'Petya',
            secondName: 'Petrov',
            age: 21,
            money: 900,
            pets: [],
        }
    ]
}

const itemToTransfer = warehousePets.items[0];
itemToTransfer;

petStore.products.push(itemToTransfer);

warehousePets
console.log(petStore);

const index = petStore.products.indexOf(itemToTransfer);
if (index > -1) {
    petStore.products.splice(index, 1);
}

console.log(warehousePets.length)
console.log(petStore.products.length)

petStore.addPetFromWarehouse()

console.log(warehousePets.length)
console.log(petStore.products.length)

result = petStore.products[2].isChip;
// массив обьектов это чуть ли не главная структура в которой мы будем работать в фронтенде
result;

// petStore.sellProduct(client.items);

// result = petya.pets;
result
// result = petya.moneyresult;
result


// ithem entity data

// склад с животними, добавлять товар со склада (cоздать обьект, и отделить от магазина)
// добавить продавцов магазина (за каждую продажу 10%)

const numbers = [1, 2, 5, 10, 33, 42, 101]

numbers.splice(0, 1);
numbers.splice(0, 1, 1001, 1002, 900); // можно поменять удаляемое на 1001 1002
numbers

// let cpNumbers = numbers.slice(-3, -1);
let cpNumbers = numbers.map(number => number + 100);
numbers
cpNumbers

cpNumbers = numbers.reduce((acc, item) => acc + item, 0)
// acc - аккамулятор
cpNumbers

cpNumbers;

// splice это симбиоз pop и push

// map - это преобразование массива (значения меняются но размер осатется( например + 1 делаю))
// reduse - свертка это подэтоженый массив (коллапсируем)

// при мап редьюс мы не мутируем исходный обьект потому можна присваивать спокойно переменной

// const idx = petStore.products.indexOf(itemToTransfer)
// if (idx > -1) {
//   petStore.products.splice(idx, 1)
// }

// let result
// result = petStore.products[2].isChip
// result

// массив обьектов это чуть ли не главная структура в которой мы будем работать в фронтенде
// petStore.sellProduct(client.items);
// result = petya.pets;
// result = petya.moneyresult;
// склад с животними, добавлять товар со склада (cоздать обьект, и отделить от магазина)
// добавить продавцов магазина (за каждую продажу 10%)
