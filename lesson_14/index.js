'use strict';
const arr = [
	{
		className: 'item-class',
		attributes: {'data-name': 'Anatoliy'},
		content: 'Some Text'
	}
];

function init(arr, n = 1) {
	const createListElement = document.createElement('ul');
	document.body.appendChild(createListElement).classList.add('list');
	const listElement = document.querySelector('ul');

	for(let i = 0; i < n; i++) {
		for (let i = 0; i < n; i+=1) {
			for (let j = 0; j < arr.length; j+=1) {
				let params = arr[j];
				const createItemElement = document.createElement('li');
				listElement.appendChild(createItemElement);
				createItemElement.classList.add(params.className);
				createItemElement.innerText = params.content;
				for (let key in params.attributes) {
					createItemElement.setAttribute(key, params.attributes[key]);
				}
			}
		}
	}

}

const removeBtn = document.querySelector('#btn-remove').addEventListener('click', () => {
	const removeElement = document.querySelector('ul');

	if (removeElement !== null) {
		removeElement.remove();
		return true;
	} else {
		return false;
	}
});
