let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31"; // FIXED: Added missing #
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win !, your ${userChoice} beats ${compChoice} !`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore; // FIXED: Changed from compUserPara
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => { // FIXED: Added userChoice parameter
    
    //Generate Computer Choice 
    const compChoice = genCompChoice();

    if(userChoice == compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; // FIXED: Changed === to =
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // FIXED
        } else {
            userWin = compChoice === "rock" ? false : true; // FIXED
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); // FIXED: Pass userChoice to playGame
    });
});
