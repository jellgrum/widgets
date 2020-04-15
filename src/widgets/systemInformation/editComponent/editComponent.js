import React, { useCallback, useState } from 'react'

import map from 'lodash/map'
import filter from 'lodash/filter'

import { SelectMenu, Button } from 'evergreen-ui'

import { items } from '../common'


const formattedOptions = map(items, ({ name, type, disabled }) => ({
  label: name,
  value: type,
  disabled,
}))

export default ({
  onChange,
  initialValues = [],
}) => {
  const [selectedValues, setSelectedValues] = useState(initialValues)

  const handleSelect = useCallback(({ value }) => {
    const newValues = [...selectedValues, value]

    onChange(newValues)
    setSelectedValues(newValues)
  }, [selectedValues])

  const handleDeselect = useCallback(({ value }) => {
    const newValues = filter(selectedValues, selectedValue => selectedValue !== value)

    onChange(newValues)
    setSelectedValues(newValues)
  }, [selectedValues])

  return (
    <SelectMenu
      isMultiSelect
      hasTitle={false}
      options={formattedOptions}
      selected={selectedValues}
      onSelect={handleSelect}
      onDeselect={handleDeselect}
    >
      <Button>
        {selectedValues.length > 0
          ? `${selectedValues.length} selected`
          : 'Select a system information'}
      </Button>
    </SelectMenu>
  )
}
