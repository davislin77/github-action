import { expect, test } from 'vitest'
import { sum } from './util'

test('adds 1 + 2 to equal 4', () => {
  expect(sum(1, 2)).toBe(4)
})
