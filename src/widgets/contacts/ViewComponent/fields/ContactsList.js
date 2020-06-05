import React, { useCallback, useEffect, useState } from 'react'

import intersection from 'lodash/intersection'
import startsWith from 'lodash/startsWith'
import isEmpty from 'lodash/isEmpty'
import toLower from 'lodash/toLower'
import filter from 'lodash/filter'
import join from 'lodash/join'
import some from 'lodash/some'

import {
  Tooltip,
  Button,
  Space,
  Empty,
  Input,
  List,
} from 'antd'
import {
  InfoCircleOutlined,
  SearchOutlined,
  EyeOutlined,
} from '@ant-design/icons'

import { defaultSettings } from '../../common/settings'


const ContactsList = ({
  contacts: allContacts,
  handleView,
  searchSettings: {
    isShown: isSearchShown,
    isCaseSensitive: isSearchCaseSensitive,
    fields: searchFields,
  } = defaultSettings.search,
}) => {
  const [contacts, updateContacts] = useState(allContacts)
  const [searchValue, setSearchValue] = useState('')

  const handleFilterContacts = useCallback((evt) => {
    const { value } = evt.target
    const filteredContacts = filter(allContacts, contactFields => {
      const availableFields = intersection(searchFields, Object.keys(contactFields))

      return some(availableFields, availableField => {
        const content = contactFields[availableField]
        const string = isSearchCaseSensitive ? content : toLower(content)
        const target = isSearchCaseSensitive ? value : toLower(value)

        return startsWith(string, target)
      })
    })

    updateContacts(filteredContacts)
    setSearchValue(value)
  }, [allContacts, isSearchCaseSensitive, searchFields])

  useEffect(() => {
    if (!isSearchShown) {
      setSearchValue('')
      updateContacts(allContacts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchShown])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      {isSearchShown && (
        <Space
          direction="vertical"
          style={{ width: '100%' }}
        >
          <label htmlFor="search-input">Search</label>
          <Input
            id="search-input"
            onChange={handleFilterContacts}
            value={searchValue}
            prefix={<SearchOutlined />}
            suffix={
              <Tooltip title={`Search by ${join(searchFields, ', ')}`}>
                <InfoCircleOutlined />
              </Tooltip>
            }
          />
        </Space>
      )}

      <List
        dataSource={contacts}
        renderItem={({ id, name, description }) => (
          <List.Item actions={[
            <Tooltip title="View contact">
              <Button
                key="view-contact"
                shape="circle"
                icon={<EyeOutlined />}
                onClick={() => handleView(id)}
              />
            </Tooltip>,
          ]}>
            <List.Item.Meta
              title={name}
              description={description}
            />
          </List.Item>
        )}
      />
    </Space>
  )
}

export default props => isEmpty(props.contacts)
  ? <Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}
    description="No contacts"
  />
  : <ContactsList {...props} />
