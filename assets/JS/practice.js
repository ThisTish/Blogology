// *from stack overflow, with an answer from the same problem i'm having

function addEntry() {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    //?defined up top, does it have to be in function?
	// var entryTitle = document.getElementById("entryTitle").value;
    // var entryText = document.getElementById("entryText").value;
    var entry = {
        "title": entryTitle,
        "text": entryText
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};


// *my version
submitBtn.addEventListener('click', function(submitBlog){
	submitBlog.preventDefault();
	
	let previousBlogs = JSON.parse(localStorage.getItem('blogs'));
	if(previousBlogs == null || previousBlogs == undefined) previousBlogs = [];
	// ?dont' know if i need the .value after inp's
	const name = nameInp;
	const title = titleInp;
	const content = contentInp;

	let blog = { name, title, content };

	previousBlogs.push(blog);
	let stringedBlogs = JSON.stringify(previousBlogs);
	localStorage.setItem('blogs', stringedBlogs);

});




// *already have
// localStorage.setItem("name","tish");

// localStorage.getItem('form');


// *added to form.js
// const nameInp = document.getElementById("name");
// const titleInp = document.getElementById("title");
// const contentInp = document.getElementById("content");
// const submitBtn = document.getElementById("postBtn");
// const cardList = document.getElementById('blog');



// const tempArray = [];

// submitBtn.addEventListener('click', function(submitForm)){
// 	submitForm.preventDefault();
// 	const name = nameInp.value;
// 	const title = titleInp.value;
// 	const content = contentInp.value;
	
// 	const blogData = { name, title, content};

// 	tempArray.push(blogData);
	
// 	const arrayString = JSON.stringify(tempArray);

// 	localStorage.setItem('blogArray', arrayString);

// }
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