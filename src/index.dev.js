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
  const { ViewComponent, EditComponent } = registry.get('SYSTEM_INFORMATION')
  const [types, setTypes] = useState(['JAVA', 'COOKIE'])

  const handleChange = useCallback(setTypes, [types])

  return (
    <RowWrapper>
      {[
        'SYSTEM_INFORMATION',
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
  const { ViewComponent, EditComponent } = registry.get('RANDOMIZER')
  const [settings, updateSettings] = useState()

  const handleChange = useCallback(updateSettings, [settings])

  return (
    <RowWrapper>
      {[
        'RANDOMIZER',
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

const App = () => {
  return (
    <Pane paddingX={majorScale(2)}>
      <RowSysInfo />
      <RowRandomizer />
    </Pane>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
