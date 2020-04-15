import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

import forEach from  'lodash/forEach'

import { Pane, Card, majorScale } from 'evergreen-ui'

import { registry, widgets } from './widgets'


forEach(widgets, (widget) => {
  registry.put(widget)
})

const rowCellStyles = {
  width: '50%',
  padding: majorScale(1),
  margin: majorScale(1),
  background: 'tint2',
}

const RowWrapper = ({ children }) => {
  const [EditComponent, ViewComponent] = children

  return (
    <Pane display="flex">
      <Card {...rowCellStyles}>
        {EditComponent}
      </Card>

      <Card  {...rowCellStyles}>
        {ViewComponent}
      </Card>
    </Pane>
  )
}

const { ViewComponent, EditComponent } = registry.get('SYSTEM_INFORMATION')
const RowSysInfo = () => {
  const [types, setTypes] = useState(['JAVA', 'COOKIE'])
  const handleChange = useCallback(setTypes, [types])

  return (
    <RowWrapper>
      {[
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

const App = () => {
  return (
    <Pane padding={majorScale(2)}>
      <RowSysInfo />
    </Pane>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
