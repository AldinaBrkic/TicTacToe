var counter = 0;
var el1 = document.getElementById ("elNo1");
var el2 = document.getElementById ("elNo2");
var el3 = document.getElementById ("elNo3");
var el4 = document.getElementById ("elNo4");
var el5 = document.getElementById ("elNo5");
var el6 = document.getElementById ("elNo6");
var el7 = document.getElementById ("elNo7");
var el8 = document.getElementById ("elNo8");
var el9 = document.getElementById ("elNo9");
function elementt(allElements)
{
	var bigElement = document.getElementById(allElements);
	if ( bigElement.style.backgroundColor == "" )
	{
		counter++;
		if (counter == 1)
		{
			bigElement.style.backgroundColor = "red";
			
		}
		
		if (counter == 2)
		{
			bigElement.style.backgroundColor = "blue";
			counter = 0;
		}
	}
}


