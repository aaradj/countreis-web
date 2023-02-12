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
import { Box, Div, FooterText, RowText, TitleText } from "./coutery";

// helper functions
import {
  getLanguage,
  getNativeName,
  getValue,
  getBorders,
  nameSplited,
  spliter,
  getEndPoint,
} from "../../Components/helper";

//mui components
import { Button, Typography } from "@mui/material";

// icons
import WestIcon from "@mui/icons-material/West";

// Layout
import PageLayout from "../../Components/Layouts/PageLayout";

//themes
import {
  darkColor,
  DarkBackground,
  DarkElement,
  lightColor,
} from "../../Components/Theme/theme";

const Countery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //get end point
  const pathName = getEndPoint(location.pathname);

  const data = useContext(DataContext);
  const mode = useContext(ThemeProvider);
  const { darkMode } = mode;

  //styled
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 4rem;
    background: ${darkMode ? DarkBackground : darkColor};
    @media (max-height: 850px) {
      height: fit-content;
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

        //To determine which country profile should be shown
        if (nameSplited(name.common) === pathName) {
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
                            //if they have more than one language, separate them with a comma
                            if (length > 0) {
                              const newItem = ` , ${item} `;
                              return newItem;
                            } else {
                              return ` ${item}`;
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
                          //if we have a border? return borders name, else return nothing
                          if (length >= 0) {
                            const newItem = `${item} `;
                            return (
                              <div key={length}>
                                <Button
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
