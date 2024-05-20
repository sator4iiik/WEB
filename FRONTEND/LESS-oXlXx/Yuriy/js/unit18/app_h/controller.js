function getResult() {
    let playerResult;
    let computerResult;
    let result;

    console.log(getPlayerResult());
    console.log(getComputerResult());
    console.log(`результат ${summResult()}`);

    playerResult = getPlayerResult();
    computerResult = getComputerResult();
    result = summResult();

    something(playerResult, computerResult, result);

}
