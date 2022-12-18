import * as S from './styles'
type props = {
  src:string
  size:'small'|'medium'|'large'|'larger'
}
const Image = ({src, size}:props) => (
  <S.Wrapper size={size} src={src} />
    
 
)

export default Image