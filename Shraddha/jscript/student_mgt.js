function onPageLoad() {
	displayStudents(students);
}

function onAddStudent() {
	const add_student_modal_element = document.getElementById("add_student_modal");
	const form_element = add_student_modal_element.querySelector("form");
	
	const roll_no = parseInt(form_element.roll_number.value);
	const name = form_element.name.value;
	const age = parseInt(form_element.age.value);
	const plot_number = parseInt(form_element.plot_number.value);
	const area = form_element.area.value;
	const landmark = form_element.landmark.value;
	const city = form_element.city.value;
	const state = form_element.state.value;
	const country = form_element.country.value;
	
	const new_student = {
		roll_no: roll_no,
		name: name,
		age: age,
		address:{
			plot_no: plot_number,
			area: area,
			landmark: landmark,
			
			state: state,
			country: country
		}
	}
	add(new_student);
	$('#add_student_modal').modal('hide')
}

function add(new_student) {
	students.push(new_student);
	displayStudents(students);
}

function update(student_id, params) {
	
}

function deleteStudent(student_id) {
	
}

function displayStudents(student_array) {
	
	const student_table_element = document.getElementById("student_table");
	const student_table_body_element = student_table_element.querySelector("tbody")
	for (let i=0; i<student_array.length; i++) {
		let student_row = document.createElement("tr");
		student_row.id = "student_" + student_array[i].roll_no;
		
		student_row.innerHTML = `
			<td>${student_array[i].roll_no}</td>
			<td>${student_array[i].name}</td>
			<td>${student_array[i].age}</td>
			<td>${student_array[i].address.plot_no},
				${student_array[i].address.area},
				${student_array[i].address.landmark},
				${student_array[i].address.city},
				${student_array[i].address.state},
				${student_array[i].address.country}.
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
