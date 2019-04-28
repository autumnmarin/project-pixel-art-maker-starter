

canvas.addEventListener("submit", makeGrid);
/* canvas.addEventListener("click", function(e) {
  let color = document.getElementById("colorPicker").value; 
  e.target.style.backgroundColor = color; 
}); */

// Select size input
var sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var inputHeight = document.getElementById("inputHeight").value;
  var inputWidth = document.getElementById("inputWidth").value;
  var canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  for (let x = 0; x < inputHeight; x++) {
    var row = document.createElement("tr");
    canvas.appendChild(row);
    for (let y = 0; y < inputWidth; y++) {
      var column = document.createElement("td");
      row.appendChild(column);
    }
  }
}