// *already have
// localStorage.setItem("name","tish");

// localStorage.getItem('form');


// *added to form.js
// const nameInp = document.getElementById("name");
// const titleInp = document.getElementById("title");
// const contentInp = document.getElementById("content");
// const submitBtn = document.getElementById("postBtn");
// const cardList = document.getElementById('blog');



const tempArray = [];

submitBtn.addEventListener('click', function(submitForm)){
	submitForm.preventDefault();
	const name = nameInp.value;
	const title = titleInp.value;
	const content = contentInp.value;
	
	const blogData = { name, title, content};

	tempArray.push(blogData);
	
	const arrayString = JSON.stringify(tempArray);

	localStorage.setItem('blogArray', arrayString);

}
// *below is from video, above it making it fit for what i need
//*above is added in to form.js
// submitBtn.addEventListener('click', function(submitForm){
// 	submitForm.preventDefault();
// 	const name = nameInp.value;
// 	const title = titleInp.value;
// 	const content = contentInp.value;
	
// 	localStorage.setItem('form', string);
// });

for(let i = 0; i<localStorage.length; i++) {
	const formKeys = localStorage.key(i);
	const formValues = localStorage.getItem(formKeys);

	cardList.innerHTML += `${formKeys}: ${formValues}`;

}