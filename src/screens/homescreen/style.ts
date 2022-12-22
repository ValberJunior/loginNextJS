import styled from "styled-components";


export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: url('/assets/home/bg.webp');
  background-position-y: -30vh;
  background-position-x: -5vw;
  color: ${({theme:{colors}})=>colors.text};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const LoginComponent = styled.section`
 margin-top: 5rem;
 padding: 2em;
 background-color: ${({theme:{colors}})=>colors.light};
 border-radius: .5rem;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
`;

export const Logo = styled.img`
width: 80%;
height: auto;
`;

export const Field = styled.div`
width: 90%;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`;

export const Label = styled.label`
font-size: ${({theme:{typography}})=>typography.text};
font-weight: 500;
margin-top: .5em;
`;

export const Input = styled.input`
width: 100%;
margin: .5em 0;
height: 56px;
padding: .5em;
border-radius: .3rem;
border: 1px solid ${({theme:{colors}})=>colors.secondary};
font-size: ${({theme:{typography}})=>typography.text};
&:focus {
  outline: 2px solid ${({theme:{colors}})=>colors.primary};
}
`;

export const Button = styled.button`
width: 90%;
padding: 1em 0;
background: linear-gradient(270deg,${({theme:{colors}})=>colors.success},${({theme:{colors}})=>colors.primary} );
border-radius: .3rem;
outline: none;
border: 1px solid ${({theme:{colors}})=>colors.primary};
margin: 1em 0;
cursor: pointer;
font-size: ${({theme:{typography}})=>typography.button};
color: ${({theme:{colors}})=>colors.light};
transition: all 0.8s linear;
&:hover {
  background: ${({theme:{colors}})=>colors.dark};
  transition: all 0.8s linear;
}
`

export const DetailsFooter = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
`;

export const Text = styled.p`
font-size: ${({theme:{typography}})=>typography.text};
color: ${({theme:{colors}})=>colors.text}
margin-right: .5em;
`;

export const LinkElement = styled.a`
text-decoration: none;
color: ${({theme:{colors}})=>colors.success};
transitions: all .5s ease-in;
&:hover {
  color: ${({theme:{colors}})=>colors.primary};
  transitions: all .5s ease-in-out;
}
`;
