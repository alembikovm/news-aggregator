import { styled } from "styled-components";

export const SourcesStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;

    /* XS */
    @media (max-width: 576px) {
      font-size: 12px; 
    }
  }

  /* XS */
  @media (max-width: 576px) {
    flex-direction: column;
  }

  /* SM */
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: row; 
    justify-content: flex-start;
  }

  /* MD */
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
