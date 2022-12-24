import { reviewsProps } from '../../typesProps'
import * as S from './styles'
type props = {
  props:reviewsProps[]
}
const Reviews = ({props}:props) => (
  <S.Wrapper>
    {props.map((e,i)=>{
      return(
        <S.Unit key={i}>
        <S.Img  onError={({ currentTarget }) => {
        currentTarget.src='/user.png'}} src={e.src}/> 
        <S.Right>
        <h2>{e.name}</h2>
        <p>{e.content}</p>
      </S.Right>
      </S.Unit>
      )
    })}
  </S.Wrapper>
)

export default Reviews