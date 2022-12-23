import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.div``
export const Cont = styled.div`
display:flex;
max-width:2000px;
justify-content:center;
margin-top:100px;
${media.lessThan('small')`
    margin-top:0px;
`}

`
export const ButtonDiv = styled.div`
display: flex;
justify-content:center;
`