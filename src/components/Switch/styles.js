import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`

export const TextLabel = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-align: right;
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`

export const Span = styled.span`
  & {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.bgToggle};
    transition: 1s;
  }
  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.background};
    transition: 0.4s;
  }
`

export const Input = styled.input`
  & {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &:checked + ${Span}:before {
    transform: translateX(22px);
  }
  &:checked + ${Span} {
    background-color: ${(props) => props.theme.colors.bgToggle};
  }
`