import React, { useCallback, useEffect } from 'react'

import map from 'lodash/map'
import identity from 'lodash/identity'

import {
  Descriptions,
  Space,
  Button,
} from 'antd'

import {
  NAME,
  DESCRIPTION,
  EMAIL,
  FACEBOOK,
  PHONE,
  SKYPE,
  TELEGRAM,
  WEBSITE,
} from '../../common/constants'
import { PREFIX_FIELDS } from '../constants'


const CONTACT = {
  [NAME]: {
    getContent: identity,
    Prefix: PREFIX_FIELDS[NAME],
    isLink: false,
  },
  [DESCRIPTION]: {
    getContent: identity,
    Prefix: PREFIX_FIELDS[DESCRIPTION],
    isLink: false,
  },
  [PHONE]: {
    getLink: phoneNumber => `tel:${phoneNumber}`,
    Prefix: PREFIX_FIELDS[PHONE],
    isLink: true,
  },
  [EMAIL]: {
    getLink: email => `mailto:${email}`,
    Prefix: PREFIX_FIELDS[EMAIL],
    isLink: true,
  },
  [SKYPE]: {
    getLink: value => `skype:${value}?chat`,
    Prefix: PREFIX_FIELDS[SKYPE],
    isLink: true,
  },
  [FACEBOOK]: {
    getLink: userId => `https://www.facebook.com/${userId}`,
    Prefix: PREFIX_FIELDS[FACEBOOK],
    isLink: true,
  },
  [TELEGRAM]: {
    getLink: userName => `https://t.me/${userName}`,
    Prefix: PREFIX_FIELDS[TELEGRAM],
    isLink: true,
  },
  [WEBSITE]: {
    getLink: identity,
    Prefix: PREFIX_FIELDS[WEBSITE],
    isLink: true,
  },
}

export default ({
  contact: {
    id,
    ...contact
  },
  handleEdit,
  handleDelete,
  setViewContact,
}) => {
  const handleEditContact = useCallback(() => {
    handleEdit(id)
  }, [id, handleEdit])

  const handleDeleteContact = useCallback(() => {
    handleDelete(id)
  }, [id, handleDelete])

  useEffect(() => () => {
    setViewContact(null)
  }, [setViewContact])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <Descriptions
        size="small"
        column={1}
        colon={false}
      >
        {map(contact, (data, type) => {
          const {
            Prefix,
            isLink,
            getLink,
            getContent,
          } = CONTACT[type]

          return (
            <Descriptions.Item
              key={type}
              label={<Prefix />}
            >
              {isLink
                ? (
                  <a
                    href={getLink(data)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data}
                  </a>
                )
                : getContent(data)
              }
            </Descriptions.Item>
          )
        })}
      </Descriptions>

      <Space style={{ width: '100%' }}>
        <Button
          onClick={handleEditContact}
          type="primary"
        >
          Edit contact
        </Button>

        <Button
          onClick={handleDeleteContact}
          danger
        >
          Delete contact
        </Button>
      </Space>
    </Space>
  )
}
