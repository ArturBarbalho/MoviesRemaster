import styled from 'styled-components'
import media from 'styled-media-query'
import {ArrowSmLeft} from '@styled-icons/heroicons-solid/ArrowSmLeft'
import {ArrowSmRight} from '@styled-icons/heroicons-solid/ArrowSmRight'
export const Wrapper = styled.section`
overflow-x:hidden;
max-width:1900px;
.slick-track,
    .slick-list {
      display: flex;
      margin-left:50px;
      margin-right:55px;
      ${media.lessThan('small')`
      margin:0;
      `}
    }
    .slick-prev,
    .slick-next {
      display: block;
      position: absolute;
      top: 50%;
      padding: 0;
      transform: translate(0, -50%);
    }
    
`
export const Left = styled(ArrowSmLeft)`
width: 60px;
color:lightgray;
cursor:pointer;
z-index:1;
`
export const Right = styled(ArrowSmRight)`
width: 60px;
color:lightgray;
cursor:pointer;
left:96vw;
${media.lessThan('large')`
left:94vw;
`}

`