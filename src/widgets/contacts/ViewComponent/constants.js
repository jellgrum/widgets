/* eslint-disable no-useless-escape */
import {
  FacebookOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
  RocketOutlined,
  SkypeOutlined,
  UserOutlined
} from '@ant-design/icons'

import {
  NAME,
  DESCRIPTION,
  PHONE,
  EMAIL,
  SKYPE,
  FACEBOOK,
  TELEGRAM,
  WEBSITE,
} from '../common/constants'


export const MODE_LIST = 'LIST'
export const MODE_FORM = 'FORM'
export const MODE_VIEW = 'VIEW'

export const PREFIX_FIELDS = {
  [NAME]: UserOutlined,
  [DESCRIPTION]: InfoCircleOutlined,
  [PHONE]: PhoneOutlined,
  [EMAIL]: MailOutlined,
  [SKYPE]: SkypeOutlined,
  [FACEBOOK]: FacebookOutlined,
  [TELEGRAM]: RocketOutlined,
  [WEBSITE]: LinkOutlined,
}

const MAX_LENGTH_INPUT = 30

export const FIELD_PROPS = {
  [NAME]: {
    rules: {
      required: true,
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[NAME],
  },
  [DESCRIPTION]: {
    rules: {
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[DESCRIPTION],
  },
  [PHONE]: {
    rules: {
      type: 'tel',
      pattern: '^\+?[0-9]+[\( \.-]?[0-9]+[\) \.-]?[0-9]+[ \.-]?[0-9]+[ \.-]?[0-9]+$',
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[PHONE],
  },
  [EMAIL]: {
    rules: {
      type: 'email',
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$',
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[EMAIL],
  },
  [SKYPE]: {
    rules: {
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[SKYPE],
  },
  [FACEBOOK]: {
    rules: {
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[FACEBOOK],
  },
  [TELEGRAM]: {
    rules: {
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[TELEGRAM],
  },
  [WEBSITE]: {
    rules: {
      type: 'url',
      pattern: '^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?',
      max: MAX_LENGTH_INPUT,
    },
    Prefix: PREFIX_FIELDS[WEBSITE],
  },
}
