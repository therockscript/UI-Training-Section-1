const todo_list = [
	{ item_id: 1, name: "item 1", completed: false, steps: ["Step 1", "Step 2"] },
	{ item_id: 2, name: "item 2", completed: true, steps: [] },
	{ item_id: 3, name: "item 3", completed: false, steps: [] },
	{ item_id: 4, name: "item 4", completed: true, steps: [] },
	{ item_id: 5, name: "item 5", completed: false, steps: [] }
];

function onPageLoad() {
	hideAddForm();
	displayList(todo_list);
}

function onShowAddForm() {
	showAddForm();
}

function onAddCancel() {
	hideAddForm();
}

function onAddItemFormSubmit(event) {
	// alert("onAddItemFormSubmit")
	event.preventDefault();
	event.stopPropagation();
	
	const form = event.target;
	// console.log("onAddItemFormSubmit value ===> ", form.item_name.value);
	const steps = [];
	const steps_div = form.querySelector("#steps");
	const task_step_divs = steps_div.querySelectorAll(".task-step-div");
	task_step_divs.forEach(
		function(task_step_div) {
			const input = task_step_div.querySelector("input");
			steps.push(input.value);
		}
	)
	
	const new_item = {
		item_id: new Date().getTime(),
		name: form.item_name.value,
		completed: false,
		steps: steps,
		due_date: form.item_due_date.value
	}
	
	todo_list.push(new_item);
	console.log("todo_list ==> ", todo_list);
	displayList(todo_list);
} 

function showAddForm() {
	const add_form_element = document.getElementById("add_item_form_div");
	add_form_element.style.display = "block";
	
	const add_form = add_form_element.querySelector("form");
	
	const today = new Date();
	add_form.item_due_date.min = getDateString(today);
}

function getDateString(date) {
	let output = "";
	output = output + date.getFullYear();
	
	let month = date.getMonth()+1;
	if (month < 10) {
		month = "0" + month;
	}
	output = output + "-" + month;
	
	let day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	output = output + "-" + day;
	
	return output;
}

function hideAddForm() {
	const add_form_element = document.getElementById("add_item_form_div");
	add_form_element.style.display = "none";
}

function displayList(list) {
	// todo_list
	const to_do_list_element = document.getElementById("to_do_list");
	to_do_list_element.innerHTML = "";
	
	for (let i=0; i<list.length; i++) {
		const item = list[i];
		const list_item = document.createElement("li");
		list_item.id = item.item_id;
		list_item.classList = ["list-group-item"];
		
		if (item.completed) {
			list_item.classList.add("text-delete");
		}
		
		const cb = document.createElement("input");
		cb.type = "checkbox";
		cb.id = `cb_${item.item_id}`;
		cb.name = "to_do_list_item";
		cb.value = `${item.item_id}`;
		if (item.completed) {
			cb.checked = true;
		}
		cb.onchange = onItemStatusChange;
		
		const item_name = document.createElement("span");
		item_name.innerHTML = `&nbsp;&nbsp;${item.name}`;
		
		const item_due_date = document.createElement("span");
		if (item.due_date) {
			item_due_date.innerHTML = `&nbsp;&nbsp;${item.due_date}`;
		}
		
		const steps_ul = document.createElement("ul");
		item.steps.forEach(
			function(step) {
				const step_li = document.createElement("li");
				step_li.innerHTML = step;
				steps_ul.appendChild(step_li)
			}
		)
		
		list_item.appendChild(cb);
		list_item.appendChild(item_name);
		list_item.appendChild(item_due_date);
		list_item.appendChild(steps_ul);
		
		to_do_list_element.appendChild(list_item);
	}
}

function onItemStatusChange(event) {
	console.log("onItemStatusChange ", event.target.value, event.target.checked);
	
	const index = todo_list.findIndex(
		function(todo_item) {
			return todo_item.item_id == event.target.value;
		}
	);
	
	console.log("index ==> ", index);
	todo_list[index].completed = event.target.checked;
	displayList(todo_list);
}


function onAddStep() {
	const steps_div = document.getElementById("steps");
					
	const step_input = document.createElement("input");
	step_input.type = "text";
	step_input.classList = [ "form-control m-2" ];
	step_input.placeholder = "Add step description...";
	
	const step_div = document.createElement("div");
	step_div.classList = ["row task-step-div"];
	
	const step_div_1 = document.createElement("div");
	step_div_1.classList = ["col-1 text-right"];
	
	const step_div_2 = document.createElement("div");
	step_div_2.classList = ["col-11"];
	
	const step_number_span = document.createElement("span");
	const task_step_divs = steps_div.querySelectorAll(".task-step-div")
	step_number_span.innerHTML = task_step_divs.length + 1;
	
	step_div_1.appendChild(step_number_span);
	step_div_2.appendChild(step_input);
	
	step_div.appendChild(step_div_1);
	step_div.appendChild(step_div_2);
	
	steps_div.appendChild(step_div);
}














