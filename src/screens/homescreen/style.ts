import styled from "styled-components";


export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: linear-gradient(270deg,${({theme:{colors}})=>colors.light}, ${({theme:{colors}})=>colors.secondary});
  color: ${({theme:{colors}})=>colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
 font-size: ${({theme:{typography}})=>typography.title};
 font-family: ${({theme:{font}})=>font.default};
 color: ${({theme:{colors}})=>colors.text};
`;

export const Logo = styled.img`
 width: 80px;
 height: auto;
 margin: 4px;
`;
