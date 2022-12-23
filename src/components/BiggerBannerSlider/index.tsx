import { settings } from '../../sliderSettings/biggerbanner'
import { bigbannerProps } from '../../typesProps'
import BiggerBanner from '../BiggerBanner'
import Slider from '../Slider'
import * as S from './styles'
type props = {
  props: bigbannerProps[]
}
const BiggerBannerSlider = ({props}:props) =>{
const slide = props.map((e)=>{
  return <BiggerBanner key={e.title} props={e} />
})
return(
  <S.Wrapper>
    <Slider settings={settings}> {slide} </Slider>
  </S.Wrapper>
)
}
export default BiggerBannerSlider