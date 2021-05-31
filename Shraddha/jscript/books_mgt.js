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
	const publisher =(form_element.publisher.value);
	const genre = form_element.genre.value;

	const new_book={
		name: name,
		author: author,
		year: year,
		publisher: publisher,
		genre: genre
	}
	add(new_book);
	$('#add_book_modal').modal('hide')
}
function add(new_book) {
	books.push(new_book);
	displayBooks(books);
}

function update(book_id, params) {
	
}

function deleteBook(book_id) {
	
}

function displayBooks(book_array) {
	
	const book_table_element = document.getElementById("book_table");
	const book_table_body_element = book_table_element.querySelector("tbody")
	for (let i=0; i<book_array.length; i++) {
		let book_row = document.createElement("tr");
		book_row.id = "book_" + book_array[i].name;
        book_row.innerHTML = `
		
			<td>${book_array[i].name}</td>
			<td>${book_array[i].author}</td>
			<td>${book_array[i].year}</td>
			<td>${book_array[i].publisher}</td>
		    <td>${book_array[i].genre}</td>`;
				
		book_table_body_element.appendChild(book_row);
	}
	
}


function filterStudents(column, value) {
	
}
