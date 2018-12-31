var points=0;
var bonusInterval=false;
var pointsDiv;

window.onload= function(){
    pointsDiv = document.getElementById("points").getElementsByTagName("p")[0];
};

(function loop(){
    var wait;
    bonusInterval ? wait = 2000 : wait = Math.random()*20*1000;
    setTimeout(function(){
        bonusInterval = !bonusInterval;
        loop();
    }, wait)
}());

function addPoints(){
    bonusInterval ? points += 5 : points += 1;
    pointsDiv.innerHTML = points;
}