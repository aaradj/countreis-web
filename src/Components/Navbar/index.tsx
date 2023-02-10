//context
import { useContext } from "react";
import { ThemeProvider } from "../Context/DataContextProvider";
// mui comopnents
import { Box, Toolbar, Typography, Button, AppBar } from "@mui/material";
// icons
import NightlightIcon from "@mui/icons-material/Nightlight";
// styled components
import { Header } from "./navbar";

const Navbar = () => {
  //get theme
  const mode = useContext(ThemeProvider);
  const { darkMode, setDarkMode } = mode;

  return (
    <Header>
      <Box width="100%">
        <AppBar
          position="static"
          sx={{
            background: darkMode ? "hsl(209, 23%, 22%)" : "white",
            padding: "0 2rem",
            "@media(max-width:600px)": { padding: "0 .5rem" },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "cneter",
              justifyContent: "space-between",
              color: darkMode ? "#fff" : "hsl(200, 15%, 8%)",
            }}
          >
            <Typography
              variant={"h5"}
              fontWeight={"bold"}
              sx={{
                "@media(max-width:600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Where in the world?
            </Typography>
            <Button
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <NightlightIcon
                fontSize="large"
                sx={{ "@media(max-width:600px)": { fontSize: "medium" } }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: "1rem",
                  "@media(max-width:600px)": { fontSize: ".8rem" },
                }}
              >
                Dark Mode
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Header>
  );
};

export default Navbar;
