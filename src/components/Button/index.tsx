import { MouseEventHandler } from 'react'
import * as S from './styles'
type props = {
  onClick:MouseEventHandler<HTMLButtonElement>
  color:'gray'|'black'
}
const Button = ({onClick, color}:props) => (
  <S.Wrapper color={color} onClick={onClick} >
   See more
  </S.Wrapper>
)

export default Button