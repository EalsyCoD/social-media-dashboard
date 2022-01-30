import React from 'react'


import {
Article,
IconLabel,
TotalContainer,
TotalTodayLabel,
TotalLabel,
  } from './styles'



const Card = ({description, icon, total, totalToday}) => {
return(
    <Article>
        <IconLabel>
            {description}
            <img src={icon.url} alt={icon.name} />
        </IconLabel>


        <TotalContainer>
            <TotalLabel>{total > 9999 ? `${total / 1000}k` : total }</TotalLabel>
            <TotalTodayLabel color={totalToday > 0 ? 'LimeGreen' : 'BrightRed'}>
                <img src ={totalToday > 0 ? 'images/icon-up.svg' : 'images/icon-down.svg'}
                alt="icon" />
                {Math.abs(totalToday)} %
                </TotalTodayLabel>
        </TotalContainer>
    </Article>
)
}

export default Card 