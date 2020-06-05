import React, { useCallback } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'
import lowerCase from 'lodash/lowerCase'

import { Radio, Space } from 'antd'

import {
  LETTER_CASE_IGNORE,
  LETTER_CASE_LOWER,
  LETTER_CASE_UPPER,
} from '../../common/constants'


const values = [LETTER_CASE_IGNORE, LETTER_CASE_LOWER, LETTER_CASE_UPPER]

export default ({
  handleChangeSetting = noop,
  letterCase,
}) => {
  const handleChange = useCallback((evt) => {
    handleChangeSetting('letterCase', evt.target.value)
  }, [handleChangeSetting])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <label>Letter case</label>
      <Radio.Group
        onChange={handleChange}
        value={letterCase}
      >
        {map(values, (value, index) => (
          <Radio.Button
            key={index}
            value={value}
          >
            {lowerCase(value)}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Space>
  )
}
