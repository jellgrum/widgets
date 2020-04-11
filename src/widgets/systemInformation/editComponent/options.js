import { TYPES, hasApi } from '../common'


const platform = {
  name: 'Platform',
  type: TYPES.PLATFORM,
  disabled: !hasApi.hasPlatform,
}

const language = {
  name: 'Language',
  type: TYPES.LANGUAGE,
  disabled: !hasApi.hasLanguage,
}

const screenSize = {
  name: 'Screen size',
  type: TYPES.SCREEN_SIZE,
  disabled: !hasApi.hasScreen,
}

export default [
  platform,
  language,
  screenSize,
]
