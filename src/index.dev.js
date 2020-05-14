import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

import {
  majorScale,
  Pane,
  Card,
  Heading,
} from 'evergreen-ui'

import { registry } from './widgets'


const rowCellStyles = {
  width: '50%',
  padding: majorScale(1),
  margin: majorScale(1),
  background: 'tint2',
}

const RowWrapper = ({ children }) => {
  const [title, EditComponent, ViewComponent] = children

  return (
    <Pane marginY={majorScale(3)}>
      <Heading textAlign="center">{title}</Heading>
      <Pane display="flex">
        <Card {...rowCellStyles}>
          {EditComponent}
        </Card>

        <Card  {...rowCellStyles}>
          {ViewComponent}
        </Card>
      </Pane>
    </Pane>
  )
}

const RowSysInfo = () => {
  const { ViewComponent, EditComponent, type } = registry.get('SYSTEM_INFORMATION')
  const [types, setTypes] = useState(['JAVA', 'COOKIE'])

  const handleChange = useCallback(setTypes, [types])

  return (
    <RowWrapper>
      {[
        type,
        <EditComponent
          key='sys-info-edit'
          onChange={handleChange}
          initialValues={types}
        />,
        <ViewComponent
          key='sys-info-view'
          types={types}
        />
      ]}
    </RowWrapper>
  )
}

const RowRandomizer = () => {
  const { ViewComponent, EditComponent, type } = registry.get('RANDOMIZER')
  const [settings, updateSettings] = useState()

  const handleChange = useCallback(updateSettings, [settings])

  return (
    <RowWrapper>
      {[
        type,
        <EditComponent
          key='randomizer-edit'
          onChange={handleChange}
          initialValues={settings}
        />,
        <ViewComponent
          key='randomizer-view'
          settings={settings}
        />
      ]}
    </RowWrapper>
  )
}

const RowContacts = () => {
  const { ViewComponent, EditComponent, type } = registry.get('CONTACTS')
  const [contacts, updateContacts] = useState(Array(3).fill(null).map((v, index) => ({
    id: `contact_${Math.random()}`,
    name: `name ${index}`,
    whoIs: `coder ${index}`,
    PHONE: '89142995066',
    EMAIL: 'ramazanovkamil@yandex.ru',
    SKYPE: 'kamil.ramazanov98',
    FACEBOOK: '13059243id',
    TELEGRAM: 'jellgrum',
    WEBSITE: 'https://jellgrum.dev',
  })))

  const handleChange = useCallback(updateContacts, [contacts])

  return (
    <RowWrapper>
      {[
        type,
        <EditComponent
          key='contacts-edit'
          onChange={handleChange}
          initialValues={contacts}
        />,
        <ViewComponent
          key='contacts-view'
          contacts={contacts}
        />
      ]}
    </RowWrapper>
  )
}

const App = () => {
  return (
    <Pane paddingX={majorScale(2)}>
      <RowSysInfo />
      <RowRandomizer />
      <RowContacts />
    </Pane>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
