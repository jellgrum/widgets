import React, { useCallback, useEffect } from 'react'

import noop from 'lodash/noop'
import isEmpty from 'lodash/isEmpty'

import { Space } from 'antd'

import {
  CountSymbols,
  TypeSelect,
  Unique,
  LetterCaseSelect,
} from './fields'
import {
  COUNT_SYMBOLS_MIN,
  TYPE_LETTERS,
  TYPE_NUMERALS,
  LETTER_CASE_IGNORE,
} from '../common/constants'


export const defaultSettings = {
  countSymbols: COUNT_SYMBOLS_MIN,
  type: TYPE_NUMERALS,
  isUnique: false,
  letterCase: LETTER_CASE_IGNORE,
}

export default ({
  handleChange = noop,
  settings = {},
}) => {
  const updatedSettings = isEmpty(settings) ? defaultSettings : settings

  const handleChangeSettings = useCallback((setting, value) => {
    handleChange({ ...updatedSettings, [setting]: value })
  }, [handleChange, updatedSettings])

  useEffect(() => {
    handleChange(updatedSettings)
  })

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ width: '100%' }}
    >
      <CountSymbols
        handleChangeSetting={handleChangeSettings}
        settings={updatedSettings}
      />

      <Unique
        handleChangeSetting={handleChangeSettings}
        isChecked={updatedSettings.isUnique}
      />

      <TypeSelect
        handleChangeSetting={handleChangeSettings}
        type={updatedSettings.type}
      />

      {updatedSettings.type === TYPE_LETTERS && (
        <LetterCaseSelect
          handleChangeSetting={handleChangeSettings}
          letterCase={updatedSettings.letterCase}
        />
      )}
    </Space>
  )
}
