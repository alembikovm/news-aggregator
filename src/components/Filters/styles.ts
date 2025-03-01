import { styled } from "styled-components";

export const FiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;

  input,
  select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 48%;
    margin-bottom: 10px;

    /* XS */
    @media (max-width: 576px) {
      width: 100%;
    }

    /* SM */
    @media (min-width: 577px) and (max-width: 768px) {
      width: 48%; 
    }

    /* MD */
    @media (min-width: 769px) and (max-width: 992px) {
      width: 48%; 
    }

    /* LG */
    @media (min-width: 993px) and (max-width: 1200px) {
      width: 48%; 
    }

    /* XL */
    @media (min-width: 1201px) {
      width: 48%; 
    }
  }
`;