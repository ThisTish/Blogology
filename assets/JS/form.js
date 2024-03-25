const form = document.querySelector('form')
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

const postBtn = document.querySelector('#postBtn');

const tempArray = [];

form.addEventListener('submit', (filledForm) => {
	filledForm.preventDefault();
	const makeBlog = new FormData(form);
	const blog = Object.fromEntries(makeBlog);
	console.log(blog);

	const string = JSON.stringify(blog);
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
