import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.div`
`
export const Over = styled.div`
opacity:0;
:Hover{
    opacity:0.5;
    cursor:pointer;
}
position:absolute;
background-color:black;
width:350px;
height: 515px;
@media(max-width:450px){
        width:205px;
    } 
@media(max-width:400px){
        width:160px;
        height:233px;
    } 

`