'use strict';

// const a = 4;
// const b = 4;
// const pb = 'add'; // sub mul div
//
// if (pb === 'add') {
//     console.log(a + b);
// } else if(pb === 'sub') {
//     console.log(a - b);
// } else {
//     if (pb === 'mul') {
//         console.log(a * b);
//     } else {
//         console.log(a / b);
//     }
// }

	console.log('Трофимчук Дмитрий');

	const a = 22,
				b = 5;

	console.log((a > b ? a : b) + ' Большое');
	console.log((a < b ? a : b) + ' Меньшее');
	console.log((a + b) + ' Сумма');
	console.log((a % b) + ' Остаток от деления a на b');

	function getNumber(a,b) {
		if (a -10 > b) {
			return a + 10;
		} else {
			return 9
		}

		return b;
	}

let result = getNumber(a,b);
	console.log(result);
