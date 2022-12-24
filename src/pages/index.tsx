import type { GetServerSideProps, NextPage } from 'next'
import { GetData } from '../getdata' 
import BannerSlider from '../components/BannerSlider'
import { BannerProps, CardProps, Genres, bigbannerProps, movieResults } from '../typesProps'
import { organizer } from '../getdata/props_organizer'
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
    {/*  <BannerSlider bannerprops={banner.slice(0,5)} />  */}

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

console.log(bigbanner)
  return {
    props: {
      banner:banner,
      cardslider:cardslider,
      list:list,
      bigbanner:bigbanner
    }
  }
}

