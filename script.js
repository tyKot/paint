console.log('git gud ;)')
var color = '#fff',
	cubeSize = 20,//px
	X = 0,
	height = document.documentElement.clientHeight,
	width = document.documentElement.clientWidth,
	mode = 'default'
let limit = 6

function tool_pen() {
	mode = 'click'
}
function tool_fill(color) {
	mode = 'fill'
	var pixel = document.querySelectorAll('.squareWidth')
	pixel.forEach(el => {
		el.style.background = color
	});
}
function tool_dropper() {
	mode = 'drop_color'

}
function tool_eraser() {
	mode = 'erase'
}
function paint(pixel) {
	if (!mode === 'drop_color') {
		pixel.style.background = color//getRandomColor()
		return
	}
	userColor.value = pixel.style.background
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function pickColor(btn) {
	color = btn.style
	console.log(color)
}

function generate() {
	console.log("height " + height)
	console.log("width " + width)
	var playg = document.querySelector('.playground'),
		floor = Math.floor(playg.clientWidth / cubeSize) * cubeSize
	// ceil = Math.ceil(playg.clientWidth / 10) * 10
	for (let y = 0; y <= playg.clientHeight - cubeSize; y += cubeSize) {
		console.log('Y:' + y)
		createPixel(playg)
		console.log('height:' + playg.clientHeight)

		for (let x = 1; x < playg.clientWidth; x++) {

			// console.log(`floor` + floor)
			// console.log(`orig` + playg.clientWidth)
			X += cubeSize
			if (X == floor) {
				console.log('nice')
				X = 0
				break
			}
			createPixel(playg)
			// console.log('x:' + x)

		}
	}

}

function createPixel(playg) {
	var x3 = document.createElement('div')
	x3.setAttribute('class', 'squareWidth')
	x3.setAttribute('onclick', 'paint(this)')
	// x3.setAttribute('onmouseover', 'paint(this)')
	x3.setAttribute('ontouchstart', 'paint(this)')
	x3.setAttribute('ontouchmove', 'paint(this)')
	x3.style.background = '#fff'
	playg.appendChild(x3)
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