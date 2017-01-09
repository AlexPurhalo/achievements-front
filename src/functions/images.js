export function addIndex(arr) {
	var i, newArr = [];
	for(i = 0; i < arr.length; i++) {
		newArr.push({ url: arr[i].image.url, num: i});
	}

	return newArr
}
