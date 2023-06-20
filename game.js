
const container = document.querySelector('#container');

function makeGrid(x) {
    for(let i=0; i<x; i++){
        let myRow = document.createElement('tr');
        myRow.id = "row" + i;

        container.appendChild(myRow);

        let row = document.getElementById("row" + i);

        for(let j=0; j<x; j++){
            let myCol = document.createElement('td');

            myCol.setAttribute('style', 'border: 1px solid #000; width:150px; height:150px; margin:0; padding:0;');

            let cell = myCol.addEventListener('mouseover', function(e) {
                e.target.style.background = 'black';
            });

            row.appendChild(myCol);
        }
    }
}

makeGrid(16); 

const btn = document.querySelector('#newGrid');
btn.addEventListener('click', function (e) {
    let size = prompt("Enter the number of squares to be added per side");
});
