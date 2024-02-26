const view = {
    displayResult(playerChoice, computerChoice, result) {
        let resultMessage;
        switch (result) {
            case 'ПОБЕДА':
                resultMessage = 'Ты победил! 🎉';
                break;
            case 'ПОТРАЧЕНО':
                resultMessage = 'Ты проиграл! 😔';
                break;
            case 'НИЧЬЯ':
                resultMessage = 'Это ничья! 😐';
                break;
        }
        const gameElement = document.getElementById('game');
        gameElement.innerHTML = `
            <p>Твой выбор: ${playerChoice} ${this.getEmoji(playerChoice)}</p>
            <p>Выбор компьютера: ${computerChoice} ${this.getEmoji(computerChoice)}</p>
            <p>${resultMessage}</p>
        `;
    },

    getEmoji(choice) {
        switch (choice) {
            case 'камень':
                return '🪨';
            case 'бумага':
                return '📄';
            case 'ножницы':
                return '✂️';
        }
    }
};
