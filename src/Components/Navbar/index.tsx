import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material";
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Header } from "./navbar";
const Navbar = () => {
  return <Header>
        <Box width="100%">
      <AppBar position="static" sx={{padding:"0 2rem"}} color="inherit" >
        <Toolbar sx={{display:"flex", alignItems:"cneter", justifyContent:"space-between" }}>
          <Typography variant="h5" component="p">
            Where in the world?
          </Typography>
          <Button color="inherit" sx={{display:"flex", alignItems:"center"}}>
                <NightlightIcon fontSize="large" />
            <Typography variant="subtitle1">
                Dark Mode
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  </Header>;
};

export default Navbar;
