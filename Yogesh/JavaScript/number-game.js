let number = null;
let counter = 0;

function startGame() {
	number = getRandomNumber(100);
	 //alert("on body load, generated number " + number);
	hideHint();
	hideNewGameButton();
	clearInput();
	counter = 0;
	// showHint("testing hint");
}

function clearInput() {
	const user_input_element = document.getElementById("user-input");
	user_input_element.value = "";
}

function focusInput() {
	const user_input_element = document.getElementById("user-input");
	user_input_element.focus = true;
}


function getRandomNumber(max) {
	return parseInt(Math.random() * max);
}

function hideHint() {
	const hint_element = document.getElementById("hint");
	hint_element.style.display = "none";
}

function showHint(message) {
	const hint_element = document.getElementById("hint");
	hint_element.innerHTML = message;
	hint_element.style.display = "block";
}

function onUserSubmit() {
	hideHint();
	// alert("User clicked submit");
	const value = getUserEnteredNumber();
	const value_number = parseInt(value);
	console.log(value);
	console.log(typeof value);
	console.log("value_number ", value_number);
	if (value == "") {
		showHint("Please enter numeric the value");
	} else if (value_number > 100 || value_number < 0) {
		showHint("Please enter value between 0 and 100");
	}
	
	counter++;
	flag = false;
	// compare value and number
	if (value > number) {
		showHint("Entered value is greater");
		clearInput();
		focusInput();
	} else if (value < number) {
		showHint("Entered value is smaller");
		clearInput();
		focusInput();
	} else {
		showHint("Entered value is correct, your guessed the number in " + counter + " attempts." );
		flag = true;
		// show new-game button
		showNewGameButton();
	}
	
	if (flag == false && counter == 2) {
		showHint("attempts completed, new game started");
		showNewGameButton();
	}
	
}

function getUserEnteredNumber() {
	const user_input_element = document.getElementById("user-input");
	return user_input_element.value;
}

function showNewGameButton() {
	const new_game_element = document.getElementById("new-game");
	new_game_element.style.display = "block";
}

function hideNewGameButton() {
	const new_game_element = document.getElementById("new-game");
	new_game_element.style.display = "none";
}