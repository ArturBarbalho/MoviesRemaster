import styled, { css } from 'styled-components'

type props = {
    size:'banner'|'details'|'bigger'
}

const Modifier = {
    banner:()=>css`
    font-size:larger;
    max-width:250px;
    margin-bottom:30px;
    margin-top:30px;
    display: inline-block;
    margin-left:10px;
    margin-right:10px;
   
    `,
    details:()=>css`
    display: inline-block;
    margin-left:10px;
    margin-bottom:30px;
    `,
    bigger:()=>css`
    margin-left:30px;
    font-size:40px;
    @media(max-width:1400px){       
    font-size:25px;                
    }
    @media(max-width:900px){    
    font-size:20px;
    }
    @media(max-width:750px){
    margin-left:5px;
    }
    `,
}

export const Genre = styled.div<props>`
${({size})=>css`
${ !!size && Modifier[size]()}
color:white;
`}
`

const WrapperModifier = {
    bigger:()=>css`
    display:flex;
    flex-direction:row;
    justify-content:center;
    @media(max-width:750px){
    flex-direction:column;
}
    `,
    banner:()=>css`
    
    `,
    details:()=>css`
    display: inline-block;
    
    `
}

export const Wrapper = styled.div<props>`
${({size})=>css`
${!!size && WrapperModifier[size]()}
`}
`