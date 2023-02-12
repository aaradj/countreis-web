import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//components
import { ThemeProvider } from "../../Components/Context/DataContextProvider";
import PageLayout from "../../Components/Layouts/PageLayout";
//helper
import { spliter, nameSplited } from "../../Components/helper";
//styled components
import { Grid, Header, Image, Img, TextCard } from "./countereis";
import styled from "styled-components";
// mui components
import {
  FormControl,
  Select,
  Typography,
  MenuItem,
  TextField,
  Paper,
  OutlinedInput,
} from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
interface CountereisProps {
  countereisData: Array<object> | [] | undefined;
}

const Countereis = ({ countereisData }: CountereisProps) => {
  //darkmode context
  const mode = useContext(ThemeProvider);
  const { darkMode } = mode;
  //state data
  const [data, setData] = useState(countereisData);
  // state region
  const [Stateregion, setRegion] = useState<string | null>(
    localStorage.getItem("region")
  );
  // select option changer
  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    localStorage.setItem("region", event.target.value);
    setRegion(localStorage.getItem("region"));
  };
  // themes
  const lightColor = "hsl(200, 15%, 8%)";
  const darkColor = "hsl(0, 0%, 98%)";
  const DarkElement = "hsl(209, 23%, 22%)";
  const DarkBackground = "hsl(207, 26%, 17%)";
  const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: ${darkMode ? DarkBackground : darkColor};
  `;
  return (
    <PageLayout>
      <Container>
        <Header>
          <TextField
            size="medium"
            name="counterySearch"
            placeholder="coutery name"
            type="search"
            label={<SearchIcon sx={{ color: darkMode && darkColor }} />}
            sx={{
              outline: "none",
              boxShadow: "3px 3px 3px 0 rgba(0,0,0, .2)",
              background: darkMode ? DarkElement : "white",
              width: "25rem",
              borderRadius: "5px",
              "@media(max-width:600px)": {
                width: "100%",
              },
            }}
          />
          <FormControl
            sx={{
              m: 1,
              minWidth: 200,
              outline: "none",
              boxShadow: "3px 3px 3px 0 rgba(0,0,0, .2)",
              background: darkMode ? DarkElement : "white",
              borderRadius: "10px",
            }}
          >
            <Select
              size="medium"
              value={Stateregion}
              onChange={(event: any) => changeHandler(event)}
              sx={{ color: darkMode ? darkColor : lightColor }}
            >
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Header>
        <Grid>
          {data?.map((item: any, length) => {
            const { name, region, population, flags, capital }: any = item;
            // for times when local storage is empty
            if (!Stateregion) {
              if (region === "Asia") {
                return (
                  <Paper
                    elevation={10}
                    key={length}
                    sx={{
                      background: darkMode ? "hsl(209, 23%, 22%)" : "white",
                      display: "flex",
                      flexDirection: "column",
                      width: "20%",
                      height: "23rem",
                      overflow: "hidden",
                      borderRadius: "10px",
                      "@media(max-width:1200px)": {
                        width: "35%",
                        margin: ".7rem",
                      },
                      "@media(max-width:600px)": {
                        width: "100%",
                      },
                    }}
                  >
                    <div key={length}>
                      <Link to={`/${nameSplited(name.common)}`}>
                        <Image>
                          <Img src={flags.png} alt={`${name.common} flag`} />
                        </Image>
                        <TextCard>
                          <Typography
                            sx={{ color: darkMode ? darkColor : lightColor }}
                            variant="h6"
                            fontWeight={"bold"}
                          >
                            {name.common}
                          </Typography>
                          <Typography
                            sx={{
                              color: darkMode ? darkColor : lightColor,
                            }}
                            variant="subtitle2"
                            display={"flex"}
                          >
                            <Typography
                              variant="subtitle2"
                              margin={"0 .3rem .3rem 0"}
                              fontWeight={"bold"}
                            >
                              Population:
                            </Typography>
                            {spliter(population)}
                          </Typography>
                          <Typography
                            sx={{
                              color: darkMode ? darkColor : lightColor,
                            }}
                            variant="subtitle2"
                            display={"flex"}
                          >
                            <Typography
                              variant="subtitle2"
                              margin={"0 .3rem .3rem 0"}
                              fontWeight={"bold"}
                            >
                              Region:
                            </Typography>
                            {region}
                          </Typography>
                          <Typography
                            sx={{
                              color: darkMode ? darkColor : lightColor,
                            }}
                            variant="subtitle2"
                            display={"flex"}
                          >
                            <Typography
                              variant="subtitle2"
                              margin={"0 .3rem .3rem 0"}
                              fontWeight={"bold"}
                            >
                              Capital:
                            </Typography>
                            {capital}
                          </Typography>
                        </TextCard>
                      </Link>
                    </div>
                  </Paper>
                );
              }
            } else {
              if (Stateregion === region) {
                return (
                  <Paper
                    elevation={10}
                    key={length}
                    sx={{
                      background: darkMode ? "hsl(209, 23%, 22%)" : "white",
                      display: "flex",
                      flexDirection: "column",
                      width: "20%",
                      height: "23rem",
                      overflow: "hidden",
                      borderRadius: "10px",
                      "@media(max-width:1200px)": {
                        width: "35%",
                        margin: ".7rem",
                      },
                      "@media(max-width:600px)": {
                        width: "100%",
                      },
                    }}
                  >
                    <div key={length}>
                      <Link to={`/${nameSplited(name.common)}`}>
                        <Image>
                          <Img src={flags.png} alt={`${name.common} flag`} />
                        </Image>
                        <TextCard>
                          <Typography
                            sx={{ color: darkMode ? darkColor : lightColor }}
                            variant="h6"
                            fontWeight={"bold"}
                          >
                            {name.common}
                          </Typography>
                          <Typography
                            sx={{
                              color: darkMode ? darkColor : lightColor,
                            }}
                            variant="subtitle2"
                            display={"flex"}
                          >
                            <Typography
                              variant="subtitle2"
                              margin={"0 .3rem .3rem 0"}
                              fontWeight={"bold"}
                            >
                              Population:
                            </Typography>
                            {spliter(population)}
                          </Typography>
                          <Typography
                            sx={{
                              color: darkMode ? darkColor : lightColor,
                            }}
                            variant="subtitle2"
                            display={"flex"}
                          >
                            <Typography
                              variant="subtitle2"
                              margin={"0 .3rem .3rem 0"}
                              fontWeight={"bold"}
                            >
                              Region:
                            </Typography>
                            {region}
                          </Typography>
                          <Typography
                            sx={{
                              color: darkMode ? darkColor : lightColor,
                            }}
                            variant="subtitle2"
                            display={"flex"}
                          >
                            <Typography
                              variant="subtitle2"
                              margin={"0 .3rem .3rem 0"}
                              fontWeight={"bold"}
                            >
                              Capital:
                            </Typography>
                            {capital}
                          </Typography>
                        </TextCard>
                      </Link>
                    </div>
                  </Paper>
                );
              }
            }
          })}
        </Grid>
      </Container>
    </PageLayout>
  );
};
export default Countereis;
