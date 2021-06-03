function onPageLoad(){
       display_hotels(hotels);
}

function onAddHotel(){
	debugger
    const add_hotel_modal_element = document.getElementById("add_hotel_modal");
	const form_element = add_hotel_modal_element.querySelector("form");
	const hotel_id = parseInt(form_element.hotel_id.value);
	//console.log(hotel_id);
	const hotel_name = form_element.hotel_name.value;
	const hotel_place = form_element.hotel_place.value;
	const no_of_rooms = parseInt(form_element.no_of_rooms.value);
	const hotel_rent = parseInt(form_element.hotel_rent.value);
	const hotel_type = form_element.hotel_type.value;

	const new_hotel={
		hotel_id:hotel_id,
           hotel_name:hotel_name,
           place:hotel_place,
           description:
           {
             no_of_room:no_of_rooms,
             rent:hotel_rent,
             hotel_type:hotel_type
           },
	}
	add(new_hotel);
	$('#add_hotel_modal').modal('hide')
}


function add(new_hotel) {
	hotels.push(new_hotel);
	display_hotels(hotels);
}

function display_hotels(hotel_array){
    //alert(hotel_array.length);
    const hotel_table_element = document.getElementById("hotel_table");
	const hotel_table_body_element = hotel_table_element.querySelector("tbody")
	for (let i=0; i<hotel_array.length; i++) {
		let hotel_row = document.createElement("tr");
		hotel_row.id = "hotel_" + hotel_array[i].hotel_id;
		hotel_row.style.color = hotel_array[i].place == "Mumbai" ? "red" : "green";
		hotel_row.innerHTML = `
			<td>${hotel_array[i].hotel_id}</td>
			<td>${hotel_array[i].hotel_name}</td>
			<td>${hotel_array[i].place}</td>
			<td>${hotel_array[i].description.no_of_room}</td>
			<td>${hotel_array[i].description.rent}</td>
			<td>${hotel_array[i].description.hotel_type}
			</td>`;
		hotel_table_body_element.appendChild(hotel_row);
	}
	
}