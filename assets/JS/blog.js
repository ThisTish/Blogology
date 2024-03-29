
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

