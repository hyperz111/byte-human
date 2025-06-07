/**
 * Convert byte size to human-readable size
 * 
 * ```js
 * import byteHuman from 'byte-human';
 *
 * byteHuman(2324606976); // => 2.32GB
 * ```
 * 
 * @param number - Number of byte size.
 * @returns String number with unit.
 * @default 0
 */
declare function byteHuman(bytes: number): string

export default byteHuman