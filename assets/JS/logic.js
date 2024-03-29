

const toggleBtn = document.querySelector('#toggleBtn');
const image = document.querySelector('#lightDarkImg');






toggleBtn.addEventListener('click', ()=>{
	
	const darkModeOn = document.documentElement.classList.toggle('darkMode')
	if(darkModeOn){
		console.log('dark')
		image.src = "assets/Images/darkIcons.png";
		toggleBtn.textContent = "🌻";

	}
	else{
		console.log('light')
		image.src = 'assets/images/icons.jpg'
		toggleBtn.textContent = "🕶️";
	}

})
