import React, { useState, useContext } from "react";

//Contexts
import { ThemeProvider } from "../../Components/Context/DataContextProvider";

import PageLayout from "../../Components/Layouts/PageLayout";

//styled components
import { Grid, Header } from "./countereis";
import styled from "styled-components";

// mui components
import { FormControl, Select, MenuItem, TextField } from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";
import CouteryBox from "../../Components/CouteryBox";

//themes
import {
  darkColor,
  DarkBackground,
  DarkElement,
  lightColor,
} from "../../Components/Theme/theme";

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

  const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: ${darkMode ? DarkBackground : darkColor};
  `;

  return (
    <Container>

      <PageLayout>

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
            // for times when local storage is empty
            if (!Stateregion) {
              if (item.region === "Asia") {
                return <CouteryBox key={length} item={item} />;
              }
            } else {
              if (Stateregion === item.region) {
                return <CouteryBox key={length} item={item} />;
              }
            }
          })}
        </Grid>

      </PageLayout>

    </Container>
  );
};

export default Countereis;