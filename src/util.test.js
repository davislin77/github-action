import { expect, test } from 'vitest'
import { sum, mult } from './util'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('multi 2 x 3 to equal 6', () => {
  expect(mult(2, 3)).toBe(6)
})

