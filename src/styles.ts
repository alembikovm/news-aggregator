import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
  body {
    color: ${props => (props.$whiteColor ? 'white' : 'black')};
  }
`

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  width: 100%;
`;

