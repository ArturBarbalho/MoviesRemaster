import Card from '../Card'
import * as S from './styles'
import { CardProps } from '../../typesProps/index';
type props = {
  props : CardProps[]
}
const List = ({props}:props) => (
  <S.Wrapper>
    {props.map((e,i)=>{
      return <Card key={i} props={e} />
    })}
  </S.Wrapper>
)

export default List