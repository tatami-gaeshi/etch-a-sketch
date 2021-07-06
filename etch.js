/* jshint esversion: 6 */

// console.log("TESTING!");

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
	container.appendChild(grid[i]);
}
