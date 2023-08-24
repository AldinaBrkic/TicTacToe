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
var result = 0;	
let lastClickedSquare = null;


function elementt(allElements) 
{
  const squares = document.querySelectorAll('.el_No');
  const undoButton = document.getElementById('undoButton');



  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (square.style.backgroundColor === "") {
        if (lastClickedSquare && lastClickedSquare.style.backgroundColor === "red") {
          square.style.backgroundColor = "blue";
          lastClickedSquare = square;
        } else {
          square.style.backgroundColor =  "red" ;
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
  
  
  
	var hiddenEl = document.getElementById("hiddenEl"); 
	
	if(lastClickedSquare.style.backgroundColor === "red" || lastClickedSquare.style.backgroundColor === "blue")
	{
		counter++;
		if(counter === 8)
		{
			hiddenEl.style.display = "block";
			counter = 0;
		}
	}
	
	var showResult = document.getElementById("winLose");
	if (el1.style.backgroundColor !==  el2.style.backgroundColor  !== el3.style.backgroundColor && 
	 el4.style.backgroundColor !==  el5.style.backgroundColor !== el6.style.backgroundColor && 
	 el7.style.backgroundColor !== el8.style.backgroundColor !==  el9.style.backgroundColor &&
	 el1.style.backgroundColor !== el4.style.backgroundColor !== el7.style.backgroundColor &&  
	 el2.style.backgroundColor !== el5.style.backgroundColor !== el8.style.backgroundColor && 
	 el3.style.backgroundColor !== el6.style.backgroundColor !== el9.style.backgroundColor &&   
	 el1.style.backgroundColor !== el5.style.backgroundColor !== el9.style.backgroundColor &&  
	 el3.style.backgroundColor !== el5.style.backgroundColor !== el7.style.backgroundColor  )  
	{
		showResult.style.display = "block";
		showResult.innerHTML = "Its Draw!";
	}
	
	if (el1.style.backgroundColor ===  el2.style.backgroundColor && el2.style.backgroundColor  === el3.style.backgroundColor )
	{
		alert(" winner is" + el1.backgroundColor);
	}
	
	
	
  
}


