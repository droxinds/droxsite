const caniac = document.getElementById("caniac");
var body = document.body;
var intX = 0;
var intY = 0;
var speed = .1;

caniac.addEventListener('mouseover', function () {
    caniac.innerHTML = 'caniac' ;
})

caniac.addEventListener('mouseout', function () {
    caniac.innerHTML = 'maniac' ;
})

function moveBackground() {
    intX += speed;
    intY += speed;
    body.style.backgroundPosition = intX + 'px ' + intY + 'px';
    requestAnimationFrame(moveBackground);
}

moveBackground()