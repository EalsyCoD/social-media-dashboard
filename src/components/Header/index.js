import React from 'react'

import { Container, Wrapper, Title, Label} from './styles'
import Switch from '../Switch'



const Header = ({ toggleTheme }) => {
    return (
        <Container >
          <Wrapper >
            <Title>Social Media Dashboard</Title>
            <Label>Total Followers: 23,004</Label>
            <Switch toggleTheme={toggleTheme}/>
           </Wrapper>
         </Container>
    )
}


export default Header