import React, { useCallback } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'
import lowerCase from 'lodash/lowerCase'

import { Radio, Space } from 'antd'

import {
  TYPE_NUMERALS,
  TYPE_LETTERS,
} from '../../common/constants'


const values = [TYPE_NUMERALS, TYPE_LETTERS]

export default ({
  handleChangeSetting = noop,
  type,
}) => {
  const handleChange = useCallback((evt) => {
    handleChangeSetting('type', evt.target.value)
  }, [handleChangeSetting])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <label>Type symbols</label>
      <Radio.Group
        onChange={handleChange}
        value={type}
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
