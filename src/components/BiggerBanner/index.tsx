import Button from '../Button'
import Genres from '../Genres'
import Image from '../Image'
import Overview from '../Overview'
import * as S from './styles'
import {Functions} from '../../getdata/index'
import { bigbannerProps } from '../../typesProps'

type props = {
  props:bigbannerProps
}

const BiggerBanner = ({props}:props) => (
  <S.Wrapper>
    <Image src={props.bigsrc} size='larger' />
    <S.Cont data-testid='cont'>  
        <Image size='medium' src={props.smallsrc} />  
        <div>               
        <Genres genres={props.genres} size='bigger' /> 
        <Overview size='medium' overview={props.overview}/>
        <S.ButtonDiv>
        <Button onClick={()=>Functions.Details(props.title,props.id,props.media)} color='gray'/> 
        </S.ButtonDiv>                         
        </div>                                                   
    </S.Cont>
  </S.Wrapper>
)

export default BiggerBanner