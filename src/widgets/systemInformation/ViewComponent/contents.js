import { TYPES } from '../common'


const ENABLED = 'Enabled'
const DISABLED = 'Disabled'
const getBoolStatus = status => status ? ENABLED : DISABLED

const getBaseBrowserData = () => {
  let {
    userAgent,
    appName: browserName,
  } = navigator

  let fullVersion  = `${parseFloat(navigator.appVersion)}`
  let nameOffset, verOffset, ix

  if ((verOffset = userAgent.indexOf('Opera')) !== -1) {
    browserName = 'Opera'
    fullVersion = userAgent.substring(verOffset + 6)
    if ((verOffset = userAgent.indexOf('Version')) !== -1)
      fullVersion = userAgent.substring(verOffset + 8)
  }

  else if ((verOffset = userAgent.indexOf('MSIE')) !== -1) {
    browserName = 'Microsoft Internet Explorer'
    fullVersion = userAgent.substring(verOffset + 5)
  }

  else if ((verOffset = userAgent.indexOf('Chrome')) !== -1) {
    browserName = 'Chrome'
    fullVersion = userAgent.substring(verOffset + 7)
  }

  else if ((verOffset = userAgent.indexOf('Safari')) !== -1) {
    browserName = 'Safari'
    fullVersion = userAgent.substring(verOffset + 7)
    if ((verOffset = userAgent.indexOf('Version')) !== -1)
      fullVersion = userAgent.substring(verOffset + 8)
  }

  else if ((verOffset = userAgent.indexOf('Firefox')) !== -1) {
    browserName = 'Firefox'
    fullVersion = userAgent.substring(verOffset + 8)
  }

  else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) < (verOffset = userAgent.lastIndexOf('/'))) {
    browserName = userAgent.substring(nameOffset, verOffset)
    fullVersion = userAgent.substring(verOffset + 1)
    if (browserName.toLowerCase() === browserName.toUpperCase()) browserName = navigator.appName
  }

  if ((ix = fullVersion.indexOf(';')) !== -1) fullVersion = fullVersion.substring(0,ix)
  if ((ix = fullVersion.indexOf(' ')) !== -1) fullVersion = fullVersion.substring(0,ix)

  return `${browserName} ${fullVersion}`
}

const getOperatingSystem = () => {
  let nameOS ='Unknown OSs'
  if (navigator.appVersion.indexOf('Win') !== -1) nameOS ='Windows'
  if (navigator.appVersion.indexOf('Mac') !== -1) nameOS ='MacOS'
  if (navigator.appVersion.indexOf('X11') !== -1) nameOS ='UNIX'
  if (navigator.appVersion.indexOf('Linux') !== -1) nameOS ='Linux'

  return nameOS
}

export default {
  [TYPES.BROWSER]: getBaseBrowserData(),
  [TYPES.LANGUAGE]: navigator.language,
  [TYPES.OPERATING_SYSTEM]: getOperatingSystem(),
  [TYPES.SCREEN_RESOLUTION]: `${window.screen.width}x${window.screen.height}`,
  [TYPES.JAVA]: getBoolStatus(navigator.javaEnabled()),
  [TYPES.COOKIE]: getBoolStatus(navigator.cookieEnabled),
  [TYPES.TIMEZONE]: Intl.DateTimeFormat().resolvedOptions().timeZone,
  [TYPES.ONLINE]: navigator.onLine ? 'online' : 'offline',
}
