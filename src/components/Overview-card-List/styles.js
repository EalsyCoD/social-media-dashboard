import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 35px 100px 35px;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  padding: 0 0 35px 0;
`
export const Section = styled.section`
  & {
    display: grid;
    grid-row-gap: 25px;
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

export const Article = styled.article`
  & {
    padding: 35px 30px 0 30px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.cardBackground}};
    cursor: pointer;
  }
  &:hover {
    background: ${(props) => props.theme.colors.cardHoverBackground}};
  }
`
export const IconLabel = styled.p`
  & {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 13px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary}};
  }
  
  & img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 35px;
`
export const TotalLabel = styled.span`
  height: 45px;
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary}};
`
export const TotalTodayLabel = styled.p.attrs((props) => ({
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