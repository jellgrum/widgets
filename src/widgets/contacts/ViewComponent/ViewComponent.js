import React, { useState, useCallback } from 'react'

import isNull from 'lodash/isNull'
import filter from 'lodash/filter'
import map from 'lodash/map'
import find from 'lodash/find'

import { Space } from 'antd'

import { defaultSettings } from '../common/settings'
import {
  MODE_FORM,
  MODE_LIST,
  MODE_VIEW,
} from './constants'
import {
  Menu,
  Form,
  ContactsList,
  ContactView,
} from './fields'


const getUniqueId = () => `contact_${+new Date()}`

export default ({
  settings = defaultSettings,
  extraContacts = [],
}) => {
  const [mode, setMode] = useState(MODE_LIST)
  const [contacts, updateContacts] = useState(extraContacts)
  const [currentContact, updateCurrentContact] = useState({})
  const [viewContact, setViewContact] = useState(null)

  const handleView = useCallback((id) => {
    const contact = find(contacts, ['id', id])

    setViewContact(contact)
    setMode(MODE_VIEW)
  }, [contacts])

  const handleUpdateCurrentContact = useCallback((name, value) => {
    updateCurrentContact(isNull(name) ? {} : { ...currentContact, [name]: value })
  }, [currentContact])

  const handleSubmit = useCallback(() => {
    let newContacts

    if (currentContact.id) {
      newContacts = map(contacts, contact => contact.id === currentContact.id
        ? currentContact
        : contact)
    } else {
      newContacts = [...contacts, {
        ...currentContact,
        id: getUniqueId(),
      }]
    }

    updateContacts(newContacts)
    handleUpdateCurrentContact(null)
  }, [contacts, currentContact, handleUpdateCurrentContact])

  const handleEdit = useCallback((id) => {
    const contact = find(contacts, ['id', id])

    updateCurrentContact(contact)
    setMode(MODE_FORM)
  }, [contacts])

  const handleDelete = useCallback((id) => {
    const newContacts = filter(contacts, contact => contact.id !== id)

    updateContacts(newContacts)
    setMode(MODE_LIST)
  }, [contacts])

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ width: '100%' }}
    >
      <Menu
        setMode={setMode}
        mode={mode}
        updateCurrentContact={handleUpdateCurrentContact}
      />
      {mode === MODE_FORM && (
        <Form
          currentContact={currentContact}
          handleChangeContact={handleUpdateCurrentContact}
          handleSubmit={handleSubmit}
          visibleFields={settings.formFields}
          setMode={setMode}
        />
      )}
      {mode === MODE_LIST && (
        <ContactsList
          handleView={handleView}
          contacts={contacts}
          searchSettings={settings.search}
        />
      )}
      {mode === MODE_VIEW && (
        <ContactView
          contact={viewContact}
          setViewContact={setViewContact}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </Space>
  )
}
