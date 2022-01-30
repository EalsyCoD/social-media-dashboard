import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Container, TextLabel, Label, Input, Span } from './styles'

const Switch = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <TextLabel>Dark Mode</TextLabel>
      <Label>
        <Input
          type="checkbox"
          checked={title === 'light'}
          onChange={toggleTheme}
        />
        <Span />
      </Label>
    </Container>
  )
}

export default Switch