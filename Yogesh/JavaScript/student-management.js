function onPageLoad() {
	displayStudents(students);
}

function showAddStudentForm() {
	clearForm();
	const add_student_modal_label_element = document.getElementById("add_student_modal_label");
	add_student_modal_label_element.innerHTML = "Add Student";
	
	
	// const add_update_button_element = add_student_modal_element.querySelector("button#add_update_button");
	const add_update_button_element = document.getElementById("add_update_button");
	add_update_button_element.innerHTML = "Add Student";
	
	add_update_button_element.onclick = onAddStudent();
	
	const add_student_modal_element = document.getElementById("add_student_modal");
	const form_element = add_student_modal_element.querySelector("form");
	form_element.roll_number.disabled = false;
}

function onStudentEdit(roll_number) {
	$('#add_student_modal').modal('show');
	clearForm();
	const student_to_be_updated = students.find(
		function(student) {
			return student.roll_no === roll_number;
		}
	);
	console.log(student_to_be_updated);
	const add_student_modal_element = document.getElementById("add_student_modal");
	const form_element = add_student_modal_element.querySelector("form");
	
	form_element.roll_number.value = student_to_be_updated.roll_no;
	form_element.name.value = student_to_be_updated.name;
	form_element.age.value = student_to_be_updated.age;
	
	form_element.plot_number.value = student_to_be_updated.address.plot_no;
	form_element.area.value = student_to_be_updated.address.area;
	form_element.landmark.value = student_to_be_updated.address.landmark;
	form_element.district.value = student_to_be_updated.address.District;
	form_element.state.value = student_to_be_updated.address.State;
	
	form_element.roll_number.disabled = true;
	
	const add_student_modal_label_element = document.getElementById("add_student_modal_label");
	add_student_modal_label_element.innerHTML = "Update Student " + roll_number;
	
	
	// const add_update_button_element = add_student_modal_element.querySelector("button#add_update_button");
	const add_update_button_element = document.getElementById("add_update_button");
	add_update_button_element.innerHTML = "Update Student";
	
	/*
	debugger;
	add_update_button_element.removeEventListener("click", onAddStudent, true);
	add_update_button_element.addEventListener("click", function() {
		alert("onUpdateStudent");
		const update_student = getStudentObjectFromForm();
		update(roll_number, update_student);
		$('#add_student_modal').modal('hide')		
	})
	*/
	
	add_update_button_element.onclick = function() {
		// alert("onUpdateStudent");
		const update_student = getStudentObjectFromForm();
		update(roll_number, update_student);
		$('#add_student_modal').modal('hide')		
	}


}

function onStudentDelete(roll_number) {
	
}

function onAddStudent() {
	const new_student = getStudentObjectFromForm();
	add(new_student);
	$('#add_student_modal').modal('hide')
}

function add(new_student) {
	students.push(new_student);
	displayStudents(students);
}

function update(student_roll_number, update_student) {
	const student_index = students.findIndex(
		function(student) {
			return student.roll_no === student_roll_number;
		}
	);
	students[student_index] = update_student;
	displayStudents(students);
}

function deleteStudent(student_id) {
	
}

function displayStudents(student_array) {
	// alert(student_array.length);
	/*
	<tr>
		<td>student.roll_no</td>
		<td>student.name</td>
		<td>student.age</td>
		<td>student.address</td>
	</tr>
	*/
	const student_table_element = document.getElementById("student_table");
	const student_table_body_element = student_table_element.querySelector("tbody")
	student_table_body_element.innerHTML = "";
	for (let i=0; i<student_array.length; i++) {
		let student_row = document.createElement("tr");
		student_row.id = "student_" + student_array[i].roll_no;
		student_row.style.color = student_array[i].age > 30 ? "red" : "green";
		/*
		let student_address = student_array[i].address.plot_no 
			+ " " + student_array[i].address.area 
			+ " " + student_array[i].address.landmark 
			+ " " + student_array[i].address.District 
			+ " " + student_array[i].address.State;
		
		
		student_row.innerHTML = "<td>" + student_array[i].roll_no + "</td>"
						+ "<td>" + student_array[i].name + "</td>"
						+ "<td>" + student_array[i].age + "</td>"
						+ "<td>" + student_address + "</td>";
		*/
		student_row.innerHTML = `
			<td>${student_array[i].roll_no}</td>
			<td>${student_array[i].name}</td>
			<td>${student_array[i].age}</td>
			<td>${student_array[i].address.plot_no}
				${student_array[i].address.area}
				${student_array[i].address.landmark}
				${student_array[i].address.District}
				${student_array[i].address.State}
			</td>
			<td>
				<button id="edit_${student_array[i].roll_no}" type="button" class="btn btn-primary"  onclick="onStudentEdit(${student_array[i].roll_no})">Edit</button>
				<button id="delete_${student_array[i].roll_no}" type="button" class="btn btn-danger" onclick="onStudentDelete(${student_array[i].roll_no})">Delete</button>
			</td>`;
		student_table_body_element.appendChild(student_row);
	}
	
}


function filterStudents(column, value) {
	
}


function getStudentObjectFromForm() {
	const add_student_modal_element = document.getElementById("add_student_modal");
	const form_element = add_student_modal_element.querySelector("form");
	
	const roll_no = parseInt(form_element.roll_number.value);
	const name = form_element.name.value;
	const age = parseInt(form_element.age.value);
	const plot_number = parseInt(form_element.plot_number.value);
	const area = form_element.area.value;
	const landmark = form_element.landmark.value;
	const district = form_element.district.value;
	const state = form_element.state.value;
	
	const new_student = {
		roll_no: roll_no,
		name: name,
		age: age,
		address:{
			plot_no: plot_number,
			area: area,
			landmark: landmark,
			District: district,
			State: state
		}
	}
	
	return new_student;
}

function clearForm() {
	const add_student_modal_element = document.getElementById("add_student_modal");
	const form_element = add_student_modal_element.querySelector("form");
	
	form_element.roll_number.value = "";
	form_element.name.value = "";
	form_element.age.value = "";
	
	form_element.plot_number.value = "";
	form_element.area.value = "";
	form_element.landmark.value = "";
	form_element.district.value = "";
	form_element.state.value = "";
}