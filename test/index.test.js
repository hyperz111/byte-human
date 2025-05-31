import byteHuman from '../index.js'
import { describe, test } from 'node:test'
import assert from 'node:assert/strict'

(async () => {
  await test('Must Return 2.32GB', () => {
    assert.strictEqual(byteHuman(2324606976), '2.32GB')
  })
  await test('Must Return -2.32GB', () => {
    assert.strictEqual(byteHuman(-2324606976), '-2.32GB')
  })
  await describe('Must Return 0B When Use Invalid Value', () => {
    test('Object', () => {
      assert.strictEqual(byteHuman({}), '0B')
    })
    test('Array', () => {
      assert.strictEqual(byteHuman([]), '0B')
    })
    test('null', () => {
      assert.strictEqual(byteHuman(null), '0B')
    })
    test('undefined', () => {
      assert.strictEqual(byteHuman(undefined), '0B')
    })
    test('string', () => {
      assert.strictEqual(byteHuman('Hello'), '0B')
    })
  })
})()
