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
		
	//restartGame
	
	var btnRestart = null;
	var restartGame = document.getElementById('restartGame');
	restartGame.addEventListener('click', () => {
	if (restartGame) 
	{
		squares.style.backgroundColor = '';
		btnRestart = null;
	}
	});
	
}
//Two player's button

function players()
{
	var twoPlayer = document.getElementById("TicTacToe");
	var twoPlayers = document.getElementById("header");
	var count = 0;
	count++;
	if ( count === 1)
	{
		twoPlayer.style.display = "block";
		twoPlayers.style.display = "none";
		count = 0;
	}
}
//PlayerVsComputerFirstPage


function player()
{
	var startPage = document.getElementById("header");
	var conputer = document.getElementById("playerVsComp");
	var count = 0;
	count++;
	if(count === 1)
	{
		startPage.style.display = "none";
		conputer.style.display  = "block";
		count = 0;
	}
}

//FunctionPlayerVsComputer
var One = document.getElementById("1st");
var Two = document.getElementById("2nd");
var Three = document.getElementById("3rd");
var Four = document.getElementById("4th");
var Five = document.getElementById("5th");
var Six = document.getElementById("6th");
var Seven = document.getElementById("7th");
var Eight = document.getElementById("8th");
var Nine = document.getElementById("9th");



function playGame(){
	var undo = document.getElementById('undoBtn');
	undo.addEventListener("click", undoLastMove);

	var currentPlayer = "player";
	var squaress = document.getElementsByClassName("el_No1");
	var lastPlayerMove = null;
	var lastComputerMove = null;

	for (var i = 0; i < squaress.length; i++) {
	  squaress[i].addEventListener("click", function() {
		if (currentPlayer === "player" && this.style.backgroundColor === "") {
		  this.style.backgroundColor = "red";
		  lastPlayerMove = this;
		  currentPlayer = "computer";
		  makeComputerMove();
		}
	  });
	}

	function makeComputerMove() {
	  var emptySquares = [];
	  for (var i = 0; i < squaress.length; i++) {
		if (squaress[i].style.backgroundColor === "") {
		  emptySquares.push(squaress[i]);
		}
	  }
	  
	  if (emptySquares.length > 0) {
		var randomIndex = Math.floor(Math.random() * emptySquares.length);
		emptySquares[randomIndex].style.backgroundColor = "blue";
		lastComputerMove = emptySquares[randomIndex];
		currentPlayer = "player";
	  }
	   

	  
	}

	function undoLastMove() {
	  if (currentPlayer === "player" && lastPlayerMove !== null) {
		lastPlayerMove.style.backgroundColor = "";
		lastPlayerMove = null;
		currentPlayer = "computer";
		undoComputerMove();
	  }
	}

	function undoComputerMove() {
	  if (currentPlayer === "computer" && lastComputerMove !== null) {
		lastComputerMove.style.backgroundColor = "";
		lastComputerMove = null;
		currentPlayer = "player";
	  }
	}
	
	
	//Winner is
	
	var result = document.getElementById('hiddenElement');
	var showResult = document.getElementById("winLosePlayer");
	if( One.style.backgroundColor !== "" && One.style.backgroundColor ===  Two.style.backgroundColor &&  Two.style.backgroundColor ===  Three.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + One.style.backgroundColor;
		
	}
	if( Four.style.backgroundColor !== "" && Four.style.backgroundColor ===  Five.style.backgroundColor &&  Five.style.backgroundColor ===  Six.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + Four.style.backgroundColor;
		
	}
	if( Seven.style.backgroundColor !== "" && Seven.style.backgroundColor ===  Eight.style.backgroundColor &&  Eight.style.backgroundColor ===  Nine.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + Seven.style.backgroundColor;
		
	}
	if( One.style.backgroundColor !== "" && One.style.backgroundColor ===  Four.style.backgroundColor &&  Four.style.backgroundColor ===  Seven.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + One.style.backgroundColor;
		
	}
	if( Two.style.backgroundColor !== "" && Two.style.backgroundColor ===  Five.style.backgroundColor &&  Five.style.backgroundColor ===  Eight.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + Two.style.backgroundColor;
		
	}
	if( Three.style.backgroundColor !== "" && Three.style.backgroundColor ===  Six.style.backgroundColor &&  Six.style.backgroundColor ===  Nine.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + Three.style.backgroundColor;
		
	}
	if( One.style.backgroundColor !== "" && One.style.backgroundColor ===  Five.style.backgroundColor &&  Five.style.backgroundColor ===  Nine.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + One.style.backgroundColor;
		
	}
	if( Three.style.backgroundColor !== "" && Three.style.backgroundColor ===  Five.style.backgroundColor &&  Five.style.backgroundColor ===  Seven.style.backgroundColor )
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.style.color = "red";
		showResult.innerHTML = "Winner is " + Three.style.backgroundColor;
		
	}
	
	//It's draw!
	else if (One.style.backgroundColor !== "" && Two.style.backgroundColor !== "" && Three.style.backgroundColor !== "" && Four.style.backgroundColor !== ""
	&& Five.style.backgroundColor !== "" && Six.style.backgroundColor !== "" && Seven.style.backgroundColor !== "" && Eight.style.backgroundColor !== ""
	&& Nine.style.backgroundColor !== "" && One.style.backgroundColor !== Two.style.backgroundColor !== Three.style.backgroundColor 
	&& Four.style.backgroundColor !== Five.style.backgroundColor !== Six.style.backgroundColor && Seven.style.backgroundColor !== Eight.style.backgroundColor !== el9.style.backgroundColor 
	&& One.style.backgroundColor !== Four.style.backgroundColor !== Seven.style.backgroundColor 
	&& Two.style.backgroundColor !== Five.style.backgroundColor !== Eight.style.backgroundColor 
	&& Three.style.backgroundColor !== Six.style.backgroundColor !== Eight.style.backgroundColor 
	&& One.style.backgroundColor !== Five.style.backgroundColor !== Eight.style.backgroundColor 
	&& Three.style.backgroundColor !== Five.style.backgroundColor !== Seven.style.backgroundColor) 
	
	{
		result.style.display = "block";
		showResult.style.display = "block";
		showResult.innerHTML = "Its draw!" ;
	} 

	//restartGame
	var restartButton = document.getElementById('restartButton');
	restartButton.addEventListener("click", restartGame);
	function restartGame() {
	  for (var i = 0; i < squaress.length; i++) {
		squaress[i].style.backgroundColor = "";
	  }
	  lastPlayerMove = null;
	  lastComputerMove = null;
	  currentPlayer = "player";
	}

	
}

