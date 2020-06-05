import React from 'react'

import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'

import { Empty, List } from 'antd'

import { items } from '../common'
import contents from './contents'


const ViewComponent = ({ types }) => (
  <List
    dataSource={types}
    renderItem={type => {
      const { name } = find(items, ['type', type])

      return (
        <List.Item>
          <List.Item.Meta title={name} />
          <div>{contents[type]}</div>
        </List.Item>
      )
    }}
  />
)

export default ({ types }) => isEmpty(types)
  ? <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No system information"
    />
  : <ViewComponent types={types} />
