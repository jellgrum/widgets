import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

import forEach from  'lodash/forEach'

import { Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { registry, widgets } from './widgets'


forEach(widgets, (widget) => {
  registry.put(widget)
})

const { ViewComponent, EditComponent } = registry.get('SYSTEM_INFORMATION')

const App = () => {
  const [viewItems, setViewItems] = useState([])
  const handleChange = useCallback(setViewItems, [])

  return (
    <Segment.Group horizontal>
      <Segment>
        <EditComponent onChange={handleChange} />
      </Segment>

      <Segment>
        <ViewComponent items={viewItems} />
      </Segment>
    </Segment.Group>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
