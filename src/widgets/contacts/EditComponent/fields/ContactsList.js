import React from 'react'

import map from 'lodash/map'

import {
  IconButton,
  ListItem,
  majorScale,
  OrderedList,
  Pane,
  Text,
} from 'evergreen-ui'


const isLastElement = (list, index) => index + 1 === list.length

export default ({
  contacts,
  handleEdit,
  handleDelete,
}) => (
  <OrderedList marginLeft={0}>
    {map(contacts, ({ id, name, whoIs }, index) => (
      <ListItem
        key={id}
        display="flex"
        justifyContent="space-between"
        marginY={0}
        paddingTop={majorScale(1)}
        paddingBottom={majorScale(isLastElement(contacts, index) ? 0 : 1)}
        borderTop={'1px solid'}
      >
        <Pane
          display="flex"
          flexDirection="column"
        >
          <Text size={400}>{name}</Text>
          <Text size={300}>{whoIs}</Text>
        </Pane>

        <Pane display="flex">
          <IconButton
            icon="edit"
            marginRight={majorScale(1)}
            onClick={() => handleEdit(id)}
          />
          <IconButton
            icon="trash"
            onClick={() => handleDelete(id)}
          />
        </Pane>
      </ListItem>
    ))}
  </OrderedList>
)
