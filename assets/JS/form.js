const nameInp = document.getElementById("name");
const titleInp = document.getElementById("title");
const contentInp = document.getElementById("content");
const submitBtn = document.getElementById("postBtn");
// *might need this, but calling it in function instead for now.

// const getStrings = localStorage.getItem('blog');
// const getArrays = JSON.parse(getStrings)
// console.log(getArrays)


// const tempArray = []; tempArray is going to be previousBlogs
submitBtn.addEventListener('click', function(submitForm){
	submitForm.preventDefault();

	let previousBlogs = JSON.parse(localStorage.getItem('blogs'));
	if(previousBlogs == null || previousBlogs == undefined) previousBlogs = []
	
	const name = nameInp.value;
	const title = titleInp.value;
	const content = contentInp.value;
	

	// ?change this back to const blogData={name, title, content};
	let blogData = { 
		"name": name,
		"title":title,
		"content": content
	};

	previousBlogs.push(blogData);
	

	localStorage.setItem('blogs', JSON.stringify( previousBlogs));
	// ? change to actual url?
	window.location.href = 'blog.html';
});

// getArrays.push(tempArray)
// console.log(getArrays)
// const newStrings = JSON.stringify(getArrays)
// console.log(newStrings)
// localStorage.setItem('newBlogs', newStrings)




// *first draft
// form.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const makeBlog = new FormData(form);
// 	const blog = {};
// 	makeBlog.forEach((value,key) => {
// 		blog[key] = value;
// 	});
// 	tempArray.push(blog);
// 	console.log(tempArray);
// 	const string = JSON.stringify(tempArray);
// 	localStorage.setItem('form', string);