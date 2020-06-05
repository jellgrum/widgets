import React, { useCallback, useEffect } from 'react'

import noop from 'lodash/noop'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'

import { Space } from 'antd'

import { defaultSettings } from '../common/settings'
import {
  FormSettings,
  SearchSettings,
} from './fields'


export default ({
  handleChange = noop,
  settings = {},
}) => {
  const updatedSettings = isEmpty(settings) ? defaultSettings : settings

  const handleChangeSettings = useCallback((path, setting, value) => {
    const hasPath = isString(path)
    const newSettings = {
      ...updatedSettings,
      [hasPath ? path : setting]: hasPath
        ? {
          ...updatedSettings[path],
          [setting]: value,
        }
        : value,
    }

    handleChange(newSettings)
  }, [handleChange, updatedSettings])

  useEffect(() => {
    handleChange(updatedSettings)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ width: '100%' }}
    >
      <FormSettings
        handleChangeSetting={handleChangeSettings}
        fields={updatedSettings.formFields}
      />

      <SearchSettings
        handleChangeSetting={handleChangeSettings}
        searchSettings={updatedSettings.search}
      />
    </Space>
  )
}
