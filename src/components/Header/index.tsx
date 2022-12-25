import Link from 'next/link'
import * as S from './styles'


const Header = () => {
  
  
return(
  <S.Wrapper>
     <S.Logo>
      <img src="movie-frame.png" alt="" />
      <h3>FREEPOP</h3>
    </S.Logo>    

     <S.DivLinks>
    <Link href='/'><a>MOVIES</a></Link>   
    <Link href='/tv'><a>TV SHOWS</a></Link>
     </S.DivLinks>
       
  </S.Wrapper>
)}

export default Header