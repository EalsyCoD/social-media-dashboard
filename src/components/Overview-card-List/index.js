import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Title, Section } from './styles'


import Card from './Card'


const OverviewCardList = () => {
    const overview = useSelector((state) => {
      return state.info.overview
    })

return (
    <Container>
        <Title>Overview - Today</Title>
        <Section>
        {overview.map((card, i) => (
             <Card key={i} {...card} />
        ))}
         </Section>
    </Container>
    )
}

export default OverviewCardList