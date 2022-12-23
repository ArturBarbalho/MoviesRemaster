import { Functions } from '../../getdata'
import { CardProps } from '../../typesProps'
import Image from '../Image'
import * as S from './styles'
type props = {props: CardProps}
const Card = ({props}:props) => (
  <S.Wrapper>
    <S.Over data-testid={'over'} onClick={()=>Functions.Details(props.title,props.id,props.media)} />
    <Image size='small' src={props.src} />
  </S.Wrapper>
)

export default Card

