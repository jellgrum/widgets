import React, { useCallback } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'
import lowerCase from 'lodash/lowerCase'

import {
  FormField,
  SegmentedControl,
} from 'evergreen-ui'

import {
  TYPE_NUMERALS,
  TYPE_LETTERS,
} from '../../common/constants'


const values = [TYPE_NUMERALS, TYPE_LETTERS]
const options = map(values, value => ({ value, label: lowerCase(value) }))

export default ({
  onChange = noop,
  value,
}) => {
  const handleChange = useCallback((value) => {
    onChange('type', value)
  }, [onChange])

  return (
    <FormField label="Type symbols">
      <SegmentedControl
        name="switch"
        options={options}
        value={value}
        onChange={handleChange}
      />
    </FormField>
  )
}
