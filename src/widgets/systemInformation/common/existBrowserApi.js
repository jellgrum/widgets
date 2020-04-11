export const hasLanguage = 'language' in window.navigator
export const hasPlatform = 'platform' in window.navigator
export const hasScreen = 'screen' in window

export default hasLanguage &&
  hasPlatform &&
  hasScreen
