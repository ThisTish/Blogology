const nameInp = document.getElementById("name");
const titleInp = document.getElementById("title");
const contentInp = document.getElementById("content");
const submitBtn = document.getElementById("postBtn");

const getStrings = localStorage.getItem('blogArray');
const getArrays = JSON.parse(getStrings)
console.log(getArrays)

// const form = document.querySelector('form')
// const nameInput = document.querySelector('#name');
// const titleInput = document.querySelector('#title');
// const contentInput = document.querySelector('#content');

// const postBtn = document.querySelector('#postBtn');

const tempArray = [];

submitBtn.addEventListener('click', function(submitForm){
	submitForm.preventDefault();
	const name = nameInp.value;
	const title = titleInp.value;
	const content = contentInp.value;
	
	const blogData = { name, title, content};

	tempArray.push(blogData);
	
	const arrayString = JSON.stringify(tempArray);
	console.log(tempArray)


	localStorage.setItem('blogArray', arrayString);
	// ? change to actual url?
	window.location.href = 'blog.html';
});

getArrays.push(tempArray)
console.log(getArrays)
const newStrings = JSON.stringify(getArrays)
console.log(newStrings)
localStorage.setItem('newBlogs', newStrings)


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
	


// })



// const fillForm ={
// 	name:'',
// 	title:'',
// 	content:''
// }

// function makeBlogOut(form,keys){
// 	keys.array.forEach(keys => {
// 		const input = form.elements[nameInput];
// 	});
// }
