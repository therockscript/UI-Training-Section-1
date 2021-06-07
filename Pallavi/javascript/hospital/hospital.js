
function onPageLoad(){
    onDiplayHospital(hospitals);
}

function onAddHospital(){
  const hospital_modal_element=document.getElementById("add_hospital_modal");
  const form_element=hospital_modal_element.querySelector("form");
//debugger
  const hospital_id=parseInt(form_element.hosp_id.value);
// console.log(hospital_id)
  const hospital_name=form_element.hosp_name.value;
  const hospital_place=form_element.hosp_place.value;
  const no_of_beds=parseInt(form_element.number_of_beds.value);

   const new_hospital={
   	hospital_id : hospital_id,
   	hospital_name : hospital_name,
   	hospital_place : hospital_place,
   	no_of_beds : no_of_beds
   }
  add(new_hospital);
  $('#add_hospital_modal').modal('hide')
}

function add(new_hospital){
	hospitals.push(new_hospital);
	onDiplayHospital(hospitals);
	//console.log(hospitals)
}

function onHospitalEdit(hospital_id){
  $('#add_hospital_modal').modal('show');
  const hospital_to_be_deleted=hospitals.find(
        function(hospital){
          return hospital.hospital_id===hospital_id;
        }
    )

  const hospital_modal_element=document.getElementById("add_hospital_modal");
  const form_element=hospital_modal_element.querySelector("form");

  form_element.hosp_id.value=hospital_to_be_deleted.hospital_id;
  form_element.hosp_name.value=hospital_to_be_deleted.hospital_name;
  form_element.hosp_place.value=hospital_to_be_deleted.hospital_place;
  form_element.number_of_beds.value=hospital_to_be_deleted.no_of_beds;

  form_element.hosp_id.disabled=true;

  const add_hospital_modal_label=document.getElementById("hospital_modal_label");
  add_hospital_modal_label.innerHTML="Update Hospital";

  const add_hospital_update_button=document.getElementById("add_update_button");
  add_hospital_update_button.innerHTML="Update Hospital";

  add_hospital_update_button.onclick=function(){
    const update_hospital=getHospitalObject();
    update(hospital_id,update_hospital);
    $('#add_hospital_modal').modal('hide')
  }

  function update(hospital_id,update_hospital){
    const updated_hospital=hospitals.findIndex(
        function(hospital){
          return hospital.hospital_id==hospital_id
        }
      );
    hospitals[updated_hospital]=update_hospital;
    onDiplayHospital(hospitals);
  }
}

function showAddHospitalForm(){
  clearForm();

  const add_hospital_modal_label_element=document.getElementById("hospital_modal_label");
  add_hospital_modal_label_element.innerHTML="Add Hospital";

  const add_update_element_button=document.getElementById("add_update_button");
  add_update_element_button.innerHTML="Add Hospital";

  add_update_element_button.onclick=onAddHospital;
 
  const add_hospital_modal_element = document.getElementById("add_hospital_modal");
   const form_element = add_hospital_modal_element.querySelector("form");
   form_element.hosp_id.disabled = false;
} 

function getHospitalObject()
{
   const hospital_modal_element=document.getElementById("add_hospital_modal");
  const form_element=hospital_modal_element.querySelector("form");
//debugger
  const hospital_id=parseInt(form_element.hosp_id.value);
// console.log(hospital_id)
  const hospital_name=form_element.hosp_name.value;
  const hospital_place=form_element.hosp_place.value;
  const no_of_beds=parseInt(form_element.number_of_beds.value);

   const new_hospital={
    hospital_id : hospital_id,
    hospital_name : hospital_name,
    hospital_place : hospital_place,
    no_of_beds : no_of_beds
   }
   return new_hospital;
}
function onHospitalDelete(hosp_id){
  $('#delete_confirmation_modal').modal('show');

  const show_modal_element=document.getElementById("delete_confirmation_modal");
  const delete_hospital_element=document.getElementById("delete_hospital");

  const modal_body_element=show_modal_element.querySelector(".modal-body");
  modal_body_element.innerHTML = "Do you really want to delete this record? This process cannot be undone." +" "+ + hosp_id + " ?";  

  delete_hospital_element.onclick=function(){
      const hospital_deleted = hospitals.findIndex(
         function(hospital){
          return hospital.hospital_id==hosp_id;
         }
        )
      hospitals.splice(hospital_deleted,1)
      onDiplayHospital(hospitals)
      $('#delete_confirmation_modal').modal('hide')
  }
}

function clearForm() {
  const add_hospital_modal_element = document.getElementById("add_hospital_modal");
  const form_element = add_hospital_modal_element.querySelector("form");
  
  form_element.hosp_id.value = "";
  form_element.hosp_name.value = "";
  form_element.hosp_place.value = "";
  form_element.number_of_beds.value = "";
}

function onFilterPlace(event){
  console.log(event)
  console.log("onFilter",event.target.value);
  const filtered_hospitals =hospitals.filter(
       function(hospital){
        return hospital.hospital_place.toLowerCase().indexOf(event.target.value.toLowerCase())>-1
       }
    )
  onDiplayHospital(filtered_hospitals);
}

function onFilterName(event){
  console.log(event)
  console.log("onFilter",event.target.value);
  const filtered_hospitals =hospitals.filter(
       function(hospital){
        return hospital.hospital_name.toLowerCase().indexOf(event.target.value.toLowerCase())>-1
       }
    )
  onDiplayHospital(filtered_hospitals);
}


function onDiplayHospital(hospital_array){
  const table_element=document.getElementById("hospital_table");
  const table_body_element=table_element.querySelector("tbody");
  table_body_element.innerHTML = "";

    for(i=0; i<hospital_array.length; i++){
    	let hospital_row=document.createElement("tr");
    	  hospital_row.id="hospital_" +hospital_array[i].hospital_id;
    	  //console.log(hospital_row.id) 
    	  hospital_row.style.color=hospital_array[i].hospital_place==="Mumbai" ? "red" :"black"

    	  hospital_row.innerHTML=`
    	  <td>${hospital_array[i].hospital_id}</td>
    	  <td>${hospital_array[i].hospital_name}</td>
    	  <td>${hospital_array[i].hospital_place}</td>
    	  <td>${hospital_array[i].no_of_beds}</td>
        <td align="center"> 
        <button id="edit_${hospital_array[i].hospital_id}" type="button" class="btn btn-success" onclick="onHospitalEdit(${hospital_array[i].hospital_id})"><i class="fa fa-edit"></i> Edit</button>
        <button id="delete_${hospital_array[i].hospital_id}" type="button" class="btn btn-danger" onclick="onHospitalDelete(${hospital_array[i].hospital_id})"><i class="fa fa-trash"></i> Delete</button>
      </td>`

    	  table_body_element.appendChild(hospital_row);

       }
    }

  