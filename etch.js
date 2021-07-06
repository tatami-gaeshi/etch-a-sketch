/* jshint esversion: 6 */

// console.log("TESTING!");

function setColor(e){
	e.targe.style.color = '#000';

}

function testFunction(e) {
	console.log(e);
	e.target.style.background = 'black';
}

const container = document.querySelector('#container');

let grid = [];

for(let x = 0; x < 16; x++){
	for(let y = 0; y < 16; y++){
	
		// console.log("TEST");
		grid.push(document.createElement('div'));
		// container.appendChild(grid[x][y]);
	}
}

for(let i = 0; i < 256; i++){
	grid[i].addEventListener('mouseover', testFunction);
	container.appendChild(grid[i]);
}

//addEventListener(onClick)
