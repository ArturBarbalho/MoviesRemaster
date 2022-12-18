import styled,{css} from 'styled-components'
import media from 'styled-media-query'


const Modifiers = {
    small:()=>css`
    width:350px;
    ${media.lessThan('small')`
        width:50vw;
    `}  
    `,
    medium:()=>css`
    width:50%;
    max-width:500px;
    `,
    large:()=>css`
    width:100%;
    height:100vh;
    object-fit:cover;
    `,
    larger:()=>css`
    width:100vw;
    `,
}

type props = {
    size:'small'|'medium'|'large'|'larger'
}

export const Wrapper = styled.img<props>`
${({size})=>css`
${!!size && Modifiers[size]()}
`}
`