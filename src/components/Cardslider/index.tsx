import { settings } from '../../sliderSettings/card'
import { CardProps } from '../../typesProps'
import Card from '../Card'
import Slider from '../Slider'
import * as S from './styles'

type props = {
  props:CardProps[]
}

const Cardslider = ({props}:props) => (
  <S.Wrapper >
    <Slider settings={settings} >
    {props.map((e)=>{
      return(
        <Card key={e.title} props={e} />
      )
    })}
    </Slider>
    
  </S.Wrapper>
)

export default Cardslider