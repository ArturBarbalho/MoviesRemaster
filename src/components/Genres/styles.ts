import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    
    `,
    bigger:()=>css`
    
    `,
}

export const Genre = styled.div<props>`
${({size})=>css`
${Modifier[size]()}
color:white;
`}
`
export const Wrapper = styled.div`

`