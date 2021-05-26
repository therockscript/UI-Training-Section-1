let box_array=[];
let chance="player_1";

function startGame(){
  chance="player_1";
   hideRestartButton();
   hideOutput();
   clearboxArray();
   
}

function hideRestartButton(){
	const restart_button=document.getElementById("restart");
	restart_button.style.display="none";
}

function showRestartButton(){
	const show_button=document.getElementById("restart");
	show_button.style.display="block";
}

function hideOutput(){
	const hide_alert=document.getElementById("output");
	hide_alert.style.display="none";
}

function showOutput(message) {
	const result_element = document.getElementById("result");
	result_element.style.display = "block";
	result_element.innerHTML = message;
}

function showOutput(message){
	const show_alert=document.getElementById("result");
	show_alert.style.display="block";
	show_alert.innerHTML=message;
}

function clearboxArray(){
	box_array=[
       [null, null, null],
       [null, null, null],
       [null, null, null]
	]
	
}

function onBoxClick(row, col){
	if (chance == "player_1") {
        box_array[row][col] = "O";
        chance="player_2";
        //console.log(box_array)
	}else {
	   box_array[row][col] = "X";
	   chance="player_1";	
	}
	display();
}

function display(){
	for(let i=0; i<box_array.length; i++){
		for(let j=0; j<box_array.length; j++){
			const box_element=document.getElementById(i + "_" +j);
			box_element.innerHTML=box_array[i][j];
			//console.log("box_element",box_element);
		}
	}
}