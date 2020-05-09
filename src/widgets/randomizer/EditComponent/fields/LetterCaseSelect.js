import React, { useCallback } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'
import lowerCase from 'lodash/lowerCase'

import {
  majorScale,
  FormField,
  SegmentedControl,
} from 'evergreen-ui'

import {
  LETTER_CASE_IGNORE,
  LETTER_CASE_LOWER,
  LETTER_CASE_UPPER,
} from '../../common/constants'


const values = [LETTER_CASE_IGNORE, LETTER_CASE_LOWER, LETTER_CASE_UPPER]
const options = map(values, value => ({ value, label: lowerCase(value) }))

export default ({
  onChange = noop,
  value,
}) => {
  const handleChange = useCallback((value) => {
    onChange('letterCase', value)
  }, [onChange])

  return (
    <FormField
      label="Letter case"
      marginTop={majorScale(2)}
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
