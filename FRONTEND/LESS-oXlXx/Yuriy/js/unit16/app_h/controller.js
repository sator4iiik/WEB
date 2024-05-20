const controller = {
    play(playerChoice) {
        const computerChoice = model.getComputerChoice();
        const result = model.getResult(playerChoice, computerChoice);
        view.displayResult(playerChoice, computerChoice, result);
    }
};
