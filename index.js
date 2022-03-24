const SQUARE_DIMENSIONS = 16;

const container = document.querySelector(".container");

for (let i = 0; i < SQUARE_DIMENSIONS; i++) { 
    const div = document.createElement("div");
    container.appendChild(div);
    for (let j = 0; j < SQUARE_DIMENSIONS; j++) {
        const subDiv = document.createElement("div");
        div.appendChild(subDiv);
    }
}