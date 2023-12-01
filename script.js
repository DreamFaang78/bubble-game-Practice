var Timer = 60;
var score = 0;
var hitrn = 0;
//Event Bubbling wo particular event par event raise hoga aur eventlistener na milne par event parent ke lsitener parent ke parent par listener dhoondega


function increaseScore() {
    score += 10;
    document.querySelector('#hitrn').textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#scoreVal').textContent = hitrn;
}
function makeBubble() {
    //Part-1
    var clutter = "";

    for (var i = 1; i < 115; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}
function runTimer() {
    var Timerinter = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#TimerValue").textContent = Timer;
        }
        else {
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
            clearInterval(Timerinter)
        }

    }, 1000)
}
// Event Bubbling
document.querySelector(".pbtm").addEventListener("click", function (details) {
    var clickedNumber = (Number(details.target.textContent));
    if (clickedNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();

