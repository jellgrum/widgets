import React, { useCallback } from 'react'

import noop from 'lodash/noop'

import {
  Checkbox,
  majorScale,
} from 'evergreen-ui'


export default ({
  onChange = noop,
  value,
}) => {
  const handleChange = useCallback((evt) => {
    onChange('isUnique', evt.target.checked)
  }, [onChange])

  return (
    <Checkbox
      label="Unique symbols"
      checked={value}
      onChange={handleChange}
      marginBottom={majorScale(2)}
    />
  )
}
