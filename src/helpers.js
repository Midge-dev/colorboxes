function choice(arr) {
	let reandomIndex = Math.floor(Math.random() * arr.length);
	return arr[reandomIndex];
}

export { choice };
