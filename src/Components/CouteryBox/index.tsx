import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { ThemeProvider } from "../../Components/Context/DataContextProvider";

//material ui components
import { Typography, Paper } from "@mui/material";

//helper functions
import { nameSplited, spliter } from "../helper";

//stled components style
import { Image, Img, TextCard } from "../../Pages/Coutreis/countereis";

//color theme
import { darkColor, lightColor } from "../Theme/theme";

interface CouteryBoxProps {
  item: any;
}

const CouteryBox = ({ item }: CouteryBoxProps) => {
  const mode = useContext(ThemeProvider);
  const { darkMode } = mode;
  const { name, region, population, flags, capital }: any = item;
  return (
    <Paper
      elevation={3}
      sx={{
        background: darkMode ? "hsl(209, 23%, 22%)" : "white",
        display: "flex",
        flexDirection: "column",
        width: "20%",
        height: "22rem",
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
      <div>
        <Link to={`/${nameSplited(name.common)}`}>
          <Image>
            <Img src={flags.png} alt={`${name.common} flag`} />
          </Image>
          <TextCard>
            <Typography
              sx={{ color: darkMode ? darkColor : lightColor }}
              variant="h6"
              fontWeight={"bold"}
              margin="0 0 1rem"
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
};
export default CouteryBox;
