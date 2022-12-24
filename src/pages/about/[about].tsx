import type { GetServerSideProps, NextPage } from 'next'
import { GetData, Functions } from '../../getdata' 
type props = {
    props: ''
}
const About: NextPage<props> = ({props}) => {
  

  return (
    < >
    
    </>
  )
}

export default About

export const getServerSideProps:GetServerSideProps = async (context) => {
const data = context.query

  return {
    props: {
      
    }
  }
}

