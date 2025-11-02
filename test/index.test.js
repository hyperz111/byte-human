import byteHuman from "../dist/index.js";
import { suite } from "uvu";
import * as assert from "uvu/assert";

const expect = suite("Return Expected Value");

expect("2.32 GB", () => {
	assert.equal(byteHuman(2324606976), "2.32 GB");
});

expect("-2.32 GB", () => {
	assert.equal(byteHuman(-2324606976), "-2.32 GB");
});

const invalid = suite("Throw When Use Invalid Value");

invalid("Object", () => {
	assert.throws(() => byteHuman({}));
});

invalid("Array", () => {
	assert.throws(() => byteHuman([]));
});

invalid("null", () => {
	assert.throws(() => byteHuman(null));
});

invalid("undefined", () => {
	assert.throws(() => byteHuman(undefined));
});

invalid("string", () => {
	assert.throws(() => byteHuman("Hello"));
});

invalid("boolean", () => {
	assert.throws(() => byteHuman(true));
});

invalid("infinity", () => {
	assert.throws(() => byteHuman(Infinity));
});

expect.run();
invalid.run();
