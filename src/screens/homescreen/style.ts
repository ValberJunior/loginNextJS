import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: url('/assets/home/bg.webp');
  background-position: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginComponent = styled.section`
  margin-top: 5rem;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Other styled components remain similar with improved theme usage