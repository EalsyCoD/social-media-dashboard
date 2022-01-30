import styled from 'styled-components'

export const Section = styled.section`
  & {
    display: grid;
    grid-row-gap: 25px;
    margin-top: -125px;
    padding: 0 35px 0 35px;
  }
  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const Article = styled.article.attrs((props) => ({
  socialNetwork: props.socialNetwork,
}))`
  & {
    position: relative;
    overflow: hidden;
    padding: 35px 0 35px 0;
    text-align: center;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.cardBackground}};
    cursor: pointer;
  }
  &:hover {
    background: ${(props) => props.theme.colors.cardHoverBackground}};
  }
  &::before {
    content: '';
    position: absolute;
    height: 5px;
    left: 0;
    right: 0;
    top: 0;
    background: var(--${(props) => props.socialNetwork});
  }
`

export const IconLabel = styled.p`
  & {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 13px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary}};;
  }
  
  & img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`

export const TotalLabel = styled.p`
  height: 80px;
  font-size: 65px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary}};
`

export const DescriptionLabel = styled.p`
  margin-bottom: 25px;  
  text-transform: uppercase;  
  letter-spacing: 6px;
  color: ${(props) => props.theme.colors.secondary}};
`

export const TodayLabel = styled.p.attrs((props) => ({
  color: props.color,
}))`
  & {
    color: var(--${(props) => props.color});
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & img {
    margin-right: 5px;
  }
`