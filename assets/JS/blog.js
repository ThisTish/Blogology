const getArray = localStorage.getItem('blogArray');
const blogsArray = JSON.parse(getArray);
const cardList = document.getElementById('blog');
console.log(blogsArray);
for(let i = 0; i < blogsArray.length; i++){
	const currentBlog = blogsArray[i];
	console.log(currentBlog)
	const newCard = document.createElement('li');
		
	const header = document.createElement('h4');
	header.textContent = currentBlog.title;

	const blog = document.createElement('p');
	blog.textContent = currentBlog.content;
	const author = document.createElement('footer')
	author.textContent = `written by ${currentBlog.name}`
	// console.log(currentBlog.name)

	newCard.appendChild(header);
	newCard.appendChild(blog);
	newCard.appendChild(author);

	cardList.appendChild(newCard);
	
	}




// // const card = document.querySelector('#blogs')


// const blogCards = JSON.parse(localStorage.getItem('form'));
// console.log(blogCards);
// //? going to try a for i loop instead.
// const fillBlog = function(blogInfo){
// 	const blogList = document.querySelector('#blogs');
// 	// blogCards.forEach(blogCard =>{

// 	for (let i = 0; i < blogCards.length; i++) {
// 		const currentBlog = blogCards[i];
// 		const newBlog = document.createElement('li');
		
// 		const header = document.createElement('h4');
// 		header.textContent = blogCards.Title;
		
// 		const blogContent = document.createElement('p');
// 		blogContent.textContent = blogCards.Content;
// 		const username = document.createElement('footer')
// 		username.textContent = blogCards.Username;
// 		console.log(header)
// 		console.log(blogContent)
// 		console.log(username)
// 		// blogList.appendChild(newBlog)
// 		console.log(newBlog);
// 		currentBlog.appendChild(newBlog)
// 		currentBlog.appendChild(header);
// 		currentBlog.appendChild(blogContent);
// 		currentBlog.appendChild(username);
		
// 		console.log(blogCards);
// 		console.log(blogList); 	
// 	}
// }

// fillBlog(blogCards);
	


	// blogCard.array.forEach(titleInput => {
	// 	const cardContent = document.createElement('li');
	// 	cardContent.classList.add('card');
	// 	const header = document.createElement('h4');
	// 	header.textcontent = titleInput.content;
	// 	blogList.appendChild(header);
	// 	console.log(blogList);
	// });
