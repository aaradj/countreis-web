import styled from "styled-components";
const Header = styled.div`
  padding: 0.5rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 0;
  width: 100%;
  @media (max-width: 600px) {
    padding: 0.5rem;
    justify-content: unset;
    flex-direction: column;
    align-items: start;
  }
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.5rem 1rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
const Image = styled.div`
  width: 100%;
  height: 13rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3/2;
`;
const TextCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export { Header, Grid, Img, Image, TextCard };
