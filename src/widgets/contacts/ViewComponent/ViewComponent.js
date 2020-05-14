import React from 'react'

import map from 'lodash/map'

import { OrderedList } from 'evergreen-ui'

import Contact from './Contact'


export default ({ contacts }) => (
  <OrderedList marginLeft={0}>
    {map(contacts, (contact, index) => (
      <Contact
        {...contact}
        key={index}
        contacts={contacts}
        index={index}
      />
    ))}
  </OrderedList>
)
