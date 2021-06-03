function onPageLoad()
{
	displayBooks(books);
}

function onAddBook()
{
	const add_book_modal_element = document.getElementById("add_book_modal");
	const form_element = add_book_modal_element.querySelector("form");
	
	const name = (form_element.name.value);
	const author = form_element.author.value;
	const year = parseInt(form_element.year.value);
	

	const new_book={
		name: name,
		author: author,
		year: year,
		publisher: "",
		genre: ""
	}
	add(new_book);
	$('#add_book_modal').modal('hide')
}
function add(new_book) {
	books.push(new_book);
	displayBooks(books);
}

function onBookEdit(name) {
  $('#add_book_modal').modal('show');
  clearForm();
  const book_to_be_updated = books.find(
    function(book) {
      return book.name === name;
    }
  );
  console.log("book_to_be_updated ", book_to_be_updated);
  const add_book_modal_element=document.getElementById("add_book_modal");
  const form_element=add_book_modal_element.querySelector("form");

  form_element.name.value=book_to_be_updated.name;
  form_element.author.value=book_to_be_updated.author;
  form_element.year.value=book_to_be_updated.year;

  form_element.name.disabled=true;

  const add_book_modal_label_element=document.getElementById("exampleModalLabel");
  add_book_modal_label_element.innerHTML= "Update book" +" "+ name;
  
  const add_update_element_button=document.getElementById("add_update_button");
  add_update_element_button.innerHTML="Update Book";

  add_update_element_button.onclick=function(){
    const update_book=getBookObjectFromForm()
    update(name,update_book);
    $('#add_book_modal').modal('hide')
  }
} 

function update(name, update_book) {
  const book_index = books.findIndex(
    function(book) {
      return book.name === name;
    }
  );
  books[book_index] = update_book;
  displayBooks(books);
}

function onBookDelete(name) {
	$("#delete_confirmation_modal").modal("show");
	
	const delete_confirmation_modal_element = document.getElementById("delete_confirmation_modal")
	const delete_book_element = document.getElementById("delete_student");
	
	const modal_body_element = delete_confirmation_modal_element.querySelector(".modal-body");
	modal_body_element.innerHTML = "Are you sure, you want to delete" + name + "book ?";  
	
	delete_book_element.onclick = function() {
		const book_to_be_deleted_index = books.findIndex(
			function(book) {
				return book.name=== name;
			}
		)
		
		books.splice(book_to_be_deleted_index, 1);
		displayBooks(books);
		$("#delete_confirmation_modal").modal("hide");
	}
}	
function showAddBookForm(){
  clearForm();

  const add_book_modal_label_element=document.getElementById("exampleModalLabel");
  add_book_modal_label_element.innerHTML="Add Book";

  const add_update_element_button=document.getElementById("add_update_button");
  add_update_element_button.innerHTML="Add Book";

  add_update_element_button.onclick=onAddBook;
 
  const add_book_modal_element = document.getElementById("add_book_modal");
   const form_element = add_book_modal_element.querySelector("form");
   form_element.name.disabled = false;
} 

function getBookObjectFromForm(){
   const add_book_modal_element=document.getElementById("add_book_modal");
  const form_element=add_book_modal_element.querySelector("form");
  const name=(form_element.name.value);
  const author=form_element.author.value;
  const year=form_element.year.value;
  
  const new_book={
    name:name,
    author:author,
	year:year
  }
  return new_book;
}

function clearForm() {
  const add_book_modal_element = document.getElementById("add_book_modal");
  const form_element = add_book_modal_element.querySelector("form");
  
  form_element.name.value = "";
  form_element.author.value = "";
  form_element.year.value = "";
}
function deleteBook(name) {
	
}
function displayBooks(book_array) {
	
	const book_table_element = document.getElementById("book_table");
	const book_table_body_element = book_table_element.querySelector("tbody")
	book_table_body_element.innerHTML = "";
	for (let i=0; i<book_array.length; i++) {
		let book_row = document.createElement("tr");
		book_row.id = "book_" + book_array[i].name;
        book_row.innerHTML = `
		
			<td>${book_array[i].name}</td>
			<td>${book_array[i].author}</td>
			<td>${book_array[i].year}</td>
			<td><button id="edit_${book_array[i].name}" type="button" class="btn btn-info" onclick="onBookEdit('${book_array[i].name}')">Edit</button>
          <button id="delete_${book_array[i].name}" type="button" class="btn btn-Danger" onclick="onBookDelete(${book_array[i].name})">Delete</button>
          </td>`;
				
		book_table_body_element.appendChild(book_row);
	}
	
}
function onFilter(event){
  console.log(event);
  console.log("onFilter",event.target.value);
  const filtered_books=books.filter(
       function(book){
       return book.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
       }
    )
  displayBooks(filtered_books)
}

