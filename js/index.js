var can1,can2;
var ctx1,ctx2;
var lastTime,deltaTime;
var bgPic = new Image();
var canWidth,canHeight;
var ane;
var fruit;
var mom;
var mx,my;

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameLoop();
}

function init(){
	//获得canvas content
	can1 = document.getElementById("canvas1");//fishes,dust,UI,circle
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background,ane,fruits
	ctx2 = can2.getContext("2d");
	
	can1.addEventListener("mousemove", onMouseMove, false);
	
	bgPic.src = "./img/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
}

function gameLoop(){
	window.requestAnimFrame(gameLoop) //setInterval,setTimeout,fps -> frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
}

function onMouseMove(e){
	if(e.offsetX || e.layerX) {
		mx = e.offsetX === undefined ? e.layerX : e.offsetX;
		my = e.offsetY === undefined ? e.layerY : e.offsetY;
	}
}
