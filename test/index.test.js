import byteHuman from "../dist/index.js";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

(async () => {
	await test("Must Return 2.32 GB", () => {
		assert.strictEqual(byteHuman(2324606976), "2.32 GB");
	});
	await test("Must Return -2.32 GB", () => {
		assert.strictEqual(byteHuman(-2324606976), "-2.32 GB");
	});
	await describe("Must throw When Use Invalid Value", () => {
		test("Object", () => {
			assert.throws(() => byteHuman({}));
		});
		test("Array", () => {
			assert.throws(() => byteHuman([]));
		});
		test("null", () => {
			assert.throws(() => byteHuman(null));
		});
		test("undefined", () => {
			assert.throws(() => byteHuman(undefined));
		});
		test("string", () => {
			assert.throws(() => byteHuman("Hello"));
		});
		test("boolean", () => {
			assert.throws(() => byteHuman(true));
		});
		test("infinity", () => {
			assert.throws(() => byteHuman(Infinity));
		});
	});
})();
