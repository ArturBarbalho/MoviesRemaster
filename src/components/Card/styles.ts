import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.div`
height: 515px;

@media(max-width:450px){
    height: 280px;
    
    } 
    @media(max-width:400px){
        height:200px;
    }
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
        width:47vw;
        height: 280px;
    } 
@media(max-width:400px){
        height: 200px;
    } 

`