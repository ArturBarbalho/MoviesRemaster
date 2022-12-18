import * as S from './styles'
import Image from '../Image/';
import Title from '../Title';
import Button from '../Button';
import { Functions } from '../../getdata';
import { BannerProps } from '../../typesProps/index';
import Overview from '../Overview';
type props = {
  bannerProps: BannerProps
}
const Banner = ({bannerProps}:props) => (
  <S.Wrapper>

    <S.About>
    
    <Title size='large' > {bannerProps.title}<span>{bannerProps.relaseDate}</span> </Title>
    <S.Icon>
          <img alt='icon1' src='icon1.png' />
          <img alt='icon2' src='icon2.png'/>
          <img alt='icon3' src='icon3.png'/>
          <img alt='icon4' src='icon4.png'/>
    </S.Icon>
    <Overview overview={bannerProps.overview} size='small' />
    <Button onClick={ ()=> Functions.Details(bannerProps.title,bannerProps.id,bannerProps.media)} color='black'  />
    </S.About>

    <Image src={bannerProps.src} size='large'/>
  </S.Wrapper>
)

export default Banner