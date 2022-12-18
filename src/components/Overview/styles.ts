import styled,{css} from 'styled-components'
type props = {
    size:'small'|'medium'|'large'
}

const Modifier = {
    small:()=> css`
    max-width:900px;
    margin-top:30px;
    
    `,
    medium:()=> css`
    max-width:1000px;
    margin-top:60px;
    @media(max-width:900px){
        font-size:15px;
        margin-top:10px;
}
    `,
    large:()=> css`
    max-width:1500px;
    width:100vw;
    margin-left:20px;
    ` 
}


export const Wrapper = styled.p<props>`
${({size})=>css`
color:white;
font-size:larger;
letter-spacing: 1px;
text-shadow:1px 0px 1px black;
${Modifier[size]()}
`}
`