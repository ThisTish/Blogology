const toggleBtn = document.querySelector('#toggleBtn');
const image = document.querySelector('#lightDarkImg');


toggleBtn.addEventListener('click', ()=>{
	
	const darkModeOn = document.documentElement.classList.toggle('darkMode');
	if(darkModeOn){
		toggleBtn.textContent = "🌻";
		toggleBtn.ariaLabel = 'sunflower';
		toggleBtn.title = 'lightMode';
		image.src = "assets/Images/darkIcons.png";

	}
	else{
		toggleBtn.textContent = "🕶️";
		toggleBtn.ariaLabel ="sunglasses";
		toggleBtn.title = "darkMode";
		image.src = "assets/Images/icons.jpg";
	}

});
