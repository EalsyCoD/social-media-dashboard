import React from 'react'
import { useSelector } from 'react-redux'

import { Section } from './styles'

import Card from './Card'

const AccountsCardList = () => {
  const accounts = useSelector((state) => {
    return state.info.accounts
  })

  return (
    <Section>
      {accounts.map((account, i) => (
        <Card key={i} {...account} />
      ))}
    </Section>
  )
}

export default AccountsCardList