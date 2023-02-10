import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  padding: 0.5rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  width: 100%;
  height: 100%;
  padding:2rem;
`;

const Cards: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "25%",
  height: "25rem",
  margin:"1.5rem",
  overflow: "hidden",
  borderRadius: "5px",
};

const Image = styled.div`
    width:100%;
    height:13rem;
`;

const Img = styled.img`
  width: 100%;
  height:100%;
  aspect-ratio: 3/2;
`;

const TextCard = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:1rem;
`;

const CTypography:React.CSSProperties = {
    margin:".2rem 0"
}



export { Container, Header, Cards, Grid, Img, Image, TextCard, CTypography };
