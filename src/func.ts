export const numeronymize = (raw_word: string): string => {
  const word = raw_word.replace(/\s/g, '').toLowerCase()

  if (word.length <= 3) {
    return raw_word
  }

  const firstChar = word[0]
  const lastChar = word[word.length - 1]
  const len = word.length - 2

  return `${firstChar}${len.toString()}${lastChar}`
}
