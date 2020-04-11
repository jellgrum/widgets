import React, { useCallback, useState } from 'react'

import map from 'lodash/map'

import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/components/dropdown.css'

import options from './options'


const formattedOptions = map(options, value => ({
  text: value.name,
  value,
}))

export default ({
  onChange,
  disabled,
}) => {
  const [value, setValue] = useState([])

  const handleChange = useCallback((e, { value }) => {
    onChange(value)
    setValue(value)
  }, [onChange])

  return (
    <Dropdown
      options={formattedOptions}
      onChange={handleChange}
      value={value}
      disabled={disabled}
      fluid
      multiple
      search
      selection
      clearable
    />
  )
}
