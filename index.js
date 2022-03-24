const createGrid = (squaresDimensions) => {
    for (let i = 0; i < squaresDimensions; i++) { 
        const div = document.createElement("div");
        container.appendChild(div);
        for (let j = 0; j < squaresDimensions; j++) {
            const subDiv = document.createElement("div");
            subDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',0,' + Math.floor(Math.random() * 256) + ')';
            });
            squares.push(subDiv);
            div.appendChild(subDiv);
        }
    }
}

const squares = [];
const container = document.querySelector(".container");

const resetPanel = document.querySelector(".reset-panel");
resetPanel.addEventListener('click', () => {
    squares.forEach(div => {
        div.style.backgroundColor = '#fff';
    });
    let numberOfSquare = null;
    while (numberOfSquare > 100 || numberOfSquare < 0 || !numberOfSquare || typeof numberOfSquare != 'number') {
        numberOfSquare = parseInt(prompt("How many squares per side do you want ?", 50));
    }
    container.innerHTML = "";
    createGrid(numberOfSquare);
})

createGrid(16);