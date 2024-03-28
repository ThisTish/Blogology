
const blogsArray = JSON.parse(localStorage.getItem('blogs'));
const cardList = document.getElementById('blog');
console.log(blogsArray);

for(let i = 0; i < blogsArray.length; i++){
	const newBlog = blogsArray[i];

	const newCard = document.createElement('li');
		
	const header = document.createElement('h4');
	header.textContent = newBlog.title;
	const blog = document.createElement('p');
	blog.textContent = newBlog.content;
	const author = document.createElement('footer')
	author.textContent = `written by ${newBlog.name}`

	newCard.appendChild(header);
	newCard.appendChild(blog);
	newCard.appendChild(author);

	cardList.appendChild(newCard);

	updatedString = JSON.stringify(blogsArray);
	console.log(updatedString)

	localStorage.setItem('blogs',updatedString)
	
}


// blogsArray.push(newBlog)



// // const card = document.querySelector('#blogs')


// const blogCards = JSON.parse(localStorage.getItem('form'));
// console.log(blogCards);
// //? going to try a for i loop instead.
// const fillBlog = function(blogInfo){
// 	const blogList = document.querySelector('#blogs');
// 	// blogCards.forEach(blogCard =>{

// 	for (let i = 0; i < blogCards.length; i++) {
// 		const newBlog = blogCards[i];
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
// 		newBlog.appendChild(newBlog)
// 		newBlog.appendChild(header);
// 		newBlog.appendChild(blogContent);
// 		newBlog.appendChild(username);
		
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
