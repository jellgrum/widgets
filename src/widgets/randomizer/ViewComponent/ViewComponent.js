import React, { useState, useCallback } from 'react'

import {
  Space,
  Typography,
  Button,
} from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

import { defaultSettings } from '../EditComponent/EditComponent';
import randomize from './randomize'


const INITIAL_TEXT = 'Click the "generate" button'

export default ({ settings = defaultSettings }) => {
  const [random, setRandom] = useState(INITIAL_TEXT)

  const handleRandomize = useCallback(() => {
    const newRandom = randomize(settings)

    setRandom(`${newRandom}`)
  }, [settings])

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
    >
      <Typography.Text copyable={random !== INITIAL_TEXT}>
        {random}
      </Typography.Text>

      <Button
        type="primary"
        icon={<ReloadOutlined />}
        onClick={handleRandomize}
      >
        generate
      </Button>
    </Space>
  )
}
