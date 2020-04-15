import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'

import { TYPES } from './index'


const browser = {
  name: 'Browser',
  type: TYPES.BROWSER,
  disabled: isNil(navigator.appName) && isNil(navigator.appVersion),
}

const language = {
  name: 'Language',
  type: TYPES.LANGUAGE,
  disabled: isNil(navigator.language),
}

const operatingSystem = {
  name: 'Operating system',
  type: TYPES.OPERATING_SYSTEM,
  disabled: isNil(navigator.platform),
}

const screenResolution = {
  name: 'Screen resolution',
  type: TYPES.SCREEN_RESOLUTION,
  disabled: isNil(window.screen),
}

const enabledJava = {
  name: 'Enabled JAVA',
  type: TYPES.JAVA,
  disabled: !isFunction(navigator.javaEnabled)
}

const enabledCookie = {
  name: 'Enabled cookie',
  type: TYPES.COOKIE,
  disabled: isNil(navigator.cookieEnabled)
}

const timezone = {
  name: 'Timezone',
  type: TYPES.TIMEZONE,
  disabled: isNil(Intl),
}

export default [
  browser,
  language,
  operatingSystem,
  screenResolution,
  enabledJava,
  enabledCookie,
  timezone,
]
