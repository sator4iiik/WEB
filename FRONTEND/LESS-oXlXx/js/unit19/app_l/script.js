const cat = {
    nickname: 'Mr.Beagls',
    age: 3,
    isChip: true,
}

// в обьекте petStore в котором есть ключ в котором есть массив, в котором находятся обьекты
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
            isHungry: true,
        },
    ],
    employes: [],
    openHoer: 8,
    closeHour: 18,
    revenue: 0,
    addres: 'c. Kyiv, Dogs str',
    sellProduct(customer) { // LIFO продаем покупателю последний в массиве товар
        const product = this.products.pop();
        customer.pets.push(product);
        customer.money -= product.price;
        this.revenue += product.price; // this это petStor (this cтанет тем что у метода перед точкой стоит)(this создается когда функция вызывается)
    }
}

const petya = {
    firstName: 'Petya',
    secondName: 'Petrov',
    age: 21,
    money: 900,
    pets: [],
}

petStore;

result = petStore.products[2].isChip;
// массив обьектов это чуть ли не главная структура в которой мы будем работать в фронтенде
result;

petStore.sellProduct(petya);

result = petya.pets;
result
result = petya.moneyresult;
result


// ithem entity data

// склад с животними, добавлять товар со склада (cоздать обьект, и отделить от магазина)
// добавить продавцов магазина (за каждую продажу 10%)
