import type { GetServerSideProps, NextPage } from 'next'
import { GetData } from '../getdata' 
import BannerSlider from '../components/BannerSlider'
import { BannerProps, Genres, movieResults } from '../typesProps'
import { organizer } from '../getdata/props_organizer'
type props = {
  banner:BannerProps[]
}
const Home: NextPage<props> = ({banner,}) => {
  console.log()

  return (
    < >
    {/*  <BannerSlider bannerprops={banner.slice(0,5)} />  */}
    
    </> 
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async () => {
const genres:Genres[] = await GetData.genresList('movie')
const topRated:movieResults[] = await GetData.movies('top_rated')
const bannerprops = organizer.banner(topRated, genres)
console.log()

  return {
    props: {
      banner:bannerprops,

    }
  }
}

