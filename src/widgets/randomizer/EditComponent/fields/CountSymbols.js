import React, {useCallback, useEffect, useState} from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'

import {
  majorScale,
  FormField,
  SegmentedControl,
} from 'evergreen-ui'

import {
  COUNT_SYMBOLS_MIN,
  COUNT_SYMBOLS_MAX,
  TYPE_NUMERALS,
} from '../../common/constants'


const baseValues = [COUNT_SYMBOLS_MIN, 6, 8, 10]
const baseOptions = map(baseValues, value => ({ value, label: value }))

const extendedValues = [...baseValues, 12, COUNT_SYMBOLS_MAX]
const extendedOptions = map(extendedValues, value => ({ value, label: value }))

const shouldUseBase = (isUnique, type) => isUnique && type === TYPE_NUMERALS

export default ({
  onChange = noop,
  value,
  settings: {
    type,
    isUnique,
  },
}) => {
  const [options, setOptions] = useState(shouldUseBase(isUnique, type)  ? baseOptions : extendedOptions)

  const handleChange = useCallback((value) => {
    onChange('countSymbols', value)
  }, [onChange])

  useEffect(() => {
    if (shouldUseBase(isUnique, type)) {
      onChange('countSymbols', COUNT_SYMBOLS_MIN)
      setOptions(baseOptions)
    } else {
      setOptions(extendedOptions)
    }
  }, [isUnique, type])

  return (
    <FormField
      label="Count symbols"
      marginBottom={majorScale(2)}
    >
      <SegmentedControl
        name="switch"
        options={options}
        value={value}
        onChange={handleChange}
      />
    </FormField>
  )
}
