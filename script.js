
let user_score = 0;
let computer_score = 0;
let new_Game = document.getElementById('New-Game')
new_Game.addEventListener("click",()=>{
    user_score = 0;
    computer_score = 0;
    document.getElementById("your-score").innerText = user_score;
    document.getElementById('computer-score').innerText = computer_score;
})
const choices = document.querySelectorAll(".choice");
let option = ["rock", "paper", "scissor"];
let message = document.getElementById("message")

// if user and computer have same choice then it is a tie
let draw = () => {
    message.style.backgroundColor = "black";
    message.innerText = " It is a tie : Same Choice";
}

// after one play the score should be displayed
let showScore = () => {
    document.getElementById("your-score").innerText = user_score;
    document.getElementById('computer-score').innerText = computer_score;
}

// update the score after each play
let updateScore = (userwin) => {
    if (userwin) {
        user_score = user_score + 1;
        showScore();
    }
    else {
        computer_score = computer_score + 1;
        showScore();
    }
}

const computerplay = () => {
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
}

const playGame = (user_choice) => {
    let computer_choice = computerplay();
    let userwin = true;
    if (computer_choice === user_choice) {
        draw()
    }
    else if (user_choice === "rock") {
        if (computer_choice === "scissor") {
            userwin = true;
            message.style.backgroundColor = "Green";
            message.innerText = "You win 🏆 : rock beats scissor";
            
            updateScore(userwin);
        } else {
            userwin = false;
            message.style.backgroundColor = "red";
            message.innerText = "You lose 😔 : paper beats rock";
            updateScore(userwin);
        }

    }
    else if (user_choice === "paper") {
        if (computer_choice === "rock") {
            userwin = true;
            message.innerText = " You win 🏆 : paper beats rock";
            message.style.backgroundColor = "Green";
            updateScore(userwin);
        } else {
            userwin = false;
            message.style.backgroundColor = "red";
            message.innerText = " You lost 😔 : scissor beats paper";
            updateScore(userwin);
        }
    }
    else if (user_choice === "scissor") {
        if (computer_choice === "paper") {
            userwin = true;
            message.innerText = " You win 🏆 : scissor beats paper";
            message.style.backgroundColor = "Green";
            updateScore(userwin)
        } else { 
        userwin = false;
        message.style.backgroundColor = "red";
        message.innerText = " You lost 😔 : rock beats scissor ";
        updateScore(userwin);
        }
    }

    computerplay();

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});