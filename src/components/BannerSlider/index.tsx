import { settings } from '../../sliderSettings/banner'
import Banner from '../Banner'
import Slider from '../Slider'
import * as S from './styles'
import { BannerProps } from '../../typesProps/index';
import { useEffect, useState } from 'react';
type props = {
  bannerprops:BannerProps[]
}
 
const BannerSlider = ({bannerprops}:props) => {

  //this was necessary because the media querie does not works in the .slick-dots class
  const largura = innerWidth
  const [left,setLeft] = useState('-51%')
  const [right,setRight] = useState('-49%')
  useEffect(()=>{
    if(largura < 500){
    setLeft('-59%')
    setRight('-51%')
  }
  },[])
  
  const slid = bannerprops.map((e)=>{
    return(
       <Banner key={e.title} bannerProps={e} />
       )
  })  
return(
  <S.Wrapper left={left} right={right} >
    <Slider settings={settings}>
    {slid}
    </Slider>
  </S.Wrapper>
)
}
export default BannerSlider
