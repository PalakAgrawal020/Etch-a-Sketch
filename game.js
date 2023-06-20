
const container = document.querySelector('#container');

makeGrid(16);

function makeGrid(x) {
    for(let i=0; i<x; i++){
        let myRow = document.createElement('tr');
        myRow.id = "row" + i;
        myRow.classList.add('row');

        container.appendChild(myRow);

        let row = document.getElementById("row" + i);

        for(let j=0; j<x; j++){
            let myCol = document.createElement('td');
            myCol.classList.add('box');

            let cell = myCol.addEventListener('mouseover', function(e) {
                e.target.style.background = 'black';
            });

            row.appendChild(myCol);
        }
    }
}

function clear() {
    container.textContent = "";
}

const btn = document.querySelector('#newGrid');
btn.addEventListener('click', function (e) {
    let x = prompt("Enter the number of squares to be added per side");
    clear();
    makeGrid(x);
});

