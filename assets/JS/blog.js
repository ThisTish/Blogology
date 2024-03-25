// const card = document.querySelector('#blogs')


const storedForm = JSON.parse(localStorage.getItem('form'));
// console.log(storedForm);

const makeBlog = function(blogCard){
	const blogList = document.querySelector('#blogs');
	const newBlog = document.createElement('li');
	
	const header = document.createElement('h4');
	header.textContent = storedForm.title;
	newBlog.appendChild(header);
	


	// blogCard.array.forEach(titleInput => {
	// 	const cardContent = document.createElement('li');
	// 	cardContent.classList.add('card');
	// 	const header = document.createElement('h4');
	// 	header.textcontent = titleInput.content;
	// 	blogList.appendChild(header);
	// 	console.log(blogList);
	// });
}