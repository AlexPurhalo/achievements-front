export function cutTechnologiesArr(technologiesArr) {
	var i = 0, cuttedArr = [], arrItemsLeng = 0, maxLen = 36;

	for (i; i < technologiesArr.length; i++) {
		if (arrItemsLeng + technologiesArr[i].name.length <= maxLen) {
			arrItemsLeng += technologiesArr[i].name.length;
			cuttedArr.push({id: technologiesArr[i].id, name: technologiesArr[i].name})
		}
	}

	return cuttedArr;
}

export function defineArrItemsLeng(arr) {
	var i = 0, itemsLeng = 0;

	for (i; i < arr.length; i++) {
		itemsLeng += arr[i].name.length
	}

	return itemsLeng;
}
