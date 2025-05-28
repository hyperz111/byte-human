import byteHuman from '../index.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

(async () => {
  await test('Must Return 2.32GB', () => {
	  assert.strictEqual(byteHuman(2324606976), '2.32GB')
	})
})()
