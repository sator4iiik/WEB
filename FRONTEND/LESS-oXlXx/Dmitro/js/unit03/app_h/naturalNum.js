const args = process.argv.slice(2);

const naturalNum = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(naturalNum(Number(args[0])));

module.exports = naturalNum;

// Перевірка простого числа: Напишіть функцію, яка приймає число і повертає true,
// якщо воно є простим числом (має тільки два дільники - 1 та саме число),
// або false, якщо не є. може треба Math.sqrt
