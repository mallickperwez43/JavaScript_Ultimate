/* Use javascript to create a game of Snake, Water & Gun.
   The game should ask you to enter S, W or G.
   The computer should be able to randomly generate S, W or G and declare Win or Loss
   using alert
   Use confirm and prompt wherever required
*/
// gun vs snake -> gun shoots snake -> gun
// water vs gun -> water sinks the gun -> water
// snake vs water -> snake drinks the water -> snake

// function to get the random char index
const getRandomCharIndex = (characters)=>{
    let randomIndex = Math.floor(Math.random() * characters.length);
    return randomIndex;
}

const characters = ['S', 'W', 'G'];
let i = 0;
let compWin = 0;
let youWin = 0;
let again = true;
while(again){
    let randomChar = characters[getRandomCharIndex(characters)];
    let yourChar = prompt("Choose S, W, G");

    if(randomChar == 'G' && yourChar == 'S' || randomChar == 'W' && yourChar == 'G' || randomChar == 'S' && yourChar == 'W'){
        alert("You lost, Comp Won because it has chosen " + randomChar);
        compWin++;
    }
    else if(randomChar == yourChar){
        alert("Draw, Both chosen " + randomChar);
    }
    else{
        alert("You won, Comp lost because it has chosen " + randomChar);
        youWin++;
    }

    again = confirm("Play Again?");
}

alert("You won " + youWin + " times and comp won " + compWin + " times");