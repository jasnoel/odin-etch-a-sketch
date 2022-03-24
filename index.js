const SQUARE_DIMENSIONS = 16;


const squares = [];
const container = document.querySelector(".container");

for (let i = 0; i < SQUARE_DIMENSIONS; i++) { 
    const div = document.createElement("div");
    container.appendChild(div);
    for (let j = 0; j < SQUARE_DIMENSIONS; j++) {
        const subDiv = document.createElement("div");
        subDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
        });
        squares.push(subDiv);
        div.appendChild(subDiv);
    }
}

const resetPanel = document.querySelector(".reset-panel");
resetPanel.addEventListener('click', () => {
    squares.forEach(div => {
        div.style.backgroundColor = '#fff';
    });
})