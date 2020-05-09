import isFunction from 'lodash/isFunction'
import get from 'lodash/get'


const hasPermissionCopy = navigator.permissions.query({ name: 'clipboard-write' })
  .then(({ state }) => state === 'granted')

const hasFunctionCopy = isFunction(get(navigator, 'clipboard.writeText'))

const hasApiCopying = hasPermissionCopy && hasFunctionCopy

export default hasApiCopying
