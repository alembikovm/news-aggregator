import { styled } from "styled-components";

export const NewsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* XS */
  @media (max-width: 576px) {
    gap: 15px;
  }

  /* SM */
  @media (max-width: 768px) {
    gap: 18px; 
  }

  /* MD */
  @media (max-width: 992px) {
    gap: 20px; 
  }
`;

export const NewsItemStyled = styled.div`
  padding: 15px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    margin-bottom: 5px;
  }

  p {
    color: gray;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    text-decoration: none;
  }

  /* XS */
  @media (max-width: 576px) {
    padding: 10px;
  }

  /* SM */
  @media (max-width: 768px) {
    padding: 12px;
  }

  /* MD */
  @media (max-width: 992px) {
    padding: 15px;
  }

  /* LG */
  @media (max-width: 1200px) {
    padding: 15px;
  }
`;
