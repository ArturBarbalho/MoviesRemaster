import * as S from './styles'
type props = {
genres: string[]
size:'banner'|'details'|'bigger'
}
const Genres = ({genres,size}:props) => (

  <S.Wrapper size={size}>
    {genres.map((e)=>{
    return(
    <S.Genre size={size}
    key={e}>
      {e}
    </S.Genre>
    )})} 

  </S.Wrapper>
)

export default Genres