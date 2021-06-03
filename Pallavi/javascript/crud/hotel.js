function onPageLoad(){
     displayHotels(hotels);
}

function onAddHotel(){
  const add_hotel_modal_element=document.getElementById("add_hotel_modal");
  const form_element=add_hotel_modal_element.querySelector("form");
  const hotel_id=parseInt(form_element.hotel_id.value);
  //console.log(hotel_id)
  const hotel_name=form_element.hotel_name.value;
   
   const new_hotel={
    hotel_id:hotel_id,
    hotel_name:hotel_name
   }
   add(new_hotel);
   $('#add_hotel_modal').modal('hide')
}

function add(new_hotel){
  hotels.push(new_hotel);
  displayHotels(hotels);
}

   function onHotelEdit(hotel_id) {
  $('#add_hotel_modal').modal('show');
  clearForm();
  const hotel_to_be_updated = hotels.find(
    function(hotel) {
      return hotel.hotel_id === hotel_id;
    }
  );
  const add_hotel_modal_element=document.getElementById("add_hotel_modal");
  const form_element=add_hotel_modal_element.querySelector("form");

  form_element.hotel_id.value=hotel_to_be_updated.hotel_id;
  form_element.hotel_name.value=hotel_to_be_updated.hotel_name;

  form_element.hotel_id.disabled=true;

  const add_hotel_modal_label_element=document.getElementById("add_hotel_modal_label");
  add_hotel_modal_label_element.innerHTML= "Update Hotel" +" "+ hotel_id;
  
  const add_update_element_button=document.getElementById("add_update_button");
  add_update_element_button.innerHTML="Update Hotel";

  add_update_element_button.onclick=function(){
    const update_hotel=getHotelObjectFromForm()
    update(hotel_id,update_hotel);
    $('#add_hotel_modal').modal('hide')
  }
} 


function update(hotel_id, update_hotel) {
  const hotel_index = hotels.findIndex(
    function(hotel) {
      return hotel.hotel_id === hotel_id;
    }
  );
  hotels[hotel_index] = update_hotel;
  displayHotels(hotels);
}

function onHotelDelete(hotel_id){
  $("#delete_confirmation_modal").modal("show");

  const delete_confirmation_modal_element=document.getElementById("delete_confirmation_modal");
  const delete_hotel_element=document.getElementById("delete_hotel");

  const modal_body_element = delete_confirmation_modal_element.querySelector(".modal-body");
  modal_body_element.innerHTML = "Do you really want to delete this record? This process cannot be undone." +" "+ + hotel_id + " ?";  


  delete_hotel_element.onclick=function(){
    const hotel_to_be_deleted_index= hotels.findIndex(
        function(hotel){
            return hotel.hotel_id==hotel_id
        }
    )
     console.log(hotel_to_be_deleted_index);
  // displayHotels(hotels);
  hotels.splice(hotel_to_be_deleted_index,1);
  displayHotels(hotels);
  $("#delete_confirmation_modal").modal("hide");
  }
  
}
 
function showAddHotelForm(){
  clearForm();

  const add_hotel_modal_label_element=document.getElementById("add_hotel_modal_label");
  add_hotel_modal_label_element.innerHTML="Add Hotel";

  const add_update_element_button=document.getElementById("add_update_button");
  add_update_element_button.innerHTML="Add Hotel";

  add_update_element_button.onclick=onAddHotel;
 
  const add_hotel_modal_element = document.getElementById("add_hotel_modal");
   const form_element = add_hotel_modal_element.querySelector("form");
   form_element.hotel_id.disabled = false;
} 

function getHotelObjectFromForm(){
   const add_hotel_modal_element=document.getElementById("add_hotel_modal");
  const form_element=add_hotel_modal_element.querySelector("form");
  const hotel_id=parseInt(form_element.hotel_id.value);
  const hotel_name=form_element.hotel_name.value;
  console.log(hotel_name);
  const new_hotel={
    hotel_id:hotel_id,
    hotel_name:hotel_name
  }
  return new_hotel;
}

function clearForm() {
  const add_hotel_modal_element = document.getElementById("add_hotel_modal");
  const form_element = add_hotel_modal_element.querySelector("form");
  
  form_element.hotel_id.value = "";
  form_element.hotel_name.value = "";
}

function displayHotels(hotel_array){
  //alert(hotel_array.length)
  const hotel_table_element=document.getElementById("hotel_table");
  const hotel_table_body_element=hotel_table_element.querySelector("tbody");
  hotel_table_body_element.innerHTML = "";
       for(let i=0; i<hotel_array.length; i++){
       	let hotel_row=document.createElement("tr");
       	 hotel_row.id="hotel_" + hotel_array[i].hotel_id;
       	//console.log(hotel_row.id)
       	 hotel_row.style.color=hotel_array[i].hotel_id === 401 ? "red" :"green";
       	  
       	  hotel_row.innerHTML =`
          <td>${hotel_array[i].hotel_id}</td>
          <td>${hotel_array[i].hotel_name}</td>
          <td><button id="edit_${hotel_array[i].hotel_id}" type="button" class="btn btn-info" onclick="onHotelEdit(${hotel_array[i].hotel_id})">Edit</button>
          <button id="delete_${hotel_array[i].hotel_id}" type="button" class="btn btn-Danger" onclick="onHotelDelete(${hotel_array[i].hotel_id})">Delete</button>
          </td>`;

          hotel_table_body_element.appendChild(hotel_row);
       }


}

function onFilter(event){
  console.log(event);
  console.log("onFilter",event.target.value);
  const filtered_hotels=hotels.filter(
       function(hotel){
       return hotel.hotel_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
       }
    )
  displayHotels(filtered_hotels)
}