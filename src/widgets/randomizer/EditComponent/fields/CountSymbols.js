import React, { useCallback, useEffect, useState } from 'react'

import noop from 'lodash/noop'
import map from 'lodash/map'

import { Radio, Space } from 'antd'

import {
  COUNT_SYMBOLS_MIN,
  COUNT_SYMBOLS_MAX,
  TYPE_NUMERALS,
} from '../../common/constants'


const baseValues = [COUNT_SYMBOLS_MIN, 6, 8, 10]
const extendedValues = [...baseValues, 12, COUNT_SYMBOLS_MAX]

const shouldUseBase = (isUnique, type) => isUnique && type === TYPE_NUMERALS

export default ({
  handleChangeSetting = noop,
  settings: {
    countSymbols,
    isUnique,
    type,
  },
}) => {
  const [options, setOptions] = useState(shouldUseBase(isUnique, type)  ? baseValues : extendedValues)

  const handleChange = useCallback((evt) => {
    handleChangeSetting('countSymbols', evt.target.value)
  }, [handleChangeSetting])

  useEffect(() => {
    if (shouldUseBase(isUnique, type)) {
      handleChangeSetting('countSymbols', COUNT_SYMBOLS_MIN)
      setOptions(baseValues)
    } else {
      setOptions(extendedValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnique, type])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <label>Count symbols</label>
      <Radio.Group
        onChange={handleChange}
        value={countSymbols}
      >
        {map(options, (option, index) => (
          <Radio.Button
            key={index}
            value={option}
          >
            {option}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Space>
  )
}

