//Declare global vars
var canvas = document.getElementById("canvas");

//Declare size vars and event listener on submit
var sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});

//Function
function makeGrid() {
  //Set height and width vars
  var inputHeight = document.getElementById("inputHeight").value;
  var inputWidth = document.getElementById("inputWidth").value;

  //Declare color var and event listener for color selection
  canvas.addEventListener("click", function(event) {
    if (event.target.nodeName === "TD") {
      const color = document.getElementById("colorPicker").value;
      event.target.style.backgroundColor = color;
    }
  });

  //Draw table
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
