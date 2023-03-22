console.log('git gud')
var e
var height = document.documentElement.clientHeight
var width = document.documentElement.clientWidth
function name(){
	console.log("x "+height)
	console.log("y "+width)
	for (let i=1;i<((height/2)+(width/2))*3.13;i++){
		var x3 = document.createElement('div')
		x3.setAttribute('class','squareWidth')
		x3.setAttribute('onmouseover','over(this)')
		//x3.setAttribute('onmouseout','out(this)')
		document.body.appendChild(x3)
		//console.log('x'+i)
	}
}
function tool_pen(){
	
}
function tool_fill(){
	
}
function tool_dropper(){
	
}
function tool_eraser(){
	
}
function over(some){
	some.style.background=e//getRandomColor()
	//console.log(some.style.background=e)
	
}
function out(some){
	some.style.background='#000';
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function kola(){
	e=String(colorpick.value)
	console.log(e)
}