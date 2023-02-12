import { useContext } from "react";
//context
import {
  DataContext,
  ThemeProvider,
} from "../../Components/Context/DataContextProvider";
// react router dom
import { useLocation, useNavigate } from "react-router-dom";
// styled components
import styled from "styled-components";
// helper functions
import {
  getLanguage,
  getNativeName,
  getValue,
  getBorders,
  nameSplited,
  spliter,
} from "../../Components/helper";
//mui components
import { Button, Typography } from "@mui/material";
// icons
import WestIcon from "@mui/icons-material/West";
// Layout
import PageLayout from "../../Components/Layouts/PageLayout";

const Countery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //get end point
  const pathname = location.pathname;
  const splitedPath = pathname.split("/");
  const newPath = splitedPath[1];
  const data = useContext(DataContext);
  const mode = useContext(ThemeProvider);
  const { darkMode } = mode;
  //themes
  const darkColor = "hsl(0, 0%, 98%)";
  const DarkElement = "hsl(209, 23%, 22%)";
  const DarkBackground = "hsl(207, 26%, 17%)";

  //styled

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 3rem;
    background: ${darkMode ? DarkBackground : darkColor};
    @media (max-height: 850px) {
      height: fit-content;
    }
  `;

  const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 4rem;
    @media (max-width: 1200px) {
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
  const Texts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    color: ${darkMode ? "white" : "black"};
    @media (max-width: 1200px) {
      width: 100%;
      gap: 1rem;
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

  return (
    <Container>
      {data?.data.map((item: any) => {
        const {
          name,
          currencies,
          population,
          capital,
          region,
          subregion,
          languages,
          flags,
          tld,
          borders,
        }: any = item;
        if (nameSplited(name.common) === newPath) {
          return (
            <PageLayout>
              <Box key={name.common}>
                <Div>
                  <Button
                    onClick={() => navigate("/")}
                    sx={{
                      background: darkMode ? DarkElement : "white",
                      color: darkMode ? darkColor : "black",
                      boxShadow: "2px 3px 6px 1px rgba(0,0,0,.2)",
                      margin: "1rem 0",
                    }}
                    startIcon={<WestIcon />}
                  >
                    Back
                  </Button>
                  <img src={flags.png} alt={name} />
                </Div>
                <Texts>
                  <TitleText>
                    <RowText>
                      <h1>{name.common}</h1>
                      <Typography>
                        Native Name: {getNativeName(name.nativeName)}
                      </Typography>
                      <Typography>Population: {spliter(population)}</Typography>
                      <Typography>Region: {region}</Typography>
                      <Typography>Sub Region: {subregion}</Typography>
                      <Typography>Capital: {capital}</Typography>
                    </RowText>
                    <RowText>
                      <Typography>Top Level Domain: {tld}</Typography>
                      <Typography>
                        Currencies: {getValue(currencies)}
                      </Typography>
                      <Typography>
                        Languages:
                        {getLanguage(languages).map(
                          (item: string, length: number) => {
                            if (length > 0) {
                              const newItem = `,${item} `;
                              return newItem;
                            } else {
                              return item;
                            }
                          }
                        )}
                      </Typography>
                    </RowText>
                  </TitleText>
                  {borders && (
                    <FooterText>
                      <Typography variant="h6" fontWeight={"bold"}>
                        Borders:
                      </Typography>
                      {getBorders(borders).map(
                        (item: string, length: number) => {
                          if (length > 0) {
                            const newItem = `${item} `;
                            return (
                              <div>
                                <Button
                                  key={length}
                                  sx={{
                                    background: darkMode
                                      ? DarkElement
                                      : "white",
                                    color: darkMode ? darkColor : "black",
                                    boxShadow: "2px 3px 6px 1px rgba(0,0,0,.2)",
                                  }}
                                  variant="text"
                                >
                                  {newItem}
                                </Button>
                              </div>
                            );
                          } else {
                            return null;
                          }
                        }
                      )}
                    </FooterText>
                  )}
                </Texts>
              </Box>
            </PageLayout>
          );
        } else {
          return null;
        }
      })}
    </Container>
  );
};
export default Countery;
