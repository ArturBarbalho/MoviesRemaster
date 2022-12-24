import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
background-color:black;
@media(max-width:400px){
    height: 140vh;
}
`
export const Info = styled.div`
max-width:1000px;
${media.greaterThan('large')`
margin-left:50px;
`}
${media.lessThan('small')`
text-align:center;
`}
p{
    display:flex;
    font-size:22px;
    color:white;
    margin-bottom:30px;
}
${media.lessThan('small')`
p{
    justify-content:center;
}
`}
span{
    margin-right:10px;
}
`

export const Content = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
text-shadow:2px 5px 5px black;
${media.lessThan('medium')`
    flex-direction:column;
    justify-content:space-around;
`}
@media(max-width:400px){
    margin-top:100px;
}
`

export const Gen = styled.div`
font-size:22px;
display: flex;
align-items:center;
${media.lessThan('small')`
justify-content:center;
`}
`