import { describe, expect, it } from 'vitest'
import { numeronymize } from './func'

describe('numeronymize', () => {
  it.each([
    {
      word: 'Accessibility',
      expected: 'a11y',
    },
    {
      word: 'hello',
      expected: 'h3o',
    },
    {
      word: 'hi',
      expected: 'hi',
    },
    {
      word: '',
      expected: '',
    },
  ])(`returns $expected when $word`, ({ word, expected }) => {
    expect(numeronymize(word)).toBe(expected)
  })
})
