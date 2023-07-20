const rollButton = dsocument.querySelector("#rollButton");
const currentRollElement = document.querySelector(".currentRoll")
const currentRollingTotalElement = document.querySelector(".currentRollingTotal")
const gameResultElement = document.querySelector(".game")
let sumOfRolls = 0;
let rollCount = 0;

rollButton.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    currentRollTotalElement.innerHTML = roll;
    sumOfRolls += roll;
    currentRollingTotalElement.innerHTML = sumOfRolls;
    rollCount += 1;

    if(rollCount == 3) {
        rollButton.disabled = true;
        let result = "";
        if(sumOfRolls < 8) {
            result = "loss"
        } else if(sumOfRolls > 8) {
            result = "win"
        }else {
            result = "jackpot"
        }
        gameResultElement.innerHTML = result;
    }
});

