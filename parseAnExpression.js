/*
	Create a function parse(expr) that takes an expression and returns an array of 3 items:

	The first number.
	The operator.
	The second number.
*/

function parse (str) {
	let result = str.match(/(-?\d+(?:\.?\d+)?)\s([-+/*])\s(-?\d+(?:\.?\d+)?)/);
	if (!result) return;
	result.shift();
	return result;
}

let [a, op, b] = parse("1.2 * 3.4");
console.log(`${a}, ${op}, ${b}`)