import byteHuman from '../index.js'
import { describe, test } from 'node:test'
import assert from 'node:assert/strict'

(async () => {
  await describe('NOT Give 2nd Argument (Default)', async () => {
    await test('Must Return 2.32GB', () => {
      assert.strictEqual(byteHuman(2324606976), '2.32GB')
    })
  })
  await describe('Give 2nd Argument (Descimal)', async () => {
    await test('Must Return 2.32GB', () => {
      assert.strictEqual(byteHuman(2324606976, 'descimal'), '2.32GB')
    })
  })
  await describe('Give 2nd Argument (Binary)', async () => {
    await test('Must Return 2.16GiB', () => {
      assert.strictEqual(byteHuman(2324606976, 'binary'), '2.16GiB')
    })
  })
})()