export function cutText(str) {
	if (str.length <= 460) {
		return str
	} else {
		str = str.slice(0, 460) + '...';
		return str
	}
}
