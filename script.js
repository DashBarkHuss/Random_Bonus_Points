/*For this program, we want this function to result in a point 
only when it is triggered at a certain randomized time.
*/

/*
Let's start with a simplified version. Every two seconds the
 possiblility of getting a point with change.

*/

var scoreBoard = document.getElementById("one");
var bonusInterval = false;
var points = 0;

// function toggleBonusInterval(){
//     bonusInterval = !bonusInterval;
// }

// (function loop() { //outer parenthesis mean this is a self executing function
//     var rand = (Math.round(Math.random() * 20)) * 1000;
//     console.log(rand);
//     setTimeout(function() {
//             console.log("hey");
//             toggleBonusInterval();
//             loop();  
//     }, rand);
// }());/*the outer parenthesis means it is a self executing 
// function and the inner parenthesis exetutes this function*/

function point(){
    // bonusInterval ? points +=5 : points +=1;
    console.log("clicked");
    
    scoreBoard.innerHTML = points;
}

/*why is the scoreboard variable that stores the dom element with id "one" null
when I reference it inside the point function? if I initialize it in the opoint function
it works but isn't it in scope? */
