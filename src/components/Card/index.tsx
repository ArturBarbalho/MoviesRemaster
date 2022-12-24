import { Functions } from '../../getdata'
import { CardProps } from '../../typesProps'
import Image from '../Image'
import * as S from './styles'
import { useRouter } from 'next/router';
type props = {props: CardProps}
 
const Card = ({props}:props) =>{
 const router = useRouter()
 const path = Functions.RouterPath(props.title,props.id,props.media)
return (
  <S.Wrapper>
    <S.Over data-testid={'over'} onClick={()=>router.push(path)} />
    <Image size='small' src={props.src} />
  </S.Wrapper>
)
}
export default Card

