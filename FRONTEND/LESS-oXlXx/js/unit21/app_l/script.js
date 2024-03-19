// литерал джаваскриптовый обьекта

const computer = {
    price: 42000,
    cpu: 'AMD',
}

let result = computer.cpu
result

const stringComputer = `{
    "price": 42000,
    "cpu": "AMD"
}`;

// формат json имеет очень жесткие правила
// в формате у нас нет одинарных кавычек
// строчки только "" булевые и номера без
// json это формат строки в удобной строке

// parsre создает строку из обьекта
result = JSON.stringify(computer);
result = result.cpu
result

// а stringify из обьекта строку
result = JSON.parse(stringComputer)
result = result.cpu
result

// ДЗ при нажатии на кнопку будет выдаваться новая кнопка с номером от 1 до 100
