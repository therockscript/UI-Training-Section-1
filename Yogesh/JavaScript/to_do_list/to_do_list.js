const todo_list = [
	{ item_id: 1, name: "item 1", completed: false },
	{ item_id: 2, name: "item 2", completed: true },
	{ item_id: 3, name: "item 3", completed: false },
	{ item_id: 4, name: "item 4", completed: true },
	{ item_id: 5, name: "item 5", completed: false }
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
	
	const new_item = {
		item_id: new Date().getTime(),
		name: form.item_name.value,
		completed: false
	}
	todo_list.push(new_item);
	console.log("todo_list ==> ", todo_list);
	displayList(todo_list);
} 

function showAddForm() {
	const add_form_element = document.getElementById("add_item_form_div");
	add_form_element.style.display = "block";
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
		
		list_item.appendChild(cb);
		list_item.appendChild(item_name);
		
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


