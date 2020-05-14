import React, { useCallback, useEffect, useState } from 'react'

import {
  majorScale,
  Pane,
  TextInputField,
  Button,
} from 'evergreen-ui'

import {
  PHONE,
  EMAIL,
  SKYPE,
  FACEBOOK,
  TELEGRAM,
  WEBSITE,
} from '../../common/constants';


const MAX_LENGTH_INPUT = 30
const MAX_LENGTH_PHONE_NUMBER = 16

const defaultValues = {
  name: '',
  whoIs: '',
  [PHONE]: '',
  [EMAIL]: '',
  [SKYPE]: '',
  [FACEBOOK]: '',
  [TELEGRAM]: '',
  [WEBSITE]: '',
}

const getValue = evt => evt.target.value

export default ({
  currentContact: {
    id = defaultValues.id,
    name = defaultValues.name,
    whoIs = defaultValues.whoIs,
    PHONE: phone = defaultValues[PHONE],
    EMAIL: email = defaultValues[EMAIL],
    SKYPE: skype = defaultValues[SKYPE],
    FACEBOOK: facebook = defaultValues[FACEBOOK],
    TELEGRAM: telegram = defaultValues[TELEGRAM],
    WEBSITE: website = defaultValues[WEBSITE],
  } = defaultValues,
  handleChangeContact,
  handleSubmit: handleSubmitCallback,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleChangeName = useCallback((evt) => {
    handleChangeContact('name', getValue(evt))
  }, [handleChangeContact])

  const handleChangeWhoIs = useCallback((evt) => {
    handleChangeContact('whoIs', getValue(evt))
  }, [handleChangeContact])

  const handleChangePhone = useCallback((evt) => {
    handleChangeContact(PHONE, getValue(evt))
  }, [handleChangeContact])

  const handleChangeEmail = useCallback((evt) => {
    handleChangeContact(EMAIL, getValue(evt))
  }, [handleChangeContact])

  const handleChangeSkype = useCallback((evt) => {
    handleChangeContact(SKYPE, getValue(evt))
  }, [handleChangeContact])

  const handleChangeFacebook = useCallback((evt) => {
    handleChangeContact(FACEBOOK, getValue(evt))
  }, [handleChangeContact])

  const handleChangeTelegram = useCallback((evt) => {
    handleChangeContact(TELEGRAM, getValue(evt))
  }, [handleChangeContact])

  const handleChangeWebsite = useCallback((evt) => {
    handleChangeContact(WEBSITE, getValue(evt))
  }, [handleChangeContact])

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    handleSubmitCallback()
  }, [handleSubmitCallback])

  const handleCancel = useCallback(() => {
    handleChangeContact(null)
  }, [handleChangeContact])

  useEffect(() => {
    setIsEditing(!!id)
  }, [id])

  return (
    <Pane marginBottom={majorScale(2)}>
      <form onSubmit={handleSubmit}>
        <TextInputField
          value={name}
          onChange={handleChangeName}
          width="100%"
          marginBottom={majorScale(1)}
          label="Name"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
          required
        />

        <TextInputField
          value={whoIs}
          onChange={handleChangeWhoIs}
          width="100%"
          marginBottom={majorScale(1)}
          label="Who is"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
        />

        <TextInputField
          value={phone}
          onChange={handleChangePhone}
          width="100%"
          marginBottom={majorScale(1)}
          label="Phone number"
          hint={`Max length is ${MAX_LENGTH_PHONE_NUMBER}`}
          maxLength={MAX_LENGTH_PHONE_NUMBER}
          type="tel"
          pattern="^\+?[0-9]+[\( \.-]?[0-9]+[\) \.-]?[0-9]+[ \.-]?[0-9]+[ \.-]?[0-9]+$"
        />

        <TextInputField
          value={email}
          onChange={handleChangeEmail}
          width="100%"
          marginBottom={majorScale(1)}
          label="Email"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />

        <TextInputField
          value={skype}
          onChange={handleChangeSkype}
          width="100%"
          marginBottom={majorScale(1)}
          label="Skype (username)"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
        />

        <TextInputField
          value={facebook}
          onChange={handleChangeFacebook}
          width="100%"
          marginBottom={majorScale(1)}
          label="Facebook (id)"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
        />

        <TextInputField
          value={telegram}
          onChange={handleChangeTelegram}
          width="100%"
          marginBottom={majorScale(1)}
          label="Telegram (username)"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
        />

        <TextInputField
          value={website}
          onChange={handleChangeWebsite}
          width="100%"
          marginBottom={majorScale(1)}
          label="Website (URL)"
          hint={`Max length is ${MAX_LENGTH_INPUT}`}
          maxLength={MAX_LENGTH_INPUT}
          type="url"
          pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
        />

        <Pane
          display="flex"
        >
          <Button
            disabled={!name}
            type="submit"
            display="flex"
            justifyContent="center"
            width="100%"
            marginRight={majorScale(1)}
          >
            {isEditing ? 'Edit' : 'Add'} contact
          </Button>

          <Button
            onClick={handleCancel}
            disabled={!isEditing}
            type="button"
            display="flex"
            justifyContent="center"
            width="100%"
          >
            Cancel editing
          </Button>
        </Pane>
      </form>
    </Pane>
  )
}
