
let playerOption = 0
let pcOption = 0
let winCounter = 0
let lossCounter = 0

//Generacion de la opcion del pc de forma aleatoria
function aleatorio (Min, Max)
{
    return Math.floor(Math.random()*(Max - Min + 1) + Min)
}
//Elecciones
function choose(option)
{
    let message = ""             
    if(option == 1)
    {
        message = "Rock"
    }
    else if (option == 2)
    {
        message = "Paper"
    }
    else if (option == 3)
    {
        message = "Scissors"
    }
    else
    {
        message = "The option is not found"
    } 

    return message
}

while (winCounter < 3 && lossCounter < 3)
{
    pcOption = aleatorio(1,3)
    let Min = 1
    let Max = 3
    
    playerOption = prompt("Choose  1) Rock  2) Paper  3) Scissors")
    
    alert("You chose " + choose(playerOption))
    alert("Pc choose " + choose(pcOption))

    //Starting of game
    if(pcOption == playerOption)
    {
        alert("TIE")
    } 
    else if (playerOption == 1 && pcOption == 3)
    {
        alert("WON")
        winCounter = winCounter + 1
    }
    else if (playerOption == 2 && pcOption == 1)
    {
        alert("WON") 
        winCounter = winCounter + 1
    }
    else if (playerOption == 3 && pcOption == 2)
    {
        alert("WON") 
        winCounter = winCounter + 1
    }
    else 
    {
        alert("LOST")
        lossCounter = lossCounter + 1
    }
}

alert("Victories: " + winCounter + "    Losses: " + lossCounter)
if (winCounter > lossCounter)
{
    alert("You WON the game")
}
else
{
    alert("You LOST the game")
}

//Bug cuando envias un dato no valido