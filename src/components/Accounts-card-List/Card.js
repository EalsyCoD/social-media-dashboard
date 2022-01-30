import React from 'react'

import {
  Article,
  IconLabel,
  TotalLabel,
  DescriptionLabel,
  TodayLabel,
} from './styles'

const Card = ({
  username,
  socialNetwork,
  icon,
  total,
  description,
  totalToday,
}) => {
  return (
    <Article socialNetwork={socialNetwork}>
      <IconLabel>
        <img src={icon.url} alt={icon.name} />
        {username}
      </IconLabel>
      <TotalLabel>{total > 9999 ? `${total / 1000}k` : total} </TotalLabel>
      <DescriptionLabel>{description}</DescriptionLabel>

      <TodayLabel color={totalToday > 0 ? 'LimeGreen' : 'BrightRed'}>
        <img
          src={totalToday > 0 ? 'images/icon-up.svg' : 'images/icon-down.svg'}
          alt="icon"
        />
        {Math.abs(totalToday)} Today
      </TodayLabel>
    </Article>
  )
}

export default Card