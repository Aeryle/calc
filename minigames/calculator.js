const form = document.getElementById('form');

form.onsubmit = (event) => {
	// Prevent page refresh
	event.preventDefault();

	const firstValue = +document.getElementById('firstValue').value;
	const operator = document.getElementById('operator').value;
	const secondValue = +document.getElementById('secondValue').value;

	if ((operator === '/' || operator === '%') && secondValue === 0) {
		for (const result of document.getElementsByClassName('result')) {
			result.classList.add('hide');
		}

		return document
			.getElementById('divisionByZero')
			.classList
			.remove('hide');
	} else {
		document
			.querySelectorAll('.result')
			.forEach(
				element => element.classList.remove('hide')
			);

		document.getElementById('divisionByZero').classList.add('hide');
	}

	// Method 1
	// Should be safe
	const calculateFunction = (new Function(`return ${firstValue}${operator}${secondValue}`))();
	document.getElementById('resultFunction').innerText = `Result (method 1): ${calculateFunction}`;

	// Method 2
	// DON'T use this one. Dangerous.
	const calculateEval = eval(firstValue + operator + secondValue);
	document.getElementById('resultEval').innerText = `Result (method 2): ${calculateEval}`;

	// Method 3
	// The less dangerous, but requires changing code when adding a new operator.
	switch (operator) {
		case '+':
			document
				.getElementById('resultHardcode')
				.innerText = `Result (method 3): ${firstValue + secondValue}`;
			break;

		case '*':
			document
				.getElementById('resultHardcode')
				.innerText = `Result (method 3): ${firstValue * secondValue}`;
			break;

		case '-':
			document
				.getElementById('resultHardcode')
				.innerText = `Result (method 3): ${firstValue - secondValue}`;
			break;

		case '/':
			document
				.getElementById('resultHardcode')
				.innerText = `Result (method 3): ${firstValue / secondValue}`;
			break;

		case '%':
			document
				.getElementById('resultHardcode')
				.innerText = `Result (method 3): ${firstValue % secondValue}`;
			break;

		default:
			break;
	}
};
