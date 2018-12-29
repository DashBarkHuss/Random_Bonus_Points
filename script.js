/*For this program, we want this function to result in a point 
 when it is triggered and extrapoints only at a certain randomized time.
*/

var scoreBoard;
var points = 0;

window.onload = function(){
    scoreBoard = document.getElementById("one");
    }
    
var bonusInterval = false;
var points = 0;

function toggleBonusInterval(){
    bonusInterval = !bonusInterval;
}

(function loop() { //outer parenthesis mean this is a self executing function
    var wait;
    bonusInterval ? wait = 2000 : wait = ((Math.round(Math.random() * 20)) * 1000);
    setTimeout(function() { 
            toggleBonusInterval();
            loop();  
    }, wait);
}());/*the outer parenthesis means it is a self executing 
function and the inner parenthesis exetutes this function*/

function point(){
    bonusInterval ? points +=5 : points +=1;    
    scoreBoard.innerHTML = points;
}


