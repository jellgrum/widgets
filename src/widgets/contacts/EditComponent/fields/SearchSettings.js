import React, { useCallback } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'
import lowerCase from 'lodash/lowerCase'

import {
  Space,
  Checkbox,
  Select,
} from 'antd'

import { FORM_FIELDS, NAME } from '../../common/constants'


const PATH = 'search'

const fieldOptions = map(FORM_FIELDS, field => ({
  label: lowerCase(field),
  value: field,
  disabled: field === NAME,
}))

export default ({
  handleChangeSetting = noop,
  searchSettings: {
    isShown,
    isCaseSensitive,
    fields,
  },
}) => {
  const handleChangeBool = useCallback((evt) => {
    const { name, checked } = evt.target

    handleChangeSetting(PATH, name, checked)
  }, [handleChangeSetting])

  const handleChangeFields = useCallback((newFields) => {
    handleChangeSetting(PATH, 'fields', newFields)
  }, [handleChangeSetting])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <label>Search</label>

      <Checkbox
        onChange={handleChangeBool}
        checked={isShown}
        name="isShown"
      >
        Show search input
      </Checkbox>

      <Checkbox
        onChange={handleChangeBool}
        checked={isCaseSensitive}
        disabled={!isShown}
        name="isCaseSensitive"
      >
        Case sensitive
      </Checkbox>


      <label htmlFor="search-by-fields">Search by fields</label>
      <Select
        id="search-by-fields"
        name="fields"
        mode="multiple"
        onChange={handleChangeFields}
        value={fields}
        options={fieldOptions}
        style={{ width: '100%' }}
        showArrow
      />
    </Space>
  )
}
