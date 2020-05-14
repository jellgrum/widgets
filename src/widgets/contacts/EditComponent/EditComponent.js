import React, { useCallback, useState } from 'react'

import noop from 'lodash/noop'
import filter from 'lodash/filter'
import find from 'lodash/find'
import map from 'lodash/map'
import isNull from 'lodash/isNull'
import reduce from 'lodash/reduce'
import isEmpty from 'lodash/isEmpty'
import trim from 'lodash/trim'

import {
  Form,
  ContactsList,
} from './fields'


const getUniqueId = () => `contact_${+new Date()}`

export default ({
  onChange = noop,
  initialValues = [],
}) => {
  const [contacts, updateContacts] = useState(initialValues)
  const [currentContact, updateCurrentContact] = useState(undefined)

  const handleUpdateCurrentContact = useCallback((name, value) => {
    updateCurrentContact(isNull(name) ? undefined : { ...currentContact, [name]: value })
  }, [currentContact])

  const handleEdit = useCallback((id) => {
    const foundContact = find(contacts, ['id', id])

    updateCurrentContact(foundContact)
  }, [currentContact, contacts])

  const handleDelete = useCallback((id) => {
    const newContacts = filter(contacts, contact => contact.id !== id)

    updateContacts(newContacts)
    onChange(newContacts)
  }, [contacts, onChange])

  const handleSubmit = useCallback(() => {
    const updatedCurrentContact = reduce(currentContact, (memo, value, name) => {
      if (!isEmpty(trim(value))) {
        memo[name] = value
      }
      return memo
    }, {})
    let newContacts

    if (updatedCurrentContact.id) {
      newContacts = map(contacts, contact => contact.id === updatedCurrentContact.id
        ? updatedCurrentContact
        : contact)
    } else {
      newContacts = [...contacts, {
        ...updatedCurrentContact,
        id: getUniqueId(),
      }]
    }

    onChange(newContacts)
    updateContacts(newContacts)
    updateCurrentContact(undefined)
  }, [onChange, contacts, currentContact])

  return (
    <>
      <Form
        currentContact={currentContact}
        handleChangeContact={handleUpdateCurrentContact}
        handleSubmit={handleSubmit}
      />

      <ContactsList
        contacts={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}
