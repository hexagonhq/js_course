'use-strict';

!function() {
	
	function itsMe(name = 'hexagonhq') {
		let res = `${"it's me, " + name}`;
		console.log(res);
		return res;
	};

	function compare(num1, num2) {
		if (num1 < num2) {
			return `${String(num1) + ' < ' + String(num2)}`;
		} else if (num1 === num2) {
			return `${String(num1) + ' == ' + String(num2)}`;
		} else if(!isNaN(num1) || !isNaN(num2)) {
			return 'Not Number';
		} else {
			return `${String(num1) + ' > ' + String(num2)}`;
		} 
	}

	function row(...args) {
		let arr = args;
		let newArr = [];

		let result = arr.filter(el => {
			if (typeof el !== 'string') {
				newArr.push(el);
			}
		});

		let sort = newArr.sort(function(a,b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});

		let str = String(sort);

		return str;

	};

	let result = row(3, -4, 5, '<');

	function fact(n) {
		return (n != 1) ? n * fact(n - 1) : 1;
	}

	// function matrixDiff(args) {
	// 	let sum = 0;

	// 	for (let i = 0; i < args.length; i++) {
	// 		let sum += args[i];
	// 		// for (let j = 0; j < args[i].length; j+=1) {
	// 		// 	let mtx = args[j];
	// 		// }
	// 	}
	// 	console.log(sum);
	// 	return sum += sum;
	// };

	// console.log(matrixDiff([2, 3]));

	function matrixDiff(array){
	let sum = 0;
	for(let i = 0; i < array.length; i+=1){
		for (let j = 0; j < array[i].length; j+=1) {
			sum += array[i][j];
		}
	}
	console.log(sum);
	}
	matrixDiff([[2, 3], [4, 5]],[[2, 1], [6]]);

}(); 