console.log('git gud')
var color
cubeSize = 20//px
X = 0
height = document.documentElement.clientHeight
width = document.documentElement.clientWidth 
let limit = 2
function name() {
	console.log("x " + height)
	console.log("y " + width)
	// for (let i = 1; i < height + width; i++) {
	// 	var x3 = document.createElement('div')
	// 	x3.setAttribute('class', `squareWidth ${i}`)
	// 	x3.setAttribute('onmouseover', 'over(this)')
	// 	document.querySelector('.playground').appendChild(x3)
	// 	//x3.setAttribute('onmouseout','out(this)')
	// 	//console.log('x'+i)
	// }
	generate()
}
function tool_pen() {

}
function tool_fill() {

}
function tool_dropper() {

}
function tool_eraser() {

}
function over(some) {
	some.style.background = color//getRandomColor()
	//console.log(some.style.background=e)

}
function out(some) {
	some.style.background = '#000';
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function kola() {
	color = String(colorpick.value)
	console.log(color)
}

function generate() {
	var playg = document.querySelector('.playground')
		floor = Math.floor(playg.clientWidth / cubeSize) * cubeSize
	// ceil = Math.ceil(playg.clientWidth / 10) * 10
	for (let y = 1; y <= limit; y++) {
		console.log('y:' + y)
		var x3 = document.createElement('div')
		x3.setAttribute('class', 'squareWidth')
		x3.setAttribute('onmouseover', 'over(this)')
		playg.appendChild(x3)
		generate_osX(playg)
	}

}

function generate_osX(playg){
	for (let x = 1; x < playg.clientWidth; x++) {

		console.log(`floor` + floor)
		console.log(`orig` + playg.clientWidth)
		if (X == floor) {
			console.log('nice')
			break
		}
		X += cubeSize
		var x3 = document.createElement('div')
		x3.setAttribute('class', 'squareWidth')
		x3.setAttribute('onmouseover', 'over(this)')
		playg.appendChild(x3)
		console.log('x:' + x)
		
	}
	
}








/*for (let i = 1; i < ((height / 2) + (width / 2)) * 3.13; i++) {
		document.body.append(
			Object.assign(document.createElement('div'),
				{
					id: 'sq' + i,
					className: 'squareWidth'
				}
			)
		)
		//x3.setAttribute('onmouseout','out(this)')
		//console.log('x'+i)
	}*/ 