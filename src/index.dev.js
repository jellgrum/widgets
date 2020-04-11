import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

import forEach from  'lodash/forEach'

import { Grid, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { registry, widgets } from './widgets'


forEach(widgets, (widget) => {
  registry.put(widget)
})

const RowWrapper = ({ children }) => {
  const [EditComponent, ViewComponent] = children

  return (
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
          {EditComponent}
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          {ViewComponent}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

const { ViewComponent, EditComponent } = registry.get('SYSTEM_INFORMATION')
const RowSysInfo = () => {
  const [viewItems, setViewItems] = useState([])
  const handleChange = useCallback(setViewItems, [])

  return (
    <RowWrapper>
      {[
        <EditComponent onChange={handleChange} />,
        <ViewComponent items={viewItems} />
      ]}
    </RowWrapper>
  )
}

const App = () => {
  return (
    <Grid
      columns={2}
      divided='vertically'
    >
      <RowSysInfo />
    </Grid>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
