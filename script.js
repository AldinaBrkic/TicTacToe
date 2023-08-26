var el1 = document.getElementById ("elNo1");
var el2 = document.getElementById ("elNo2");
var el3 = document.getElementById ("elNo3");
var el4 = document.getElementById ("elNo4");
var el5 = document.getElementById ("elNo5");
var el6 = document.getElementById ("elNo6");
var el7 = document.getElementById ("elNo7");
var el8 = document.getElementById ("elNo8");
var el9 = document.getElementById ("elNo9");

let lastClickedSquare = null;
var counter = 0;

function elementt(allElements) 
{

	 var squares = document.getElementById(allElements);
	 var undoButton = document.getElementById('undoButton');
	 
	 if (squares.style.backgroundColor === "")
	 {
		 counter++;
		 if(counter === 1)
		 {
			 squares.style.backgroundColor = "RED";
			 lastClickedSquare = squares;
		 } 
		 if(counter === 2)
		 {
			 squares.style.backgroundColor = "BLUE";
			  lastClickedSquare = squares;
			 counter = 0;
		 }
	 }
		
	  undoButton.addEventListener('click', () => {
		if (lastClickedSquare) {
		  lastClickedSquare.style.backgroundColor = '';
		  lastClickedSquare = null;
		}
	  });
	  
	var result = document.getElementById('hiddenEl');
	var showResult = document.getElementById("winLose");
	
	//Winner is...!
	
	if( el1.style.backgroundColor !== "" && el1.style.backgroundColor ===  el2.style.backgroundColor &&  el2.style.backgroundColor ===  el3.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	}
	if( el4.style.backgroundColor !== "" && el4.style.backgroundColor ===  el5.style.backgroundColor &&  el5.style.backgroundColor ===  el6.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	if( el7.style.backgroundColor !== "" && el7.style.backgroundColor ===  el8.style.backgroundColor &&  el8.style.backgroundColor ===  el9.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	if( el1.style.backgroundColor !== "" && el1.style.backgroundColor ===  el4.style.backgroundColor &&  el4.style.backgroundColor ===  el7.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	if( el2.style.backgroundColor !== "" && el2.style.backgroundColor ===  el5.style.backgroundColor &&  el5.style.backgroundColor ===  el8.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	if( el3.style.backgroundColor !== "" && el3.style.backgroundColor ===  el6.style.backgroundColor &&  el6.style.backgroundColor ===  el9.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	if( el1.style.backgroundColor !== "" && el1.style.backgroundColor ===  el5.style.backgroundColor &&  el5.style.backgroundColor ===  el9.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	if( el3.style.backgroundColor !== "" && el3.style.backgroundColor ===  el5.style.backgroundColor &&  el5.style.backgroundColor ===  el7.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Winner is " + squares.style.backgroundColor ;
	} 
	
	//Its Draw!
	
	else if (el1.style.backgroundColor !== "" && el2.style.backgroundColor !== "" && el3.style.backgroundColor !== "" && el4.style.backgroundColor !== ""
	&& el5.style.backgroundColor !== "" && el6.style.backgroundColor !== "" && el7.style.backgroundColor !== "" && el8.style.backgroundColor !== ""
	&& el9.style.backgroundColor !== "" && el1.style.backgroundColor !== el2.style.backgroundColor !== el3.style.backgroundColor 
	&& el4.style.backgroundColor !== el5.style.backgroundColor !== el6.style.backgroundColor && el7.style.backgroundColor !== el8.style.backgroundColor !== el9.style.backgroundColor 
	&& el1.style.backgroundColor !== el4.style.backgroundColor !== el7.style.backgroundColor 
	&& el2.style.backgroundColor !== el5.style.backgroundColor !== el8.style.backgroundColor 
	&& el3.style.backgroundColor !== el6.style.backgroundColor !== el9.style.backgroundColor 
	&& el1.style.backgroundColor !== el5.style.backgroundColor !== el9.style.backgroundColor 
	&& el3.style.backgroundColor !== el5.style.backgroundColor !== el7.style.backgroundColor) 
	
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Its draw!" ;
	} 
}


