import forEach from 'lodash/forEach';

import widgets from './widgets'
import registry from './registry'


forEach(widgets, (widget) => {
  registry.put(widget)
})

export default widgets

export { registry }
