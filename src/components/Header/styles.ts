import styled from 'styled-components'
export const Wrapper = styled.main`
display:flex;
align-items: center;
background-color:rgb(0,0,0,0.5);
position:absolute;
z-index:1;
width:100%;
justify-content:space-around;
a{
    text-decoration:none;
    font-size:larger;
    color: white;
}
`

export const Logo = styled.div`
img{
    width:70px;
    
}
h3{
color: white;
}
display:flex;
align-items:center;
`
export const DivLinks = styled.div `
display: flex;
justify-content:space-between;
width: 200px;
`