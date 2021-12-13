const randomInt = require('./task_03');

describe('Тест на случайное число', () => {
    const testCases = [
        {
            from : 100,
            to : 110,
        },
        {
            from : 200,
            to : 201,
        }
    ]; // результата нет, только диапазон
    testCases.forEach(test => {
        it(
            `from : ${test.from} to: ${test.to}`,
            () => {
                const res = randomInt(test.from, test.to);
                console.log(res)
                expect(res).toBeGreaterThanOrEqual(test.from); // ожидаю что рес будет больше или равен
                expect(res).toBeLessThanOrEqual(test.to);      // ожидаю что будет рес меньше или равен чем тест ту
            }
        );
    });
});
