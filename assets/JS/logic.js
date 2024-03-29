// todo light/dark toggle

let darkMode = localStorage.getItem('darkMode');
const toggleBtn = document.querySelector('#toggleBtn');
const image = document.querySelector('#lightDarkImg');


// todo walk through and match up with html & css after styling.

const turnDark = ()=> {
	document.documentElement.classList.add('darkMode');
	localStorage.setItem('darkMode','dark');
	image.src = "assets/Images/darkIcons.png";
}

const turnLight = ()=>{
	document.documentElement.classList.remove('darkMode');
	localStorage.setItem('darkMode', 'light');
	image.src = "assets/images/icons.jpg";
}

if(darkMode === 'dark'){
	turnDark();
}
else{
	turnLight();
}

toggleBtn.addEventListener('click', ()=>{
	darkMode = localStorage.getItem('darkMode');
	if(darkMode !== 'dark'){
		turnDark();
	}
	else{
		turnLight();
	}
	
});

document.documentElement.classList.toggle('darkmode')
// const turnDarkMode = () =>{

// document.documentelement.classList.add('darkMode');

// localStorage.setItem('darkMode', 'dark')
// }

// const turnLightMode = () => {

// 	document.body.classList.remove('darkMode');
	
// 	localStorage.setItem('darkMode', 'light');
// };

// if(darkMode === 'dark'){
// 	turnDarkMode();
// }

// toggleBtn.addEventListener('click', () => {
// 	darkMode = localStorage.getItem('darkMode');
// 	console.log('clicked');
// 	darkMode = localStorage.getItem('darkMode');
// 	if(darkMode !== 'dark'){
// 		turnDarkMode();
// 	}
// 	else{
// 		turnLightMode();
// 	}
// })