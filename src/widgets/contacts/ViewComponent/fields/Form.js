/* eslint-disable no-useless-escape */
import React, { useCallback, useEffect, useState } from 'react'

import upperFirst from 'lodash/upperFirst'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import map from 'lodash/map'
import get from 'lodash/get'

import {
  Button,
  Input,
  Space,
  Typography,
} from 'antd'

import { defaultSettings } from '../../common/settings'
import { MODE_LIST, FIELD_PROPS } from '../constants'
import { NAME } from '../../common/constants'


export default ({
  currentContact: {
    id,
    ...currentContact
  },
  visibleFields = defaultSettings.formFields,
  handleChangeContact,
  handleSubmit,
  setMode,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleChangeField = useCallback((evt) => {
    const { name, value } = evt.target

    handleChangeContact(name, value)
  }, [handleChangeContact])

  const handleSubmitForm = useCallback(() => {
    handleSubmit()
    setMode(MODE_LIST)
  }, [handleSubmit, setMode])

  const handleCancel = useCallback(() => {
    handleChangeContact(null)

    if (!isEditing) {
      setMode(MODE_LIST)
    }
  }, [handleChangeContact, isEditing, setMode])

  useEffect(() => {
    setIsEditing(!isNil(id))
  }, [id])

  useEffect(() => () => {
    handleChangeContact(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ width: '100%' }}
    >
      {map(visibleFields, field => {
        const {
          Prefix,
          rules: {
            required,
            max,
            type,
            pattern,
          }
        } = FIELD_PROPS[field]

        return (
          <Space
            key={field}
            direction="vertical"
            style={{ width: '100%' }}
          >
            <label htmlFor={field}>
              {upperFirst(field)}
              {required && <Typography.Text type="danger"> *</Typography.Text>}
            </label>

            <Input
              id={field}
              name={field}
              value={get(currentContact, field, '')}
              onChange={handleChangeField}
              prefix={<Prefix />}
              maxLength={max}
              type={type || 'text'}
              pattern={pattern || null}
            />
          </Space>
        )
      })}

      <Space>
        <Button
          type="primary"
          disabled={isEmpty(currentContact[NAME])}
          onClick={handleSubmitForm}
        >
          {isEditing ? 'Edit' : 'Add'} contact
        </Button>

        <Button onClick={handleCancel}>
          Cancel {isEditing && ' editing'}
        </Button>
      </Space>
    </Space>
  )
}
