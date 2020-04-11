import replace from 'lodash/replace';

import { TYPES } from '../common';


export default {
  [TYPES.LANGUAGE]: replace(navigator.language, /-.*$/, ''),
  [TYPES.PLATFORM]: navigator.platform,
  [TYPES.SCREEN_SIZE]: `${window.screen.width}x${window.screen.height}`,
}
