// Decimal Unit Array
const UNIT: string[] = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "RB", "QB"];

export interface Options {
	separator?: string | undefined;
	fixed?: number | undefined;
}

/**
 * Convert byte size to human-readable size
 *
 * ```js
 * import byteHuman from 'byte-human';
 *
 * byteHuman(2324606976); // => 2.32 GB
 * ```
 *
 * @param {Number} bytes - Number of byte size.
 * @param {Object} opts - Options.
 * @returns {String} String number with unit.
 */
function byteHuman(bytes: number, opts: Options): string {
	// If not a number, throw error
	if (typeof bytes !== "number") {
		throw new Error("Expected to be a number.");
	}
	// If infinity, throw error
	if (bytes === Number.POSITIVE_INFINITY || bytes === Number.NEGATIVE_INFINITY) {
		throw new Error("Expected to NOT be a Infinity number.");
	}

	// Separator
	const sep: string = (opts?.separator ?? " ") + "";

	// If negative, change to positive
	let NoP: number = bytes < 0 ? bytes * -1 : bytes;

	// For unit array index
	let index: number = 0;

	// When more than 900, divided with 1000 and increase index
	while (NoP >= 900) {
		NoP = NoP / 1000;
		index++;
	}

	// If initially negative, return to negative
	return (bytes < 0 ? NoP * -1 : NoP).toFixed(opts?.fixed ?? 2) + sep + ((UNIT[index] || UNIT[10]) as string);
}

export default byteHuman;
