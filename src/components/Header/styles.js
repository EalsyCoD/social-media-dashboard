import styled from 'styled-components'


export const Container = styled.header`
& {
  background: ${(props) => props.theme.colors.topBackgroun};
  border-radius: 0 0 20px 20px;
  padding: 40px 35px 150px 35px;
}
@media (min-width: 768px) {
  display: grid;
  grid-template-columns: 1fr 150px;
}
`

export const Wrapper = styled.div`

`



export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`

export const Label = styled.p`
& {
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.7px;
  border-bottom: 0.6px solid ${(props) => props.theme.colors.secondary};
  padding-bottom: 24px;
}
@media (min-width: 768px) {
  border-bottom: none !important;
  padding-bottom: 0 !important;
}
`