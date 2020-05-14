import React from 'react'

import map from 'lodash/map'
import identity from 'lodash/identity'

import {
  Icon,
  Link,
  ListItem,
  majorScale,
  Pane,
  Text,
} from 'evergreen-ui'

import {
  EMAIL,
  FACEBOOK,
  PHONE,
  SKYPE,
  TELEGRAM,
  WEBSITE,
} from '../common/constants'
import {
  IconEmail,
  IconFacebook,
  IconSkype,
  IconTelegram,
} from '../common/icons'


const ICON_SIZE = 16

const BaseIcon = ({ icon: Icon, ...props }) => (
  <Pane marginRight={majorScale(1)}>
    <Icon
      width={ICON_SIZE}
      height={ICON_SIZE}
      {...props}
    />
  </Pane>
)

const SOCIALS = {
  [PHONE]: {
    getLink: value => `tel:${value}`,
    Icon: () => <Icon icon="phone" marginRight={majorScale(1)} />,
  },
  [EMAIL]: {
    getLink: value => `mailto:${value}`,
    Icon: () => <BaseIcon icon={IconEmail} />,
  },
  [SKYPE]: {
    getLink: value => `skype:${value}?chat`,
    Icon: () => <BaseIcon icon={IconSkype} />,
  },
  [FACEBOOK]: {
    getLink: value => `facebook:${value}`,
    Icon: () => <BaseIcon icon={IconFacebook} />,
  },
  [TELEGRAM]: {
    getLink: value => `tg:${value}`,
    Icon: () => <BaseIcon icon={IconTelegram} />,
  },
  [WEBSITE]: {
    getLink: value => value,
    Icon: () => <Icon icon="link" marginRight={majorScale(1)} />
  },
  DEFAULT: {
    getLink: identity,
    Icon: () => null,
  }
}

const isFirstElement = index => index === 0
const isLastElement = (list, index) => index + 1 === list.length

export default ({
  index,
  id,
  contacts,
  name,
  whoIs,
  size,
  ...socials
}) => (
  <ListItem
    key={id}
    display="flex"
    flexDirection="column"
    marginY={0}
    paddingTop={majorScale(isFirstElement(index) ? 0 : 1)}
    paddingBottom={majorScale(isLastElement(contacts, index) ? 0 : 1)}
    borderTop={isFirstElement(index) ? '' : '1px solid'}
  >
    <Text size={400}>{name}</Text>
    <Text size={300}>{whoIs}</Text>
    {map(socials, (value, social) => {
      const { getLink, Icon } = SOCIALS[social] || SOCIALS.DEFAULT
      const link = getLink(value)

      return (
        <Pane
          key={social}
          display="flex"
        >
          <Icon />
          <Link
            key={social}
            href={link}
            target="_blank"
          >
            {value}
          </Link>
        </Pane>
      )
    })}
  </ListItem>
)
