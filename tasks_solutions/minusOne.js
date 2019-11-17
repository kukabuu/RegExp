function minusOne (match, amount, item) {
	amount = +amount - 1;
	if (amount === 1) item = item.slice(0, item.length - 1);
	else if (amount === 0) amount = "no";
	return `${amount} ${item}`;
}

let string = '5 engineers, 9 programmers, 1 project manager, 2 devops';

console.log(string.replace(/(\d+) (\w+)/g, minusOne));