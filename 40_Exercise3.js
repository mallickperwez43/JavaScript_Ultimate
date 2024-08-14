/*
    elem.innerHTML is used to populate a div with html. Search online about this method and create a website with a div tag containing a random joke given an array of jokes from the internet.(Use any website to create the array)
    Your website should show a random joke on every reload. Min length of your jokes array should be 10.
*/

const jokes = [
    `What do you call a pony with a cough?
    A little horse`,

    `What did one hat say to the other?
    You wait here. I’ll go on a head`,

    `What do you call a magic dog?
    A labracadabrador`,

    `What did the shark say when he ate the clownfish?
    This tastes a little funny`,

    `What’s orange and sounds like a carrot?
    A parrot`,

    `Why can’t you hear a pterodactyl go to the bathroom?
    Because the “P” is silent`,

    `What do you call a woman with one leg?
    Eileen`,

    `What did the pirate say when he turned 80?
    Aye matey`,

    `Why did the frog take the bus to work today?
    His car got toad away`,

    `What did the buffalo say when his son left for college?
    Bison`,

    `What is an astronaut’s favorite part on a computer?
    The space bar`,

    `Why did the yogurt go to the art exhibition?
    Because it was cultured`,

    `What do you call an apology written in dots and dashes?
    Re-Morse code`,

    `Did you hear about the two people who stole a calendar?
    They each got six months`,

    `Why did the hipster burn his mouth?
    He drank the coffee before it was cool`,

    `What do cows do on date night?
    Go to the moo-vies`,

    `What do cows say when they hear a bad joke?
    I am not amoosed`,

    `Why do French people eat snails?
    They don't like fast food`,

    `Why did the golfer wear two pairs of pants?
    Just in case he got a hole in one`,

    `Why don’t the circus lions eat the clowns?
    Because they taste funny`
];

document.getElementById("sp").innerHTML = jokes[Math.floor(Math.random() * jokes.length)];