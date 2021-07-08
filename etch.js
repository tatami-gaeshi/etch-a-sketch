/* jshint esversion: 6 */

function changeBG(e) {
	console.log(e);
	e.target.style.background = 'black';
}

//attempts to clean up
function removeNodes(gridItem, container, size){
	for(let i = 0; i < size*size; i++){
		container.removeChild(gridItem[i]);
		// console.log("remove");
	}
}

const container = document.querySelector('#container');
container.style.borderStyle = 'solid';
container.style.borderRadius = '5px';

//regex for validation 1-100
const regex = new RegExp("^([1-9]|[1-9][0-9]|100)$");

let grid = [];
let dims = 16; //arbitrary default value

const clearButton = document.createElement('button');
createGrid(grid, container, dims);

function createGrid(grid, container, dims){
	container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;
	container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
	for(let i = 0; i < dims*dims; i++){
		grid.push(document.createElement('div'));
		grid[i].addEventListener('mouseover', changeBG);
		container.appendChild(grid[i]);
		// console.log("new grid");
	}
}

clearButton.textContent = "CLEAR";
clearButton.addEventListener('click', function() {
	for(let i = 0; i < dims*dims; i++){
		grid[i].style.background = 'white';
	}
		let input = prompt("Enter a number between 1-100");
		if(regex.test(input)){

			removeNodes(grid, container, dims);
			dims = input;
			createGrid(grid, container, input);
			
		}
		else {
			alert("Incorrect input! Please try again.");
		}
});
clear.appendChild(clearButton);
