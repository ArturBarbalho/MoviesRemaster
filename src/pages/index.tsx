import type { GetServerSideProps, NextPage } from 'next'
import { GetData } from '../getdata' 
import BannerSlider from '../components/BannerSlider'
import { BannerProps, CardProps, Genres, bigbannerProps, movieResults } from '../typesProps'
import { organizer } from '../getdata/props_organizer'
import Cardslider from '../components/Cardslider'
import List from '../components/List'
import BiggerBannerSlider from '../components/BiggerBannerSlider/index';
import Title from '../components/Title'
type props = {
  banner:BannerProps[],
  cardslider:CardProps[],
  list:CardProps[],
  bigbanner:bigbannerProps[]

}
const Home: NextPage<props> = ({banner,cardslider,list,bigbanner}) => {
  console.log()

  return (
    < >
      <BannerSlider bannerprops={banner.slice(0,5)} />  
      <Title size='medium' >TOP RATED</Title>
      <Cardslider props={cardslider} />
      <Title size='medium' >POPULAR</Title>
      <List props={list} />
      <Title size='medium' >UPCOMING</Title>
      <BiggerBannerSlider props={bigbanner} />
    </> 
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async () => {

//requests  
const genres:Genres[] = await GetData.genresList('movie')
const topRated:movieResults[] = await GetData.movies('top_rated')
const popular:movieResults[] = await GetData.movies('popular')
const upcoming:movieResults[] = await GetData.movies('upcoming')

//components props
const banner = organizer.banner(topRated, genres)
const cardslider = organizer.cards(topRated,genres)
const list = organizer.cards(popular,genres)
const bigbanner = organizer.biggerbanner(upcoming,genres)

  return {
    props: {
      banner:banner,
      cardslider:cardslider,
      list:list,
      bigbanner:bigbanner
    }
  }
}

