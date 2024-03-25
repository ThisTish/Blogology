const form = document.querySelector('form')
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

const postBtn = document.querySelector('#postBtn');

const tempArray = [];

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const makeBlog = new FormData(form);
	const blog = {};
	makeBlog.forEach((value,key) => {
		blog[key] = value;
	});
	tempArray.push(blog);
	console.log(tempArray);
	const string = JSON.stringify(tempArray);
	localStorage.setItem('form', string);
	

// ? change to actual url?
	window.location.href = 'blog.html';

})



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
