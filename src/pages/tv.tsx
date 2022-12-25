import type { GetServerSideProps, NextPage } from 'next'
import { GetData } from '../getdata' 
import { BannerProps, CardProps, Genres, bigbannerProps, tvResults } from '../typesProps'
import { TVorganizer } from '../getdata/tvPros'
import BannerSlider from '../components/BannerSlider'
import Title from '../components/Title'
import Cardslider from '../components/Cardslider'
import List from '../components/List'
import BiggerBannerSlider from '../components/BiggerBannerSlider'
type props = {
  banner:BannerProps[],
  cardslider:CardProps[],
  list:CardProps[],
  bigbanner:bigbannerProps[]

}
const Tv: NextPage<props> = ({banner,cardslider,list,bigbanner}) => {
  

  return (
    < >
     <BannerSlider bannerprops={banner.slice(0,5)} />  
      <Title size='medium' >TOP RATED</Title>
      <Cardslider props={cardslider} />
      <Title size='medium' >POPULAR</Title>
      <List props={list} />
      <Title size='medium' >TODAY</Title>
      <BiggerBannerSlider props={bigbanner} />
    </>
  )
}

export default Tv

export const getServerSideProps:GetServerSideProps = async () => {

  //requests
  const genres:Genres[] = await GetData.genresList('tv')
  const topRated:tvResults[] = await GetData.tv('top_rated')
  const popular:tvResults[] = await GetData.tv('popular')
  const airing_today:tvResults[] = await GetData.tv('airing_today')

  //components props
  const banner = TVorganizer.banner(topRated, genres)
  const cardslider = TVorganizer.cards(topRated,genres)
  const list = TVorganizer.cards(popular,genres)
  const bigbanner = TVorganizer.biggerbanner(airing_today,genres)
  
    return {
      props: {
        banner:banner,
        cardslider:cardslider,
        list:list,
        bigbanner:bigbanner
      }
    }
}
