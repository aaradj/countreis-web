import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
  padding: 2rem 4rem;
  @media (max-width: 1200px) {
    margin: 0;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
  }
`;

const Div = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  img {
    width: 80%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 1200px) {
    width: 100%;
    gap: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const TitleText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const RowText = styled.div`
width: 50%;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: start;
@media(max-width:1200px){
  width:100%;
`;

const FooterText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export { Box, Div, TitleText, RowText, FooterText };
