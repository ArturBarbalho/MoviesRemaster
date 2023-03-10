import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const About = styled.div`
color:aliceblue;
position:absolute;
text-shadow:1px 1px black;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 99vw;
height:100vh;
background-color:rgb(0,0,0,0.3);
${media.lessThan('small')`
    width:100vw;
    overflow-x:hidden;
    margin-top:-60px;
    height:110vh;
`}

`
export const Icon = styled.div`
display: flex;
justify-content:space-between;
width:350px;
${media.lessThan('small')`
width:100%;
   
`}
`