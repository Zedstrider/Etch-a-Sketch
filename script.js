const container = document.getElementById('container');
const button = document.getElementById('resizeBtn');

function createGrid(size) {
  // Clear previous grid
  container.innerHTML = '';
  // Calculate square size based on container (960px)
  const squareSize = 500 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity=0.5;
    square.addEventListener("mouseover",()=>{
      // if square has no assigned color yet, pick one  
      if (!square.dataset.color) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.dataset.color = `rgb(${r}, ${g}, ${b})`;
        square.style.backgroundColor = square.dataset.color;
      }
        let currentOpacity = parseFloat(square.style.opacity);
        if(currentOpacity<1)
            square.style.opacity = (currentOpacity + 0.05);
    });
    container.appendChild(square);
  }
}
// Prompt user for new grid size
button.addEventListener('click', () => {
  let newSize = prompt("Enter number of squares per side (max 100):");
  newSize = parseInt(newSize);
  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
})
// Create default grid on load
createGrid(16);

