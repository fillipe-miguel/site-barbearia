const openClass = 'is--open';
const hiddenClass = 'is--hidden';
let widthScreen = window.screen.width;

console.log(widthScreen);

let menu = document.querySelector('.h-nav');
let menuButton = document.querySelectorAll('.h-nav__link');
let flagButton = document.querySelectorAll('.h-nav__bannerBox__banner');

if (widthScreen < 850) {
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
	flagButton[1].classList.add(hiddenClass);
}

function closeMenu() {
	menu.classList.remove(openClass);
	flagButton[1].classList.remove(hiddenClass);
}
