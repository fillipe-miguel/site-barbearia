const openClass = 'is--open';

let menu = document.querySelector('.h-nav');
let menuButton = document.querySelectorAll('.h-nav__link');
let flagButton = document.querySelectorAll('.h-nav__bannerBox__banner');
let closeButton = document.querySelector('.h-nav__closeButton');

closeButton.addEventListener('click', click);

flagButton[1].addEventListener('click', click);

menuButton.forEach((e) => {
	e.addEventListener('click', click);
});

function click() {
	let windowScreen = window.screen.availWidth;
	if (windowScreen < 850) {
		if (menu.classList.contains(openClass)) {
			closeMenu();
		} else {
			openMenu();
		}
	}
}

function openMenu() {
	menu.classList.add(openClass);
}

function closeMenu() {
	menu.classList.remove(openClass);
}
