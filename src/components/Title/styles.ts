import styled,{ css } from 'styled-components'
import media from 'styled-media-query'

  type props = {
    size:'large'|'medium'
  }

const Modifiers = {
    large:()=>css`
        font-size:70px;
        color: white;
        word-break: break-word;
        span{
            font-size:20px;
            color: lightgray;
            }
        ${media.lessThan('small')`
            font-size:50px;
            padding-left:10px;
        `}
    `,
    medium:()=>css`
        color: white;
        width: 250px;
        font-size:50px;
        margin-bottom:30px;
    `
}



export const Wrapper = styled.h1<props>`
${({size})=>css`
font-family:monospace;
${!!size && Modifiers[size]()}
`}

`