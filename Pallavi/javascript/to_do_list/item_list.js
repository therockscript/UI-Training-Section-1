const to_do_list=[
	{
		item_id: 1,
		item_name: "item 1",
		completed: true,
		steps: ["Step 1", "Step 2"]
	},

	{
		item_id: 2,
		item_name: "item 2",
		completed: false,
		steps: []
	},

	{
		item_id: 3,
		item_name: "item 3",
		completed: true,
		steps: []
	},

	{
		item_id: 4,
		item_name: "item 4",
		completed: false,
		steps: []
	},

	{
		item_id: 5,
		item_name: "item 5",
		completed: false,
		steps: []
	}
];

function onPageLoad(){
  hideAddForm();  
  DisplayList(to_do_list)  
}

function onShowAddForm(){
   showAddForm();
}

function onAddCancel(){
	hideAddForm();
}

function showAddForm(){
	const add_form_element = document.getElementById("add_item");
	add_form_element.style.display="block"
}

function hideAddForm(){
	const add_form_element = document.getElementById("add_item");
	add_form_element.style.display="none"
}

function DisplayList(list){
	const to_do_list_element=document.getElementById("to_do_list");
	to_do_list_element.innerHTML="";

	for(let i=0; i<list.length; i++){
		const item = list[i];
		const list_item = document.createElement("li");
		list_item.id =item.item_id;
		list_item.classList=["list-group-item"];

		if(item.completed){
			list_item.classList.add("text-delete");
          }
			const cb=document.createElement("input");
			cb.type="checkbox";
			cb.id=`cb_${item.item_id}`;
			cb.name="to_do_list_item";
			cb.value=`${item.item_id}`;
		 
		 if(item.completed){
		 	cb.checked=true;
		 }
		 cb.onchange=onItemStatusChange;

		 const item_name=document.createElement("span");
		 item_name.innerHTML=item.item_name;
       
		 const due_date=document.createElement("span");
		 due_date.innerHTML=item.due_date;

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
		   list_item.appendChild(due_date);
		   list_item.appendChild(steps_ul);

		   to_do_list_element.appendChild(list_item);
	}
}

function onAddStep(){
	const steps_div=document.getElementById("steps");
	const step_input=document.createElement("input");
	step_input.type="text";
	step_input.classList=["form-control"];
	step_input.placeholder="add step description";

	const step_div=document.createElement("div")
	steps_div.classList=["row task-step-div"];

	const steps_div_1=document.createElement("div");
	steps_div_1.classList=["col-1"]

	const steps_div_2=document.createElement("div");
	steps_div_2.classList=["col-11"]

	const number_span=document.createElement("span");
	const task_step_divs=steps_div.querySelectorAll(".task-step-div")
     number_span.innerHTML=task_step_divs.length;
     //console.log(number_span)

     steps_div_1.appendChild(number_span);
     steps_div_2.appendChild(step_input);

     step_div.appendChild(steps_div_1);
     step_div.appendChild(steps_div_2);

     steps_div.appendChild(step_div);
}

function onItemStatusChange(event) {
	console.log("onItemStatusChange ", event.target.value, event.target.checked);
	
	const index = to_do_list.findIndex(
		function(todo_item) {
			return todo_item.item_id == event.target.value;
		}
	);
	
	console.log("index ==> ", index);
	to_do_list[index].completed = event.target.checked;
	DisplayList(to_do_list);
}