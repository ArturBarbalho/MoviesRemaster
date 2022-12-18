import * as S from './styles'

type props = {
  children:React.ReactNode
  size:'large'|'medium'
}

const Title = ({children, size}:props) => (
  <S.Wrapper size={size}> {children} </S.Wrapper>
)

export default Title