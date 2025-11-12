const UNIT: string[] = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "RB", "QB"];

export interface Options {
	separator?: string;
	fixed?: number;
}

function byteHuman(bytes: number, opts: Options): string {
	if (typeof bytes !== "number") {
		throw new Error("Expected to be a number.");
	}
	if (bytes >= Number.POSITIVE_INFINITY || bytes <= Number.NEGATIVE_INFINITY) {
		throw new Error("Expected to NOT be a Infinity number.");
	}

	const sep: string = opts?.separator ?? " ";
	let NoP: number = bytes < 0 ? bytes * -1 : bytes;
	let index: number = 0;

	while (NoP >= 900) {
		NoP = NoP / 1000;
		index++;
	}

	return (bytes !== NoP ? NoP * -1 : NoP).toFixed(opts?.fixed ?? 2) + sep + ((UNIT[index] ?? UNIT[10]) as string);
}

export default byteHuman;
