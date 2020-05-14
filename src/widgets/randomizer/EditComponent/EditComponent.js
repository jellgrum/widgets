import React, { useCallback, useEffect, useState } from 'react'

import noop from 'lodash/noop'

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
} from '../common/constants';


const defaultValues = {
  countSymbols: COUNT_SYMBOLS_MIN,
  type: TYPE_NUMERALS,
  isUnique: false,
  letterCase: LETTER_CASE_IGNORE,
}

export default ({
  onChange = noop,
  initialValues = defaultValues,
}) => {
  const [settings, setSettings] = useState(initialValues)

  const handleChange = useCallback((setting, value) => {
    const newSettings = { ...settings, [setting]: value }
    onChange(newSettings)
    setSettings(newSettings)
  }, [onChange, settings])

  useEffect(() => {
    onChange(initialValues)
  })

  return (
    <>
      <CountSymbols
        onChange={handleChange}
        value={settings.countSymbols}
        settings={settings}
      />

      <Unique
        onChange={handleChange}
        value={settings.isUnique}
      />

      <TypeSelect
        onChange={handleChange}
        value={settings.type}
      />

      {settings.type === TYPE_LETTERS && (
        <LetterCaseSelect
          onChange={handleChange}
          value={settings.letterCase}
        />
      )}
    </>
  )
}
