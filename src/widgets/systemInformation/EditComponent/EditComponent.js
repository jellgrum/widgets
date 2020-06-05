import React from 'react'

import map from 'lodash/map'
import noop from 'lodash/noop'

import { Select, Space } from 'antd'

import { items } from '../common'


const formattedOptions = map(items, ({ name, type, disabled }) => ({
  label: name,
  value: type,
  disabled,
}))

export default ({
  handleChange = noop,
  types = [],
}) => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <label htmlFor="system-information">Select system information</label>
    <Select
      id="system-information"
      mode="multiple"
      onChange={handleChange}
      value={types}
      options={formattedOptions}
      style={{ width: '100%' }}
      showArrow
    />
  </Space>
)
