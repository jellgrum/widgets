import React, { useCallback } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'
import lowerCase from 'lodash/lowerCase'

import { Space, Select } from 'antd'

import { FORM_FIELDS, NAME } from '../../common/constants'


const fieldOptions = map(FORM_FIELDS, field => ({
  label: lowerCase(field),
  value: field,
  disabled: field === NAME,
}))

export default ({
  handleChangeSetting = noop,
  fields,
}) => {
  const handleChange = useCallback((values) => {
    handleChangeSetting(null, 'formFields', values)
  }, [handleChangeSetting])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <label>Form</label>

      <label htmlFor="form-fields">Visible fields</label>
      <Select
        id="form-fields"
        mode="multiple"
        onChange={handleChange}
        value={fields}
        options={fieldOptions}
        style={{ width: '100%' }}
        showArrow
      />
    </Space>
  )
}
