import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../../getdata' 
import { DetailsProps, reviewsProps, tvResults } from '../../typesProps'
type props = {
    details:DetailsProps
    reviews:reviewsProps
}
const Tv: NextPage<props> = ({details,reviews}) => {
  

  return (
    < >
    
    </>
  )
}

export default Tv

export const getServerSideProps:GetServerSideProps = async (context) => {
const {about,id,media} = context.query

const details:tvResults = await GetData.details(id,media)


console.log(details)

  return { 
    props: {
      
    }
  }
}

