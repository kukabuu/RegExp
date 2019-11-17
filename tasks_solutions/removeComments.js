function removeComments (str) {
	return str.replace(/\/\/.*|\/\*.*?\*\//gs, "");
}

console.log(removeComments("1 /* a */+/* b */ 1"));
console.log(removeComments("1 + /* 2 */3"));
console.log(removeComments("x = 10;// ten!"));
