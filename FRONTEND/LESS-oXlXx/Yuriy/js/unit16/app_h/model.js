const model = {
    options: ['камень', 'бумага', 'ножницы'],

    getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * this.options.length);
        return this.options[randomIndex];
    },

    getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'НИЧЬЯ';
        } else if (
            (playerChoice === 'камень' && computerChoice === 'ножницы') ||
            (playerChoice === 'бумага' && computerChoice === 'камень') ||
            (playerChoice === 'ножницы' && computerChoice === 'бумага')
        ) {
            return 'ПОБЕДА';
        } else {
            return 'ПОТРАЧЕНО';
        }
    }
};
