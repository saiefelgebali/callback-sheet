export function getDatestamp(date: Date) {
	// Get unique datestamp
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth();
	const datestamp = `${day}-${month}-${year}`;
	return datestamp;
}
