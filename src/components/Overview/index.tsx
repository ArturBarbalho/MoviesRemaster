import * as S from './styles'
type props = {
  overview:string,
  size:'small'|'medium'|'large'
}
const Overview = ({overview,size}:props) => (
  <S.Wrapper size={size} >{overview}</S.Wrapper>
)

export default Overview