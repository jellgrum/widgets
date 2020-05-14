import React from 'react'

import map from 'lodash/map'
import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'

import { Table, Heading } from 'evergreen-ui'

import { items } from '../common'
import contents from './contents'


const EMPTY_TEXT = <Heading>Not selected system information</Heading>

const ViewComponent = ({ types }) => map(types, (type, index) => {
  const item = find(items, ['type', type])

  return (
    <Table.Row key={index}>
      <Table.TextCell>
        {item.name}
      </Table.TextCell>

      <Table.TextCell textAlign="right">
        {contents[type]}
      </Table.TextCell>
    </Table.Row>
  )
})

export default ({ types }) => isEmpty(types) ? EMPTY_TEXT : <ViewComponent types={types} />
