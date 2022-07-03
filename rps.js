let playerScore = 0;
let computerScore = 0;
document.getElementById("dismiss-popup-btn").disabled = true;
function play(playerPick)
{
    computerPick = computer()
    winner(winnerDecider(playerPick, computerPick), playerPick, computerPick)
    if(winnerDecider(playerPick, computerPick) == "computer")
    {
        computerScore++
    }
    if(winnerDecider(playerPick, computerPick) == "player")
    {
        playerScore++
    }
    document.getElementById("winner").textContent= CFL(winnerDecider(playerPick, computerPick));
    document.getElementById("playerDecision").textContent=CFL(playerPick);
    document.getElementById("computerDecision").textContent=CFL(computerPick);
    document.getElementById("playerS").textContent=playerScore;
    document.getElementById("computerS").textContent=computerScore;
    if(playerScore == 5)
    {
        finalWinner("player")
    }
    if(computerScore == 5)
    {
        finalWinner("computer")
    }
}

function computer()
{
    number = randomInteger(1, 3)
    let rock = document.getElementById("Crock")
    let paper = document.getElementById("Cpaper")
    let scissors = document.getElementById("Cscissors")
    if(number === 1)
    {
        answer = "rock"
        rock.classList.add("computerHover")
        paper.classList.remove("computerHover")
        scissors.classList.remove("computerHover")
    }
    else if(number === 2)
    {
        answer = "paper"
        rock.classList.remove("computerHover")
        paper.classList.add("computerHover")
        scissors.classList.remove("computerHover")
    }
    else if(number === 3)
    {
        answer = "scissors"
        rock.classList.remove("computerHover")
        paper.classList.remove("computerHover")
        scissors.classList.add("computerHover")
    }
    return answer
}

function player(answer)
{
    if(answer === String)
    {
        answer = answer.toLowerCase()
    }
    if(answer === 1 || answer === "rock")
    {
        answer = "rock"
    }
    else if(answer === 2 || answer === "paper")
    {
        answer = "paper"
    }
    else if(answer === 3 || answer == "scissors")
    {
        answer = "scissors"
    }
    return answer
}

function winnerDecider(playerPick, computerPick)
{
    if(playerPick == 1 || playerPick == "rock")
    {
        if(computerPick == 1 || computerPick == "rock")
        {
            return("draw")
        }
        if(computerPick == 2 || computerPick == "paper")
        {
            return("computer")
        }
        if(computerPick == 2 || computerPick == "scissors")
        {
            return("player")
        }
    }

    if(playerPick == 2 || playerPick == "paper")
    {
        if(computerPick == 1 || computerPick == "rock")
        {
            return("player")
        }
        if(computerPick == 2 || computerPick == "paper")
        {
            return("draw")
        }
        if(computerPick == 2 || computerPick == "scissors")
        {
            return("computer")
        }
    }

    if(playerPick == 3 || playerPick == "scissors")
    {
        if(computerPick == 1 || computerPick == "rock")
        {
            return("computer")
        }
        if(computerPick == 2 || computerPick == "paper")
        {
            return("player")
        }
        if(computerPick == 2 || computerPick == "scissors")
        {
            return("draw")
        }
    }
}

function winner(winner, player, computer)
{
    if(winner == "computer")
    {
        console.log(winner + " wins! " + computer + " beats " + player)
    }
    if(winner == "player")
    {
        console.log(winner + " wins! " + player + " beats " + computer)
    }
    if(winner == "draw")
    {
        console.log("It was a draw! Both picked " + player)
    }
}

function finalWinner(winner)
{
    if(winner == "computer")
    {
        document.getElementById("description").textContent = "Unfortunately you did not win! Restart and try again!"
        document.getElementById("title").textContent = "You lost!"
        document.getElementById("image").src="images/sad.png"
    }
    if(winner == "player")
    {
        document.getElementById("description").textContent = "Congrats! You beat the computer! Restart to try your luck again!"
        document.getElementById("title").textContent = "You won!"
        document.getElementById("image").src="images/happy.png"
    }
    document.getElementById("dismiss-popup-btn").disabled = false;
    document.getElementsByClassName("popup")[0].classList.add("active");
}


function convertNumtoString(number)
{
    if(number == 1)
    {
        return "rock"
    }
    if(number == 2)
    {
        return "paper"
    }
    if(number == 3)
    {
        return "scissors"
    }
}



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function CFL(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    play("rock")
  });
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    play("paper")
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    play("scissors")
});

  
  document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
    playerScore = 0
    computerScore = 0
    document.getElementById("winner").textContent= "";
    document.getElementById("playerDecision").textContent="";
    document.getElementById("computerDecision").textContent="";
    document.getElementById("playerS").textContent=0;
    document.getElementById("computerS").textContent=0;
    document.getElementById("dismiss-popup-btn").disabled = true;
  });