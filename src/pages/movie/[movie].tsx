import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../../getdata' 
import { DetailsProps, Genres, GetMovieDetails, movieResults, reviewsProps, reviews } from '../../typesProps'
import { organizer } from '../../getdata/props_organizer'
type props = {
    details:DetailsProps
    reviews:reviewsProps
}
const Movie: NextPage<props> = ({details,reviews}) => {
  

  return (
    < >
    
    </>
  )
}

export default Movie

export const getServerSideProps:GetServerSideProps = async (context) => {
const {id} = context.query
//requests
const details:GetMovieDetails = await GetData.details(id,'movie')
const reviews:reviews[] = await GetData.reviews(id,'movie')
const similars = ''

//props data
const Details:DetailsProps = organizer.details(details)
const Reviews = organizer.reviews(reviews)


  return { 
    props: {
      details:Details,
      reviews:Reviews,
      similars:''
    }
  }
}

