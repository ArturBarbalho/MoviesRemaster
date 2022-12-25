import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../../getdata' 
import { CardProps, DetailsProps, Genres, reviewsProps, tvResults, reviews, GetTvDetails } from '../../typesProps'
import { TVorganizer } from '../../getdata/tvPros'
import Reviews from '../../components/Reviews'
import List from '../../components/List'
import Details from '../../components/Details'
import Title from '../../components/Title'
type props = {
    details:DetailsProps
    reviews:reviewsProps[]
    list:CardProps[]
}
const Tv: NextPage<props> = ({details,reviews,list}) => {
  

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

export default Tv

export const getServerSideProps:GetServerSideProps = async (context) => {
const {id} = context.query
//requests
const genresList:Genres[] = await GetData.genresList('tv')
const reviews:reviews[] = await GetData.reviews(id,'tv')
const similars:tvResults[] = await GetData.similars(id,'tv')
const details:GetTvDetails = await GetData.details(id,'tv')

//data props
const Details = TVorganizer.details(details)
const List = TVorganizer.cards(similars,genresList)
const Reviews = TVorganizer.reviews(reviews)

  return { 
    props: {
      details:Details,
      reviews:Reviews,
      list:List
    }
  }
}

