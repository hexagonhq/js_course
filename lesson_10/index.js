'use strict';

const data = {
	keys: ['home', 'offise', 'paty club'],
	name: 'John'
};

let temp = data.keys.join(' ');
	console.log('My name is ' + data.name + ' ' + temp);

const myAge = 9;

function getAge(age) {
	if (age >= 5 && age <= 24) {
		return 'лет';
	}

	if (age === 1) {
		return 'год';
	}

	if (age >= 2 && age <= 4) {
		return 'года';
	}

	return 'лет';
}

let result = getAge(myAge);

console.log('Мой возраст ' + myAge + ' ' + result);


const arr = [1, 13, -3, 0];
let sum = 0;

const obj = {};

obj.max = Math.max(...arr);
obj.min = Math.min(...arr);
obj.avg = getAvg();
obj.negative = getNegative();
obj['not a number'] = getNotNumber();

function getNegative() {
	const arrNegative = [];
	arr.filter(el => {
		if (el < 0 ) {
			arrNegative.push(el);
		}
	
	});
	return arrNegative.length;
}

function getNotNumber() {
	const arrNotNumber = [];
	arr.filter(el => {
		if (typeof el === 'string') {
			arrNotNumber.push(el);
		}
	
	});
	return arrNotNumber.length;
}

function getAvg() {
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	};

	return result / arr.length;
}

console.log(obj);