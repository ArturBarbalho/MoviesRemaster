import styled, { css } from 'styled-components'
type props = {
  left:string
  right:string
}
export const Wrapper = styled.main<props>`
${({left, right})=>css`
height: 100vh;
overflow-x: hidden ;
 .slick-dots {
      list-style: none;
      display: flex !important;
      margin-top:20px;
      position: absolute;
        justify-content:center;
        align-items:center;
        position: absolute;
        left: ${left};
        right: ${right};
        top: 90vh;
      li {
        background:white;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        cursor: pointer;
        margin-left:20px;
        &.slick-active {
          background: lightgray;
        }
      }
      button {
        opacity: 0;
        cursor: pointer;
        }
    }
`}
`