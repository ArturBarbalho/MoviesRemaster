import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../getdata' 
type props = {
  props: ''
}
const Tv: NextPage<props> = ({props}) => {
  

  return (
    < >
    
    </>
  )
}

export default Tv

export const getServerSideProps:GetServerSideProps = async () => {

  return {
    props: {
      
    }
  }
}
