import Button from '../Button'
import Genres from '../Genres'
import Image from '../Image'
import Overview from '../Overview'
import * as S from './styles'
import {Functions} from '../../getdata/index'
import { bigbannerProps } from '../../typesProps'
import { useRouter } from 'next/router'

type props = {
  props:bigbannerProps
}

const BiggerBanner = ({props}:props) =>{
 const router = useRouter()
 const path = Functions.RouterPath(props.title,props.id,props.media)

return (
  <S.Wrapper>
    <Image src={props.bigsrc} size='larger' />
    <S.Cont data-testid='cont'>  
        <Image size='medium' src={props.smallsrc} />  
        <div>               
        <Genres genres={props.genres} size='bigger' /> 
        <Overview size='medium' overview={props.overview}/>
        <S.ButtonDiv>
        <Button onClick={()=>router.push(path)} color='gray'/> 
        </S.ButtonDiv>                         
        </div>                                                   
    </S.Cont>
  </S.Wrapper>
)
}
export default BiggerBanner