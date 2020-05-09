import map from 'lodash/map'
import upperCase from 'lodash/upperCase'
import includes from 'lodash/includes'

import {
  TYPE_NUMERALS,
  LETTER_CASE_LOWER,
  LETTER_CASE_UPPER,
} from '../common/constants';


const arrayLowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const arrayUpperLetters = map(arrayLowerLetters, upperCase)
const arrayLetters = [...arrayUpperLetters, ...arrayLowerLetters]

const getNumber = ({ countSymbols, isUnique }) => {
  let result = ''

  while (result.length < countSymbols) {
    const newSymbol = Math.floor(Math.random() * 10)

    if (isUnique && includes(result, `${newSymbol}`)) {
      continue
    }

    result = `${result}${newSymbol}`
  }

  return result;
}

const getString = ({ countSymbols, isUnique, letterCase }) => {
  let result = ''

  while (result.length < countSymbols) {
    const newSymbol = arrayLetters[Math.floor(Math.random() * arrayLetters.length)]

    if (isUnique && includes(result, newSymbol)) {
      continue
    }
    if (letterCase === LETTER_CASE_LOWER && includes(arrayUpperLetters, newSymbol)) {
      continue
    }
    if (letterCase === LETTER_CASE_UPPER && includes(arrayLowerLetters, newSymbol)) {
      continue
    }

    result = `${result}${newSymbol}`
  }

  return result;
}

export default settings => settings.type === TYPE_NUMERALS
  ? getNumber(settings)
  : getString(settings)
