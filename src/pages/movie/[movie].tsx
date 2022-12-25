import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../../getdata' 
import { DetailsProps, Genres, GetMovieDetails, movieResults, reviewsProps, reviews, CardProps } from '../../typesProps'
import { organizer } from '../../getdata/props_organizer'
import Details from '../../components/Details'
import Title from '../../components/Title'
import List from '../../components/List'
import Reviews from '../../components/Reviews'
type props = {
    details:DetailsProps
    reviews:reviewsProps[]
    list:CardProps[]
}
const Movie: NextPage<props> = ({details,reviews,list}) => {
  

  return (
    < >
    <Details props={details} />
    <Title size='medium'>SIMILARS</Title>
    <List props={list} />
    <Title size='medium'>REVIEWS</Title>
    <Reviews props={reviews} />
    </>
  )
}

export default Movie

export const getServerSideProps:GetServerSideProps = async (context) => {
const {id} = context.query
//requests
const details:GetMovieDetails = await GetData.details(id,'movie')
const reviews:reviews[] = await GetData.reviews(id,'movie')
const similars:movieResults[] = await GetData.similars(id,'movie')
const genresList:Genres[] = await GetData.genresList('movie')
//props data
const Details:DetailsProps = organizer.details(details)
const Reviews:reviewsProps[] = organizer.reviews(reviews)
const List:CardProps[] = organizer.cards(similars,genresList)

  return { 
    props: {
      details:Details,
      reviews:Reviews,
      list:List
    }
  }
}

