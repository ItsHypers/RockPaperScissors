function play()
{
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        computerPick = computer()
        playerprompt = prompt("Rock, Paper or Scissors?")
        playerPick = player(playerprompt.toString())
        winner(winnerDecider(playerPick, computerPick), playerPick, computerPick)
        if(winnerDecider(playerPick, computerPick) == "computer")
        {
            computerScore++
        }
        if(winnerDecider(playerPick, computerPick) == "player")
        {
            playerScore++
        }
    }
    console.log("Player: " + playerScore)
    console.log("Computer: " + computerScore)
}

function computer()
{
    number = randomInteger(1, 3)
    if(number === 1)
    {
        answer = "rock"
    }
    else if(number === 2)
    {
        answer = "paper"
    }
    else if(number === 3)
    {
        answer = "scissors"
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