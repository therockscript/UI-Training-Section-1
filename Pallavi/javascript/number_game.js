let number=null;
let counter=0;
function startGame(){
	 number=getRandomNumber(100);
     //alert("on body loaded generated no", + number);
     hideHint();
     hideNewButton();
     clearInput();
     hideSuccessGame();
}

function getRandomNumber(max) {
	return parseInt(Math.random() * max);
}

function showHint(message){
    const hint_element=document.getElementById("hint");
    hint_element.style.display="block";
    hint_element.innerHTML=message;
 }

 function hideHint(){
 	const hide_hint_element=document.getElementById("hint");
 	hide_hint_element.style.display="none";
 }

function getUserEnteredNumber(){
	const user_input_element=document.getElementById("user_input");
	return user_input_element.value;
	//console.log(user_input_element)
}

function onUserSubmit()
{
   const value=getUserEnteredNumber();
   const value_number=parseInt(value);
   console.log(value_number);
   console.log(typeof value_number);
    if (value_number == "") {
    	showHint("Please Enter the value");
	return;
    	//alert("please enter value");
    } else if (value_number > 100 || value_number < 0) {
        showHint("Please Enter the value between 0 to 100");
	return;
    }

counter++; 

    if (value_number > number) {
    	showHint("Number is Greater");
        clearInput();
        focusInput();
    }else if (value_number < number) {
        showHint("Number is Smaller");
        clearInput();
        focusInput();
    }else{
        hideHint();
    	showSuccessGame("Enter Value is Correct, you guess the number in "+ counter +" attempts");
        showNewButton();
    }
}

function showNewButton(){
	const new_Button=document.getElementById("new_game");
    new_Button.style.display="block";
}

function hideNewButton(){
    const hide_button=document.getElementById("new_game");
    hide_button.style.display="none";
}

function clearInput(){
    const clear_input=document.getElementById("user_input");
    clear_input.value="";
}

function showSuccessGame(message){
    const success=document.getElementById("success");
    success.style.display="block";
    success.innerHTML=message;
}


function hideSuccessGame(){
    const hide_button=document.getElementById("success");
    hide_button.style.display="none";
}

function focusInput(){
    document.getElementById("user_input").focus();
}
