import { DetailsProps } from '../../typesProps'
import Genres from '../Genres'
import Image from '../Image'
import Overview from '../Overview'
import * as S from './styles'
type props = {
  props:DetailsProps
}
const Details = ({props}:props) => (
  <S.Wrapper>
     <S.Content>
      <Image size='medium' src={props.smallsrc} />
      <S.Info>
        <p> <span>Relase date:</span> {props.relase}</p>
        <p><span>Vote avarage:</span> {props.vote_avarage}</p>
        <S.Gen>
        <p><span style={{marginRight:'0'}} >Genres: </span></p>
        <Genres genres={props.genres} size='details'/> 
        </S.Gen> 
        <Overview overview={props.overview} size='small' />
      </S.Info>
    </S.Content>
    <Image src={props.bigsrc} size='large' />
  </S.Wrapper>
)

export default Details