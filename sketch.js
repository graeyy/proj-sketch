const container = document.querySelector('#grid-container');
let color = 'black';

//let colNum = window.getComputedStyle(document.documentElement).getPropertyValue("--colNum");
let def = 4;

function createGrids() {
    for (var i = 0; i < def; i++) {
        for (var j = 0; j < def; j++) {
            var grid = document.createElement('div');
            grid.classList.add('square');
            grid.style.border = '1px solid darkgray';
            container.appendChild(grid);
            grid.addEventListener('mouseover', colorGrid);
        }
    }
    container.style.gridTemplateColumns = `repeat(${def}, 1fr)`
    container.style.gridTemplateRows = `repeat(${def}, 1fr)`
}
createGrids();

function colorGrid(e) {
    e.target.style.backgroundColor = color;
}


const clr = document.getElementById('btn-clear');


clr.addEventListener('click', () => {
    var boxes = document.querySelectorAll('.square');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})

const colorBtns = document.querySelectorAll('.change-color');

colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener('click', () => {
        var newColor = colorBtn.textContent;
        newColor = newColor.toLowerCase();
        color = newColor;
    })
})

const updateSize = document.getElementById('btn-update');

updateSize.addEventListener('click', () => {
    var newSize = prompt("Enter new grid size(1-75):");
    if (newSize >= 1 && newSize <= 75) {
        def = newSize;
        deleteGrids();
        createGrids();
    }
    else {
        window.alert("Invalid grid size entered!");
    }
})

function deleteGrids() {
    var box = document.getElementById('grid-container');
    while(box.lastChild) box.removeChild(box.lastChild);
}