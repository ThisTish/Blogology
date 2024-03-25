// const card = document.querySelector('#blogs')


const blogCards = JSON.parse(localStorage.getItem('form'));
console.log(blogCards);

const fillBlog = function(blogCards){
	
	const blogList = document.querySelector('#blogs');
	console.log(blogList);

	blogCards.forEach(blogCard =>{
		const newBlog = document.createElement('li');
			
		const header = document.createElement('h4');
		header.textContent = blogCard.Title;
		
		const blogContent = document.createElement('p');
		blogContent.textContent = blogCard.Content;
		
		const username = document.createElement('footer')
		username.textContent = blogCard.Username;
		
		blogList.appendChild(newBlog)
		blogList.appendChild(header);
		newBlog.appendChild(blogContent);
		newBlog.appendChild(username);
		
		blogList.appendChild(newBlog);
		console.log(blogCard)
	})
	fillBlog(blogCards);
	


	// blogCard.array.forEach(titleInput => {
	// 	const cardContent = document.createElement('li');
	// 	cardContent.classList.add('card');
	// 	const header = document.createElement('h4');
	// 	header.textcontent = titleInput.content;
	// 	blogList.appendChild(header);
	// 	console.log(blogList);
	// });
}