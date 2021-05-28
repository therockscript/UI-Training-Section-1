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
			</td>`;
		student_table_body_element.appendChild(student_row);
	}
	
}


function filterStudents(column, value) {
	
}
