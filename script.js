var el1 = document.getElementById ("elNo1");
var el2 = document.getElementById ("elNo2");
var el3 = document.getElementById ("elNo3");
var el4 = document.getElementById ("elNo4");
var el5 = document.getElementById ("elNo5");
var el6 = document.getElementById ("elNo6");
var el7 = document.getElementById ("elNo7");
var el8 = document.getElementById ("elNo8");
var el9 = document.getElementById ("elNo9");
var counter = 0;
let lastClickedSquare = null;


function elementt(allElements) {
  const squares = document.querySelectorAll('.el_No');
  const undoButton = document.getElementById('undoButton');



  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (square.style.backgroundColor === "") {
        if (lastClickedSquare && lastClickedSquare.style.backgroundColor === "red") {
          square.style.backgroundColor = "blue";
          lastClickedSquare = square;
        } else {
          square.style.backgroundColor = "red";
          lastClickedSquare = square;
        }
      }
    });
  });

  undoButton.addEventListener('click', () => {
    if (lastClickedSquare) {
      lastClickedSquare.style.backgroundColor = '';
      lastClickedSquare = null;
    }
  });
}


