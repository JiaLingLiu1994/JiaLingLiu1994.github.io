window.onload = eventLoad;


function eventLoad(){

	document.getElementById("dog").onclick = dogbeClicked;
	document.getElementById("cuisine").onclick = cuisinebeClicked;
	document.getElementById("exercise").onclick = exercisebeClicked;
}

function dogbeClicked(){

	var dogpane = document.getElementById("moreInfor4");

	if( dogpane.style.display == 'none'){
		dogpane.style.display = 'block';
	}
	else{
		dogpane.style.display = 'none';
	}
}

function cuisinebeClicked(){

	var cuisinepane = document.getElementById("moreInfor2");

	if( cuisinepane.style.display == 'none'){
		cuisinepane.style.display = 'block';
	}
	else{
		cuisinepane.style.display = 'none';
	}
}

function exercisebeClicked(){

	var exercisepane = document.getElementById("moreInfor3");

	if( exercisepane.style.display == 'none'){
		exercisepane.style.display = 'block';
	}
	else{
		exercisepane.style.display = 'none';
	}

}
