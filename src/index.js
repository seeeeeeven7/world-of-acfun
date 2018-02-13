// Create Canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "../images/acfun_emoji/01.png";

// cardIds = ['01', '02', '03', '05', '06'];
cardIds = ['01', '02', '03'];
cards = []
for (var i in cardIds) {
    card = Card.createNew(cardIds[i], 0, i * 100)
    cards.push(card)
}

var reset = function () {
    
};

var update = function (modifier) {
    
};

var render = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);  
    for (var i in cardIds) {
        cards[i].drawIn(context);
    }
}

var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    // 立即调用主函数
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();