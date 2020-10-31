const container = document.querySelector('#grid-container');
let color = 'black';

//let colNum = window.getComputedStyle(document.documentElement).getPropertyValue("--colNum");
let def = 4;

function createGrids(dimension) {
    console.log(dimension);
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
            defGrid();
            console.log('appended');
        }
    }
}

function defGrid() {
    var grid = document.createElement('div');
    grid.classList.add('square');
    grid.style.border = '1px solid darkgray';
    container.appendChild(grid);

}

function gridLayout() {
    document.documentElement.style.setProperty('--colNum', def);
}

createGrids(def);
gridLayout();

const updateSize = document.getElementById('btn-update');

updateSize.addEventListener('click', () => {
    def = document.getElementById('size').value;
    deleteGrids();
    createGrids(def);
    gridLayout();

});

function deleteGrids() {
    var foo = document.getElementById('grid-container');
        while (foo.lastChild) foo.removeChild(foo.lastChild);
}

const boxes = document.querySelectorAll('.square');


const clr = document.getElementById('btn-clear');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = color;
        console.log('hovered');
    })
})

clr.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})

const colorBtns = document.getElementById('color-grid').querySelectorAll('button');

colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener('click', () => {
        var newColor = colorBtn.textContent;
        newColor = newColor.toLowerCase();
        color = newColor;
    })
})