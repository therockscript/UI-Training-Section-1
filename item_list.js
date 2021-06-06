const to_do_list=[
	{
		item_id: 1,
		item_name: "item 1",
		completed: false,
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
		completed: false,
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
	to_do_list.innerHTML="";

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

		 const item_name=item.createElement("span");
		 item_name.innerHTML=item.name;
	}
}