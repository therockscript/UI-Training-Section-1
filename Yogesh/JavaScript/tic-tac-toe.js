let box_array = [];
let chance = "p1";

function startGame() {
	// create empty array
	clearBoxClear();
	chance = "p1";
	hideResult();
	hideStartButton();
	display();
}

function clearBoxClear() {
	box_array = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]	
}

function onBoxClick(row, col) {
	if (chance == "p1") {
		box_array[row][col] = "O";
		chance = "p2";
	} else {
		box_array[row][col] = "X";
		chance = "p1";
	}
	console.log("box_array", box_array);
	display();
	const winner = checkGame();
	console.log("winner is ", winner);
	if (winner === "p1") {
		showResult("Player 1 win");
		showStartButton();
	} else if (winner === "p2") {
		showResult("Player 2 win");
		showStartButton();
	} else if (winner === "draw") {
		showResult("Game draw");
		showStartButton();
	}
}

function display() {
	for (let i=0; i<box_array.length; i++) {
		for (let j=0; j<box_array[i].length; j++) {
			// console.log(i, j, box_array[i][j]);
			const box_element = document.getElementById(i + "_" + j);
			box_element.innerHTML = box_array[i][j];
		}
	}
}

function checkGame() {
	// check all rows for winner
	for (let i=0; i<box_array.length; i++) {
		if (box_array[i][0] == box_array[i][1] &&
		box_array[i][0] == box_array[i][2]) {
			if (box_array[i][0] == "O") {
				return "p1";
			} else if (box_array[i][0] == "X") {
				return "p2";
			}
		}
	}
	
	// check all columns for winner
	for (let i=0; i<box_array.length; i++) {
		if (box_array[0][i] == box_array[1][i] &&
		box_array[0][i] == box_array[2][i]) {
			if (box_array[0][i] == "O") {
				return "p1";
			} else if (box_array[0][i] == "X") {
				return "p2";
			}
		}
	}
	
	if (box_array[0][0] == box_array[1][1] &&
	box_array[0][0] == box_array[2][2]) {
		if (box_array[0][0] == "O") {
			return "p1";
		} else if (box_array[0][0] == "X") {
			return "p2";
		}
	}
	
	let counter = 0;
	for (let i=0; i<box_array.length; i++) {
		for (let j=0; j<box_array[i].length; j++) {
			if (box_array[i][j] != null) {
				counter++;
			}
		}
	}
	
	if (counter == 9) {
		return "draw";
	}
	
	return "";
}

function hideResult() {
	const result_element = document.getElementById("result");
	result_element.style.display = "none";
}

function showResult(message) {
	const result_element = document.getElementById("result");
	result_element.style.display = "block";
	result_element.innerHTML = message;
}

function hideStartButton() {
	const start_element = document.getElementById("start");
	start_element.style.display = "none";
}

function showStartButton() {
	const start_element = document.getElementById("start");
	start_element.style.display = "block";
}



