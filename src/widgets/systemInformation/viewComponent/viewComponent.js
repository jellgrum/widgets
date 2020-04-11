import React, { useEffect, useState } from 'react'

import map from 'lodash/map'

import { List } from 'semantic-ui-react'
import 'semantic-ui-css/components/list.css'

import contents from './contents'


export default ({ items }) => {
  const [contentList, setContentList] = useState(items)

  useEffect(() => {
    const newContentList = map(items, ({ name, type }) => ({
      name,
      content: contents[type],
    }))

    setContentList(newContentList)
  }, [items])

  return (
    <List>
      {map(contentList, ({ name, content }, index) => (
        <List.Item key={index}>
          <List.Content floated='right'>
            {content}
          </List.Content>
          <List.Content>{name}</List.Content>
        </List.Item>
      ))}
    </List>
  )
}
