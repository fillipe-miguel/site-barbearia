const openClassModal = 'modal--ative';

let buttonsToOpenModal = document.querySelectorAll('.m-services__card__button');
let modal = document.querySelector('.modal');
let modalTitle = modal.getElementsByClassName('modal__title');
let buttonsModal = modal.querySelectorAll('.modal__button');

buttonsToOpenModal.forEach((e) => {
	let cardName = e.parentElement.children[0].children[1].innerText;
	e.addEventListener('click', () => {
		openModal(cardName);
	});
});

buttonsModal[0].addEventListener('click', () => {
	let modalImputName = modal.querySelector('.modal__input');

	if (modalImputName.value) {
		alert(`${modalImputName.value} seu horário foi marcado com sucesso!`);
		modal.classList.remove(openClassModal);
		clearTitle();
	} else {
		alert('Preencha os campos corretamente!');
	}
});

// Botão para cancelar
buttonsModal[1].addEventListener('click', () => {
	modal.classList.remove(openClassModal);
	clearTitle();
});

function openModal(title) {
	if (!modal.classList.contains(openClassModal)) {
		modal.classList.add(openClassModal);
		title = title.toLowerCase();
		modalTitle[0].innerText += ` ${title}`;
	}
}

function clearTitle() {
	modalTitle[0].innerText = `Marcar horário para`;
}
