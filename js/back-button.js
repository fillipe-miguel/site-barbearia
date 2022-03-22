const animateClass = 'is-ative';
let sizeFirstScreen = document.querySelector('.h-titles').offsetTop;
let button = document.querySelector('.button-back-page');

function addClass() {
	let scrollTopDistance = window.scrollY;
	if (
		scrollTopDistance > sizeFirstScreen &&
		!button.classList.contains(animateClass)
	) {
		button.classList.add(animateClass);
		console.log('Colocou');
	} else if (
		scrollTopDistance < sizeFirstScreen &&
		button.classList.contains(animateClass)
	) {
		button.classList.remove(animateClass);
		console.log('Retirou');
	}
}

window.addEventListener('scroll', addClass);


button.addEventListener('click', () => {
	window.scrollTo(top);
});
