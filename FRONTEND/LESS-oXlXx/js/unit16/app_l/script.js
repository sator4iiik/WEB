// fn(param) это тоже самое если бы я обьявил переменную let param
// нельзя сделать fn(param) и let param
// перекрытие области видимости
// const param 100
//  function fn(param) {
//    console.log(param); // = 42;
//  }
// fn(42)




// default params - function fn(param = param2 + 1, param3) - param у нас является параметром а param = param2 + 1 - default params
// и будет

// function fn(param) {

//     param = param + 1
// }
// fn(42);

// function fn(param = 42) {
//     if (param === undefined) {
//         param = 42
//     }
//     console.log(param)
//   }

//   fn(101)

// если параметр явно задан дефолтный будет проигнорирован
// параметр это то что пишу при обьявлении функции, а аргумент при вызове, в итоге аргумент станет параметром

const param = 33

// function fn(param = 42) {
//     console.log(param)
//   }

// fn(101)

// если параметр явно задан дефолтный будет проигнорирован

// const param = 33

function fn(param = 42) {
    console.log(param)
}

fn(101)

// аргументы читаются с лева на право, параметры идут по порядку если, записан
// вего 1 аргумент то он передастся в 1 параметр fn(2), если нужно 2 параметра переопределить, то fn(2, 42)

function fn(param = 42, optParam = param + 1) {
    console.log(optParam);
}

fn()
