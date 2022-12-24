import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../getdata' 
import { BannerProps, CardProps, Genres, bigbannerProps, tvResults } from '../typesProps'
type props = {
  banner:BannerProps[],
  cardslider:CardProps[],
  list:CardProps[],
  bigbanner:bigbannerProps[]

}
const Tv: NextPage<props> = ({banner,cardslider,list,bigbanner}) => {
  

  return (
    < >
    
    </>
  )
}

export default Tv

export const getServerSideProps:GetServerSideProps = async () => {

  //requests
  const genres:Genres[] = await GetData.genresList('tv')
  const topRated:tvResults[] = await GetData.tv('top_rated')
  const popular:tvResults[] = await GetData.tv('popular')
  const latest:tvResults[] = await GetData.tv('latest')

  //components props
  

  return {
    props: {
      
    }
  }
}
