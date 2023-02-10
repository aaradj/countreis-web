import { Link } from "react-router-dom";
import PageLayout from "../../Components/Layouts/PageLayout";
import React, { useEffect, useState } from "react";
import { spliter, nameSplited } from "../../Components/helper";
import { Cards, Container, CTypography, Grid, Header, Image, Img, TextCard } from "./countereis";

import {
  FormControl,
  Select,
  Typography,
  MenuItem,
  TextField,
  Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
interface CountereisProps {
  countereisData: Array<object> | [] | undefined;
}
const Coutereis = ({ countereisData }: CountereisProps) => {
  const [data, setData] = useState(countereisData);
  const [Stateregion, setRegion] = useState("Asia");
  const [search, setSearch] = useState<string | number>("");
  const changeHandler = (event: React.ChangeEvent<any>) => {
    setRegion(event.target.value);
  };
  const inputChange = (evnet: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evnet.target.value);
  };
  const handleSearch = (name: any) => {
    if (typeof name === "string") {
      const newName = name.toLowerCase();
      return newName;
    }
  };

  useEffect(() => {
    setSearch("");
  }, [Stateregion]);

  return (
    <PageLayout>
      <Container>
        <Header>
        <TextField
          value={search}
          onChange={inputChange}
          size="small"
          name="search"
          label={<SearchIcon />}
          placeholder="search for a countery"
          sx={{
            outline: "none",
            boxShadow: "3px 3px 3px 0 rgba(0,0,0, .2)",
            background: "white",
            width:"25rem"
          }}
        />
        <FormControl
          sx={{
            m: 1,
            minWidth: 200,
            outline: "none",
            boxShadow: "3px 3px 3px 0 rgba(0,0,0, .2)",
            background: "white",
          }}
        >
          <Select
            size="small"
            value={Stateregion}
            onChange={(event: any) => changeHandler(event)}
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
          if (Stateregion === region && search === "") {
            return (
              <Paper sx={Cards}>
              <div key={length}>
                <Image>
                <Img src={flags.png} alt={`${name.common} flag`} />
                </Image>
                <TextCard>
                <Link to={`/${nameSplited(name.common)}`}><Typography variant="h5" fontWeight={"bold"}>{name.common}</Typography></Link>
                <Typography sx={CTypography} variant="subtitle1" display={"flex"}><Typography variant="subtitle1" fontWeight={"bold"} >Population: </Typography> {spliter(population)}</Typography>
                <Typography sx={CTypography} variant="subtitle1" display={"flex"}><Typography variant="subtitle1" fontWeight={"bold"}>Region: </Typography> {region}</Typography>
                <Typography sx={CTypography} variant="subtitle1" display={"flex"}> <Typography variant="subtitle1" fontWeight={"bold"}>Capital: </Typography> {capital}</Typography>
                </TextCard>
              </div>
                </Paper>
            );
          } else if (handleSearch(name.common) === handleSearch(search)) {
            return (
              <Paper sx={Cards}>
              <div key={length}>
                <Image>
                <Img src={flags.png} alt={`${name.common} flag`} />
                </Image>
                <TextCard>
                <Link to={`/${nameSplited(name.common)}`}><Typography variant="h5" fontWeight={"bold"}>{name.common}</Typography></Link>
                <Typography variant="subtitle1">Population: {spliter(population)}</Typography>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
                </TextCard>
              </div>
                </Paper>
            );
          }
        })}
        </Grid>
      </Container>
    </PageLayout>
  );
};
export default Coutereis;
