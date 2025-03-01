import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 20px;
  margin: 0 auto;

  /* XS */
  @media (max-width: 576px) {
    padding: 10px;
  }

  /* SM */
  @media (max-width: 768px) {
    padding: 15px;
  }
`;
