import styled, { css } from 'styled-components'
type props = {
    color:'gray'|'black'
}
export const Wrapper = styled.button<props>`
${({color})=>css`
background-color:${color};
color: white;
padding: 10px;
border-radius:20px;
margin-top:30px;
border:none;
width:150px;
font-size:larger;
:Hover{
    cursor:pointer;
    background-color:white;
    color:black;
    opacity:0.8;
}
`}

`