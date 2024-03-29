const toggleBtn = document.querySelector('#toggleBtn');
const image = document.querySelector('#lightDarkImg');


toggleBtn.addEventListener('click', ()=>{
	
	const darkModeOn = document.documentElement.classList.toggle('darkMode');
	if(darkModeOn){
		image.src = "assets/Images/darkIcons.png";
		toggleBtn.textContent = "🌻";

	}
	else{
		image.src = 'assets/Images/icons.jpg'
		toggleBtn.textContent = "🕶️";
	}

});
