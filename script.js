console.log('git gud ;)')
var color = '#fff',
	cubeSize = 20,//px
	X = 0,
	height = document.documentElement.clientHeight,
	width = document.documentElement.clientWidth,
	mode = 'default'
let limit = 6,
	random = false,
	draw
var random1 = false



function tool_pen() {
	mode = 'default'
}
function tool_fill(color) {
	mode = 'fill'
	if (random1) {
		var pixel = document.querySelectorAll('.squareWidth')
		pixel.forEach(el => {
			el.style.background = getRandomColor()
		});
		mode = 'default'
		return
	}
	var pixel = document.querySelectorAll('.squareWidth')
	pixel.forEach(el => {
		el.style.background = color
	});
	mode = 'default'
}
function tool_dropper() {
	mode = 'drop_color'

	console.log(`drop_color mode:${mode}`)
}
function tool_eraser() {
	mode = 'erase'

	console.log(`erase mode:${mode}`)
}
function tool_erase_all() {
	mode = 'erase_all'
	var pixel = document.querySelectorAll('.squareWidth')
	pixel.forEach(el => {
		el.style.background = '#fff'
	});
	console.log(`erase all mode:${mode}`)
}


function pickColor(btn, random, random2) {
	if (random2) {
		userColor.style.background='#fff'
		userColor.innerText='magic'
		random1 = true
		return
	} else {
		userColor.innerText=''
		random1 = false
	}
	if (random) {
		color = getRandomColor()
		userColor.style.background = color
		return
	}
	color = btn.style.background
	userColor.style.background = color
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
	x3.classList.add('squareWidth')
	x3.addEventListener('mouseover', function () {
		if (!draw) return
		if (random1) {
			x3.style.backgroundColor = getRandomColor()
			return
		}
		if(mode=='erase'){
			x3.style.backgroundColor = '#fff'
			return
		}
		x3.style.backgroundColor = color
	})
	x3.addEventListener('mousedown', function () {
		if (random1) {
			x3.style.backgroundColor = getRandomColor()
			return
		}
		if(mode=='erase'){
			x3.style.backgroundColor = '#fff'
			return
		}
		x3.style.backgroundColor = color
	})

	playg.appendChild(x3)
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


window.addEventListener("mousedown", function () {
	draw = true
})

window.addEventListener("mouseup", function () {
	draw = false
})
