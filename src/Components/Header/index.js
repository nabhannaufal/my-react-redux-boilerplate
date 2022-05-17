import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="regular">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            ReactJS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
