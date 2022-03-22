const openClass = 'h-nav--open';
let widthScreen = window.screenX;

let menu = document.querySelector('.h-nav');
let menuButton = document.querySelectorAll('.h-nav__link');

if (widthScreen < 850) {
	let flagButton = document.querySelectorAll('.h-nav__bannerBox__banner');

	flagButton[1].addEventListener('click', click);

	menuButton.forEach((e) => {
		e.addEventListener('click', click);
	});
}

function click() {
	if (menu.classList.contains(openClass)) {
		closeMenu();
	} else {
		openMenu();
	}
}

function openMenu() {
	menu.classList.add(openClass);
}

function closeMenu() {
	menu.classList.remove(openClass);
}
