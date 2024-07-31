let userScore = 0;
let botScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score");
const botScorepara = document.querySelector("#bot-score");


const genBotChoice = ()=>{
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = ()=>{
    msg.innerHTML="Game was Draw. Play again!";
    msg.style.backgroundColor="grey";
}
 
const showWinner = (userWin, userChoice, botChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerHTML=userScore;
        msg.innerHTML=`You Win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor="green";
    }else{
        botScore++;
        botScorepara.innerHTML=botScore;
        msg.innerHTML=`You Lose! Your ${botChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    // console.log("User choice was:", userChoice)
    const botChoice = genBotChoice();
    // console.log("Bot choice was:", botChoice)


    if(userChoice===botChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice==="Rock"){
            userWin = botChoice==="Paper" ? false : true;
        }else if(userChoice==="Paper"){
            userWin = botChoice==="Scissors" ? false : true;
        }else{
            userWin = botChoice==="Rock" ? false : true; 
        }  
        
        showWinner(userWin, userChoice, botChoice);
    }


}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choices was made", userChoice)
        playGame(userChoice)
    })
})