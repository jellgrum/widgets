import React, { useCallback } from 'react'

import noop from 'lodash/noop'

import { Checkbox } from 'antd'


export default ({
  handleChangeSetting = noop,
  isChecked,
}) => {
  const handleChange = useCallback((evt) => {
    handleChangeSetting('isUnique', evt.target.checked)
  }, [handleChangeSetting])

  return (
    <Checkbox
      onChange={handleChange}
      checked={isChecked}
    >
      Unique symbols
    </Checkbox>
  )
}
