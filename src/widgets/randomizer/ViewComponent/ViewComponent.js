import React, { useState, useCallback } from 'react'

import {
  majorScale,
  Pane,
  Code,
  Button,
} from 'evergreen-ui'

import hasApiCopying from './permissions'
import randomize from './randomize'


const INITIAL_TEXT = 'Click the "generate" button'

export default ({ settings }) => {
  const [random, setRandom] = useState(INITIAL_TEXT)
  const [canCopy, setCanCopy] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleRandomize = useCallback(() => {
    const newRandom = randomize(settings)

    setRandom(`${newRandom}`)
    setIsCopied(false)
    setCanCopy(true)
  }, [settings])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(random)
    setIsCopied(true)
  }, [random])

  return (
    <>
      <Pane
        display="flex"
        marginBottom={majorScale(1)}
      >
        <Code
          size={500}
          width="100%"
          wordBreak="break-all"
          textAlign="center"
        >
          {random}
        </Code>
      </Pane>

      <Pane display="flex">
        <Button
          width={hasApiCopying ? '50%' : '100%'}
          marginRight={majorScale(1)}
          onClick={handleRandomize}
          iconBefore="refresh"
        >
          generate
        </Button>

        {hasApiCopying && (
          <Button
            width="50%"
            onClick={handleCopy}
            iconBefore="add"
            disabled={!canCopy || !hasApiCopying}
          >
            copy {isCopied && '(copied to clipboard)'}
          </Button>
        )}
      </Pane>
    </>
  )
}
