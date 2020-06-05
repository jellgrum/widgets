import React, { useCallback } from 'react'

import lowerCase from 'lodash/lowerCase'
import noop from 'lodash/noop'
import map from 'lodash/map'

import { Radio } from 'antd'

import {
  MODE_FORM,
  MODE_LIST,
} from '../constants'


const MODES_MENU = [MODE_LIST, MODE_FORM]

export default ({
  setMode = noop,
  mode,
}) => {
  const handleChangeMode = useCallback((evt) => {
    setMode(evt.target.value)
  }, [setMode])

  return (
    <Radio.Group
      onChange={handleChangeMode}
      value={mode}
    >
      {map(MODES_MENU, (value, index) => (
        <Radio.Button
          key={index}
          value={value}
        >
          {lowerCase(value)}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}
