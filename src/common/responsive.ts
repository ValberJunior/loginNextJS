import { css } from 'styled-components';

// tablet
export const tablet = (props: any) => {
  return css `
    @media only screen and(min-height:1024px){
      ${props}
    }
  `
}
// vieport
export const viewPort = (props: any) => {
  return css `
    @media only screen and(max-width:900px){
      ${props}
    }
  `
}
// mobile
export const mobile = (props: any) => {
  return css `
    @media only screen and(max-width:420px){
      ${props}
    }
  `
}
// mobile-mini
export const mobileMini = (props: any) => {
  return css `
    @media only screen and(max-width:320px){
      ${props}
    }
  `
}
